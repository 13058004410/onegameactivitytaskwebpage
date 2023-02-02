<template>
  <!-- 过渡动画 -->
  <transition name="fade">
    <div class="img-view" @click="bigImg">
      <!-- 遮罩层 -->
      <div class="img-layer"></div>
      <div class="img"><img :src="bigimgSrc" /></div>
    </div>
    </transition>
</template>
<script>
export default {
  props: ['bigimgSrc'], // 接受图片地址
  data () {
    return {
      imgUrl: ''
    }
  },
  mounted () {
    // this.imgUrl = require(this.imgSrc)
    console.log(this.bigimgSrc)
  },
  methods: {
    bigImg () {
      // 发送事件
      this.$emit('clickit')
    }
  }
}
</script>
<style lang="scss" scoped>
$count: 99.9422423;
@media screen and (max-width: 800px) {
.img-view {
  position: absolute;
  top: -0.125rem;
  width: 100%;
  height: 100%;
}
.img-view .img img {
width: 100%;
height: 100%;
display: block;
position: absolute;
left: 0;
right: 0;
margin: auto;
z-index: 1000;
}
}
@media screen and (min-width: 800px) {
  .img-view {
  position: absolute;
  top: -83/$count+rem;
  width: 100%;
  height: 100%;
  }
  .img-view .img img {
  width: 1000/$count+rem;
  height: 500/$count+rem;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1000;
  }
}
.img-view .img-layer {
position: fixed;
z-index: 999;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.7);
width: 100%;
height: 100%;
overflow: hidden;
}

</style>