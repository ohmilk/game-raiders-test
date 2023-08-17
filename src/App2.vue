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
    <Header id="header" />
    <main>
       <router-view/>
       <a class="back-top" href="#header">
        <span>☝</span>
       </a>
    </main>
    <Footer />
</template>
<style lang="scss">
body {
    box-sizing: border-box;
    background-image: url(../src/assets/img/backgroundImg/bigbck.jpg);
    margin: 0;

    main{
        .back-top{
            width: 30px;
            height: 30px;
            background-color: rgb(255, 255, 255, .1);
            position: fixed;
            bottom: 6%;
            right: 1%;

            &:hover{
                animation: top 1s infinite;
            }
        }
    }
}
@keyframes top {
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(-10px);
    }
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>