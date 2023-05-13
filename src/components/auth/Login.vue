<script>
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
    name: "LoginComponent",
    setup() {
        const loginDetails = reactive({
            email: "",
            password: ""
        })

        const onSubmit = () => {
    console.log(loginDetails)
}

        return { ...toRefs(loginDetails), onSubmit }
    }
})
</script>

<template>
    <form @submit.prevent="onSubmit">
        <label>Enter Email:</label>
        <input type="email" v-model="email" required/>
        <label>Enter Password:</label>
        <input type="password" v-model="password" required/>
        <button type="submit">Sign In</button>
    </form>
    <p>Not register?
        <router-link to="/sign-up">Sign Up</router-link>
    </p>
</template>