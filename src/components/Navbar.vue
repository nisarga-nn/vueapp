<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'NavBar'
})
</script>

<template>
    <div>
        <ul class="nav">
            <router-link to="/" class="nav-items ">Home</router-link>
            <router-link to="/dashboard" class="nav-items left-menu">Dashboard</router-link>
            <router-link to="/about" class="nav-items">About</router-link>
            <router-link to="/contact" class="nav-items">Contact</router-link>
            <router-link to="/sign-in" class="nav-items">Sign In</router-link>
        </ul>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.nav {
    display: flex;
    list-style: none;
    background-color: aquamarine;
    align-items: center;
}

.left-menu {
    margin-left: auto;
}

.nav-items {
    padding: 10px;
    height: 50px;
    cursor: pointer;
    text-decoration: none;
}

.nav-items:hover{
    background-color: blueviolet;
    color: white;
}
</style>