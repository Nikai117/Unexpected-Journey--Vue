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
export default {
    name: "customer",
    data() {
        return {
            items: []
            
    }
},
 async mounted (){
    axios.get("http://localhost:2020/getCustomers")
    .then(res => (this.items = res.data)).catch(error => console.log(error))
    console.log(this.items)
}
}
</script>