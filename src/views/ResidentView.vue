<script setup>
import Title from "@/components/Title.vue";
import Modal from "@/components/Modal.vue";
import { computed, ref } from "vue";
const resPlaces = ref([
  {
    name: "安娜家",
    eName: "anna"
  },
  {
    name: "艾蓮家",
    eName: "grandma"
  },
  {
    name: "鎮長家",
    eName: "mayor"
  },
  {
    name: "雜貨店",
    eName: "grocery"
  },
  {
    name: "醫院",
    eName: "hospital"
  },
  {
    name: "教堂",
    eName: "church"
  },
  {
    name: "小矮人家",
    eName: "elves"
  },
  {
    name: "果樹園",
    eName: "orchard"
  },
  {
    name: "旅館",
    eName: "hostel"
  },
  {
    name: "鍛製屋",
    eName: "forging"
  },
  {
    name: "海之家",
    eName: "ocean"
  },
  {
    name: "札克家",
    eName: "zack"
  },
  {
    name: "養雞場",
    eName: "chicken"
  },
  {
    name: "牛羊牧場",
    eName: "ox"
  },
  {
    name: "哥茲家",
    eName: "wood"
  }
])
const residents = ref([
  {
    number: 1,
    place: "艾蓮家",
    name: "艾蓮",
    birth: "冬13",
    identity: "艾麗奶奶",
    fav: "首飾、小麥粉"
  },
  {
    number: 2,
    place: "艾蓮家",
    name: "優",
    birth: "秋5",
    identity: "艾麗弟弟",
    fav: "草莓牛奶、甜食"
  },
  {
    number: 3,
    place: "鎮長家",
    name: "托馬斯",
    birth: "夏25",
    identity: "鎮長",
    fav: "酒"
  },
  {
    number: 4,
    place: "鎮長家",
    name: "哈里斯",
    birth: "夏4",
    identity: "巡警",
    fav: "麵包、飯團"
  },
  {
    number: 5,
    place: "雜貨店",
    name: "莎夏",
    birth: "春30",
    identity: "雜貨店老闆娘",
    fav: "巧克力、蛋糕"
  },
  {
    number: 6,
    place: "雜貨店",
    name: "傑夫",
    birth: "冬29",
    identity: "雜貨店老闆",
    fav: "菜、果汁、任何健康食品"
  },
  {
    number: 7,
    place: "醫院",
    name: "多特",
    birth: "秋19",
    identity: "醫生",
    fav: "藥材"
  },
  {
    number: 8,
    place: "教堂",
    name: "卡特",
    birth: "秋20",
    identity: "牧師",
    fav: "草莓牛奶"
  },
  {
    number: 9,
    place: "小矮人家",
    name: "小矮人們",
    birth: "",
    identity: "玩家小幫手",
    fav: "小麥粉、蜂蜜"
  },
  {
    number: 10,
    place: "果樹園",
    name: "瑪娜",
    birth: "秋11",
    identity: "果樹園老闆娘",
    fav: "魚"
  },
  {
    number: 11,
    place: "果樹園",
    name: "狄克",
    birth: "冬15",
    identity: "果樹園主人",
    fav: "酒、料理"
  },
  {
    number: 12,
    place: "果樹園",
    name: "克里夫",
    birth: "夏6",
    identity: "果樹園臨時工",
    fav: "磨菇飯、松茸飯、三明治"
  },
  {
    number: 13,
    place: "旅館",
    name: "達特",
    birth: "冬11",
    identity: "旅館老闆",
    fav: "麵包"
  },
  {
    number: 14,
    place: "鍛製屋",
    name: "賽巴拉",
    birth: "春8",
    identity: "鍛製屋老闆",
    fav: "飯團、貴礦石"
  },
  {
    number: 15,
    place: "鍛製屋",
    name: "格雷",
    birth: "冬6",
    identity: "鍛製屋少年",
    fav: "礦石"
  },
  {
    number: 16,
    place: "海之家",
    name: "凱",
    birth: "夏22",
    identity: "海之家店主",
    fav: "魚、酒"
  },
  {
    number: 17,
    place: "札克家",
    name: "札克",
    birth: "夏29",
    identity: "出貨業者",
    fav: "烏冬、魚"
  },
  {
    number: 18,
    place: "札克家",
    name: "霍安",
    birth: "冬19",
    identity: "中國商人",
    fav: "海盜之寶、古代化石魚"
  },
  {
    number: 19,
    place: "養雞場",
    name: "莉莉婭",
    birth: "春19",
    identity: "養雞場老闆娘",
    fav: "草莓牛奶、粥"
  },
  {
    number: 20,
    place: "養雞場",
    name: "里克",
    birth: "秋27",
    identity: "莉莉婭兒子",
    fav: "雞飼料、酒"
  },
  {
    number: 21,
    place: "牛羊牧場",
    name: "穆奇",
    birth: "春17",
    identity: "牛羊牧場主人",
    fav: "粥、溫泉蛋"
  },
  {
    number: 22,
    place: "牛羊牧場",
    name: "梅",
    birth: "冬26",
    identity: "穆奇孫女",
    fav: "草莓牛奶、甜食"
  },
  {
    number: 23,
    place: "哥茲家",
    name: "哥茲",
    birth: "秋2",
    identity: "木工",
    fav: "資材"
  },
  {
    number: 24,
    place: "安娜家",
    name: "安娜",
    birth: "秋23",
    identity: "瑪莉母親",
    fav: "巧克力、小麥粉、油"
  },
  {
    number: 25,
    place: "安娜家",
    name: "巴吉爾",
    birth: "夏11",
    identity: "植物研究家",
    fav: "植物"
  },
])
const place = ref("");
const clickPlace = (item) => {
  place.value = item
};
const filterRes = computed(() => {
  return residents.value.filter(res => res.place === place.value)
})
</script>

