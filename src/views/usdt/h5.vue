<template>
  <div class="container">
    <ul class="tab_ul">
      <li class="tab_li">
        <input
          type="radio"
          name="changeTab"
          id="t1"
          :checked="this.index == 1"
        />
        <label for="t1">USDT是什么</label>
        <div class="box">
          <div class="content">
            <div class="title">什么是USDT?</div>
            <ul>
              <li>
                USDT是一种不具备实体形式的，仅以数字形式存在的货币，也称之为“数字货币”。
              </li>
              <li>
                其性质与实体货币相似，允许在互联网上即时，无地理限制转让。主流的数字货币如USDT（泰达币）。
              </li>
              <li>
                用户可以通过数字货币交易平台使用人民币购买数字货币，在平台进行支付，兑换成人民币从而进行游戏。
              </li>
            </ul>
          </div>

          <div class="content2">
            <div class="title">USDT优势</div>
            <ul>
              <li>
                <img src="../../assets/img/usdt/icon-jiami.png" alt="" />
                <p>高度加密</p>
                <span
                  >与银行卡等传统交易方式相比，用户不需要给出自己的姓名或卡号即可完成USDT交易，避免私人信息泄露</span
                >
              </li>
              <li>
                <img src="../../assets/img/usdt/icon-kuaisu.png" alt="" />
                <p>交易快速</p>
                <span
                  >USDT所采用的区块链技术具有去中心化特点，不需要清算中心机构来处理数据，交易时间大大缩短</span
                >
              </li>
              <li>
                <img src="../../assets/img/usdt/icon-quzhongxin.png" alt="" />
                <p>去中心化</p>
                <span
                  >不由央行或当局发行，不受银行监管，用户可随心所欲的使用存放在自己数字钱包里面的资金</span
                >
              </li>
            </ul>
          </div>

          <div class="content3">
            <div class="title">USDT泰达币优势</div>

            <p>
              泰达币（Tether）也被称为USDT，其价值等同于美元。1USDT=1美元，该特点使USDT称为全球加密数字货币中规模最大，流通性最高的稳定币，具有良好的保值性，也是网站所使用的的主要币种。
            </p>
            <ul>
              <li>
                <img style='width:48px' src="../../assets/img/usdt/icon-anquan.png" alt="" />
                <div>
                  <p>规避风险</p>
                  <span
                    >USDT在涨跌幅上不会出现巨大的波动，只跟随美元汇率的变化而变化，价格非常稳定。</span
                  >
                </div>
              </li>
              <li>
                <img src="../../assets/img/usdt/icon-jiazhi.png" alt="" />
                <div>
                  <p>币价直观</p>
                  <span
                    >USDT在涨跌幅上不会出现巨大的波动，只跟随美元汇率的变化而变化，价格非常稳定。</span
                  >
                </div>
              </li>
              <li>
                <img src="../../assets/img/usdt/icon-kuaisu-2.png" alt="" />
                <div>
                  <p>流通快速</p>
                  <span
                    >USDT的流通是基于比特币区块链，稳定可靠。由于其恒定价值的特性，可随时转换为其他币种流通。</span
                  >
                </div>
              </li>
            </ul>
          </div>

          <div class="content4">
            <div class="title">知名虚拟交易平台列示</div>

            <ul>
              <li>
                <img src="../../assets/img/usdt/pic-okex.png" alt="" />
                <div>
                  <p>币汇</p>
                  <span
                    >流畅的法币出入金支付服务平台，安全的数字货币钱包以及秒级到账的支付速度。</span
                  >
                  <a href="https://www.coinhui.net/">立即注册</a>
                </div>
              </li>
              <!-- <li>
                <img src="../../assets/img/usdt/pic-huobi.png" alt="" />
                <div>
                  <p>火币</p>
                  <span
                    >全球知名老牌交易所之一，支持法币，币币交易，币种多，成交量大。</span
                  >
                  <a href="https://www.huobi.com/zh-cn/">立即注册</a>
                </div>
              </li> -->
              <li>
                <img src="../../assets/img/usdt/pic-bian.png" alt="" />
                <div>
                  <p>币安</p>
                  <span
                    >超过100种加密货币的交易平台，交易量为全世界最大的加密货币交易所。</span
                  >
                  <a href="https://www.binance.com/cn/">立即注册</a>
                </div>
              </li>
              <li>
                <img src="../../assets/img/usdt/pic-58-coin.png" alt="" />
                <div>
                  <p>58COIN</p>
                  <span
                    >一站式数字资产服务平台，持有全球排名前十的矿池，世界顶级数字货币交易平台</span
                  >
                  <a href="https://www.58ex.com/">立即注册</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li class="tab_li">
        <input
          type="radio"
          name="changeTab"
          id="t2"
          :checked="this.index == 2"
        />
        <label for="t2">推荐充值协议</label>
        <div class="box">
          <div class="content3">
            <div class="title">那种协议更适合？</div>

            <p class="red">
              三种协议对应的USDT地址不互通，进行转账、充值等操作时，应仔细核对正确地址。
            </p>
            <ul>
              <li>
                <img src="../../assets/img/usdt/dae.png" alt="" />
                <div>
                  <p>大额交易推荐</p>
                  <span
                    >OMNI-USDT，手续费相对较贵、速度也相对较慢，但是资金最为安全。</span
                  >
                </div>
              </li>
              <li>
                <img src="../../assets/img/usdt/zhonge.png" alt="" />
                <div>
                  <p>中等额度推荐</p>
                  <span
                    >OMNI-USDT，手续费相对较贵、速度也相对较慢，但是资金最为安全。</span
                  >
                </div>
              </li>
              <li>
                <img src="../../assets/img/usdt/xiaoe.png" alt="" />
                <div>
                  <p>小额交易推荐</p>
                  <span>TRC-USDT，零转账费，秒级到账。</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="content5">
            <div class="title">协议介绍</div>

            <ul>
              <li>
                <p>ERC20：基于以太坊网络协议</p>
                <span
                  >以太坊发行自己的原生代币及其他代币。但成千上万种代币的规则都不一样，这对后期市场发展非常不利。所以代币发行者做了一个智能合约标准，也就是ERC20。</span
                >
              </li>
              <li>
                <p>TRC20：基于波场网络协议</p>
                <span
                  >TRC20的提币手续费为0，这意味着用户可以享受免手续费的交易所提币服务。同时，波场网络的TPS能够达到上千级别，可以实现交易秒级确认。</span
                >
              </li>
              <li>
                <p>Omni：基于比特币网络协议</p>
                <span
                  >最老牌的协议，Omni-USDT于比特币网络的链上，黑客攻击的成本很高，所以资产相对安全性较高。很多大宗交易都会倾向于采用Omni-USDT。</span
                >
              </li>
            </ul>
          </div>

          <div class="content5" style="margin: 0">
            <div class="title">协议区别</div>

            <table>
              <thead>
                <tr>
                  <th>支付</th>
                  <th>日期</th>
                  <th>金额</th>
                  <th>周期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>地址样式</td>
                  <td>Omni-USDT地址以1或3开头</td>
                  <td>ERC20-USDT地址以0x开头</td>
                  <td>TRC20-USDT地址以T开头</td>
                </tr>
                <tr>
                  <td>使用网络</td>
                  <td>比特币网络</td>
                  <td>以太坊网络</td>
                  <td>波场网络</td>
                </tr>
                <tr>
                  <td>网络状态</td>
                  <td>偶尔拥堵</td>
                  <td>经常拥堵</td>
                  <td>基本不堵</td>
                </tr>
                <tr>
                  <td>转账速度</td>
                  <td>较慢（30分钟到2小时不等）</td>
                  <td>普通（几分钟到数十分钟）</td>
                  <td>极快（几秒到几分钟）</td>
                </tr>
                <tr>
                  <td>手续费用</td>
                  <td>较高</td>
                  <td>普通</td>
                  <td>无</td>
                </tr>
                <tr>
                  <td>安全系数</td>
                  <td>最高</td>
                  <td>高</td>
                  <td>普通</td>
                </tr>
                <tr>
                  <td>使用建议</td>
                  <td>大额低频交易推荐</td>
                  <td>中等额度常规交易推荐</td>
                  <td>小额高频交易推荐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </li>
      <li class="tab_li">
        <input
          type="radio"
          name="changeTab"
          id="t3"
          :checked="this.index == 3"
        />
        <label for="t3">具体充值流程</label>
        <div class="box">
          <div class="content7">
            <div class="title">步骤1</div>
            <p>个人中心选择充值</p>
            <img src="../../assets/img/usdt/setp1.jpg" alt="" />
          </div>
          <div class="content7">
            <div class="title">步骤2</div>
            <p>选择【USDT充值】及协议，然后复制收款地址或保存二维码</p>
            <img src="../../assets/img/usdt/setp2.jpg" alt="" />
          </div>
          <!-- <div class="content7">
            <div class="title">步骤3</div>
            <p>打开并登陆【火币】软件</p>
            <img src="../../assets/img/usdt/setp3.jpg" alt="" />
          </div>
          <div class="content7">
            <div class="title">步骤4</div>
            <p>进入【资产】页面内的分类下，找到【USDT】</p>
            <img src="../../assets/img/usdt/setp4.jpg" alt="" />
          </div>
          <div class="content7">
            <div class="title">步骤5</div>
            <p>请选择【提币】</p>
            <img src="../../assets/img/usdt/setp5.jpg" alt="" />
          </div>
          <div class="content7" style="margin: 0">
            <div class="title">步骤6</div>
            <p>
              选择协议并输入扫描二维码或粘贴钱包地址，输入金额并点击【提币】按钮
            </p>
            <img src="../../assets/img/usdt/setp6.jpg" alt="" />
          </div> -->
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 1,
    };
  },
  created() {
    this.index = this.$route.query.index || 1
  },
};
</script>
<style lang="scss">
@import "@/assets/css/screen750.scss";
@import "@/assets/css/normaliz.scss";
html {
  background: #f5f5f5;
}
</style>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 13px;
  color: #303133;
  font-family: "\5FAE\8F6F\96C5\9ED1", Arial;
}
html {
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  font-size: 20px;
}
body {
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
}

