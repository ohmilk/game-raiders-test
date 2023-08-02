<script>
import Title from "@/components/Title.vue";
export default{
  components: {
    Title,
  }
}
</script>
<template>
  <div class="container p-3 mt-3 mb-3 about">
    <Title />
    <div class="info-container">
      <div class="card card-left p-3 d-shadow">
        <span class="card-title c-blue"><strong>故事起源</strong></span>
        <div class="card-info c-blue">
          兒時的暑假，主角曾造訪老爺爺的牧場，<br>在大自然中生活、和動物們相處等等，<br>度過了一段在都市體驗不到的生活。<br>
          十幾年後，主角再次來到了「礦石鎮」，<br>然而等待他的卻是因為老爺爺的離世，<br>而變得淒涼林亂的荒廢牧場。<br>
          於是主角下定決心，<br>要將這裡恢復成當時那座溫暖的牧場。</div>
      </div>
      <div class="card card-right p-3 d-shadow">
        <span class="card-title c-blue"><strong>遊戲介紹</strong></span>
        <div class="card-info c-blue">
          這是一款模擬經營＋戀愛養成的遊戲，<br>透過飼養牲畜、種植、釣魚、挖礦等動作來獲取物品，<br>並販售加以賺取遊戲幣，<br>
          利用送禮及觸發事件等機制與心儀對象培養好感度，<br>還可以和礦石鎮上居民談戀愛、結婚。<br>
          此外，玩家可以在礦場挖礦、泡溫泉，<br>請小矮人們幫忙做農活，與居民互動，體驗牧場生活等。
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about{
  height: calc(100vh - 180px);
  position: relative;
  flex-direction: column;
  background-image: url(../assets/img/backgroundImg/resbck.png);
  background-size: cover;
  box-shadow:3px 3px 2px rgba(0, 0, 0, 0.6);
}
.info-container{
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .card{
    width: 40%;
    position: absolute;
    background-color: rgba(223, 244, 245, 0.8);
  }

  .card-left{
    left: 5%;
    top: 5%;
    animation-name: slide-left;
    animation-duration: 3s;
  }

  .card-right{
      right: 5%;
      bottom: 5%;
      animation-name: slide-right;
      animation-duration: 3s;
  }
}

@keyframes slide-left{
    from{
      left:-100px;
      opacity: 0;
    }
    to{
      left:5%;
    }
}
@keyframes slide-right{
    from{
      right:-100px;
      opacity: 0;
    }
    to{
      right:5%;
    }
}
</style>