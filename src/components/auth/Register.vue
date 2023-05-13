<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
    name: "RegisterComponent",
    setup() {
        const registerDetails = reactive({
            name: "",
            email: "",
            password: "",
            confirm_password: "",
        })

        const onSubmit = () => {
            console.log(registerDetails)
        }

        return { registerDetails, onSubmit }
    }
})
</script>

<template>
    <div>
        <form @submit.prevent="onSubmit">
            <label>Enter Name:</label>
            <input type="text" v-model="registerDetails.name" required/>
            <label>Enter Email:</label>
            <input type="email" v-model="registerDetails.email" required/>
            <label>Enter Password:</label>
            <input type="password" v-model="registerDetails.password" required/>
            <label>Confirm Password:</label>
            <input type="password" v-model="registerDetails.confirm_password" required/>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already a user?
            <router-link to="/sign-in">Sign In</router-link>
        </p>
    </div>
</template>