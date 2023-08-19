<script setup>
import { ref } from "vue";

const spring = ref([
  {
    name: "蕪菁",
    place: "雜貨店",
    money: "120G",
    grow: "4天",
    remark: "X"
  },
  {
    name: "馬鈴薯",
    place: "雜貨店",
    money: "150G",
    grow: "7天",
    remark: "X"
  },
  {
    name: "小黃瓜",
    place: "雜貨店",
    money: "200G",
    grow: "9天，之後每5天可收獲一次",
    remark: "X"
  },
  {
    name: "草莓",
    place: "雜貨店",
    money: "150G",
    grow: "9天，之後每3天可收獲一次",
    remark: "蕪菁、馬鈴薯、小黃瓜各出貨100個後出現"
  },
  {
    name: "草莓",
    place: "雜貨店",
    money: "150G",
    grow: "9天，之後每3天可收獲一次",
    remark: "蕪菁、馬鈴薯、小黃瓜各出貨100個後出現"
  },
  {
    name: "高麗菜",
    place: "霍安的店",
    money: "500G",
    grow: "14天",
    remark: "X"
  },
  {
    name: "月落草",
    place: "霍安的店",
    money: "500G",
    grow: "6天",
    remark: "X"
  },
  {
    name: "三色花",
    place: "霍安的店",
    money: "400G",
    grow: "12天",
    remark: "X"
  },
]);
const summer = ref([
  {
    name: "番茄",
    place: "雜貨店",
    money: "200G",
    grow: "9天，之後每3天可收獲一次",
    remark: "X"
  },
  {
    name: "玉米",
    place: "雜貨店",
    money: "300G",
    grow: "14天，之後每3天可收獲一次",
    remark: "X"
  },
  {
    name: "洋蔥",
    place: "雜貨店",
    money: "150G",
    grow: "7天",
    remark: "X"
  },
  {
    name: "南瓜",
    place: "雜貨店",
    money: "500G",
    grow: "14天",
    remark: "番茄、玉米、洋蔥各出貨100個後出現"
  },
  {
    name: "鳳梨",
    place: "霍安的店",
    money: "1000G",
    grow: "20天，之後每5天可收獲一次",
    remark: "X"
  },
  {
    name: "粉色貓薄荷",
    place: "霍安的店",
    money: "300G",
    grow: "6天",
    remark: "X"
  },
]);
const autumn = ref([
  {
    name: "茄子",
    place: "雜貨店",
    money: "120G",
    grow: "9天，之後每3天可收獲一次",
    remark: "X"
  },
  {
    name: "胡蘿蔔",
    place: "雜貨店",
    money: "300G",
    grow: "7天",
    remark: "X"
  },
  {
    name: "番薯",
    place: "雜貨店",
    money: "300G",
    grow: "6天，之後每3天可收獲一次",
    remark: "X"
  },
  {
    name: "菠菜",
    place: "雜貨店",
    money: "200G",
    grow: "5天",
    remark: "茄子、胡蘿蔔、番薯各出貨100個後出現"
  },
  {
    name: "青椒",
    place: "霍安的店",
    money: "150G",
    grow: "7天，之後每2天可收獲一次",
    remark: "X"
  },
  {
    name: "紅豆",
    place: "雜貨店",
    money: "300G",
    grow: "10天，之後每4天可收獲一次",
    remark: "X"
  },
  {
    name: "辣椒",
    place: "雜貨店",
    money: "300G",
    grow: "12天，之後每5天可收獲一次",
    remark: "X"
  },
  {
    name: "奇幻朱草",
    place: "霍安的店",
    money: "600G",
    grow: "10天",
    remark: "X"
  },
  {
    name: "橙色維納斯",
    place: "雜貨店",
    money: "1000G",
    grow: "10天",
    remark: "觸發橙色維納斯劇情後過幾天可買"
  },
]);
</script>

<template>
  <div class="accordion" id="accordionExample">
    <!-- 春天 -->
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          春天
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">種子</th>
                <th>販售地方</th>
                <th>價錢</th>
                <th>成長期</th>
                <th>備註</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="seed of spring" :key="seed.name">
                <td data-label="種子">{{seed.name}}</td>
                <td data-label="販售地方">{{seed.place}}</td>
                <td data-label="價錢">{{seed.money}}</td>
                <td data-label="成長期">
                  <p>
                    {{ seed.grow }}
                  </p>
                </td>
                <td data-label="備註">
                  <p>
                    {{ seed.remark }}
                    </p>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- 夏天 -->
    <div class="accordion-item mt-2">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          夏天
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">種子</th>
                <th>販售地方</th>
                <th>價錢</th>
                <th>成長期</th>
                <th>備註</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="seed of summer" :key="seed.name">
                <td data-label="種子">{{ seed.name }}</td>
                <td data-label="販售地方">{{ seed.place }}</td>
                <td data-label="價錢">{{ seed.money }}</td>
                <td data-label="成長期">
                  <p>
                    {{ seed.grow }}
                  </p>
                </td>
                <td data-label="備註">
                  <p>
                    {{ seed.remark }}
                    </p>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- 秋天 -->
    <div class="accordion-item mt-2">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          秋天
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">種子</th>
                <th>販售地方</th>
                <th>價錢</th>
                <th>成長期</th>
                <th>備註</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="seed of autumn" :key="seed.name">
                <td data-label="種子">{{ seed.name }}</td>
                <td data-label="販售地方">{{ seed.place }}</td>
                <td data-label="價錢">{{ seed.money }}</td>
                <td data-label="成長期">
                  <p>
                    {{ seed.grow }}
                  </p>
                </td>
                <td data-label="備註">
                  <p>
                    {{ seed.remark }}
                    </p>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion {
  width: 100%;

  .accordion-button {
    background-color: rgb(247, 229, 208);
    color: rgb(109, 88, 9);
    font-weight: 600;
    text-align: center;
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.6));
  }
  thead th{
  background-color: rgb(59, 103, 191);
  color: #fff;
  &:nth-child(-n+3){
    width: 15%;
  }
  }
  tbody tr:nth-child(2n){
    background-color: rgb(219, 233, 246);
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
            p{
              width: 50%;
              margin-left: auto;
            }
          }
        }
      }
      table td::before{
        content: attr(data-label);
        position: absolute;
        left: 5%;
      }
  }
}
</style>