<template>
  <div class="wrap resident p-3">
    <Title>礦石鎮居民</Title>
    <div class="resident-content mt-3">
      <div class="caption d-flex">
      <h5 class="c-brown">點擊圖片房屋認識居民</h5>
    </div>
      <div class="map-wrap mt-3">
            <div class="map">
              <button v-for="res of resPlaces" class="place" :class="res.eName" :title="res.name"
              :key="res.eName" @click="clickPlace(res.name)"
              data-bs-toggle="modal" data-bs-target="#Modal"></button>
            </div>
        </div>
      </div>
    </div>
    
  <Modal>
    <template #header>{{ place }}</template>
    <div class="res-cotent row" v-if="filterRes.length > 0">
      <div v-for="info of filterRes" :key="info.name" class="card col-12 col-lg-4">
        <div class="card-img d-flex">
          <img class="d-shadow" :src="require(`../assets/img/resident/resident-img${info.number}.png`)" alt="">
        </div>
        <div class="card-info mt-3">
          <div class="card-title d-shadow">
            <span>{{ info.name }}</span>
          </div>
          <span v-if="info.birth">生日：{{ info.birth }}</span>
          <span>身分：{{ info.identity }}</span>
          <span>喜歡：{{ info.fav}}</span>
        </div>
      </div>
    </div>
  </Modal>

</template>

<style lang="scss" scoped>
.resident{
    .resident-content{
      width: 100%;
    }
    .caption{
      width: 100%;
      height: 50px;
      align-items: center;
      h5{
        margin: 0 auto;
        width: 10em;
        white-space: nowrap;
        overflow: hidden;
        border-right: solid transparent;
        animation: typing 2s steps(10), cursor .6s infinite;
      }
    }
    .map-wrap{
      width: 100%;
      max-width: 890px;
      height: 53.5vw;
      max-height: 500px;
      margin: 0 auto;
      position: relative;
      background-image: url(../assets/img/backgroundImg/map.png);
      background-repeat: no-repeat;
      background-size: contain;

      .place{
            width: 5.5%;
            border: none;
            background-color: rgb(253, 253, 253, 0.1);
            height: 8%;
            position: absolute;
            top: 7%;
        }
        .anna{
            right: 57%;
        }
        .grandma{
            width: 3%;
            right: 51.5%;
        }
        .mayor{
            width: 3%;
            right: 47.5%;
        }
        .grocery{
            right: 38%;
        }
        .hospital{
            right: 28%;
        }
        .church{
            right: 16%;
        }
        .elves{
            width: 4%;
            height: 5%;
            top: 2%;
            right: 9.5%;
        }
        .orchard{
            width: 10%;
            top: 22%;
            right: 52%;
        }
        .hostel{
            width: 8%;
            top: 24%;
            right: 39%;
        }
        .forging{
            top: 44%;
            right: 53%;
        }
        .ocean{
            width: 4%;
            height: 5%;
            top: 35%;
            right: 9%;
        }
        .zack{
            width: 4%;
            height: 5%;
            top: 32%;
            right: 5%;
        }
        .chicken, .ox{
            top: 57%;
            right: 40%;
        }
        .ox{
            right: 26%;
        }
        .wood{
            top: 80%;
            right: 43%;
        }
      }
  }

  .res-cotent{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0;

    .card{
      border: none;
      background-color: rgb(253, 253, 253, 0.1);
      padding: 0;

      .card-img{
        width: 100%;
        height: 60%;
        align-items: center;
        img{
          max-height: 90%;
          max-width: 90%;
        }
      }

      .card-info{
        width: 100%;
        border: 3px solid #BAE2F1;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .card-title{
          width: 50%;
          border-radius: 70%;
          background-color: #BAE2F1;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, -50%);
        }
        span{
            color: #4491E9;
          }
      }
    }
  }
  @media screen and (max-width: 992px) {
    .res-cotent{
      .card{
        flex-direction: row;
        height: 25vh;
        .card-img{
          width: 30%;
          height: 100%;
          align-items: normal;
          justify-content: center;
        }
        .card-info{
          width: 70%;
        }
      }
    }
  }
@keyframes typing {
  0%{width: 0;}
  100%{width: 10em;}
}
@keyframes cursor {
  50%{border-color: black;}
}
</style>