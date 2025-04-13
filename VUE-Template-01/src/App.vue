<script setup>
import Footer from './layouts/Footer.vue';
import Header from './layouts/Header.vue';
import MainContent from './layouts/MainContent.vue';
import Sidebar from './layouts/Sidebar.vue';
import ThemeSettings from './layouts/ThemeSettings.vue';


</script>

<!-- <template>
    <Header />
    <Sidebar />
    <MainContent />
    <ThemeSettings />
    <Footer />
</template> -->

<template>
    <router-view />
</template>


<style scoped></style>