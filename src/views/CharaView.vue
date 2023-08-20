<script setup>
import Title from "@/components/Title.vue";
import Modal from "@/components/Modal.vue";
import { computed, ref } from 'vue';
const chara = ref("")
const charas = ref(['卡蓮', '艾麗', '珀布莉', '珍妮佛', '瑪莉', '蘭']);
const charasInfo = ref([
    {
        number: 1,
        name: "卡蓮",
        birth: "秋15日(如果跟主角生日一樣會改為秋23日)",
        living: "雜貨店",
        mostFav: "烤馬鈴薯、爆米花、披薩",
        midFav: "奶酪、竹筍、葡萄酒、野葡萄酒、松蘑、生魚片",
        Fav: "全部花、黃瓜、茄子、地瓜、溫泉蛋、蛋、蛋黃醬、紫水晶、黃玉、紅寶石、祖母綠",
        common: "魚、草莓、野葡萄、蘑菇、牛奶、油、小麥粉、咖哩粉、飯糰、麵包、年糕、橄欖石",
        hate: "蜂蜜、蘋果、葡萄汁、巧克力、瑪瑙、螢石、全部顏色藥草、醫院的藥劑",
        mostHate: "毒蘑菇、雜草、石頭、樹枝、長靴、魚骨、木材、黃金木材、動物飼料"
    },
    {
        number: 2,
        name: "艾麗",
        birth: "春16日(如果跟主角生日一樣會改為春20日)",
        living: "艾蓮家",
        mostFav: "熱牛奶、賞月丸子、紅色奇幻草",
        midFav: "草莓、牛奶、肉丸粉、草莓牛奶、三色花、青色奇幻草、回復草、鑽石",
        Fav: "魚、青色草、紫色草、藍色草、黑色草、白色草、葡萄汁、巧克力、年糕",
        common: "竹筍、野葡萄、蜂蜜、蘋果、溫泉蛋、綠色草、紅色草、橙色草、油、小麥粉",
        hate: "玉米、洋蔥、黃色草、葡萄酒、野葡萄酒、番茄汁、炒雞蛋、廢礦石",
        mostHate: "毒蘑菇、雜草、石頭、樹枝、空罐、長靴、魚骨、木材、黃金木材、動物飼料"
    },
    {
        number: 3,
        name: "珀布莉",
        birth: "夏3日(如果跟主角生日一樣會改為夏10日)",
        living: "養雞場",
        mostFav: "炒雞蛋、菜肉蛋捲、蛋炒飯",
        midFav: "蛋、草莓、蘋果、巧克力、曲奇、巧克力曲奇、果汁、煮雞蛋",
        Fav: "鳳梨、蜂蜜、蛋黃醬、牛奶、葡萄汁、小麥粉、麵包、熱牛奶、三色花、貓薄荷",
        common: "竹筍、野葡萄、蘑菇、溫泉蛋、油、咖哩粉、魚、月淚草、青色奇幻草、紅色奇幻草",
        hate: "蘿蔔、南瓜、茄子、青椒、蕎麥粉、廢礦石",
        mostHate: "毒蘑菇、石頭、樹枝、空罐、長靴、魚骨、木材、黃金木材、動物飼料"
    },
    {
        number: 4,
        name: "珍妮佛",
        birth: "冬2日",
        living: "旅館",
        mostFav: "烤栗子、栗子飯",
        midFav: "巧克力、曲奇、巧克力曲奇、紅薯、布丁、瑪德蓮",
        Fav: "雞蛋、草莓、草莓蛋糕、玉米、茄子、蜂蜜、菠菜、咖哩粉、葡萄汁、胡蘿蔔",
        common: "溫泉蛋",
        hate: "壽司、瑪瑙、各種魚、動物飼料、寶石",
        mostHate: "毒蘑菇、石頭、樹枝、空罐、長靴、魚骨、木材、黃金木材"
    },
    {
        number: 5,
        name: "瑪莉",
        birth: "冬20日(如果跟主角生日一樣會改為冬23日)",
        living: "圖書館左邊房子",
        mostFav: "菜汁、菜奶、消閒茶",
        midFav: "竹筍、野葡萄、毒蘑菇、巧克力、葡萄汁、青色草、紅色草、黑色草、白色草",
        Fav: "番茄、蜂蜜、蘋果、紫水晶、黃玉、蛋黃醬、乳酪、黃色草、橙色草、紫色草",
        common: "全部花、魚、蘑菇、溫泉蛋、蛋、牛奶、綠色草、葡萄酒、油、小麥粉、咖哩粉",
        hate: "咖哩飯、醃蘿蔔、醬烤茄子、失敗作品、木材、飼料",
        mostHate: "雜草、石頭、樹枝、長靴、魚骨、木材、黃金木材"
    },
    {
        number: 6,
        name: "蘭",
        birth: "夏17日(如果跟主角生日一樣會改為夏22日)",
        living: "旅館",
        mostFav: "乾酪、松蘑飯、蛋糕、熱蛋糕",
        midFav: "巧克力、蘋果派、咖哩飯、溫泉蛋、年糕",
        Fav: "草莓、野葡萄、蘋果、蛋、蛋黃醬、牛奶、乳酪、大魚、葡萄汁、飯糰、麵包",
        common: "全部花、竹筍、蜂蜜、蘑菇、葡萄酒、油、小麥粉、咖哩粉、野葡萄酒、小魚、中魚",
        hate: "青色草、綠色草、橙色草、紫色草、藍色草、黑色草、白色草、醫院的藥劑、失敗作品",
        mostHate: "毒蘑菇、紅色草、黃色草、雜草、石頭、樹枝、長靴、魚骨、木材、黃金木材"
    }
])
const clickChara = (item) => {
    chara.value = item
}
const filterInfo = computed(() => {
    return charasInfo.value.filter(item => {
        return item.name === chara.value;
    })
})
</script>

