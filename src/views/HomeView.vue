<template>
    <div class="wrap">
      <div class="container home d-flex">
        <div class="back-img">
          <img class="logo d-shadow" src="@/assets/img/banner/logo.png"/>
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
      border-radius: 10px;
      position: relative;
      background-image: url(@/assets/img/backgroundImg/homeBackImg.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left bottom;
      .logo{
        width: 40%;
        opacity: 1;
        position: absolute;
        top: 50%;
        left: 5%;
        transform: translateY(-50%) translateX(0);
        animation: logoEmerge 5S, overTurn 5s 5s infinite ;
        animation-fill-mode: forwards;
      }
    }
    @media screen and (max-width: 820px) {
      .back-img{
        background-image: url(@/assets/img/backgroundImg/about.png);
        height: 100%;
        .logo{
          width: 50%;
          top: 20%;
          left: 25%;
          animation: logoEmergeRWD 5S, overTurn 5s 5s infinite ;
        }
      }
    }
    @keyframes logoEmerge {
      0%{
        opacity: 0;
        top: 0;
      }
      100%{
        opacity: 1;
        top: 50%;
        transform: translate3D(0, -50%, 0);
      }
    }
    @keyframes logoEmergeRWD {
      0%{
        opacity: 0;
        top: 0;
      }
      100%{
        opacity: 1;
        top: 20%;
      }
    }
    @keyframes overTurn {
      0%{
        transform: rotateY(0deg) translateY(-50%) translateX(0);
      }
      50%{
        transform: rotateY(180deg) translateY(-50%) translateX(0);
      }
      100%{
        transform: rotateY(0deg) translateY(-50%) translateX(0);
      }
    }
  }
</style>
