<template >

  <div id="page">
 
   <router-view></router-view>
    <div class="container-flex" tabindex="0" hidefocus="true">
   <pageleft style="float:left"></pageleft>
       <div class="box-left">
            <div class="left-top"style="">
                <div id="left">
                <p style="color:#fff;">参赛人数</p>
                <div class="one">{{nummer}}<div style="color:#fff;font-size:13px"> 次</div></div>
                </div>
                <div id="right">
               <p style="color:#fff;font-size:15px">获奖人数</p>
               <div class="two">{{nummer1}}<div style="color:#fff;font-size:13px"> 次</div></div>
                </div>
                <div id="left1">
                <p style="color:#fff;font-size:15px">覆盖高校</p>
                <div class="three">{{nummer2}}<div style="color:#fff;font-size:13px"> 所</div></div>
                </div>
                <div id="right1">
               <p style="color:#fff;font-size:15px">赛事种类</p>
                <div class="four">{{nummer3}}<div style="color:#fff;font-size:13px"> 种</div></div>
                </div>
            </div>
            <div class="left-center">
            
             <iframe src="./static/AllData/2020参赛榜.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
            </div>
            <div class="left-bottom">
            
              <iframe src="./static/AllData/2020获奖排行榜.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
            </div>
        </div>
        <div class="box-center">
              <div class="time"style="height:6%">
              <div class="rootBar">
              <div class="childrenBar">
            
     <el-row>
  <el-button type="danger"style="background-color:#f78989">2020年</el-button>
  <el-button type="primary"@click="data2019()">2019年</el-button>
  <el-button type="primary">2018年</el-button>
  <el-button type="primary">2017年</el-button>
  <el-button type="primary">2016年</el-button>
  <el-button type="primary">2015年</el-button>
  <el-button type="primary">2014年</el-button>
  <el-button type="primary">2013年</el-button>
  <el-button type="primary">2012年</el-button>
  <el-button type="primary">2011年</el-button>
  <el-button type="primary">2010年</el-button>
  
</el-row>
              
              </div>
              </div>

              </div>
            <div class="center-bottom"style="overflow:auto;">    
                   
  
             <iframe src="./static/anhui.html" style="width:100%;height:100%;overflow:auto;"></iframe>
            </div>
            <div class="center-bottom1">
           
           <iframe src="./static/AllData/2020获奖数获奖率.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
             </div>
    
    </div>
        <div class="box-right">
        
           
            <div class="right-top">
           <iframe src="./static/AllData/moonth.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
            </div>
            
            
     <div class="right-bottom">
     <div class="heading"style="text-align:center;height:10%">2020-安徽省-AB类赛事-参赛热度高校排行榜</div>
            <div class="table"style="overflow:auto;text-align:center;">
            
            <div >
            <table class="tab"style="color:#fff;margin:auto;width:95%;border-collapse:separate; border-spacing:0px 10px;">
               <thead>
                    <tr style="font-size:10px;text-align: center;">
                        <th>排名</th>
                        <th style="font-size:10px;text-align: center;">高校名称</th>
                        <th>队伍数</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for ="(school,index) in schools">
                      <td>{{index+1}}</td>
                      <td>{{school.高校名称}}</td>
                      <td>{{school.队伍数}}</td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
        </div>
             </div>
            </div>
       
    </div>
       </div>
    
</template>

