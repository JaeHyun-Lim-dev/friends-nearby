<template>
  <div class="fullpage">
    <div>주변의 유저들을 이 화면에 표시합니다.</div>
    <button class="app-button" @click="goBack">뒤로가기</button>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
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
    goBack() {
      this.$router.go(-1);
    },
  },
  setup() {},
};
</script>
