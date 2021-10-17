import { reactive } from 'vue'

const store = reactive({
    text:'LED짱',
    textColor:'red',
    speed: 1,
    glow: false
})

export { store }