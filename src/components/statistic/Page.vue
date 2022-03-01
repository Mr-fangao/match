<template >
  <div id="page">
  
    <div class="container-flex" tabindex="0" hidefocus="true">
    <div calss="tools" style="width: 4%;">
  
  </div>
       <div class="box-left">
            <div class="left-top"style="">
                <div id="left" style="float:left ; width:50%; height:100%;">
                 <iframe src="./static/AllData/pie1.html"frameborder="0" style="width:100%;height:100%;"></iframe>
                </div>
                <div id="right" style="float:left ; width:50%; height:100%;">
                <iframe src="./static/AllData/pie.html"frameborder="0" style="width:100%;height:100%;"></iframe>
                </div>
            </div>
            <div class="left-center">
            <iframe src="./static/AllData/line-simple.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
            </div>
            <div class="left-bottom" >
               <iframe src="./static/AllData/time.html"frameborder="0" style="width:100%;height:100%;"></iframe>   
            </div>
        </div>
        <div class="box-center">
              
            <div class="center-bottom">    
                   <el-select v-model="value" clearable placeholder="请选择年份"style="float:left;"@change="turndown(parseInt(value))">
        
        <el-option
         v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      
    </el-option>
  </el-select>  
   <div class="button1"@click="Match()"><button>赛事数据</button></div><div class="button1" style=""@click="School()"><button>高校数据</button></div>
             <iframe src="./static/anhui.html"frameborder="0" style="width:100%;height:100%;"></iframe>
            </div>
            <div class="center-bottom1">
             <iframe src="./static/AllData/price.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
             </div>
    
    </div>
        <div class="box-right">
        
           
            <div class="right-top">
           <iframe src="./static/AllData/word2.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>
            </div>
            
            <div class="right-center">
             <iframe src="./static/AllData/Schoolrate.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>      
            </div>
     <div class="right-bottom">
                <iframe src="./static/AllData/School.html"frameborder="0" scrolling="no"style="width:100%;height:100%;"></iframe>

            </div>
        </div>
    </div>
       </div>
    
</template>

<script>
 //import '../static/js/anhui.js'
 
  export default {
  
  name: 'page',
  data () {
    return {
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
  },
  methods: {
    drawLine(){
       
    },
    School(){
        this.$router.push({path:'/chzu'})
        
    },
    Match(){
        this.$router.push({path:'/Computer'})
    },
    turndown:function(sortnum){
      switch(sortnum){
        case 1:this.$router.push({ path:"/All2021"});
        break;
        case 2:this.$router.push({path:"/All2020"});
        break;
        case 3:this.$router.push({path:"/All2019"});
        break;
        case 4:this.$router.push({path:"/All2018"});
        break;
        case 5:this.$router.push({path:"/All2017"});
        break;
        } 
  }

  }
}
  
  
</script>

<style scoped>

#page{
	margin: 0;
	padding: 0;
/*  background-image: url("../statistic/img/index_bg.png"); */
	height: 685px;
	width: 100%;
},

.button::after{
    border:none;
  
    
},
button{
background-color:transparent; 
}
.left-top{
    background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(14 148 234 / 5%);
}
.left-center{
    
   background-color: rgb(14 148 234 / 5%);
}
.left-bottom{
    background:  
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
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
   background-color: rgb(14 148 234 / 5%);
  
}
.right-top{
    background:linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat, 
                linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
    background-color: rgb(14 148 234 / 5%);
}
.right-center{
    
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(14 148 234 / 5%);
    height:29%
}
.right-bottom{
    background: 
                linear-gradient(to left, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to bottom, #0e94eb, #0e94eb) left bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat,
                linear-gradient(to left, #0e94eb, #0e94eb) right bottom no-repeat;
    background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px; 
    background-color: rgb(14 148 234 / 5%);
    height:35%
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
    height: 36%;
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
