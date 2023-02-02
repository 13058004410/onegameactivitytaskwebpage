<template>
  <div class="dialog-box">
    <div :class="['dialog-item',tips == 1 ? 'dialog-item-pc':'']" >
          <div v-if="tips==1" class="tips">
             <div class="icon1"></div>
             <div class="logo">提示</div>
             <div class="icon2" @click="bbb"></div>
          </div>
          <div class="dialog-text">暂无活动赛事，敬请期待！</div>
          <div class="btn" @click="aaa">我知道了</div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        tips: {
            type: Number,
            default: 0,
        }
    },
    methods:{
        aaa() {
            this.$emit('closeDialog')
        },
        bbb() {
            this.$emit('closeDialog')
        }

    }
}
</script>

<style lang="scss" scoped>

.dialog-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.6);
    position: fixed;
    top: 0;
    left: 0;
    .dialog-item {
        width: 300px;
        // height: 179px;
        background: #FFFFFF;
        border-radius: 8px;
        overflow: hidden;
    .tips {
        height: 48px;
        background: #00B960;
        color: #FFFFFF;
        font-size: 16px;
        text-align: center;
        line-height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .icon1 {
            width: 20px;
            height: 20px;
            background: url('../assets/img/basketball/pc/ts_iconpc.png') no-repeat;
            background-size: cover;
        }
        .icon2 {
            width: 20px;
            height: 20px;
            background: url('../assets/img/basketball/pc/gb_iconpc.png') no-repeat;
            background-size: cover;
            position: absolute;
            top: 50%;
            right: 5%;
            margin-top: -10px;
        }
        .logo {
            margin-left: 5px;
        }
    }
    .dialog-text {
        width: 100%;
        height: 89.5px;
        border-bottom: 0.4px solid #E5E5E5;
        font-size: 16px;
        color: #333333;
        text-align: center;
        line-height: 89px;
        font-weight: 500;
    }
    .btn {
        width: 140px;
        height: 40px;
        background: #00B960;
        border-radius: 4px;
        text-align: center;
        line-height: 40px;
        margin: 25px auto;
        color: #FFFFFF;
    }
    }
    .dialog-item-pc {
        width: 440px;
        border-radius: 8px;
        .dialog-text {
            border: none;
            font-size: 18px;
            font-weight: 600;
        }
        .btn {
            border-radius: 30px;
        }
    }
    
}

</style>