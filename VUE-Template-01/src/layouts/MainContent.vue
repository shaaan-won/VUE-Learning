<script setup>
import Dashboard from '@/pages/Dashboard.vue';
import FAQ from '@/pages/FAQ.vue';
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import ThemeSettings from './ThemeSettings.vue';
import Footer from './Footer.vue';


</script>

<!-- <template>
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div> -->
        <!-- <Dashboard/> -->
        <!-- <FAQ /> -->
        <!-- <router-view></router-view>
    </div>
</template> -->

<template>
    <Header />
    <Sidebar />
    <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <!-- <Dashboard/> -->
        <!-- <FAQ /> -->
        <router-view></router-view>
    </div>
    <ThemeSettings />
    <Footer />
</template>


<style></style>