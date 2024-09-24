
<script setup>
import Navbar from '../components/layout/Navbar.vue'
import Footer from '../components/layout/Footer.vue'


</script>

<template>
    <div class="bg-slate-800 h-auto w-full flex flex-col">
        <Navbar />

        <main class="flex-grow h-screen w-full flex items-center justify-center bg-slate-700 text-white">
            Main View Here
        </main>

        <Footer />

    </div>
</template>