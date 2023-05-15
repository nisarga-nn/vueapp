<script>
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
    name: 'UserComponent',
    props: {
        id: {
            type: Number,
            default: 0,
            required: true
        },
        users: {
            type: Array,
        }
    },
    //props: ,
    emits : ['updateUser'],
    setup(prop, {emit}) {
        console.log('what is my props', prop)
        const name = ref('')
        const gender = ref('')
        const city = ref('')
        /*
        const user1 = computed(() => {
            const find =  prop.users.filter((user) => prop.id === user.id)
            this.user = {...find}
            console.log('what is user',user)
            return find
        })
        */
        watch(() => prop.id , (id) => {
           getCurrentUser(id)
        })

        const getCurrentUser = (id)=>{
            // eslint-disable-next-line no-const-assign
            prop.users.map(user=>{
                if(user.id === id){
                    name.value = user.name
                    gender.value = user.gender
                    city.value = user.city
                }
            })

            // console.log('what is user', user  )
            console.log('what is name', name.value )
        }

        // console.log(user1)
        const onSubmit = ()=>{
            console.log('onsubmit')
            emit('updateUser', {name, gender, city})
        }
        return { prop, name, onSubmit }
    }

})

</script>

<template>
    <div>
        <p>ID: {{ prop.id }}</p>
        <p>Users {{ prop.users }}</p>
        =={{ user }}==
        =={{ user }}==
    </div>
    <form @submit.prevent="onSubmit" >
        <input type="text" v-model="name" />
<!--         
        <select v-model="user.gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <input type="text" v-model="user.city" /> -->
        <button type="submit">Submit</button>
    </form>
</template>