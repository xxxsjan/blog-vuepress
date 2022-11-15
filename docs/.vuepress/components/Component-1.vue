<template>
  <div class="bulletin-wrapper" :style="`width: 300px;--bgcc:${bgcc};`" v-if="show">
    <h4 class="bulletin-title">
      <i class="iconfont reco-tongzhi"></i>
      <span>消息提示</span>
      <i class="iconfont reco-close"></i>

      <svg
        t="1573745677073"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4448"
        width="22"
        height="22"
        class="icon btn-close"
        @click="show = false"
      >
        <path
          d="M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0"
          p-id="4449"
        ></path>
      </svg>
    </h4>
    <div class="bulletin-content">
      <h5 style="text-align:left;font-size:16px;line-height:30px;">
        哈喽哈喽啊
      </h5>
      <img src="" />
    </div>
    <hr />
    <div class="bulletin-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Component-1',
  data() {
    return {
      show: true,
      // 'bgcc': '#3eaf7c',
      bgcc: '#2088ff',
    };
  },
};
</script>

<style scoped>
.bulletin-wrapper {
  position: fixed;
  top: 80px;
  right: 20px;
  z-index: 19;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid var(--bgcc);
  border-radius: 0.25rem;
  background: var(--background-color);
  box-shadow: var(--box-shadow);
}
.bulletin-wrapper .bulletin-title {
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  margin: 0;
  background: var(--bgcc);
  color: #fff;
}
.bulletin-wrapper .bulletin-title i {
  color: #fff;
}
.bulletin-wrapper .bulletin-title .btn-close {
  position: absolute;
  display: inline-block;
  width: 22px;
  height: 22px;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
}
.bulletin-wrapper .bulletin-content {
  box-sizing: border-box;
  padding: 10px 15px 0;
}
.bulletin-wrapper .bulletin-footer {
  padding: 16px;
  text-align: center;
}
.bulletin-wrapper .bulletin-title .btn-close svg {
  fill: #fff;
}
img {
  width: 100%;
}
</style>
