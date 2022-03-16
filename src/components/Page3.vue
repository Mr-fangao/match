<template>
  <div id="page2">
    <div class="viewMap" style="width: 100%; height: 100%">
      <iframe
        src="./static/Map/index.html"
        frameborder="0"
        scrolling="no"
        style="width: 100%; height: 100%"
      ></iframe>
    </div>
    <div class="right">
      <div class="right-top">
        <div id="div1" style="display: block; color: #fff">
          <el-tabs
            :style="selfstyle"
            v-model="activeName"
            @tab-click="handleClick"
          >
            <el-tab-pane label="A类赛事" name="first" style>
              <div
                id="left3"
                style="float: left; width: 50%; text-align: center"
              >
                <el-button @click="Math1" style="">{{ A1 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A2 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A3 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A4 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A5 }}</el-button
                ><br /><br />
              </div>
              <div
                id="right3"
                style="float: right; width: 50%; text-align: center"
              >
                <el-button @click="Math1" style="">{{ A8 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A7 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A6 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A9 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A10 }}</el-button
                ><br /><br />
              </div>
            </el-tab-pane>
            <el-tab-pane label="B类赛事" name="B">
              <div
                id="left3"
                style="float: left; width: 50%; text-align: center"
              >
                <el-button @click="Computer()">{{ B1 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B2 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B3 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B4 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B5 }}</el-button
                ><br /><br />
              </div>
              <div
                id="right3"
                style="float: right; width: 50%; text-align: center"
              >
                <el-button @click="GIS()" style="">{{ B8 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B7 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B6 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B9 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B10 }}</el-button
                ><br /><br />
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="Container" id="addinit">
        <div class="time">
          起始时间：<input
            type="text"
            id="inputTxt"
            size="40"
            value="2016年"
            style="
              width: 213px;
              background-color: rgb(11 47 68 / 41%);
              color: #fff;
              border-bottom: aqua;
              height: 30px;
              margin-top: 18px;
              text-align: center;
            "
          /><br />
          结束时间：<input
            type="text"
            id="inputTxt"
            size="40"
            value="2021年"
            style="
              width: 213px;
              background-color: rgb(11 47 68 / 41%);
              color: #fff;
              border-bottom: aqua;
              height: 30px;
              margin-top: 18px;
              text-align: center;
            "
          />
        </div>
      </div>
      <div class="right-center">
        选择尺寸：<el-select
          v-model="value"
          placeholder="1_STANDARD_DEVIATION"
          @change="changeHref(parseInt(value))"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="produce">
        <br />
        当前赛事：{{ match }}<br />
        时间范围：{{ times }}<br />
        <div class="el-icon-edit-outline">制图</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page3",
  data() {
    return {
      activeName: "B",
      A1: " “西门子杯”中国智能制造挑战赛",
      A2: "全国医学院临床基本技能竞赛",
      A3: "全国电子设计竞赛",
      A4: "全国工程训练综合能力竞赛",
      A5: "全国大学生广告艺术大赛",
      A6: "全国大学生机械创新设计大赛",
      A7: "全国大学生交通科技大赛",
      A8: "全国大学生节能减排科技竞赛",
      A9: "全国大学生数学建模竞赛",
      A10: "全国大学生物理实验竞赛",
      B1: "中国大学生计算机设计大赛",
      B2: "“中国软件杯”软件设计大赛",
      B7: "安徽省机器人大赛",
      B4: "安徽省GIS应用技能大赛",
      B5: "全国统计建模大赛",
      B6: "全国高等学校测绘技能大赛",
      B11: "安徽省大数据与人工智能应用竞赛",
      B8: "安徽省大学生GIS技能大赛",
      B9: "全国大学生汽车方程式大赛",
      B10: "中国服务外包创新创业大赛",
      A11: "全国原创动漫大赛",
      B3: "全国英语辩论赛",
      options: [
        {
          value: "1",
          label: "1_STANDARD_DEVIATION",
        },
        {
          value: "2",
          label: "2_STANDARD_DEVIATION",
        },
        {
          value: "3",
          label: "3_STANDARD_DEVIATION",
        },
      ],
      times: "2016年-2021年",
    };
  },
  mounted() {},
  methods: {
    Computer() {
      this.$router.push({ path: "/biao1" });
    },
    changeHref: function (sortnum) {
      switch (sortnum) {
        case 1:
          this.$router.push({
            path: "/biao1",
          });
          break;
        case 2:
          this.$router.push({
            path: "/biao2",
          });
          break;
        case 3:
          this.$router.push({
            path: "/biao3",
          });
          break;
      }
    },
  },
};
</script>

<style scoped>
.demo {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#page2 {
  background-image: url("../components/img/china.2961f108.png");
  height: 691px;
  width: 100%;
  float: right;
  margin-top: 4px;
}
.Container {
  width: 400px;
  height: 20%;
  margin-top: 5px;
  margin-left: 0px;
  background-color: #696b6d4d;
  background-image: url("./img/buttonbg.png");
  background-position: 10% 10%;
  background-size: 100% 100%;
}
.Text1 {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 17px;
}
.Text {
  width: 100%;

  margin-top: 2px;
}
.time {
  width: 100%;
  margin-left: 0px;
  
  color: #fff;
  text-align: center;
  background-color: #696b6d4d;
}
.produce {
  width: 400px;
  height: 17%;
  margin-top: 5px;
  margin-left: 0px;
  background-image: url("./img/buttonbg.png");
  background-position: 10% 10%;
  background-size: 100% 100%;
  text-align: center;
  background-color: #989c9f4d;
}
>>> .el-tabs__item {
  margin-left: 65px;
  color: #fff;
}
>>> .el-button {
  border: #0c5e9400;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  font-size: 13px;
}
.right-center {
  width: 400px;
  height: 10%;
  margin-top: 5px;

  margin-left: 0px;
  background-image: url("./img/buttonbg.png");
  background-position: 10% 10%;
  background-size: 100% 100%;
  text-align: center;
  background-color: #989c9f4d;
}
a {
  color: #fff; /*设置字体颜色*/
  text-decoration: none; /*消除下划线*/
  padding: 12px;
  border-radius: 5px;
}
.right {
  width: 410px;
  height: 68%;
  position: absolute;
  top: 65px;
  left: 1125px;
  z-index: 1000;
}
.right-top {
  background: white;
  padding: 10px;
  background-image: url("./img/buttonbg.png");
  background-position: 10% 10%;
  background-size: 100% 100%;
  width: 400px;
  color: #fff;
  background-color: #413f3f48;
  height: 300px;
}
.right-bottom {
}
.A {
  width: 70px;
  font: #fff;
  height: 28px;
  -webkit-box-shadow: rgb(82 243 255 / 30%) 0px 0px 12px 0px;
  box-shadow: rgb(82 243 255 / 30%) 0px 0px 12px 0px;
  border-style: outset;
  border-color: #0c5e94;
  border-color: #0c5e94;
  color: hsl(205deg 80% 79%);
  margin: 3px auto;
  font-size: medium;
}
.router-link-active {
  background: rgb(157 116 25);
  color: #f7f7f7;
}
</style>