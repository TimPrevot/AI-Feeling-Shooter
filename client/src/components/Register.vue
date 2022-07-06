<template>
  <main class="register container is-flex is-justify-content-center">
    <section class="forms is-flex">
      <form class="register" @submit.prevent="register">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
                type="email"
                class="input"
                placeholder="Email"
                v-model="registerForm.email"
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
                v-model="registerForm.password"
            />
          </div>
        </div>
        <input class="button" type="submit" value="Register" />
      </form>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const registerForm = ref({});

const register = () => {
  store.dispatch("register", registerForm.value);
};
</script>

<style scoped></style>