<script>
 //import '../static/js/anhui.js'
 import pageleft from '../components/left.vue'
 import axios from 'axios'
  export default {
  components:{
    pageleft
  },
  name: 'page',
  data () {
    return {
      nummer:'37896', 
      nummer1:'3567',
      nummer2:'55',
      nummer3:'59',
      
      msg: 'Welcome to Your Vue.js App',
      school: {'高校名称': '', '队伍数': '',},
      schools: [
        {
      
      "高校名称": "合肥工业大学",
      "队伍数": "379"
    },
    {
      
      "高校名称": "安徽财经大学",
      "队伍数": "344"
    },
    {
      
      "高校名称": "阜阳师范大学",
      "队伍数": "286"
    },
    {
     
      "高校名称": "铜陵学院",
      "队伍数": "256"
    },
    {
     
      "高校名称": "安徽信息工程学院",
      "队伍数": "225"
    },
    {
      
      "高校名称": "滁州学院",
      "队伍数": "205"
    },
    {
     
      "高校名称": "池州学院",
      "队伍数": "188"
    },
    {
      
      "高校名称": "安徽农业大学",
      "队伍数": "180"
    },
    {
     
      "高校名称": "安徽师范大学",
      "队伍数": "168"
    },
    {
      
      "高校名称": "安徽工程大学",
      "队伍数": "160"
    },
    {
      
      "高校名称": "安庆师范大学",
      "队伍数": "154"
    },
    {
      
      "高校名称": "合肥学院",
      "队伍数": "144"
    },
    {
      
      "高校名称": "安徽理工大学",
      "队伍数": "144"
    },
    {
     
      "高校名称": "合肥师范学院",
      "队伍数": "143"
    },
    {
      
      "高校名称": "淮南师范学院",
      "队伍数": "139"
    },
    {
      
      "高校名称": "安徽大学",
      "队伍数": "125"
    },
    {
   
      "高校名称": "安徽工业大学",
      "队伍数": "123"
    },
    {
     
      "高校名称": "皖西学院",
      "队伍数": "121"
    },
    {
      "名次": "19",
      "高校名称": "巢湖学院",
      "队伍数": "106"
    },
    {
      "名次": "20",
      "高校名称": "安徽新华学院",
      "队伍数": "103"
    },
    {
      "名次": "21",
      "高校名称": "安徽建筑大学",
      "队伍数": "99"
    },
    {
      "名次": "22",
      "高校名称": "淮北师范大学",
      "队伍数": "94"
    },
    {
      "名次": "23",
      "高校名称": "安徽文达信息工程学院",
      "队伍数": "82"
    },
    {
      "名次": "24",
      "高校名称": "安徽师范大学皖江学院",
      "队伍数": "81"
    },
    {
      "名次": "25",
      "高校名称": "亳州学院",
      "队伍数": "74"
    },
    {
      "名次": "26",
      "高校名称": "宿州学院",
      "队伍数": "74"
    },
    {
      "名次": "27",
      "高校名称": "黄山学院",
      "队伍数": "72"
    },
    {
      "名次": "28",
      "高校名称": "安徽大学江淮学院",
      "队伍数": "69"
    },
    {
      "名次": "29",
      "高校名称": "安徽三联学院",
      "队伍数": "62"
    },
    {
      "名次": "30",
      "高校名称": "安徽医科大学",
      "队伍数": "50"
    },
    {
      "名次": "31",
      "高校名称": "安徽农业大学经济技术学院",
      "队伍数": "42"
    },
    {
      "名次": "32",
      "高校名称": "蚌埠学院",
      "队伍数": "38"
    },
    {
      "名次": "33",
      "高校名称": "合肥工业大学（宣城校区）",
      "队伍数": "37"
    },
    {
      "名次": "34",
      "高校名称": "陆军炮兵防空兵学院",
      "队伍数": "35"
    },
    {
      "名次": "35",
      "高校名称": "中国科学技术大学",
      "队伍数": "31"
    },
    {
      "名次": "36",
      "高校名称": "皖南医学院",
      "队伍数": "28"
    },
    {
      "名次": "37",
      "高校名称": "安徽科技学院",
      "队伍数": "25"
    },
    {
      "名次": "38",
      "高校名称": "马鞍山学院",
      "队伍数": "22"
    },
    {
      "名次": "39",
      "高校名称": "蚌埠医学院",
      "队伍数": "22"
    },
    {
      "名次": "40",
      "高校名称": "安徽中医药大学",
      "队伍数": "21"
    },
    {
      "名次": "41",
      "高校名称": "安徽艺术学院",
      "队伍数": "21"
    },
    {
      "名次": "42",
      "高校名称": "淮南联合大学",
      "队伍数": "19"
    },
    {
      "名次": "43",
      "高校名称": "阜阳师范大学信息工程学院",
      "队伍数": "11"
    },
    {
      "名次": "44",
      "高校名称": "安徽大学艺术与传媒学院",
      "队伍数": "11"
    },

    {
      "名次": "46",
      "高校名称": "皖江工学院",
      "队伍数": "10"
    },
    {
      "名次": "47",
      "高校名称": "安徽财经大学商学院",
      "队伍数": "9"
    },
    {
      "名次": "48",
      "高校名称": "中国人民解放军国防科技大学电子对抗学院",
      "队伍数": "8"
    },
   
    {
      "名次": "50",
      "高校名称": "安徽外国语学院",
      "队伍数": "6"
    },
    {
      "名次": "51",
      "高校名称": "阜阳师范学院",
      "队伍数": "6"
    },
    {
      "名次": "52",
      "高校名称": "蚌埠工商学院",
      "队伍数": "5"
    },
   
    {
      "名次": "55",
      "高校名称": "安徽师范大学皖江学院 ",
      "队伍数": "2"
    },
    {
      "名次": "56",
      "高校名称": "铜陵学院 ",
      "队伍数": "2"
    },
    {
      "名次": "57",
      "高校名称": "安徽建筑工业学院城市建设学院",
      "队伍数": "1"
    },
   
   
   
    {
      "名次": "62",
      "高校名称": "安徽医科大学临床医学院",
      "队伍数": "1"
    },
    {
      "名次": "63",
      "高校名称": "海军士官学校",
      "队伍数": "1"
    },
   
    
 
      ]
  }
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
      },
     data2019(){
        this.$router.push({
          path:'/data2019'
          })
    },
    },
   insert: function () {
      this.users.push(this.user)
    },
    remove: function (index) {
      this.users.splice(index, 1)
    },
    
  }
  
