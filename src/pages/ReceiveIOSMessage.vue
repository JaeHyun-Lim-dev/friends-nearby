<template>
  <div class="fullpage">
    <div>네이티브에게 메시지를 받아오는 테스트 화면입니다.</div>
  </div>
</template>

<script>
export default {
  name: "ReceiveIOSMessage",
  props: {},
  data: () => ({}),
  mounted() {
    // 웹에서 메시지를 받을 수 있도록 이벤터 리스너를 등록한다.
    window.addEventListener("message", this.receiveMessage, false);
  },
  beforeUnmount() {
    // 해당 컴포넌트가 Destroy 되기 전 등록된 이벤트 리스너를 해제한다.
    window.removeEventListner("message", this.receiveMessage);
  },
  methods: {
    receiveMessage(event) {
      console.log("origin: ", event.origin); // 메시지를 보낸 곳
      console.log("message: ", event.data); // 보낸 메시지
    },
  },
  setup() {},
};
</script>
