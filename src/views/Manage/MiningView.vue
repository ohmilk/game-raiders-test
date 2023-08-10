<script setup>
import { ref } from "vue";

const strengths = ref(["20", "30", "40", "60", "70"])
const curseTools = ref([
  {
    name: "詛咒的釣竿",
    floor: "地下29層",
    relieve: "使用50次"
  },
  {
    name: "詛咒的鋤頭",
    floor: "地下39層",
    relieve: "去教堂「卸下詛咒工具」5次，周一、三，下午1~4點，下雨天＆下雪天"
  },
  {
    name: "詛咒的斧頭",
    floor: "地下49層",
    relieve: "使用50次"
  },
  {
    name: "詛咒的錘",
    floor: "地下59層",
    relieve: "連續裝備5天"
  },
  {
    name: "詛咒的灑水器",
    floor: "地下69層",
    relieve: "去教堂「卸下詛咒工具」5次，周一、三，下午1~4點，下雨天＆下雪天"
  },
  {
    name: "詛咒的鐮刀",
    floor: "地下79層",
    relieve: "連續裝備5天"
  },
])
</script>

<template>
  <div class="warp">
    <!-- 頁籤 -->
    <ul class="nav nav-tabs justify-content-center" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true">礦場內介紹</button>
      </li>
      <li class="nav-item">
        <button class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#curse"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false">詛咒工具獲得方式</button>
      </li>
      <li class="nav-item">
        <button class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#spring"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false">泉之採礦場</button>
      </li>
      <li class="nav-item">
        <button class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#lake"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false">湖之採礦場</button>
      </li>
    </ul>
    <!-- 區塊內容 -->
    <div class="tab-content d-shadow p-3" id="myTabContent">
      <!-- 礦場內介紹 -->
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <h4 class="fw-bold c-brown">時間</h4>
        <p>在礦場內，時間不會流逝，但是每下一層樓就會流逝一分鐘，每掉落一個洞穴依照層數流逝相對的分鐘數（一層一分鐘、二層二分鐘⋯）。</p>
        <h4 class="fw-bold c-brown">掉落的洞穴</h4>
        <p>泉之採礦場在20層之後會出現掉落的洞穴，湖之採礦場在10層之後會出現掉落的洞卻，掉落的樓層為1~5隨機。</p>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <td class="fw-bold">掉落層數</td>
              <td class="fw-bold">體力減少</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,idex) of strengths" :key="item">
              <td>{{ idex + 1 }}</td>
              <td>{{ item }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 詛咒工具獲得方式 -->
      <div
        class="tab-pane fade"
        id="curse"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
      <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <td class="fw-bold">詛咒工具</td>
              <td class="fw-bold">湖之採礦場樓層</td>
              <td class="fw-bold">解咒變祝福工具</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of curseTools" :key="item">
              <td>{{ item.name }}</td>
              <td>{{ item.floor }}</td>
              <td>{{ item.relieve }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 泉之採礦場 -->
      <div
        class="tab-pane fade"
        id="spring"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <img src="@/assets/img/manage/mining/spring.png" alt="">
      </div>
      <!-- 湖之採礦場 -->
      <div
        class="tab-pane fade"
        id="lake"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
      <img src="@/assets/img/manage/mining/lake.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.warp{
  width: 100%;
  background-color: #fff;
  
  .tab-content{
    border-radius: 10px;
    background-image: url(@/assets/img/backgroundImg/manage.jpg);
    background-size: contain;

    .table{
      width: 80%;
      margin: 0 auto;
    }
  }
}
.nav-link{
      color: #684242;
    }
.nav-link.active{
  background-color: rgb(247, 229, 208);
  color: #c15701;
}
thead tr{
  background-color: rgb(59, 103, 191);
  color: #fff;
}
tbody tr:nth-child(2n){
  background-color: rgb(219, 233, 246);
}
tbody tr:nth-child(2n-1){
  background-color: #fff;
}
</style>