<template>
  <div id="loading-mask" v-show="show">
    <div class="loading-wrapper">
      <span class="loading-dot loading-dot-spin">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
  </div>
</template>

<script>
// https://tourist17846.cn/blog/other/aboutblog/vuepress-loading-mask.html#%E4%B8%89%E3%80%81%E4%BD%BF%E7%94%A8vuex%E6%8E%A7%E5%88%B6%E6%98%BE%E7%A4%BA%E4%B8%8E%E9%9A%90%E8%97%8F
// import { mapState } from 'vuex';

export default {
  name: 'Loading',
  data() {
    return {
      show: false,
    };
  },
  // computed: mapState({
  //   show: (state) => state.show,
  // }),
};
</script>

<!-- <style lang="less">
// @import '../styles/palette.less';

// #loading-mask {
//   position: fixed;
//   left: 0;
//   top: 0;
//   height: 100%;
//   width: 100%;
//   background: #fff;
//   user-select: none;
//   z-index: 9999;
//   overflow: hidden;
// }

// .loading-wrapper {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -100%);
// }

// .loading-dot {
//   animation: antRotate 1.2s infinite linear;
//   transform: rotate(45deg);
//   position: relative;
//   display: inline-block;
//   font-size: 64px;
//   width: 37px;
//   height: 37px;
//   box-sizing: border-box;
// }

// .loading-dot i {
//   width: 15px;
//   height: 15px;
//   position: absolute;
//   display: block;
//   background-color: @accentColor;
//   border-radius: 100%;
//   transform: scale(0.75);
//   transform-origin: 50% 50%;
//   opacity: 0.3;
//   animation: antSpinMove 1s infinite linear alternate;
// }

// .loading-dot i:nth-child(1) {
//   top: 0;
//   left: 0;
// }

// .loading-dot i:nth-child(2) {
//   top: 0;
//   right: 0;
//   -webkit-animation-delay: 0.4s;
//   animation-delay: 0.4s;
// }

// .loading-dot i:nth-child(3) {
//   right: 0;
//   bottom: 0;
//   -webkit-animation-delay: 0.8s;
//   animation-delay: 0.8s;
// }

// .loading-dot i:nth-child(4) {
//   bottom: 0;
//   left: 0;
//   -webkit-animation-delay: 1.2s;
//   animation-delay: 1.2s;
// }

// @keyframes antRotate {
//   to {
//     -webkit-transform: rotate(405deg);
//     transform: rotate(405deg);
//   }
// }

// @-webkit-keyframes antRotate {
//   to {
//     -webkit-transform: rotate(405deg);
//     transform: rotate(405deg);
//   }
// }

// @keyframes antSpinMove {
//   to {
//     opacity: 1;
//   }
// }

// @-webkit-keyframes antSpinMove {
//   to {
//     opacity: 1;
//   }
// }
</style> -->
