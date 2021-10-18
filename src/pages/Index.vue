<template>
  <q-page>
    <div class="preview">
      <p v-if="store.state.stop" class="text-bold text-h1 text" :style="[store.state.glow?{textShadow:'0px 0px 5px #fff, 0px 0px 10px #fff,0px 0px 20px '+store.state.textColor+',0px 0px 30px '+store.state.textColor+', 0px 0px 40px '+store.state.textColor+',0px 0px 55px '+store.state.textColor+',0px 0px 75px '+store.state.textColor, color: '#fff'} :{ color: store.state.textColor }]">{{ store.state.text }}</p>
      <p v-if="!store.state.stop" class="text-bold text-h1 text" :style="[store.state.glow?{textShadow:'0px 0px 5px #fff, 0px 0px 10px #fff,0px 0px 20px '+store.state.textColor+',0px 0px 30px '+store.state.textColor+', 0px 0px 40px '+store.state.textColor+',0px 0px 55px '+store.state.textColor+',0px 0px 75px '+store.state.textColor, color: '#fff', animationDuration: marqueeSpeed+'s'} :{ color: store.state.textColor, animationDuration: marqueeSpeed+'s'}]">{{ store.state.text }}</p>
    </div>
    <div class="setting">
      
        <q-input rounded outlined v-model="store.state.text" :rules="[ val => val.length <= 15 || '15자 이내로 작성해주세요^^']">
        <template v-slot:append>
          <q-icon name="close" @click="store.state.text = ''" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          글자를 입력해주세요
        </template>
        </q-input>
        <p class="margin">글자색</p>
        <div class="color">
          <q-btn round color="red" @click="store.state.textColor='red'"></q-btn>
          <q-btn round color="orange" @click="store.state.textColor='orange'"></q-btn>
          <q-btn round color="yellow" @click="store.state.textColor='yellow'"></q-btn>
          <q-btn round style="background: #7FFFD4;" @click="store.state.textColor='#7FFFD4'"></q-btn>
          <q-btn round color="green" @click="store.state.textColor='green'"></q-btn>
          <q-btn round color="blue" @click="store.state.textColor='blue'"></q-btn>
          <q-btn round color="purple" @click="store.state.textColor='purple'"></q-btn>
        </div>
        <p class="margin">속도</p>
        <div class="speed">
          <q-btn rounded color="secondary" label="느리게" @click="setSpeed(0.5)"></q-btn>
          <q-btn rounded color="secondary" label="중간" @click="setSpeed(1)"></q-btn>
          <q-btn rounded color="secondary" label="빠르게" @click="setSpeed(2)"></q-btn>
        </div>
        <div class="margin">
        <q-toggle
        v-model="store.state.glow"
        color="green"
        label="반짝임"
        left-label
        />
        <q-toggle
        v-model="store.state.stop"
        color="orange"
        label="멈춤"
        left-label
        />
        </div>
        <q-btn rounded color="primary" label="시  작" class="submit" @click="$router.replace({path:'led'})"></q-btn>
    </div>

  </q-page>
</template>

<script setup>
import { computed, inject } from 'vue'

const store = inject('store')

const marqueeSpeed = computed(()=>{
  let timeTaken = store.state.text.length / store.state.speed
  return timeTaken
})

function setSpeed(s){
  store.state.speed = s
}
</script>

<style>
.margin{
  margin-top : 2vh;
}

.preview{
  display: flex;
  height: 30vh;
  background: #000;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
}

.text{
  animation: scroll-left linear infinite;
}

@keyframes scroll-left {
  from 
  {
    transform: translateX(120%);
  }
  to
  {
    transform: translateX(-120%);
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
  margin-top: 4vh;
  width: 100%;
}
</style>
