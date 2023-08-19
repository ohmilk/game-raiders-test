<script setup>
import Modal from "@/components/Modal.vue";
import { ref, computed } from "vue";
const clickAnimal = ref("");
const animals = ref(["雞", "牛", "羊", "羊駝", "安格拉兔"]);
const clickAnimalHandler = animal => {
  clickAnimal.value = animal;
};
const animalInfos = ref([
  {
    number: 1,
    name: "雞",
    cycle: "成年雞每天都會產雞蛋。",
    game: "可參加鬥雞祭，好感度8心或以上的冠軍雞可以產下金蛋。",
    remark: "分為白色雞和茶色雞，兩者產出來的雞蛋沒有分別。要注意的是，沒有茶色雞的話只能孵出白色小雞，孵不出茶色小雞。"
  },
  {
    number: 2,
    name: "牛",
    cycle: "成年牛每天都會產牛奶。",
    game: "可參加評牛祭，8心才能奪冠。",
    remark: "分為普通奶牛、咖啡奶牛、草莓奶牛、水果奶牛4種，每種產出來的牛奶都不同，但目前看來特殊牛的牛奶只能出貨和送人，無法做料理和加工。"
  },
  {
    number: 3,
    name: "羊",
    cycle: "成年羊每7天生產羊毛。",
    game: "可參加軟綿綿祭，8心可奪冠，要注意參賽的需要留著毛不剪。",
  },
  {
    number: 4,
    name: "羊駝",
    cycle: "成年羊駝每7天生產羊駝毛。",
    game: "可參加軟綿綿祭，8心可奪冠，要注意參賽的需要留著毛不剪。",
  },
  {
    number: 5,
    name: "安格拉兔",
    cycle: "成年安哥拉兔每5天生產兔毛。",
    game: "可參加軟綿綿祭，8心可奪冠，要注意參賽的需要留著毛不剪。",
    remark: "需要在擴建雞兔小屋後才有分娩位置。"
  }
]);
const filterInfo = computed(() => {
    return animalInfos.value.filter(item => {
        return item.name === clickAnimal.value;
    })
})
</script>

<template>
  <div class="content p-3 d-shadow">
    <h4 class="c-brown d-shadow">關於餵食飼料和放牧</h4>
    <p>
      在晴天放牧的話，動物不僅當日不用餵食並可大幅增加愛心度，<br />
      另外動物餵食飼料使用「手拿餵食」等同「放在飼料盆」裡<br />
      只是，「手拿餵食」給動物飼料可以再另外提高愛心度，純粹「放在飼料盆」則不會增加。<br />
      放牧的話超過5小時可以增加愛心度並不用餵食飼料。<br />
      補充一點冬天只有雞、安哥拉兔可放牧獲得飼料，其餘的動物雖可獲得放牧時數但卻無法獲得飼料。
    </p>
    <h4 class="c-brown d-shadow">關於畜產品</h4>
    <p>
      動物過度放牧會導致冠軍動物無法獲得應有的(G類)產品。<br />
      譬如8心冠軍雞本可產金蛋，但如果超過放牧1000小時就會直接提升為白金蛋(P類)，<br />
      雖然售價(P類)比(G類)高，但未來就沒有(G類)的出貨量了，<br />
      所以放牧需考慮產品的獲得。
    </p>
    <h4 class="c-brown d-shadow">動物們</h4>
    <div class="animal-cards d-flex d-shadow">
      <div class="card-content col-6 col-lg-2" v-for="(animal, index) of animals"
        :key="animal">
        <button
        type="button"
        class="card d-flex"
        data-bs-toggle="modal"
        data-bs-target="#Modal"
        @click="clickAnimalHandler(animal)"
      >
        <img
          class="card-img"
          :src="require(`@/assets/img/manage/animal/animalImg${index + 1}.png`)"
          alt=""
        />
        <span class="card-name">{{ animal }}</span>
      </button>
      </div>
      <div class="card-content rwd-active col-6 col-lg-2"></div>
    </div>
  </div>
  <Modal>
      <template #header>{{ clickAnimal }}</template>
      <div class="info-card d-flex" v-if="filterInfo.length > 0">
        <div class="info-img">
          <img
            :src="
              require(`@/assets/img/manage/animal/animalInfo${filterInfo[0].number}.png`)
            "
            :alt="clickAnimal"
          />
        </div>
        <div class="animal-info">
          <p class="c-blue">{{ filterInfo[0].cycle }}</p>
          <p class="c-blue">{{ filterInfo[0].game }}</p>
          <p class="c-blue">{{ filterInfo[0].remark }}</p>
        </div>
      </div>
    </Modal>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  border-radius: 10px;
  background-image: url(@/assets/img/backgroundImg/manage.jpg);

  h4 {
    width: 100%;
    padding: 5px 0;
    border-bottom: 2px dashed rgb(98, 60, 11);
    border-top: 2px dashed rgb(98, 60, 11);
  }
}
.animal-cards {
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  .card-content{
    height: auto;
    padding: 5px;
    .card {
      height: 100%;
      width: 100%;
      background-color: rgba(252, 237, 237, 0.6);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .card-name {
        padding: 5px;
        opacity: 0;
      }
      .card-img {
        max-width: 70%;
        max-height: 80%;
        filter: saturate(0) brightness(0) contrast(0);
      }
      .card-img:hover {
        filter: brightness(1) contrast(1) saturate(1);
      }
      .card-img:hover + span {
        opacity: 1;
      }
    }
  }
  .rwd-active{
    display: none;
  }
  @media screen and (max-width: 992px) {
    .rwd-active{
      display: block;
    } 
  }
}
.info-card {
  flex-direction: column;
  align-items: center;
  .info-img {
    width: 60%;
    img {
      width: 100%;
    }
  }
  .animal-info{
    width: 80%;
    margin-top: 20px;
    p{
      font-size: 30px;
    }
  }
  @media screen and (max-width: 992px) {
    .info-img {
      width: 100%;
    }
    .animal-info{
      p{
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .animal-info{
      p{
        font-size: 12px;
      }
    }
  }
}
</style>