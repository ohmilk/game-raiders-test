<script>
export default {};
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
                <th scope="col">販售地方</th>
                <th scope="col">價錢</th>
                <th scope="col">成長期</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">蕪菁</th>
                <td>雜貨店</td>
                <td>120G</td>
                <td>4天</td>
              </tr>
              <tr>
                <th scope="row">馬鈴薯</th>
                <td>雜貨店</td>
                <td>150G</td>
                <td>7天</td>
              </tr>
              <tr>
                <th scope="row">小黃瓜</th>
                <td>雜貨店</td>
                <td>200G</td>
                <td>9天，之後每5天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">草莓</th>
                <td>雜貨店<br />（蕪菁、馬鈴薯、小黃瓜各出貨100個後出現）</td>
                <td>150G</td>
                <td>9天，之後每3天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">高麗菜</th>
                <td>霍安的店</td>
                <td>500G</td>
                <td>14天</td>
              </tr>
              <tr>
                <th scope="row">月落草</th>
                <td>霍安的店</td>
                <td>500G</td>
                <td>6天</td>
              </tr>
              <tr>
                <th scope="row">三色花</th>
                <td>霍安的店</td>
                <td>400G</td>
                <td>12天</td>
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
                <th scope="col">販售地方</th>
                <th scope="col">價錢</th>
                <th scope="col">成長期</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">番茄</th>
                <td>雜貨店</td>
                <td>200G</td>
                <td>9天，之後每3天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">玉米</th>
                <td>雜貨店</td>
                <td>300G</td>
                <td>14天，之後每3天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">洋蔥</th>
                <td>雜貨店</td>
                <td>150G</td>
                <td>7天</td>
              </tr>
              <tr>
                <th scope="row">南瓜</th>
                <td>雜貨店<br />（番茄、玉米、洋蔥各出貨100個後出現）</td>
                <td>500G</td>
                <td>14天</td>
              </tr>
              <tr>
                <th scope="row">鳳梨</th>
                <td>霍安的店</td>
                <td>1000G</td>
                <td>20天，之後每5天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">粉色貓薄荷</th>
                <td>霍安的店</td>
                <td>300G</td>
                <td>6天</td>
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
                <th scope="col">販售地方</th>
                <th scope="col">價錢</th>
                <th scope="col">成長期</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">茄子</th>
                <td>雜貨店</td>
                <td>120G</td>
                <td>9天，之後每3天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">胡蘿蔔</th>
                <td>雜貨店</td>
                <td>300G</td>
                <td>7天</td>
              </tr>
              <tr>
                <th scope="row">番薯</th>
                <td>雜貨店</td>
                <td>300G</td>
                <td>6天，之後每3天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">菠菜</th>
                <td>雜貨店<br />（茄子、胡蘿蔔、番薯各出貨100個後出現）</td>
                <td>200G</td>
                <td>5天</td>
              </tr>
              <tr>
                <th scope="row">青椒</th>
                <td>霍安的店</td>
                <td>150G</td>
                <td>7天，之後每2天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">紅豆</th>
                <td>雜貨店</td>
                <td>300G</td>
                <td>10天，之後每4天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">辣椒</th>
                <td>雜貨店</td>
                <td>300G</td>
                <td>12天，之後每5天可收獲一次</td>
              </tr>
              <tr>
                <th scope="row">奇幻朱草</th>
                <td>霍安的店</td>
                <td>600G</td>
                <td>10天</td>
              </tr>
              <tr>
                <th scope="row">橙色維納斯</th>
                <td>雜貨店<br />（觸發橙色維納斯劇情後過幾天可買）</td>
                <td>1000G</td>
                <td>10天</td>
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
  thead tr{
  background-color: rgb(59, 103, 191);
  color: #fff;
  }
  tbody tr:nth-child(2n){
    background-color: rgb(219, 233, 246);
  }
}
</style>
