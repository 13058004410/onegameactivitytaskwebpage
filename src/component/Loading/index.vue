<template>
  <div id="loading-wrapper">
    <div class="loading-ring"
         :style="ringStyle">
      <div class="outer"></div>
      <div class="middle"></div>
      <div class="inner"></div>
    </div>
    <div class="loading-juhua"></div>
    <div class="text"
         :style="textStyle"
         v-if="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    text: {
      type: String,
      default: ""
    },
    textStyle: {
      type: Object,
      default: function () {
        return {
          fontSize: "14px",
          color: "#fff"
        };
      }
    },
    ringStyle: {
      type: Object,
      default: function () {
        return {
          width: "50px",
          height: "50px",
          color: "#407af3"
        };
      }
    }
  },
  methods: {
    preventDefault () {
      // 禁止body的滚动
      document.querySelector("body").addEventListener("touchmove", function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
    }
  },
  mounted () {
    // this.preventDefault();
  },
  destroyed () {
    // document
    //   .querySelector("body")
    //   .removeEventListener("touchmove", function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //   });
  }
};
</script>

<style lang="scss" scoped>
#loading-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  .loading-ring {
    display: none;
    position: relative;
    width: 200px;
    height: 200px;
    .outer,
    .inner,
    .middle {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: currentColor;
      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border-left: 10px solid currentColor;
        border-right: 10px solid currentColor;
        border-top: 10px solid currentColor;
        border-bottom: 10px solid transparent;
      }
    }

    .outer {
      width: 100%;
      height: 100%;
      &::after {
        animation: anticlockwise 1.5s infinite linear;
      }
    }
    .inner {
      width: calc(100% * 0.6);
      height: calc(100% * 0.6);
      &::after {
        animation: anticlockwise 1.5s infinite linear;
      }
    }
    .middle {
      width: calc(100% * 0.8);
      height: calc(100% * 0.8);
      &::after {
        animation: clockwise 1.5s infinite linear;
      }
    }
  }
  .loading-juhua {
    width: 50px;
    height: 50px;
    background: url('~@/assets/img/loading.gif') center center no-repeat;
    background-size: cover;
  }
  .text {
    color: #fff;
    font-size: 14px;
    padding: 20px;
  }
}

@keyframes clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes anticlockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>