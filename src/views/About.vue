<script>
export default {
    name: 'AboutPage',
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
        return { data, n }
    }
}
</script>

<template>
    <div>
        <h1>About</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
            </tr>
            <tr :key="index" v-for="(item, index) in data">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }} - {{ item.city }}</td>
                <td>{{ item.gender }}</td>
            </tr>
        </table>
        <p>Number of rows = {{ n }}</p>
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
</style>