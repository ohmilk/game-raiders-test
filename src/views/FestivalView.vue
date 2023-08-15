<script setup>
import Title from "@/components/Title.vue";
import { computed, ref, watch } from "vue";
let nowSeason = ref("春");
let nowStarDay = ref(NaN);
let nowStarDayArray = ref([]);
let lastgrids = ref(NaN);
let lastgridsArray = ref([]);
const weeks = ref(["日", "一", "二", "三", "四", "五", "六"]);
const seasons = ref([
  {
    name: "春",
    starDay: 0,
  },
  {
    name: "夏",
    starDay: 2,
  },
  {
    name: "秋",
    starDay: 4,
  },
  {
    name: "冬",
    starDay: 6,
  },
]);
const festivals = ref([
    {
        season: "春",
        fes: [
            {
                name: "搗麻糬大會",
                date: "1",
                place: "玫瑰廣場",
                time: "PM6:00～AM0:00",
            },
            {
                name: "春・感謝祭",
                date: "14",
                info: "紫心以上的結婚對象會前來送禮。"
            },
            {
                name: "春・賽馬之日",
                date: "18",
                place: "玫瑰廣場",
                time: "AM10:00～PM6:00",
                info: "據說只有 4 心以上的馬才能優勝。"
            },
            {
                name: "料理祭",
                date: "22",
                place: "玫瑰廣場",
                time: "AM10:00～PM6:00",
                info: "帶上自己的料理，可看到美食家驚人的樣貌。"
            },
        ]
    },
    {
        season: "夏",
        fes: [
            {
                name: "海祭",
                date: "1",
                place: "海灘",
                time: "AM10:00～PM6:00",
            },
            {
                name: "雞之日",
                date: "7",
                place: "玫瑰廣場",
                time: "AM10:00～PM6:00",
                info: "成年雞可參加。"
            },
            {
                name: "牛之日",
                date: "20 ",
                place: "玫瑰廣場",
                time: "AM10:00～PM6:00",
                info: "據說只有 8 心以上的牛才能優勝。"
            },
            {
                name: "煙火大會",
                date: "24",
                place: "海灘",
                time: "PM6:00～PM9:00",
                info: "可邀請綠心以上對象一起去看煙火。"
            },
        ]
    },
    {
        season: "秋",
        fes: [
            {
                name: "音樂祭",
                date: "3",
                place: "教會",
                time: "PM6:00～PM9:00",
                info: "城鎮上的女孩子一起表演音樂，參加可提升合奏者好感度。"
            },
            {
                name: "收穫祭",
                date: "9",
                place: "玫瑰廣場",
                time: "AM10:00～PM6:00",
                info: "放入食材煮火鍋，不要放太奇怪的東西。"
            },
            {
                name: "流星雨（隱藏）",
                date: "10",
                place: "聖母山山頂",
                time: "PM6:00～AM6:00",
                info: "第五年才有，每五年一次，可向流星許願。"
            },
            {
                name: "賞月日",
                date: "13",
                place: "聖母山山頂",
                time: "PM6:00～AM0:00",
                info: "綠心以上可一同參加，最高好感度的人直接會在山頂等你。"
            },
        ]
    },
    {
        season: "冬",
        fes: [
            {
                name: "冬・感謝祭",
                date: "14",
                info: "女送男禮物，紫心以上的對象會來家中。"
            },
            {
                name: "平安夜",
                date: "24",
                info: "綠心以上結婚對象會從鎮長那裡拿邀請函，在指定時間前往指定場所。"
            },
            {
                name: "耶誕節禮物（隱藏）",
                date: "25",
                time: "PM9:00 ～AM0:00",
                info: "先準備好襪子，PM9:00 之後湯瑪斯會把禮物放進你的襪子裡。"
            },
            {
                name: "跨年蕎麥派對",
                date: "30",
                place: "玫瑰廣場",
                info: "在玫瑰廣場跨年吃蕎麥麵，背包要有空位才能成立。"
            },
            {
                name: "跨年派對",
                date: "30",
                place: "聖母山山頂",
                time: "AM0:00～AM6:00",
                info: "在聖母山山頂與鎮上的大家看新年日出。"
            },
        ]
    }
]);
let filterStarDay = computed(() => {
  return seasons.value.filter((item) => {
    return item.name === nowSeason.value;
  });
});

