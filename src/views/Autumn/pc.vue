<template>
<div class="content" ref="main">
    <div class="active_wrapper">
        <div class="moonTitle">
            <div class="leftIcon"></div>
            <h1 class="centerText">《ONE体育双重礼迎中秋》</h1>
            <div class="rightIcon"></div>
        </div>
        <p class="moonTime">活动时间 : 2021-09-20至2021-09-26</p>
        <div class="active_content">
            <div class="active_title">
                <div class="title_left"></div>
                <div class="title_center">活动一：中秋每日首存</div>
                <div class="title_right"></div>
            </div>
            <div class="active_word"><p>活动内容：活动期间（9-20至9-26日）ONE体育全体会员每日可参与一次中秋每日首存红利，仅需完成5倍流水即可，不限厅次。</p></div>
            <table class="active_table" border="1">
                <thead>
                    <tr>
                        <th>中秋每日首存</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>每日首存</td>
                        <td>红利</td>
                        <td>流水要求</td>
                    </tr>
                    <tr>
                        <td>≥500CNY
                        /72USDT</td>
                        <td>38CNY
                            /5USDT</td>
                        <td>5倍</td>
                    </tr>
                    <tr>
                        <td>≥1000CNY
                            /143USDT</td>
                        <td>88CNY
                            /12USDT</td>
                        <td>5倍</td>
                    </tr>
                    <tr>
                        <td>≥3000CNY
                            /429USDT</td>
                        <td>188CNY
                            /26USDT</td>
                        <td>5倍</td>
                    </tr>
                    <tr>
                        <td>≥5000CNY
                            /715USDT</td>
                        <td>288CNY
                            /41USDT</td>
                        <td>5倍</td>
                    </tr>
                    <tr>
                        <td>≥10000CNY
                            /1429USDT</td>
                        <td>588CNY
                            /84USDT</td>
                        <td>5倍</td>
                    </tr>
                </tbody>
            </table>
            <div class="active_word zhu">
                注：本活动仅限会员账户当日首笔存款才可领取，不与其他任意存送活动共享（即会员当日参与了本活动就不可在参与其他存送活动、当日会员参与了其他存送活动也不可在参与此活动）。满足活动条件，请自主联系在线客服进行申请。
            </div>

            <div class="active_title">
                <div class="title_left"></div>
                <div class="title_center">活动二：中秋累计流水</div>
                <div class="title_right"></div>
            </div>
            <div class="active_word"><p>活动内容：活动计算（9-20至9-26日）累计有效流水（全厅次），满足活动要求可申请领取一次累计有效流水红利，仅需完成3倍水即可，不限厅次。</p></div>
            <table class="active_table" border="1">
                <thead>
                    <tr>
                        <th>中秋累计流水</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>累计流水</td>
                        <td>红利</td>
                        <td>流水要求</td>
                    </tr>
                    <tr>
                        <td>≥18888CNY
                            /2699USDT</td>
                        <td>88CNY
                            /12USDT</td>
                        <td>3倍</td>
                    </tr>
                    <tr>
                        <td>≥38888CNY
                            /5555USDT</td>
                        <td>188CNY
                            /26USDT</td>
                        <td>3倍</td>
                    </tr>
                    <tr>
                        <td>≥88888CNY
                            /12698USDT</td>
                        <td>388CNY
                            /55USDT</td>
                        <td>3倍</td>
                    </tr>
                    <tr>
                        <td>≥188888CNY
                            /26984USDT</td>
                        <td>888CNY
                            /126USDT</td>
                        <td>3倍</td>
                    </tr>
                    <tr>
                        <td>≥388888CNY
                            /55555USDT</td>
                        <td>1888CNY
                            /269USDT</td>
                        <td>3倍</td>
                    </tr>
                </tbody>
            </table>
            <div class="active_word zhu">
                注：本活动计算活动期间7日内的会员账户所有场馆累计有效流水，活动红利将在活动结束后48小时内自主联系在线客服进行申请，过期视为自动放弃。
            </div>
        </div>
    </div>
    <div class="active_footer">
        <div class="footer_content">
            <p>活动规则：</p>
            <p>1.活动一不与其他任意存送活动共享，与洗码优惠共享。活动二计算活动期间会员账户所有厅次累计有效流水。</p>
            <p>2.活动一活动红利需完成5倍流水，不限制厅次；活动二红利需完成3倍流水，不限厅次。</p>
            <p>3.同一手机号、姓名、银行卡号、IP地址等信息仅可注册一个ONE体育账号，如有违规会员，我们将保留无限期审核扣回红利及所产生利润的权利。</p>
            <p>4.会员参加任何优惠活动则被视为认可并同意遵守这些规则，愿意受其约束，最终解释权归ONE体育所有。</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    mounted () {
        const that = this
        setInterval(() => {
        let iframeH = Math.max(that.$refs.main.clientHeight, that.$refs.main.scrollHeight)
        that.openPCHandle("reloadPageSize", {
            height: iframeH,
        })
        }, 0)
    },
    methods: {
        openPCHandle(msg, data = {}) {
        let info = {
            message: msg,
            ...data,
        }
        console.log(info,'infoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfoinfo')
        window.parent.postMessage(info, "*");
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/normaliz.scss";
html {
  font-size: 4.995222222vw;
  @media screen and (max-width: 1200px) {
    font-size: 59.9422423px;
    body {
      min-width: 1200px;
      margin: 0 auto;
      font-family: PingFangSC-Medium;
    }
  }
}
</style>
<style lang="scss" scoped>
@import "./pc.scss";
</style>