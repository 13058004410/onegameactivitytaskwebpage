<template>
  <!-- 赛事焦土大作战 -->
  <div class="fans"
       @touchmove.prevent>
    <div class="view">
      <Scrapper class="scroll"
                ref="view">
        <div class="img">
          <img src="../assets/img/fans/img1.png" />
        </div>
        <div class="img">
          <img src="../assets/img/fans/img2.png" />
        </div>
        <div class="img">
          <img src="../assets/img/fans/img3.png" />
        </div>
        <div class="img">
          <img src="../assets/img/fans/img4.png" />
        </div>
      </Scrapper>
    </div>
    <transition name="fade">
      <loading v-if="isLoading"></loading>
    </transition>
  </div>
</template>
<script>
import '@/assets/css/fans.scss'
import Scrapper from '@/component/Scrapper'
import Loading from '@/component/Loading'
export default {
  data () {
    return {
      isLoading: true
    }
  },
  mounted () {
    this.isLoading = false
  },
  components: {
    Scrapper,
    Loading
  }
}
</script>