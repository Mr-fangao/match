<template >
  <div id="page">
    <div class="container-flex" tabindex="0" hidefocus="true">
      <left></left>
       <div class="box-left">
            <div class="left-top"style="text-align: center;margin-top:1px">
               <div id="left">
                <p style="color:#fff">参赛人数</p>
                <div class="one">{{nummer}}<div style="color:#fff;font-size:13px"> 次</div></div>
                </div>
                <div id="right">
               <p style="color:#fff">获奖人数</p>
               <div class="two">{{nummer1}}<div style="color:#fff;font-size:13px"> 次</div></div>
                </div>
                <div id="left1">
                <p style="color:#fff">赛事级别</p>
                <div class="three">{{nummer2}}<div style="color:#fff;font-size:13px">类</div></div>
                </div>
                <div id="right1">
               <p style="color:#fff">参赛高校</p>
                <div class="four">{{nummer3}}<div style="color:#fff;font-size:13px"> 所</div></div>
                </div>
            </div>
            <div class="left-center">
            <iframe src="./static/AllData copy/line.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
            </div>
            <div class="left-bottom" >
               <iframe src="./static/AllData copy/time.html"frameborder="0" style="width:100%;height:100%;"></iframe>   
            </div>
        </div>
        <div class="box-center">
               <div class="time"style="height:6%">
              <div class="rootBar">
              <div class="childrenBar">
            <el-button></el-button>
    <el-button>2016年</el-button>
   <el-button >2017年</el-button>
    <el-button >2018年</el-button>
    <el-button>2019年</el-button>
   <el-button @click="computer2020()" >2020年</el-button>
    <el-button>2021年</el-button>
    <el-button name="second"style="background-color:#f56c6c">ALL</el-button>
              
              </div>
              </div>

              </div>
            <div class="center-bottom"> 
                      
             <iframe src="./static/AllData copy/anhui.html"frameborder="0" style="width:100%;height:100%;"></iframe>
            </div>
            <div class="center-bottom1">
             <iframe src="./static/AllData copy/Type.html"frameborder="0" style="width:100%;height:100%;"></iframe>
             </div>
    
    </div>
        <div class="box-right">
        
            <div class="right-top">
             <div id="div1" style="display:block; color:#fff">
    <el-tabs :style="selfstyle" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="A类赛事" name="first"style>
    <div id="left3"style="float:left;width:50%;text-align:center;">
    <el-button type="danger"@click="" style="">{{A1}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{A2}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{A3}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{A4}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{A5}}</el-button><br/><br/>
    
    </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
      <el-button type="danger"@click=""style="">{{A8}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{A7}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{A6}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{A9}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{A10}}</el-button><br/><br/>
      </div>
    </el-tab-pane>
    <el-tab-pane label="B类赛事" name="second">
   <div id="left3"style="float:left;width:50%;text-align:center;">
     <el-button type="danger"@click="" style="background:#f56c6c">{{B1}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{B2}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{B3}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{B4}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{B5}}</el-button><br/><br/>
    
    </div>
     <div id="right3"style="float:right;width:50%;text-align:center">
    <el-button type="danger"@click="GIS()"style="">{{B8}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{B7}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{B6}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{B9}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{B10}}</el-button><br/><br/>
    </div>
    </el-tab-pane>
    
    
 
  </el-tabs>
       
    </div>
    <div id="div2" style="display:none;">
    <el-tabs :style="selfstyle" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="理科" name="second"style="padding-left: 12px;">
    <div id="left3"style="float:left;width:50%;text-align:center;">
  <el-button type="danger"@click="" style="">{{A1}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{A2}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{A3}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{A4}}</el-button><br/><br/>
     <el-button type="danger"@click=""style="">{{A6}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{A7}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{A8}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{A9}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{B10}}</el-button><br/><br/>
    </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
    <el-button type="danger"@click=""style="">{{A10}}</el-button><br/><br/>
     <el-button type="danger"@click=""style="">{{B2}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{B3}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{B4}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{B5}}</el-button><br/><br/>
     <el-button type="danger"@click=""style="">{{B6}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{B7}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{B8}}</el-button><br/><br/>
    <el-button type="danger"@click="" style="">{{B9}}</el-button><br/><br/>
    
    </div>
    </el-tab-pane>
    </el-tab-pane>
    <el-tab-pane label="文艺" name="third">
    <div id="un"style="">
    <div id="left3"style="float:left;width:50%;text-align:center;">
     <el-button type="danger"@click=""style="">{{A5}}</el-button><br/><br/>
    <el-button type="danger"@click=""style="">{{A11}}</el-button><br/><br/>
    </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
    <el-button type="danger"@click=""style="">{{B11}}</el-button><br/><br/>
    </div>
    </div>
    </el-tab-pane>
   
    
  </el-tabs>
       
       </div>
        <div id="div3" style="display:none;">
        </div>
       <input class="qiehuan"type="button" @click="showAndHidden1();" value=">"style="" />
        
            </div>
            
            <div class="right-center">
             <iframe src="./static/Match/field.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
            </div>
     <div class="right-bottom">
                <iframe src="./static/AllData copy/School.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>

            </div>
        </div>
    </div>
       </div>
    
</template>

<script>
 //import '../static/js/anhui.js'
 import  "./style/style.css"
