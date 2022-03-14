<template>
  <div id="page1">
   <div class="viewMap"style="width:100%;height:100%">
  <iframe src="./static/Map/CustomQuery.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
  </div>
  <div class="right">
 <div class="right-top">
    <div id="div1" style="display:block; color:#fff">
    <el-tabs :style="selfstyle" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="A类赛事" name="first"style>
    <div id="left3"style="float:left;width:50%;text-align:center;">
    <el-button @click="" style="">{{A1}}</el-button><br/><br/>
    <el-button @click=""style="">{{A2}}</el-button><br/><br/>
    <el-button @click="" style="">{{A3}}</el-button><br/><br/>
    <el-button @click=""style="">{{A4}}</el-button><br/><br/>
    <el-button @click="" style="">{{A5}}</el-button><br/><br/>
    
    </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
      <el-button @click=""style="">{{A8}}</el-button><br/><br/>
    <el-button @click="" style="">{{A7}}</el-button><br/><br/>
    <el-button @click=""style="">{{A6}}</el-button><br/><br/>
    <el-button @click="" style="">{{A9}}</el-button><br/><br/>
    <el-button @click=""style="">{{A10}}</el-button><br/><br/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="B类赛事" name="B">
   <div id="left3"style="float:left;width:50%;text-align:center;">
     <el-button @click="" style="background:#f56c6c">{{B1}}</el-button><br/><br/>
    <el-button @click=""style="">{{B2}}</el-button><br/><br/>
    <el-button @click="" style="">{{B3}}</el-button><br/><br/>
    <el-button @click=""style="">{{B4}}</el-button><br/><br/>
    <el-button @click="" style="">{{B5}}</el-button><br/><br/>
    
    </div>
     <div id="right3"style="float:right;width:50%;text-align:center">
    <el-button @click="GIS()"style="">{{B8}}</el-button><br/><br/>
    <el-button @click="" style="">{{B7}}</el-button><br/><br/>
    <el-button @click=""style="">{{B6}}</el-button><br/><br/>
    <el-button @click="" style="">{{B9}}</el-button><br/><br/>
    <el-button @click=""style="">{{B10}}</el-button><br/><br/>
    </div>
    </el-tab-pane>
    
    
 
  </el-tabs>
       
    </div>
     </div>
     <div class="count">
     <button @click="count">统计图表</button></div>
     
      
      </div>   
      <div id="box" class="left" v-if="isShow">    

        <div class="left1">
          <iframe src="./static/Total/line-stack.html"frameborder="0"  scrolling="no"style="width:100%;height:100%;"></iframe>
        </div>
        <div class="left2">
           <iframe src="./static/Total/school.html"frameborder="0"  scrolling="no"style="width:100%;height:100%;"></iframe>
        </div>
        <div class="left3">
          <iframe src="./static/Total/type.html"frameborder="0"  scrolling="no"style="width:100%;height:100%;"></iframe>
            </div>
            </div> 
  </div>
  </div>
</template>

<script>
export default {
  name: "page1",
  data() {
    return {
      isShow: false,
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
    };
  },
  mounted() {},
  methods: {
    query() {
      this.$router.push({ path: "/query" });
    },
    count() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

#page1 {
  background-image: url("../components/img/china.2961f108.png");
  height: 691px;
  width: 100%;
  float: right;
  margin-top: 4px;
}
.count {
  left: 10px;
  margin-left: 80%;
  margin-top: 30%;
  color: rgba(0, 89, 255, 0.733);
  background-image: url("./img/buttonbg.png");
}
.Container {
  height: 100%;
}
.Text1 {
  width: 100%;
  text-align: center;
  margin-top: 10px;
  font-size: 17px;
}
.a {
  display: inline;
}
.Text {
  width: 100%;

  margin-top: 2px;
}
a {
  color: #fff; /*设置字体颜色*/
  text-decoration: none; /*消除下划线*/
  padding: 12px;
  border-radius: 5px;
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
.right {
  width: 24%;
  height: 37%;
  background-color: #ffffff2d;
  position: absolute;
  top: 135px;
  left: 1170px;
  z-index: 1000;
}
.query {
  width: 25%;
  height: 5%;

  position: absolute;
  left: 190px;
  z-index: 1000;
  width: 25%;
  float: right;
  top: 122%;
  color: #fff;
  background-color: #365266;
  text-align: center;
}
.left {
  width: 24%;
  height: 95%;
  position: absolute;
  top: 70px;
  z-index: 1000;
  
}
.left1 {
  height: 33%;
  background-color: #6153a12d;
  background-image: url("./img/buttonbg.png");
  background-position: 10% 10%;
  background-size: 100% 100%;
}
.left2 {
  height: 33%;
  margin-top: 2px;
  background-color: #6153a12d;
  background-image: url("./img/buttonbg.png");
  background-position: 10% 10%;
  background-size: 100% 100%;
}
.left3 {
  height: 33%;
  margin-top: 2px;
  background-color: #6153a12d;
  background-image: url("./img/buttonbg.png");
  background-position: 10% 10%;
  background-size: 100% 100%;
}
.right-top {
  
  padding: 10px;
  background-image: url("./img/buttonbg.png");
  width: 100%;
  color: #fff;
  background-color: #ffffff09;
  height: 100%;
  font-size: 5px;
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
</style>