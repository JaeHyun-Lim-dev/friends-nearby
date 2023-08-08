<template>
  <div class="fullpage">
    <div class="title-text">지금 주변의 친구들을 찾아볼까요?</div>
    <div class="hint-text">블루투스 기능이 활성화되어야 시작할 수 있어요</div>
    <!-- 아래 버튼 클릭 시 네이티브와 통신 -->
    <button class="app-button" @click="handleStart">시작하기</button>
  </div>
</template>

<script>
export default {
  name: "CheckBluetooth",
  props: {},
  data: function () {
    return {
      inputId: "",
      inputPw: "",
    };
  },
  methods: {
    handleStart() {
      console.log(window.nativeMessage);
      try {
        window.nativeMessage?.requestFromWebview("getBluetoothInfo");
      } catch (e) {
        // 네이티브 연동 실패
        alert("현재 환경이 모바일이 맞는지 확인해주세요.");
        console.log(e);
        return;
      }
      confirm("임시 confirm");
      this.$router.push("friends-map");
    },
  },
  setup() {},
};
</script>
