<template>
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12 col-md-6 offset-md-3">
                <div class="card shadow sm">
                    <div class="card-body">
                        <h1 class="text-center">Login</h1>
                        <hr/>
                        <form action="javascript:void(0)" class="row" method="post">
                            <div class="form-group col-12">
                                <label for="email" class="font-weight-bold">Email</label>
                                <input type="text" v-model="email" name="email" id="email" class="form-control">
                            </div>
                            <div class="form-group col-12">
                                <label for="password" class="font-weight-bold">Password</label>
                                <input type="password" v-model="password" name="password" id="password" class="form-control">
                            </div>
                            <div class="col-12 mb-2">
                                <button type="submit" @click="login" class="btn btn-primary btn-block">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Vuex from 'vuex'

export default {
  name: 'LoginForm',
  data(){
      return{
          email: '',
          password: '',
      }
  },
  methods: {
     async login(){
        console.log("function has started");
        console.log(this.email, this.password)
        // let r = await axios.get("http://localhost:2020/getCustomers"); 
        try {
       axios.post('http://localhost:2020/auth/login', {email: this.email, password: this.password})
       .then(function (){
        console.log();
       })
       console.log("request is gedaan")
    //    if (r.status = 200) {
    //         console.log("resultaat is" + r)
    //         axios.defaults.headers.common['Authorization'] = 'Bearer ' + r;
    //         localStorage.setItem( 'token', JSON.stringify(r) );
    //         this.$router.push("/directory")
    //     } else { 
    //         console.log("Mission is a failure")
    //     }
        } catch (error) {
            console.log("I have a bad feeling about this")
        }
        console.log(r)
        }
}
}
</script>