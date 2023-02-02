import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import $api from '../http/api'
import md5 from 'js-md5'
import { getQueryVariable, rando, reverseStrings, toLogin } from '../assets/js/tools'
import appConfig from '../config/config'

Vue.use(Vuex)

let Base64 = require('js-base64').Base64
const state = {
  appInfo: {
    ticket: '',
    loginName: '', 
    productId: appConfig.productId,
    appId: appConfig.appId,
    v: appConfig.v,
    srcAppId: appConfig.srcAppId,
    domainName: appConfig.host,
    deviceId: appConfig.deviceId,
    platform: appConfig.platform
  },
  webToken: {},
  h5Token: {},
}
const mutations = {
  SET_APPINFO_TICKET (state, data) {
    state.appInfo.ticket = data
  },
  SET_APPINFO_LOGINNAME (state, data) {
    state.appInfo.loginName = data
  },
  SET_WEBTOKEN (state, data) {
    state.webToken = data
  },
  SET_H5TOKEN (state, data) {
    state.h5Token = data
  },
}
const actions = {
  async AWebToken ({ commit }, data) {
    let timestamp = Date.parse(new Date())
    let qid = md5(timestamp + rando(6))
    let appId = state.appInfo.appId
    let v = state.appInfo.v
    let webTokenReq = {
      productId: state.appInfo.productId,
    }
    let webTokenReqString = JSON.stringify(webTokenReq)
    let sign = md5(reverseStrings(webTokenReqString) + qid + appId + v)
    console.log(webTokenReqString + '99')
    await axios
      .post($api.global.webToken, webTokenReq, {
        headers: {
          qid,
          appId,
          v,
          sign,
        },
      })
      .then((result) => {
        console.log('WebToken', result)
        let resultWebtoken = JSON.parse(Base64.decode(result.data.body.info))
        commit('SET_WEBTOKEN', resultWebtoken)
        console.log("执行了")
      })
  },
  async AH5Token ({ dispatch, commit, state }, data) {
    await dispatch('AWebToken')
    let ticket = state.appInfo.ticket
    let loginName = state.appInfo.loginName
    commit('SET_APPINFO_TICKET', ticket)
    commit('SET_APPINFO_LOGINNAME', loginName)
    // Vue.prototype.$toastMessage({ message: '测试ticket：' + ticket})
    let timestamp = Date.parse(new Date())
    let qid = md5(timestamp + rando(6))
    let appId = state.appInfo.appId
    let v = state.appInfo.v
    let srcAppId = state.appInfo.srcAppId
    let h5TokenByTempTicketData = {
      productId: state.appInfo.productId,
      ticket: ticket,
      loginName: loginName,
    }
    let h5TokenByTempTicketDataString = JSON.stringify(h5TokenByTempTicketData)
    let h5TokenByTempTicketDataSign = md5(
      reverseStrings(h5TokenByTempTicketDataString) +
      qid +
      appId +
      v +
      state.webToken.token +
      state.webToken.u2token
    )
    await axios
      .post($api.global.getH5TokenByTempTicket, h5TokenByTempTicketData, {
        headers: {
          qid,
          appId,
          v,
          timestamp,
          sign: h5TokenByTempTicketDataSign,
          token: state.webToken.token,
          srcAppId,
        },
      })
      .then((response) => {
        console.log('app跳转h5', response)
        let info
        let token
        if (response.data.head.errCode === '0000') {
          info = JSON.parse(Base64.decode(response.data.body.info))
          if (info && info.token) {
            sessionStorage.setItem('token', info.token)
            commit('SET_H5TOKEN', info)
          }
          token = sessionStorage.getItem('token')
        } else {
          commit('SET_H5TOKEN', state.webToken)
          Vue.prototype.$toastMessage({ message: response.data.head.errMsg, time: 3000 })
        }
      })
  },
}

const getters = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
