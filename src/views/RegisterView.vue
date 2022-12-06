<template>
    <div class="container">
     <div class="row">
       <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
         <form
           class="text-center border border-primary p-5"
           style="margin-top:70px;height:auto;padding-top:100px !important;"
         >
         <input
             type="text"
             id="username"
             class="form-control mb-5"
             placeholder="username"
             v-model="username" 
             required/>

           <input
             type="text"
             id="email"
             class="form-control mb-5"
             placeholder="Email"
             v-model="email"
            required/>
           <!-- Password -->
           <input
             type="password"
             id="password"
             class="form-control mb-5"
             placeholder="Password"
             v-model="password"
             required/>
           <p>
             Already have an account? Click
             <router-link to="/login"> here </router-link> to login
           </p>
       
             <button class="btn btn-primary btn-block w-75 my-4" type="submit" @click=register>
               Create profile
             </button>
         </form>
       </div>
     </div>
 </div>
</template>

<script>
import axios from 'axios';
import Vuex from 'vuex'

export default ({
   data() {
       return {
               username: "", 
               email: "",
               password: "",
        
       }
   },
   methods: {
       async register() {
         console.log(this.username);
         await axios.post("register", {
            username: this.username, 
            email: this.email, 
            password: this.password})
            .then(response => {
            console.log(response)

         })

           // try {
           //     console.log("function has started");
           //     console.log(axios.post("http://localhost:2020/auth/login", this.auth));
           //     let response = await axios.post("http://localhost:2020/auth/login", this.auth);
           //     console.log("Request was succesful")
           //     console.log(response)
           //     let token = response.data.token;
           //     localStorage.setItem("user", token);
           //     console.log("prepare for a fast redirect!")
           //     this.$router.push("/");
           // } catch (err) {
           //     console.log(err.response);
           // }
       }
   }
})
</script>