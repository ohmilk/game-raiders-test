<template>
  <div class="title">
    <div>
        <h5 class="bgc-pink c-brown d-shadow">
            <slot>關於礦石鎮</slot>
        </h5>
    </div>
    <img class="arrow d-shadow" src="../assets/img/arrow2.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
.title{
    width: 50%;
    height: 30px;
    display: flex;

    div{
      width: 80%;
      margin-right: 10px;
      h5{
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        margin: 0;
        border-radius: 5px 0 0 5px;
      }
    }
}
@media screen and (max-width: 992px) {
      .title{
        width: 80%;
      }
    }
</style>