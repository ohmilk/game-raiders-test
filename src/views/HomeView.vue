<template>
    <div class="wrap">
      <div class="container-fluid home d-flex">
        <div class="back-img">
        <span class="text">歡迎來到牧場物語</span>
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
      background-image: url(@/assets/img/banner/banner2.jpg);
      background-repeat: no-repeat;
      background-size: cover;
    }
    .text{
      width: 8em;
      font-size: 30px;
      font-weight: 600;
      white-space: nowrap;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      border-right: .05em solid;
      animation: typing 3.5s steps(8, end) infinite, blink-caret .75s step-end infinite;
      overflow: hidden;
    }
  }
  @keyframes typing {
    from { width: 0; }
    to { width: 8em; }
  }
  // 游標
  @keyframes blink-caret {
    50% { border-color: transparent; }
  }
</style>
