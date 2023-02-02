<template>
  <div ref="scroll">
    <div class="content"
         ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import ResizeObserver from 'resize-observer-polyfill'
export default {
  props: {
    options: {
      type: Object,
      default: function () {
        return {
          click: true,
          probeType: 3,
          bounce: {
            top: false,
            bottom: false
          },
          mouseWheel: true
        }
      }
    }
  },
  data: function () {
    return {
      paused: true
    }
  },
  methods: {
    detectResizeWapper () {
      this.viewDetec = new ResizeObserver(() => {
        this.$emit('resize', this.$refs.scroll);
        this.scroll.refresh();
      });
      this.viewDetec.observe(this.$refs.scroll);
    },
    detectResizeInner () {
      this.contentDetec = new ResizeObserver(() => {
        this.scroll.refresh();
      });
      this.contentDetec.observe(this.$refs.content);
    },
    infoEvent () {
      this.scroll.on('touchEnd', () => {
        this.$emit('touchEnd', this.scroll);
      })
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position);
      })
    }
  },
  updated () {
    this.scroll.refresh();
  },
  mounted () {
    let that = this
    that.$nextTick(() => {
      that.scroll = new BScroll(that.$refs.scroll, that.options);
      that.infoEvent();
      that.detectResizeWapper();
      that.detectResizeInner();
      that.$emit('mounted', that.$refs.scroll);
      setTimeout(() => {
        that.scroll.refresh();
      }, 500)
    })
  },
  beforeDestroyed () {
    if (this.viewDetec) {
      this.viewDetec.disconnect()
      this.viewDetec.takeRecords()
      this.viewDetec = null
    }
  }
};
</script>
