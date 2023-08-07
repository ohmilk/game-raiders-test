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
    name: "哥茨家",
    eName: "wood"
  }
])
const residents = ref([
  {
    number: 1,
    place: "grandma",
    name: "艾蓮",
    birth: "冬13",
    identity: "艾麗奶奶"
  },
  {
    number: 2,
    place: "grandma",
    name: "優",
    birth: "秋5",
    identity: "艾麗弟弟"
  },
  {
    number: 3,
    place: "mayor",
    name: "托馬斯",
    birth: "夏25",
    identity: "鎮長"
  },
  {
    number: 4,
    place: "mayor",
    name: "哈里斯",
    birth: "夏4",
    identity: "巡警"
  },
  {
    number: 5,
    place: "grocery",
    name: "莎夏",
    birth: "春30",
    identity: "雜貨店老闆娘"
  },
  {
    number: 6,
    place: "grocery",
    name: "傑夫",
    birth: "冬29",
    identity: "雜貨店老闆"
  },
  {
    number: 7,
    place: "hospital",
    name: "多特",
    birth: "秋19",
    identity: "醫生"
  },
  {
    number: 8,
    place: "church",
    name: "卡特",
    birth: "秋20",
    identity: "牧師"
  },
  {
    number: 9,
    place: "elves",
    name: "小矮人們",
    birth: "",
    identity: "玩家小幫手"
  },
  {
    number: 10,
    place: "orchard",
    name: "瑪娜",
    birth: "秋11",
    identity: "果樹園老闆娘"
  },
  {
    number: 11,
    place: "orchard",
    name: "狄克",
    birth: "冬15",
    identity: "果樹園主人"
  },
  {
    number: 12,
    place: "orchard",
    name: "克里夫",
    birth: "夏6",
    identity: "果樹園臨時工"
  },
  {
    number: 13,
    place: "hostel",
    name: "達特",
    birth: "冬11",
    identity: "旅館老闆"
  },
  {
    number: 14,
    place: "forging",
    name: "賽巴拉",
    birth: "春8",
    identity: "鍛製屋老闆"
  },
  {
    number: 15,
    place: "forging",
    name: "格雷",
    birth: "冬6",
    identity: "鍛製屋少年"
  },
  {
    number: 16,
    place: "ocean",
    name: "凱",
    birth: "夏22",
    identity: "海之家店主"
  },
  {
    number: 17,
    place: "zack",
    name: "札克",
    birth: "夏29",
    identity: "出貨業者"
  },
  {
    number: 18,
    place: "zack",
    name: "霍安",
    birth: "冬19",
    identity: "中國商人"
  },
  {
    number: 19,
    place: "chicken",
    name: "莉莉婭",
    birth: "春19",
    identity: "養雞場老闆娘"
  },
  {
    number: 20,
    place: "chicken",
    name: "里克",
    birth: "秋27",
    identity: "莉莉婭兒子"
  },
  {
    number: 21,
    place: "ox",
    name: "穆奇",
    birth: "春17",
    identity: "牛羊牧場主人"
  },
  {
    number: 22,
    place: "ox",
    name: "梅",
    birth: "冬26",
    identity: "穆奇孫女"
  },
  {
    number: 23,
    place: "wood",
    name: "哥茲",
    birth: "秋2",
    identity: "木工"
  },
  {
    number: 24,
    place: "anna",
    name: "安娜",
    birth: "秋23",
    identity: "瑪莉母親"
  },
  {
    number: 25,
    place: "anna",
    name: "巴吉爾",
    birth: "夏11",
    identity: "植物研究家"
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
  <div class="container resident">
    <Title>礦石鎮居民</Title>
    <div class="map-container mt-3">
            <div class="map">
              <button v-for="res of resPlaces" class="place" :class="res.eName" :title="res.name"
              :key="res.eName" @click="clickPlace(res.eName)"
              data-bs-toggle="modal" data-bs-target="#Modal"></button>
            </div>
        </div>
  </div>
  <Modal>
    <template #header>居民介紹</template>
    <div class="res-cotent" v-if="filterRes.length > 0">
      <div v-for="info of filterRes" :key="info.name" class="card p-3">
        <div class="card-img">
          <img class="d-shadow" :src="require(`../assets/img/resident/resident-img${info.number}.png`)" alt="">
        </div>
        <div class="card-info mt-3 p-3">
          <div class="card-title d-shadow">
            <span>{{ info.name }}</span>
          </div>
          <span v-if="info.birth">生日：{{ info.birth }}</span>
          <span>身分：{{ info.identity }}</span>
        </div>
      </div>
    </div>
  </Modal>

</template>

<style lang="scss" scoped>
.resident{
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    .map-container{
      width: 80%;
      max-width: 890px;
      height: 44.6vw;
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
    max-height: 70vh;
    display: flex;
    justify-content: space-around;

    .card{
      width: 30%;
      border: none;
      background-color: rgb(253, 253, 253, 0.1);

      .card-img{
        width: 100%;
        height: 60%;
        img{
          height: 90%;
        }
      }

      .card-info{
        width: 100%;
        border: 3px solid #BAE2F1;
        position: relative;
        display: flex;
        flex-direction: column;

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
        
</style>