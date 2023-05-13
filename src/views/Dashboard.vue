<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
    name: 'DashboardPage',
    setup() {
        const user = reactive({
            user_name: "",
            age: null,
            gender: "Male"
        })
        return {user}
    }
})
</script>

<template>
    <div>
        <h1>Dashboard</h1>
        <h2>{{ user }}</h2>
        <h2>{{ user.user_name }}</h2>
        <h2>{{ user.age }}</h2>
        <h2>{{ user.gender }}</h2>
    </div>
    <div>
        <input type="text" v-model="user.user_name"/>
        <input type="number" v-model="user.age"/>
        <label>Gender</label>
        <select v-model="user.gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
    </div>
</template>