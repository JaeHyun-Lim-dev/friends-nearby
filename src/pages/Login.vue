<template>
  <div class="fullpage">
    <div class="input-label">
      <label for="id">id</label
      ><input v-model="inputId" placeholder="아이디를 입력해주세요." />
    </div>
    <div class="input-label">
      <label for="id">pw</label
      ><input v-model="inputPw" placeholder="비밀번호를 입력해주세요." />
    </div>
    <div class="col-container">
      <router-link class="app-button" to="check-bluetooth">로그인</router-link>
      <router-link class="app-button" to="create-account">회원가입</router-link>
    </div>
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
    submitForm() {
      alert(`submit: ${this.inputId}, ${this.inputPw}`);
    },
  },
  setup() {},
};
</script>
