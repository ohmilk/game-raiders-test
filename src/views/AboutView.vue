<script setup>
import Title from "@/components/Title.vue";
import { ref } from "vue";
</script>
<template>
  <div class="wrap p-3 mb-3">
    <Title />
    <div class="container">
      <div class="about d-flex">
        <h4 class="about-title top-title c-brown d-shadow"><strong>故事起源</strong></h4>
        <div class="info top-info c-brown d-shadow">
          <p class="d-flex">
            兒時的暑假，<br />主角曾造訪老爺爺的牧場，<br />在大自然中生活、和動物們相處等等，<br />度過了一段在都市體驗不到的生活。<br />
          十幾年後，主角再次來到了「礦石鎮」，<br />然而等待他的卻是因為老爺爺的離世，<br />而變得淒涼林亂的荒廢牧場。<br />
          於是主角下定決心，<br />要將這裡恢復成當時那座溫暖的牧場。
          </p>
        </div>
        <h4 class="about-title next-title c-brown d-shadow"><strong>遊戲介紹</strong></h4>
        <div class="info next-info c-brown d-shadow">
          <p class="d-flex">
            這是一款模擬經營＋戀愛養成的遊戲，<br />玩家可以在礦場挖礦、泡溫泉，<br />請小矮人們幫忙做農活，<br />與居民互動，體驗牧場生活等。<br />
            此外，<br />透過飼養牲畜、種植、釣魚、挖礦等動作來獲取物品，<br />並販售加以賺取遊戲幣，<br />
            利用送禮及觸發事件等機制與心儀對象培養好感度，<br />還可以和礦石鎮上居民談戀愛、結婚。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  max-width: 500px;
  min-height: 620px;
  height: 100%;
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  background-image: url(../assets/img/backgroundImg/aboutBackImg.jpg);
  background-size: cover;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.6);

  .about-title{
    opacity: 0;
    width: 4em;
    margin-top: 10px;
    white-space: nowrap;
    overflow: hidden;
    border-right: solid transparent;
  }
  .info{
    opacity: 0;
    max-width: 410px;
    width: 90%;
    height: 250px;
    border-radius: 10px;
    background-color: rgba(255, 228, 196, 0.873);
    overflow: hidden;
    p{
      padding: 5px 0;
      margin: 0;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 530px) {
    .info{
      width: 100%;
    }
  }

  .top-title{
    animation: typing 2s steps(4) , cursor .6s infinite, showOpacity .1s forwards;
  }
  .top-info{
    animation: emerge 5s 2s, showOpacity .1s 2s forwards;
  }

  .next-title{
    animation: typing 2s 7s steps(4), cursor .6s infinite, showOpacity .1s 7s forwards;
  }

  .next-info{
    animation: emerge 5s 9s, showOpacity .1s 9s forwards;
  }
}
@keyframes typing {
  0%{
    width: 0;
    opacity: 1;
  }
  100%{
    width: 4em;
    opacity: 1;
  }
}
@keyframes cursor {
  50%{border-color: black;}
}
@keyframes emerge {
  0%{
    height: 0;
    opacity: 1;
    }
  100%{
    height: 250px;
    opacity: 1;
  }
}
@keyframes showOpacity {
    to {
      opacity: 1;
    }
  }
</style>
