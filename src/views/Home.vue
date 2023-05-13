<script>
import { ref, defineComponent, computed } from 'vue'
// eslint-disable-next-line no-unused-vars
const no1 = 1
const foo = () => {
    return "one"
}
/*
const Uppercase = (str) => {
    return str.toUpperCase()
}
*/
export default defineComponent({
    name: 'HomePage',
    setup() {
        const no3 = ref(3)
        const no4 = ref(4)
        const no5 = ref(5)
        const no6 = ref(6)
        const no7 = ref(7)
        const no8 = ref(8)
        const no9 = ref(9)
        console.log(no1, no5.value, no6.value, no7.value, no8.value, no9)
        const text = ref("")
        const toUpper = computed(()=> text.value.toUpperCase())
        return {
            no1, no3, no4, foo, toUpper, text
        }
    }
})

</script>

<template>
    <h1>=={{ no1 }}=={{ no3 }}=={{ no4 }}==</h1>
    <h2>{{ toUpper }}</h2>
    <div>{{ foo() }}</div>
    <input type="text" v-model="text" />
</template>

<style scoped></style>