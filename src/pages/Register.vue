<template>
  <div class="fullpage">
    <form v-on:submit.prevent="submitForm">
      <li>
        <label for="id">id: </label
        ><input v-model="inputId" placeholder="아이디를 입력해주세요." />
      </li>
      <li>
        <label for="id">pw: </label
        ><input v-model="inputPw1" placeholder="비밀번호를 입력해주세요." />
      </li>
      <li>
        <label for="id">확인: </label
        ><input
          v-model="inputPw2"
          placeholder="비밀번호를 한번 더 입력해주세요."
        />
      </li>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  props: {},
  data: function () {
    return {
      inputId: "",
      inputPw1: "",
      inputPw2: "",
    };
  },
  methods: {
    submitForm() {
      alert(`submit: ${this.inputId}, ${this.inputPw1}, ${this.inputPw2}`);
    },
  },
  setup() {},
};
</script>
