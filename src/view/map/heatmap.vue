<template>
  <div id="page2">
  <div class="viewMap"style="width:100%;height:100%">
 <iframe src="./static/Map/HeatMap.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
</div>
<div class="right">
 <div class="right-top">
    <div id="div1" style="display:block; color:#fff">
    <el-tabs :style="selfstyle" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="A类赛事" name="first"style>
    <div id="left3"style="float:left;width:50%;text-align:center;">
    <el-button @click="Math1" style="">{{A1}}</el-button><br/><br/>
    <el-button @click="Math1"style="">{{A2}}</el-button><br/><br/>
    <el-button @click="Math1" style="">{{A3}}</el-button><br/><br/>
    <el-button @click="Math1"style="">{{A4}}</el-button><br/><br/>
    <el-button @click="Math1" style="">{{A5}}</el-button><br/><br/>
    
    </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
      <el-button @click="Math1"style="">{{A8}}</el-button><br/><br/>
    <el-button @click="Math1" style="">{{A7}}</el-button><br/><br/>
    <el-button @click="Math1"style="">{{A6}}</el-button><br/><br/>
    <el-button @click="Math1" style="">{{A9}}</el-button><br/><br/>
    <el-button @click="Math1"style="">{{A10}}</el-button><br/><br/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="B类赛事" name="B">
   <div id="left3"style="float:left;width:50%;text-align:center;">
     <el-button @click="Math1" style="background:#f56c6c">{{B1}}</el-button><br/><br/>
    <el-button @click="Math1"style="">{{B2}}</el-button><br/><br/>
    <el-button @click="Math1" style="">{{B3}}</el-button><br/><br/>
    <el-button @click="Math1"style="">{{B4}}</el-button><br/><br/>
    <el-button @click="Math1" style="">{{B5}}</el-button><br/><br/>
    
    </div>
     <div id="right3"style="float:right;width:50%;text-align:center">
    <el-button @click="GIS()"style="">{{B8}}</el-button><br/><br/>
    <el-button @click="Math1" style="">{{B7}}</el-button><br/><br/>
    <el-button @click="Math1"style="">{{B6}}</el-button><br/><br/>
    <el-button @click="Math1" style="">{{B9}}</el-button><br/><br/>
    <el-button @click="Math1"style="">{{B10}}</el-button><br/><br/>
    </div>
    </el-tab-pane>
    
    
 
  </el-tabs>
       
    </div>
            </div>
            <div class="Container" id="addinit">
            <div class="Text">
            <router-link to="/color" class="el-icon-cloudy" style="margin-left:50px;">（聚合图）</router-link>
            <router-link to="/heatmap" class="el-icon-cpu"style="margin-left:100px;color: #fff700">（热力图）</router-link></div>
            </br>
            <div class="Text">
            <router-link to="/Tocolor"class="el-icon-edit"style="margin-left:50px">（填色图）</router-link>
          <router-link to="/yingguang"class="el-icon-sunny"style="margin-left:100px">（荧光图）</router-link></div>
          </br>
          <div class="Text">
           <router-link to="/dot"class="el-icon-edit"style="margin-left:50px">（密度图）</router-link>
          <router-link to="/type"class="el-icon-sunny"style="margin-left:100px">（分类图）</router-link></div>
           
           <div class="Text1">
           <div class="el-icon-edit-outline">制图</div>
           </div>
            </div>
  </div>
  </div>
</template>

<script>
import "./style/style.css"
  export default {
    name: 'page2',
    data(){
      return{
        activeName:'B',
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
            B1:"中国大学生计算机设计大赛",
            B2:"“中国软件杯”软件设计大赛",
            B7:"安徽省机器人大赛",
            B4:"安徽省GIS应用技能大赛",
            B5:"全国统计建模大赛",
            B6:"全国高等学校测绘技能大赛",
            B11:"安徽省大数据与人工智能应用竞赛",
             B8:"安徽省大学生GIS技能大赛",
            B9:"全国大学生汽车方程式大赛",
            B10:"中国服务外包创新创业大赛",
            A11:"全国原创动漫大赛",
            B3:"全国英语辩论赛",
      }
    },
    mounted() {
      
    },
    methods: {
     
    },
  }
</script>

<style scoped>
.demo{
  width:100%;
  height:100%;
  overflow: hidden;
}
#page2{
    background-image: url("/src/components/img/china.2961f108.png");
	height: 691px;
	width: 100%;
  float:right;
  margin-top:4px
}
.Container{
 width:100%;
    height:32%;
    margin-top:10px;
    background-color: #413f3f48;
    background: linear-gradient(to left, #2b85e4, #2b85e4) left top no-repeat, linear-gradient(to bottom, #2b85e4, #2b85e4) left top no-repeat, linear-gradient(to left, #2b85e4, #2b85e4) right top no-repeat, linear-gradient(to bottom, #2b85e4, #2b85e4) right top no-repeat, linear-gradient(to left, #2b85e4, #2b85e4) left bottom no-repeat, linear-gradient(to bottom, #2b85e4, #2b85e4) left bottom no-repeat, linear-gradient(to left, #2b85e4, #2b85e4) right bottom no-repeat, linear-gradient(to left, #2b85e4, #2b85e4) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
}
.Text1{
 width:100%;
  text-align:center;
  margin-top:10px;
  font-size:17px
}
.Text{
  width:100%;
  
  margin-top:2px

}
a{
	color: #fff;/*设置字体颜色*/
	text-decoration: none;/*消除下划线*/
	padding: 12px;
	border-radius: 5px;
}
>>>.el-tabs__item{
  margin-left:65px;
  color:#fff;
}
>>>.el-button{
  border:#0c5e9400;
  background-color: rgba(0, 0, 0, 0);
  color:#fff;
  font-size: 13px;
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
            background: linear-gradient(to left, #2b85e4, #2b85e4) left top no-repeat, linear-gradient(to bottom, #2b85e4, #2b85e4) left top no-repeat, linear-gradient(to left, #2b85e4, #2b85e4) right top no-repeat, linear-gradient(to bottom, #2b85e4, #2b85e4) right top no-repeat, linear-gradient(to left, #2b85e4, #2b85e4) left bottom no-repeat, linear-gradient(to bottom, #2b85e4, #2b85e4) left bottom no-repeat, linear-gradient(to left, #2b85e4, #2b85e4) right bottom no-repeat, linear-gradient(to left, #2b85e4, #2b85e4) right bottom no-repeat;
            background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
            width: 400px;
            color: #FFF;
            background-color: #413f3f48;;
            height: 300px;
            font-size: 5px;
        }
        .right-bottom{

        }
        .A{
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