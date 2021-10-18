<template>
    <q-page class="bg-black flex flex-center">
        <div class="container"> 
            <p v-if="store.state.stop" :style="[store.state.glow?{textShadow:'0px 0px 5px #fff, 0px 0px 10px #fff,0px 0px 20px '+store.state.textColor+',0px 0px 30px '+store.state.textColor+', 0px 0px 40px '+store.state.textColor+',0px 0px 55px '+store.state.textColor+',0px 0px 75px '+store.state.textColor, color: '#fff'} :{ color: store.state.textColor}]">{{ store.state.text }}</p>

            <p v-if="!store.state.stop" :style="[store.state.glow?{textShadow:'0px 0px 5px #fff, 0px 0px 10px #fff,0px 0px 20px '+store.state.textColor+',0px 0px 30px '+store.state.textColor+', 0px 0px 40px '+store.state.textColor+',0px 0px 55px '+store.state.textColor+',0px 0px 75px '+store.state.textColor, color: '#fff', animationDuration: marqueeSpeed+'s'} :{ color: store.state.textColor, animationDuration: marqueeSpeed+'s'}]">{{ store.state.text }}</p>
        </div>
    </q-page>
</template>

<script setup>
import { inject, computed } from 'vue';

const store = inject('store')

const marqueeSpeed = computed(()=>{
  let timeTaken = store.state.text.length / store.state.speed
  return timeTaken
})
</script>

<style>
.container {
    display: flex;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    text-align: center;
    writing-mode: vertical-rl;
	text-orientation: sideways;
    align-items: center;
    justify-content: center;
}

.container p{
    font-size: 10rem;
    font-weight: 700;
    animation: scroll linear infinite;
}

@keyframes scroll {
  from 
  {
    transform: translateY(120%);
  }
  to {
    transform: translateY(-120%);
  }
}       
</style>