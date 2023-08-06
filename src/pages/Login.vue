<template>
  <div class="fullpage">
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="id">id: </label
        ><input v-model="inputId" placeholder="아이디를 입력해주세요." />
      </div>
      <div>
        <label for="id">pw: </label
        ><input v-model="inputPw" placeholder="비밀번호를 입력해주세요." />
      </div>
      <button type="submit">Submit</button>
    </form>
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
