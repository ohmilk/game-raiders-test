<script>
import "@/assets/mainCss.css";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    components: {
        Header,
        Footer,
    }
}
</script>
<template>
    <Header />
    <main>
       <router-view/> 
    </main>
    <Footer />
</template>
<style>
body {
    box-sizing: border-box;
    background-image: url(../src/assets/img/backgroundImg/bigbck.jpg);
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>