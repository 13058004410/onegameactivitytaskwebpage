import JSEncrypt from 'jsencrypt'
import config from '../config/config'

export function encrypt(val){
    const encrypt = new JSEncrypt()
    encrypt.setPublicKey(config.publickey)
    return encrypt.encrypt(val)
}
function install (vue) {
    Object.defineProperties(vue.prototype,{
        $encrypt:{
            get () {
                return encrypt
            },
            enumerable:false,
            configurable:false
        }
    })
}
export default install