</script>

<style scoped>

#page{
	
	background-image: url("../components/img/china.2961f108.png");
	height: 691px;
	width: 100%;
  float:right;
  margin-top:4px;
  
},

.button::after{
    border:none;
    
    
},
button{
background-color:transparent; 
}
.time{
     background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(14 148 234 / 5%);
  height:6%

}
.heading{
 color:#fff;
 font-size:15px;

}
.table{
  width:100%;
  height:90%;
  
  color:#fff

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
  background-color:rgb(0 34 71 / 70%)
}
#right1{
    float: right;
    width: 47%;
    height: 45%;
    /* padding: 5px; */
    margin: 6px;
    background-color: rgb(58 83 134 / 15%);
}

.left-top{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(58 83 134 / 15%);
}
.left-center{
   background-color: rgb(58 83 134 / 15%);
}
.left-bottom{
    background:  
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(58 83 134 / 15%);
}
.center-bottom{
    margin-top:1px;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
  background-color: rgb(58 83 134 / 15%);
  
}
.right-top{
    background:linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
    background-color: rgb(58 83 134 / 15%);
}
.right-center{
    
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(58 83 134 / 15%);
    height:29%
}
.right-bottom{
    background: 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(58 83 134 / 15%);
    height:68%
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
.rootBar{
width: 100%;
height: 100%;

overflow-y: hidden;
overflow-x: auto;
white-space: nowrap;
}
.childrenBar{
width: 650px;
height: 100%;
position: relative;
display: inline-block;
color:#66b1ff;

}
.one{
    color:orange;
    font-size:25px;
    margin-bottom: 0;
    min-height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 31px;
    margin-top: 5px;
    white-space: normal;
}
.two{
 color:orange;
    font-size:25px;
    margin-bottom: 0;
    min-height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 31px;
    margin-top: 5px;
    white-space: normal;
}
.three{
    color:orange;
    font-size:25px;
    margin-bottom: 0;
    min-height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 31px;
    margin-top: 5px;
    white-space: normal;
}
.four{
    color:orange;
    font-size:25px;
    margin-bottom: 0;
    min-height: 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 31px;
    margin-top: 5px;
    white-space: normal;
}
.center-bottom1{
    background:  
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(58 83 134 / 15%);
    width: 100%;
    height: 31%;
    margin-top:1px
}
</style>
<style>
.el-button{
    padding:12px 8px;
    margin-left:-20px;
}
.center-bottom1{
    background:  
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(14 148 234 / 5%);
    width: 100%;
    height: 27%;
    margin-top:1px
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
