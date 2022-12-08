<template>
    <title>Customer directory</title>
    <h1>Customer Directory</h1>
    <h3> please handle with caution</h3>
    <div>
        <div>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                    <th scope="col">email</th>
                    </tr>   
                </thead>
                <tbody>
                    <div
                    v-for="item in items"
                    class="currency"
                >
                    {{ item.email }}
                </div>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import jwt_decode from "jwt-decode";

export default {
    name: "customer",
    data() {
        return {
            items: [],
            newdata: "",
            
    }
},
 async mounted (){
    const token = localStorage.getItem('token')
    try {
        let user = jwt_decode(token);
        // const newdata = axios.get("http://localhost:2020/auth", {"token": token});
        // console.log(newdata)
        
    if(user.role == "member") {
    axios.get("http://localhost:2020/getCustomers")
    .then(res => (this.items = res.data)).catch(error => console.log(error))
    console.log(this.items)
    } else {
        console.log("501 Unauthorized")
    }
    } catch (error){
        console.log("Oh no, it is broken")
        console.log(error)
    }
},



}
</script>