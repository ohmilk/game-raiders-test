<script setup>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
const clickAnimal = ref({
  name: "",
  number: "",
});
const animals = ref(["雞", "牛", "羊", "羊駝", "安格拉兔"]);
const clickAnimalHandler = (animal, index) => {
  clickAnimal.value.name = animal;
  clickAnimal.value.number = index + 1;
};
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
      <button
        type="button"
        class="card d-flex"
        data-bs-toggle="modal"
        data-bs-target="#Modal"
        v-for="(animal, index) of animals"
        :key="animal"
        @click="clickAnimalHandler(animal, index)"
      >
        <img
          class="card-img"
          :src="require(`@/assets/img/manage/animal/animalImg${index + 1}.png`)"
          alt=""
        />
        <span class="card-name">{{ animal }}</span>
      </button>
    </div>
  </div>
  <Modal>
      <template #header>{{ clickAnimal.name }}</template>
      <div class="info-card d-flex">
        <div class="info-img">
          <img
            v-if="clickAnimal.number"
            :src="
              require(`@/assets/img/manage/animal/animalInfo${clickAnimal.number}.png`)
            "
            :alt="clickAnimal.name"
          />
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
}
.card {
  width: 15%;
  max-height: 80%;
  background-color: rgba(252, 237, 237, 0.6);
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
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
.info-card {
  justify-content: center;
  .info-img {
    width: 60%;
    img {
      width: 100%;
    }
  }
}
</style>