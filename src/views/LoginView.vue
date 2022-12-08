<template>
     <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
          <form
            class="text-center border border-primary p-5"
            style="margin-top:70px;height:auto;padding-top:100px !important;"
            @submit.prevent="loginUser"
          >
            <input
              type="text"
              id="email"
              class="form-control mb-5"
              placeholder="Email"
              v-model="email"
            />
            <!-- Password -->
            <input
              type="password"
              id="password"
              class="form-control mb-5"
              placeholder="Password"
              v-model="password"
            />
            <p>
              Dont have an account? Click
              <router-link to="/register"> here </router-link> to sign up
            </p>
        
              <button class="btn btn-primary btn-block w-75 my-4" type="submit" @click=login>
                Sign in
              </button>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      // Stuur een POST-verzoek naar de /login-endpoint van de backend API
      // met de gebruikersnaam en het wachtwoord als data
      const { data } = await axios.post('/login', {
        email: this.email,
        password: this.password
      })

      console.log(data)

      // Sla het JWT-token op in de local storage
      localStorage.setItem('token', data.token)

      // Redirect naar de home-pagina
      this.$router.push('/')
    }
  }
}

// export default {
//     data() {
//         return {
//             auth: {
//                 email: "",
//                 password: "",
//             }
//         }
//     },
//     methods: {
//         async login() {
//           console.log(this.auth);
//           axios.post("auth/login", this.auth).then(response => {
//             axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;

//             localStorage.setItem( 'token', JSON.stringify(response.data.token) );
//           })

//             // try {
//             //     console.log("function has started");
//             //     console.log(axios.post("http://localhost:2020/auth/login", this.auth));
//             //     let response = await axios.post("http://localhost:2020/auth/login", this.auth);
//             //     console.log("Request was succesful")
//             //     console.log(response)
//             //     let token = response.data.token;
//             //     localStorage.setItem("user", token);
//             //     console.log("prepare for a fast redirect!")
//             //     this.$router.push("/");
//             // } catch (err) {
//             //     console.log(err.response);
//             // }
//         }
//     }
// }

// </script>