import left from '../../left.vue'
  import {A}from "./index.js"
  export default {
  components:{
    left
  },
  name: 'page',
  data () {
    return {
      activeName:'second',
        nummer:'43254', 
      nummer1:'4893',
      nummer2:'B',
      nummer3:'59',
      A1: " “西门子杯”中国智能制造挑战赛",
            A2: "全国医学院临床基本技能竞赛",
            A3: "全国大学生电子设计竞赛",
            A4: "全国大学生工程训练综合能力竞赛",
            A5: "全国大学生广告艺术大赛",
            A6: "全国大学生机械创新设计大赛",
            A7: "全国大学生交通科技大赛",
            A8: "全国大学生节能减排科技竞赛",
            A9: "全国大学生数学建模竞赛",
            A10: "全国大学生物理实验竞赛",
            B1:"中国计算机设计大赛",
            B2:"“中国软件杯”大学生软件设计大赛",
            B3:"安徽省机器人大赛",
            B4:"安徽省大学生GIS应用技能大赛",
            B5:"全国大学生统计建模大赛",
            B6:"全国高等学校大学生测绘技能大赛",
            B7:"安徽省大数据与人工智能应用竞赛",
             B8:"安徽省大学生GIS技能大赛",
            B9:"全国大学生汽车方程式大赛",
            B10:"中国大学生服务外包创新创业大赛",
            A11:"全国大学生原创动漫大赛",
            B11:"全国大学生英语辩论赛",
      msg: 'Welcome to Your Vue.js App',
      showNav:true,
      selected:1,
        options: [
            {
          value: '0',
          label: 'ALL'
        },{
          value: '1',
          label: '2021'
        }, {
          value: '2',
          label: '2020'
        }, {
          value: '3',
          label: '2019'
        }, {
          value: '4',
          label: '2018'
        }, {
          value: '5',
          label: '2017'
        }],
        value: ''
    }
  },
  mounted(){
    this.drawLine();
     console.log(123545);
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },            
   showAndHidden1(){
   var div1=document.getElementById("div1");
   var div2=document.getElementById("div2");
   var div3=document.getElementById("div3");
   if(div1.style.display=='block') div1.style.display='none';
   else div1.style.display='block';
   if(div2.style.display=='block') div2.style.display='none';
   else div2.style.display='block';
   if(div3.style.display=='block') div3.style.display='none';
   else div3.style.display='block';
   },
      GIS(){
          this.$router.push({path:"/Match"})
      },
      
    drawLine(){
       
    },
    computer2020(){
        this.$router.push({path:'/computer2020'})
    },
   match1(){
         this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
   }

  }
}
  
  
</script>

<style scoped>

#page{
	margin: 0;
	padding: 0;
	background-image: url("../Game/img/index_bg.png");
	height: 685px;
	width: 100%;
    float:right;
    margin-top:4px;
}
.button::after{
    border:none;
    
    
}
button{
background-color:transparent; 
}
#left{
float: left;
    width: 47%;
    height: 45%;
    /* padding: 5px; */
    margin: 6px;
    background-color: rgb(58 83 134 / 15%);
}
#right{
float: right;
    width: 47%;
    height: 45%;
    /* padding: 17px; */
    margin: 6px;
    background-color: rgb(58 83 134 / 15%);
}
#left1{
float: left;
    width: 47%;
    height: 45%;
    /* padding: 5px; */
    margin: 6px;
    background-color: rgb(58 83 134 / 15%);
}
.tab{
  background-color:#14263b
}
#right1{
    float: right;
    width: 47%;
    height: 45%;
    /* padding: 5px; */
    margin: 6px;
    background-color: rgb(58 83 134 / 15%);
}
p{
  margin-bottom: 0;
font-size: 15px;
min-height: 31px;
display: flex;
align-items: center;
justify-content: center;
height: 31px;
margin-top: 5px;
color: #fff;
white-space: normal;

}
.qiehuan{
  background-color: #ffffff2d;
  position: absolute;
  top: 7px;
  left: 445px;
  z-index: 1000;
  height: 30px;
 width: 30px;
  border-radius: 50%;
}
.left-top{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(14 148 234 / 5%);
}
.left-center{
     background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(14 148 234 / 5%);
}
.left-bottom{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(14 148 234 / 5%);
}
.center-bottom{
   
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(14 148 234 / 5%);
   height:59%;
  
}
.right-top{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(14 148 234 / 5%);
}
.right-center{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(14 148 234 / 5%);
    height:34%
}
.right-bottom{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(14 148 234 / 5%);
   height:34%
}
.center-top{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(14 148 234 / 5%);
    
}
.select{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(14 148 234 / 5%);
    width:99%;
    height:6%;
     position: relative;
    margin-top: 1px;
    margin-left:3px;
}
.num{
    width:100%;
    height:100%;
}
.el-input__inner {
    -webkit-appearance: none;
    background-color: rgba(255, 255, 255, 0);
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe654;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #e3e6ea;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%
}
ul{
	list-style-type: none;/*消除黑点*/
	
	background-attachment:fixed;
	
	margin:0px;
}
li{
	display: inline-block;
	margin: 0 10px;
    width:100%;
}

a{
	color: #fff;/*设置字体颜色*/
	text-decoration: none;/*消除下划线*/
	padding: 1px;
	border-radius: 5px;
    margin:0px auto;
}

/*选中则发生一些变化*/
.router-link-active{
	background: rgba(120,255,255,1);
	color: #444;
}
.button1{
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
    float: right;
    font-size: medium;
    margin-left: 20px;
}
.year{
    color: #fff;
    font-size: large;
    font-family: math;
    float: right;
    margin-top: 8px;
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
.center-bottom1{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(14 148 234 / 5%);
    width: 100%;
    height: 37%;
    margin-top:1px
}
>>>.el-tabs__item{
  margin-left:95px
}
>>>.el-button{
  border:#0c5e9400
}
</style>
<style>
.el-button{
    padding:12px 8px;
    margin-left:-2px;
}

.pie1{
    width: 50%;
    height: 100%;
    
}
.pie2{
    
    height: 100%;
    width: 50%;
}
.select-style{
    position:relative;
    display:inline-block;
}
.select{
    color:'#fff';
    margin:0px auto;
}

</style>

