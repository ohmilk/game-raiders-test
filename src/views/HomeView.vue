<template>
    <div class="wrap">
      <div class="container home d-flex">
        <div class="back-img">
          <div class="logo d-shadow"></div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .home{
    justify-content: center;
    align-items: center;
    .back-img{
      width: 100%;
      height: 38vw;
      position: relative;
      background-image: url(@/assets/img/backgroundImg/homeBackImg.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      .logo{
        width: 50%;
        height: 50%;
        opacity: 1;
        background-image: url(@/assets/img/banner/logo.png);
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
        animation: overTurn 5s;
      }
    }
    @keyframes logoEmerge {
      0%{opacity: 0;}
      100%{opacity: 1;}
    }
    @keyframes overTurn {
      50%{
        transform: rotateY(180deg);
      }
      100%{
        transform: rotateY(0deg);
      }
    }
  }
</style>
