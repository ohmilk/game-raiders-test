<script setup>
import { ref } from "vue";

const chargeLevels = ref(["鐵", "銅", "銀", "金", "秘銀", "詛咒、祝福"]);
const notFishs = ref([
  {
    name: "空罐",
    leave: "1～6",
    time: "四季",
    place: "湖/上游/泉/下游/海/秘密森林",
    money: "1G",
  },
  {
    name: "魚骨",
    leave: "1～6",
    time: "四季",
    place: "湖/上游/泉/下游/海/秘密森林",
    money: "1G",
  },
  {
    name: "長靴",
    leave: "1～6",
    time: "四季",
    place: "湖/上游/泉/下游/海/秘密森林",
    money: "1G",
  },
  {
    name: "樹枝",
    leave: "1～6",
    time: "四季",
    place: "湖/上游/泉/下游/海/秘密森林",
    money: "1G",
  },
  {
    name: "海盜寶藏",
    leave: "6",
    time: "夏",
    place: "海",
    money: "10000G",
  },
  {
    name: "古代魚的化石",
    leave: "6",
    time: "秋",
    place: "海",
    money: "5000G",
  },
  {
    name: "空瓶子（炸薯條食譜）",
    leave: "5",
    time: "春	",
    place: "海",
    money: "-",
  },
  {
    name: "力之果實",
    leave: "6",
    time: "冬",
    place: "海",
    money: "-",
  },
]);
</script>

<template>
  <div class="content">
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
          aria-selected="true">蓄力等級</button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#place"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false">釣魚場所</button>
      </li>
      <li class="nav-item">
        <button class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#not-fish"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false">非魚物品</button>
      </li>
      <li class="nav-item">
        <button class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#fish"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false">一般魚</button>
      </li>
      <li class="nav-item">
        <button class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#fish-king"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false">魚王</button>
      </li>
    </ul>
    <!-- 區塊內容 -->
    <div class="tab-content d-shadow p-3" id="myTabContent">
      <!-- 蓄力等級 -->
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">工具等級</th>
            <th scope="col">蓄力上限</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(leave, index) of chargeLevels" :key="leave">
            <td data-label="工具等級">{{ leave }}</td>
            <td data-label="蓄力上限">{{ index + 1 }}</td>
          </tr>
        </tbody>
      </table>
      </div>
      <!-- 釣魚場所 -->
      <div
        class="tab-pane fade"
        id="place"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
      <img src="@/assets/img/manage/angling/placeImg.jpg" alt="" />
      </div>
      <!-- 非魚物品 -->
      <div
        class="tab-pane fade"
        id="not-fish"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">名稱</th>
            <th scope="col">蓄力等級</th>
            <th scope="col">季節</th>
            <th scope="col">釣魚場所</th>
            <th scope="col">出貨金額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of notFishs" :key="item.name">
            <td data-label="名稱">{{ item.name }}</td>
            <td data-label="蓄力等級">{{ item.leave }}</td>
            <td data-label="季節">{{ item.time }}</td>
            <td data-label="釣魚場所">
              <p>
                {{ item.place }}
              </p>
            </td>
            <td data-label="出貨金額">{{ item.money }}</td>
          </tr>
        </tbody>
      </table>
      </div>
      <!-- 一般魚 -->
      <div
        class="tab-pane fade"
        id="fish"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <img src="@/assets/img/manage/angling/fishImg.png" alt="">
      </div>
      <!-- 魚王 -->
      <div
        class="tab-pane fade"
        id="fish-king"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
      <img src="@/assets/img/manage/angling/fishKingImg.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content{
  width: 100%;
  background-color: #fff;
  
  .tab-content{
    background-image: url(@/assets/img/backgroundImg/manage.jpg);
    border-radius: 10px;

    img{
      width: 100%;
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
@media screen and (max-width: 600px) {
      table{
        border: none;
        thead{
          display: none;
        }
        tr{
          display: block;
          margin-bottom: 10px;
          text-align: right;
          position: relative;
          td{
            display: block;
            border: 1px solid #ddd;
          }
        }
      }
      table td::before{
        content: attr(data-label);
        position: absolute;
        left: 5%;
      }
  }
  @media screen and (max-width:360px) {
    td{
      p{
        width: 50%;
        margin-left: auto;
      }
    }
  }
</style>
