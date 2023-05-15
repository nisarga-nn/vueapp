<script>
import { ref, computed } from 'vue'
import User from "@/components/User.vue";
export default {
    name: 'AboutPage',
    components: {
        User,
    },
    setup() {
        const data = [{
            id: 1,
            name: "Prashant",
            gender: "Male", city: "Dadar"
        }, {
            id: 2,
            name: "Nisarga",
            gender: "Male", city: "Mulund"
        },
        {
            id: 3, name: "Swara", gender: "Female", city: "Dadar"
        }]
        const n = data.length
        const cityLists = data.reduce((acc, curr) => {
            if (!acc.includes(curr.city)) {
                acc.push(curr.city)
            }
            return acc
        }, [])

        const cityName = ref(cityLists[0])

        const cityUserLists = computed(() => {
            return data.filter(item => item.city === cityName.value)
        })

        const selectedId = ref(0)

        const selectedRow = (id) => {
            selectedId.value = id
            console.log('id', id)
        }

        function updateUser(user) {
            const index = data.findIndex((item) => item.id === user.id);
            if (index !== -1) {
                data[index] = user;
            }
        }

        function update(data){
            console.log('update fire', data)
        }

        // const rowId = computed((){
        //     console.log(selectedId.value)
        // })


        return { data, n, cityLists, cityName, cityUserLists, selectedId, selectedRow, updateUser, update }
    }
}
</script>

<template>
    <div>
        <h1>About</h1>
        <div class="flex-class">
            <label for="city-select">Select a city:</label>
            <select id="city-select" v-model="cityName">
                <option v-for="(city) in cityLists" :key="city">{{ city }}</option>
            </select>
        </div>
        <br />
        <table>
            <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
            </tr>
            <tr :key="item.id" v-for="(item) in cityUserLists">
                <td><input type="radio" @click="selectedRow(item.id)" :checked="item.id === selectedId" /></td>
                <td>{{ item.id }}</td>
                <td>{{ item.name }} - {{ item.city }}</td>
                <td>{{ item.gender }}</td>
            </tr>
        </table>
        <p>Number of rows = {{ n }}</p>
        <User :id="selectedId" :users="data" @udpateUser="update"/>

    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

table {
    border-collapse: collapse;
}

td,
th {
    border: 1px solid black;

}

.flex-class {
    display: inline
}
</style>