<script setup>
import { reactive } from "vue";
let person = reactive({
   name: "Habib",
   age: 22,
   job: "Web Developer",
   address: "Dhaka",
   phone: "01700000000",
   salary: "30000",
   email: "Zk0YV@example.com"
});

const ChangeName = () => {
   person.name = "Salam";
};
</script>

<template>
   <div>
      <h1>{{ person.name }}</h1>
      <p>Age: {{ person.age }}</p>
      <p>Job: {{ person.job }}</p>
      <p>Address: {{ person.address }}</p>
      <p>Phone: {{ person.phone }}</p>
      <p>Salary: {{ person.salary }}</p>
      <p>Email: {{ person.email }}</p>
   </div>
<button @click="ChangeName">Change Name</button>
</template>