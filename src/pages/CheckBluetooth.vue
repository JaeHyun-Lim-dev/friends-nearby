<template>
  <div class="fullpage">
    <div class="title-text">지금 주변의 친구들을 찾아볼까요?</div>
    <div class="hint-text">블루투스 기능이 활성화되어야 시작할 수 있어요</div>
    <!-- 아래 버튼 클릭 시 네이티브와 통신 -->
    <router-link to="friends-map" @click="handleStart">시작하기</router-link>
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
      confirm("체크");
    },
  },
  setup() {},
};
</script>