/* ================================================================
    导航TAB
    ================================================================ */
.tab_ul {
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  background: #fff;
}
.tab_ul .tab_li {
  list-style: none;
  height: 46px;
  flex: 1;
}
.tab_ul .tab_li input {
  display: none;
}
input + label {
  display: block;
  cursor: pointer;
  width: 100%;
  height: 46px;
  line-height: 46px;
  text-align: center;
  font-size: 14px;
}
input + label + div {
  width: 100%;
  display: none;
  position: absolute;
  left: 0;
  top: 48px;
}
input:checked + label {
  font-weight: bold;
  color: #00b960;
  position: relative;
}
input:checked + label:after {
  content: "";
  width: 80px;
  height: 2px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #00b960;
}
input:checked + label + .box {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* ================================================================
    USDT是什么
    ================================================================ */
.content {
  background: #fff;
  width: 100%;
  padding: 20px;
  display: block;
  margin-bottom: 10px;
}

.title {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
}

.content ul {
  margin-left: 15px;
}

.content ul li {
  list-style-type: disc;
  margin-bottom: 10px;
  line-height: 20px;
  color: #666;
}

.content ul li:last-child {
  margin-bottom: 0;
}

.content2 {
  background: #fff;
  width: 100%;
  padding: 20px 10px;
  display: block;
  margin-bottom: 10px;
}
.content2 ul {
  display: flex;
}

.content2 img {
  width: 48px;
}

.content2 ul li {
  list-style-type: none;
  margin-bottom: 10px;
  line-height: 20px;
  text-align: center;
  margin: 0 10px;
}

.content2 ul li:last-child {
  margin-bottom: 0;
}

.content2 ul li p {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.content2 ul li span {
  color: #606266;
  line-height: 18px;
}

.content3 {
  background: #fff;
  width: 100%;
  padding: 20px;
  display: block;
  margin-bottom: 10px;
}

.content3 p {
  color: #606266;
  line-height: 20px;
}

.content3 ul {
  margin-top: 10px;
}

.content3 ul li div{
  flex: 1;
}
.content3 ul li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 0.5px solid #e5e5e5;
  border-radius: 6px;
}

.content3 ul li img {
  width: 48px;
  height: 48px;
  margin-right: 15px;
  margin-left: 5px;
}
.content3 li p {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.content3 li span {
  color: #606266;
  line-height: 18px;
}

.content4 {
  background: #fff;
  width: 100%;
  padding: 20px;
  display: block;
}

.content4 ul {
  margin-top: 10px;
}

.content4 ul li {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.content4 ul li img {
  width: 48px;
  height: 48px;
  margin-right: 15px;
  margin-left: 5px;
}

.content4 li p {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 2px;
}

.content4 li span {
  color: #606266;
  line-height: 18px;
}

.content4 a {
  display: block;
  color: #00b960;
}

/* ================================================================
    推荐充值协议
    ================================================================ */

.content5 {
  background: #fff;
  width: 100%;
  padding: 20px;
  display: block;
  margin-bottom: 10px;
}

.content5 p {
  color: #606266;
  line-height: 20px;
}

.content5 ul {
  margin-top: 10px;
}

.content5 ul li {
  list-style-type: none;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.content5 ul li img {
  width: 48px;
  height: 48px;
  margin-right: 15px;
  margin-left: 5px;
}

.content5 li p {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.content5 li span {
  color: #606266;
  line-height: 18px;
}

/* ================================================================
    表格
    ================================================================ */

table {
  border: 0.5px solid #ccc;
  width: 100%;
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 10px;
}

thead tr {
  border-top: none !important;
}

table tr {
  border-top: 0.5px solid #ddd;
  display: flex;
}

table th,
table td {
  padding: 10px;
  text-align: center;
  flex: 1;
  font-size: 13px;
  color: #606266;
  display: flex;
  align-items: center;
  justify-content: center;
}

table th {
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  color: #303133;
}

/* ================================================================
    步骤
    ================================================================ */

.content7 {
  background: #fff;
  width: 100%;
  padding: 20px;
  display: block;
  margin-bottom: 10px;
  text-align: center;
}

.content7 p {
  color: #606266;
  line-height: 20px;
  font-size: 15px;
}
.content7 img {
  width: 75%;
  margin-top: 15px;
}

.red {
  color: #f00 !important;
}
</style>