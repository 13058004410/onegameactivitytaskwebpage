import Vue from 'vue'


import { NoticeBar } from 'vant'
Vue.use(NoticeBar)

/**
 * 按钮
 */
import { Button } from 'vant';
Vue.use(Button);

/**
 * 轮播
 */
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

/**
 * Image 图片
 */
import { Image as VanImage } from 'vant';
Vue.use(VanImage);

/**
 * Field 输入框
 */
import { Field } from 'vant';
Vue.use(Field);


// vant样式文件引入
import 'vant/lib/index.css';