nowStarDay = computed(() => {
  return filterStarDay.value[0].starDay;
});

lastgrids = computed(() => {
  return 42 - nowStarDay.value - 30;
});
nowStarDayArray = computed(() => {
  return Array.from({ length: nowStarDay.value }, (_, index) => index);
});
lastgridsArray = computed(() => {
  return Array.from({ length: lastgrids.value }, (_, index) => index);
});

const changeSeason = (action) => {
  const currentSeasonIndex = seasons.value.findIndex(
    (season) => season.name === nowSeason.value
  );

  if (action === "prev") {
    nowSeason.value =
      seasons.value[
        (currentSeasonIndex - 1 + seasons.value.length) % seasons.value.length
      ].name;
  } else if (action === "next") {
    nowSeason.value =
      seasons.value[(currentSeasonIndex + 1) % seasons.value.length].name;
  }
};
const filterFestival = (num) => {
    return festivals.value.filter((festival) => {
        return festival.season === nowSeason.value && festival.fes.find(f => f.date === num)
    })
};
</script>

<template>
  <div class="wrap p-3">
    <Title>節日介紹</Title>
    <div class="container">
      <div class="calendar mt-3">
        <div class="title d-flex">
          <button id="prev" @click="changeSeason('prev')">❮</button>
          <h4 class="d-flex">{{ nowSeason }}</h4>
          <button id="next" @click="changeSeason('next')">❯</button>
        </div>
        <div class="body mt-3">
          <div class="body-title d-flex">
            <div class="week d-flex" v-for="week of weeks" :key="week">
              {{ week }}
            </div>
          </div>
          <div class="days d-flex">
            <div
              class="grid"
              v-for="nowStarDay of nowStarDayArray"
              :key="nowStarDay"
            ></div>
            <div class="grid" v-for="num of 30" :key="num">
              <button class="grid-btn d-flex">
                <span class="date">{{ num }}</span>
                <span @load="filterFestival(num)">*</span>
              </button>
            </div>
            <div
              class="grid"
              v-for="lastgrid of lastgridsArray"
              :key="lastgrid"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  flex-direction: column;

  .calendar {
    width: 60%;
    height: 60vh;
    margin: 0 auto;
    .title {
      width: 100%;
      height: 10%;
      border: 5px solid #c6bc99;
      border-radius: 20px;
      background-color: #a3784e;
      justify-content: center;
      button{
        color: #fff;
      }
      h4 {
        color: #fff;
        margin: 0 10px;
        flex-wrap: wrap;
        align-content: center;
      }
    }
    .body {
      width: 100%;
      height: 90%;
      background-color: #e7e9cc;
      border: 5px solid #c0be9f;
      border-radius: 10px;
      .body-title {
        height: 10%;
        justify-content: space-around;
        .week {
            width: 12%;
            color: #fff;
          background-color: #d6921c;
          border-radius: 10px;
          margin: 5px 0;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
          &:nth-child(1){
            background-color: #CE2B2E;
          }
          &:last-child{
            background-color: #2A9ACB;
          }
        }
      }
      .days {
        height: 60%;
        flex-wrap: wrap;
        justify-content: space-around;
        .grid {
          width: 12%;
          height: 15%;
          background-color: #E0CA68;
          border-radius: 10px;
          margin: 5px;
          &:nth-child(7n+1){
            background-color: #F1A4A4;
          }
          &:nth-child(7n){
            background-color: #8DCBE6;
          }
          .grid-btn {
            width: 100%;
            height: 100%;
            align-items: center;
            padding: 10px;
            .date{
                color: #7F592F;
            }
          }
        }
      }
    }
  }
  button {
    border: none;
    background-color: rgb(255, 255, 255, 0.1);
    padding: 0;
  }
}
</style>
