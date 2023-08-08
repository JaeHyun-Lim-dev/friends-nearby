<template>
  <div class="fullpage">
    <div class="input-label">
      <label for="id">id</label
      ><input v-model="inputId" placeholder="아이디를 입력해주세요." />
    </div>
    <div class="input-label">
      <label for="id">pw</label
      ><input
        type="password"
        v-model="inputPw"
        placeholder="비밀번호를 입력해주세요."
      />
    </div>
    <div class="col-container">
      <button class="app-button" @click="submitForm">로그인</button>
      <router-link class="app-button" to="create-account">회원가입</router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
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
    async submitForm() {
      if (!this.inputId) return;
      await firebase
        .database()
        .ref("/users/" + this.inputId)
        .once("value")
        .then((snapshot) => {
          console.log("snapshot:", snapshot.val());
          let dbPassword = snapshot.val()?.password;
          if (this.inputPw != dbPassword) {
            confirm("아이디가 없거나 비밀번호가 틀렸습니다.");
            return;
          }
          this.$router.push("check-bluetooth");
        });
    },
  },
  setup() {},
};
</script>
