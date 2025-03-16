<script setup>

import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue';
import Person from './components/Person.vue';
import Students from './components/Students.vue';
import CounterApp from './components/CounterApp.vue';

let headline = ref("Hello World");
let toggle = ref(true);
const toggleHeadline = () => {
  toggle.value = !toggle.value
};
let paragraph_id = ref("essay");
const toggleParagraph = () => {
  paragraph_id.value = "NewID";
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it! You built a Vue app!" />
    </div>
    <h1 v-if="toggle">{{ headline }}</h1>
    <p :id="paragraph_id">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, aliquid similique ipsam vel perferendis et. Perspiciatis voluptatum cum repellat distinctio. Quam, quidem eaque explicabo eos voluptates atque voluptate odit velit.</p>

    <button @click="toggleHeadline"> Show/Hide</button>
    <button @click="toggleParagraph">Toggle ParagraphID</button>
  </header>

  <main>
    <Person />
    <Students />
    <CounterApp />
  </main>
</template>

<style scoped>
header {
  text-align: center;
  align-items: center;
  line-height: 1.5;
  max-height: 100vh;
  margin: 0 1rem 0 0;
  padding: 0;
}
</style>
