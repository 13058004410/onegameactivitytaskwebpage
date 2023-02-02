<template>
  <div class="fight-world-cup-pc">
    <van-image width="100%" :src="require('./img/pc/BG_PC.jpg')" />
    <van-image class="btn" width="11.77vw" :src="require('./img/pc/btn_pc.png')" @click="openPCHandle('openGameSaba')" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      shabaSrc: ''
    }
  },
  methods: {
    openPCHandle(msg, data = {}) {
      let info = {
        message: msg,
        ...data,
      };
      console.log(info);
      window.parent.postMessage(info, "*");
    },
  },
  created () {},
  mounted () {},
  destroyed() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/normaliz.scss";
.fight-world-cup-pc {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: #76022D;

  .btn {
    position: absolute;
    top: 30.2vw;
    right: 50%;
    transform: translateX(50%);
    cursor: pointer;
  }
}
</style>