<script setup>
import Title from "@/components/Title.vue";
</script>

<template>
  <div class="wrap manage p-3">
    <Title>經營牧場</Title>
    <nav class="d-flex">
      <router-link to="/manage/animal" class="link d-flex fw-bold px-3 py-2">畜牧</router-link>
      <router-link to="/manage/plant" class="link d-flex fw-bold px-3 py-2">種植</router-link>
      <router-link to="/manage/mining" class="link d-flex fw-bold px-3 py-2">挖礦</router-link>
      <router-link to="/manage/angling" class="link d-flex fw-bold px-3 py-2">釣魚</router-link>
    </nav>
    <section class="d-flex">
      <router-view/>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.manage{
  flex-direction: column;
  nav{
    width: 80%;
    height: 50px;
    margin: 20px auto;
    justify-content: space-around;
    .link{
      width: 20%;
      color: rgb(144, 97, 36);
      font-size: 22px;
      align-content: center;
      justify-content: space-around;
      flex-wrap: wrap;
      border-radius: 10px;
      border: 1px solid #996f6f;
      border-radius: 8px;
      background: #fcb7b6;
      background: linear-gradient(to bottom, #fcb7b6, #bd9090);
      // box-shadow: #ffbfbe 0px 0px 20px 1px;
      text-shadow: #6e504f 2px 1px 2px;
      color: #ffffff;
      text-decoration: none;
      &:hover{
        transform: translateY(-6px);
      }
    }
    .link.router-link-active{
      box-shadow: 0 0 20px #a12f2d;
    }
    @media screen and (max-width: 420px) {
      .link{
      font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 710px) {
    nav{
      width: 100%;
    }
  }
  section{
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
  }
}
</style>