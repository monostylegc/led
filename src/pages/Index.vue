<template>
  <q-page>
    <div class="preview">
      <p class="text-bold text-h1 text" :style="{ color: textColor, animationDuration: marqueeSpeed+'s' }" :id="glow?'text-glow':''">{{ text }}</p>
    </div>
    <div class="setting">
      <form>
        <q-input rounded outlined v-model="text" class="q-mb-md"/>
        <p>글자색</p>
        <div class="color">
          <q-btn round color="red" @click="textColor='red'"></q-btn>
          <q-btn round color="orange" @click="textColor='orange'"></q-btn>
          <q-btn round color="yellow" @click="textColor='yellow'"></q-btn>
          <q-btn round style="background: #7FFFD4;" @click="textColor='#7FFFD4'"></q-btn>
          <q-btn round color="green" @click="textColor='green'"></q-btn>
          <q-btn round color="blue" @click="textColor='blue'"></q-btn>
          <q-btn round color="purple" @click="textColor='purple'"></q-btn>
        </div>
        <p class="q-mt-md">속도</p>
        <div class="speed q-mb-sm">
          <q-btn rounded color="secondary" label="느리게" @click="setSpeed(0.5)"></q-btn>
          <q-btn rounded color="secondary" label="중간" @click="setSpeed(1)"></q-btn>
          <q-btn rounded color="secondary" label="빠르게" @click="setSpeed(2)"></q-btn>
        </div>
        <q-toggle
        v-model="glow"
        color="green"
        label="반짝임"
        left-label
        />
        <q-btn type="submit" rounded color="primary" label="시  작" class="submit"></q-btn>
      </form>
    </div>

  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'

const text = ref('Simple LED')
const textColor = ref('red')
const speed = ref(1)
const glow = ref(false)

const marqueeSpeed = computed(()=>{
  let timeTaken = text.value.length / speed.value
  return timeTaken
})

function setSpeed(s){
  speed.value = s
  console.log(speed.value)
}
</script>

<style>
.preview{
  display: flex;
  height: 30vh;
  background: #000;
  white-space: nowrap;
}

.text{
  align-self: center;
  transform: translateX(100%);
  animation: scroll-left linear infinite;
}
#text-glow{
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px, 0 0 30px , 0 0 40px , 0 0 55px , 0 0 75px ;
}

@keyframes scroll-left {
  0% 
  {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}       

.setting{
  margin:20px 20px;
}

.color{
  display: flex;
  justify-content: space-between;
}
.speed{
  display: flex;
  justify-content: space-around;
}
.submit{
  margin-top: 20px;
  width: 100%;
}
</style>
