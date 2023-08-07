<template>
  <div class="fullpage">
    <div class="input-label">
      <label for="id">id</label
      ><input v-model="inputId" placeholder="아이디를 입력해주세요." />
    </div>
    <div class="input-label">
      <label for="name">이름</label
      ><input v-model="inputName" placeholder="이름을 입력해주세요." />
    </div>
    <div class="input-label">
      <label for="id">비밀번호</label
      ><input
        type="password"
        v-model="inputPw1"
        placeholder="비밀번호를 입력해주세요."
      />
    </div>
    <div class="input-label">
      <label for="id">확인</label
      ><input
        type="password"
        v-model="inputPw2"
        placeholder="비밀번호를 한번 더 입력해주세요."
      />
    </div>
    <button class="app-button" @click="submitForm">Submit</button>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
export default {
  name: "CreateAccountPage",
  props: {},
  data: function () {
    return {
      inputId: "",
      inputName: "",
      inputPw1: "",
      inputPw2: "",
    };
  },
  methods: {
    async submitForm() {
      if (this.inputPw1 != this.inputPw2) {
        alert("비밀번호가 같지 않습니다. 다시 확인해주세요.");
        return;
      }

      await firebase
        .database()
        .ref("users/" + this.inputId)
        .set({
          id: this.inputId,
          name: this.inputName,
          password: this.inputPw1,
          point: 0,
        });

      this.$router.push("login");
    },
  },
  setup() {},
};
</script>
