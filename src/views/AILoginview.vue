<template>
    <div>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" />
        <label for="password">Wachtwoord:</label>
        <input id="password" type="password" v-model="password" />
        <button type="submit">Inloggen</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        email: "",
        password: ""
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post("/login", {
            email: this.email,
            password: this.password
          });
       
          localStorage.setItem("token", response.data.token);
          
          this.$router.push("/directory");
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>