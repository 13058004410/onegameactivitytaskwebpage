<template>
  <div class="fight-world-cup-h5">
    <!-- banner -->
    <van-image width="100%" :src="require('./img/h5/banner_h5.jpg')" />
    <van-image class="btn" width="36.53vw" :src="require('./img/h5/btn_h5.png')" @click="goToSaba" />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    // loadTicket (data) {
    //   console.log(data);
    //   let json = JSON.parse(data);
    //   this.loginName = json.loginName || ''
    //   this.isH5 = false
    // },
    goToSaba() {
      window.parent.postMessage({ message: 'openGameSaba' }, '*');
      window.location = "nbapp://openGameBTI?data={'&menutype=2&sportid=1'}";
    }
  },
  created () {},
  mounted () {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.fight-world-cup-h5 {
  width: 100vw;
  min-height: 100vh;
  position: relative;
}

.btn {
  position: absolute;
  top: 162.67vw;
  right: 50%;
  transform: translateX(50%);
  cursor: pointer;
}
</style>