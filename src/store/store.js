import { reactive } from 'vue'

const state = reactive({
    text:'LED짱',
    textColor:'red',
    speed: 1,
    glow: false,
    stop: false
})

export default { state }