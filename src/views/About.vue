<script>
export default {
    name: 'AboutPage',
    setup() {
        const data = [{
            name: "Prashant",
            gender: "Male"
        }, {
            name: "Nisarga",
            gender: "Male"
        },
        { name: "Swara", gender: "Female" }]
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
                <th>Sr No.</th>
                <th>Name</th>
                <th>Gender</th>
            </tr>
            <tr :key="item" v-for="(item, index) in data">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
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