<template>
  <main class="login container is-flex is-justify-content-center">
    <section class="forms is-flex-wrap-wrap">
      <form class="register" @submit.prevent="login">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
                type="email"
                class="input"
                placeholder="Email"
                v-model="loginForm.email"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input
                class="input"
                type="password"
                placeholder="Password"
                v-model="loginForm.password"
            />
          </div>
        </div>
        <input class="button" type="submit" value="Login" />
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const loginForm = ref({});

const login = () => {
  store.dispatch("login", loginForm.value);
};
</script>

<style scoped></style>