<template>
  <div class="wrap chara mb-5 p-3 d-shadow">
    <Title>戀愛對象</Title>
    <div class="chara-cards row p-3 d-shadow">
        <div class="card-content col-6 col-sm-4 col-lg-2" 
            v-for="(item,index) of charas" :key="item">
            <button type="button" class="card d-flex"
           data-bs-toggle="modal" data-bs-target="#Modal"
         @click="clickChara(item)">
            <img class="img" :src="require(`../assets/img/chara/chara-img${index + 1}.png`)" :alt="item">
            <span class="card-name">{{ item }}</span>
        </button>
        </div>
    </div>
  </div>
  <Modal>
    <template #header v-if="filterInfo.length > 0">{{ filterInfo[0].name }}</template>
    <div class="chara-info-card d-flex" v-if="filterInfo.length > 0">
        <div class="chara-info">
            <div class="info">
                <strong class="c-blue">特別喜歡：</strong><p class="c-blue">{{ filterInfo[0].mostFav }}</p>
            </div>
            <div class="info">
                <strong class="c-blue">很喜歡：</strong><p class="c-blue">{{ filterInfo[0].midFav }}</p>
            </div>
            <div class="info">
                <strong class="c-blue">喜歡：</strong><p class="c-blue">{{ filterInfo[0].Fav }}</p>
            </div>
            <div class="info">
                <strong class="c-blue">討厭：</strong><p class="c-blue">{{ filterInfo[0].hate }}</p>
            </div>
            <div class="info">
                <strong class="c-blue">特別討厭：</strong><p class="c-blue">{{ filterInfo[0].mostHate }}</p>
            </div>
        </div>
        <div class="chara-img d-shadow">
            <img :src="require(`../assets/img/chara/chara-img${filterInfo[0].number}.png`)" alt="">
        </div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.chara{
    max-width: 1300px;
    background-image: url(../assets/img/backgroundImg/charabki.jpg);
    background-size: contain;
    flex-wrap: wrap;
    .chara-cards{
        justify-content: space-around;
        margin: 0 auto;
        .card-content{
            height: auto;
            padding: 5px;
            .card{
                height: 100%;
                width: 100%;
                background-color: rgba(252, 237, 237, 0.6);
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .card-name{
                    padding: 5px;
                    opacity: 0;
                }
                .img{
                    max-width: 70%;
                    max-height: 80%;
                    filter: saturate(0) brightness(0) contrast(0);
                }
                .img:hover{
                    filter: brightness(1) contrast(1) saturate(1);
                }
                .img:hover+span{
                    opacity: 1;
                }
            }
        }
    }
}
.chara-info-card{
    justify-content: center;
    .chara-info{
        .info{
            display: flex;
            strong, p{
                text-align: left;
                margin: 0;
            }
        }
    }
    @media screen and (max-width: 1100px) {
        .info{
            border-bottom: 1px solid rgb(146, 142, 142);
            width: 100%;
            padding: 5px;
            strong{
                width: 15%;
                display: flex;
                align-items: center;
            }
            p{
                width: 85%;
            }
        }
    }
    @media screen and (max-width: 720px) {
        .info{
            strong{
                width: 30%;
            }
            p{
                width: 70%;
            }
        }
    
    }
}
@media screen and (max-width: 1100px) {
    .chara-info-card{
        flex-direction: column;
    }
}

</style>