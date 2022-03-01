<template >
  <div id="page">
    <div class="container-flex" tabindex="0" hidefocus="true">
       <div class="box-left">
            <div class="left-top">
                <div class="current-num">

                </div>
            </div>
            <div class="left-center">
                <div class="title-box">

                </div>
              
                <div class="chart-box pie-chart">
                
                    <div id="pie_fanzui" style="width:100%;">1</div>

                </div>
            </div>
            <div class="left-bottom" >
                <div class="title-box">
                    <h6>1</h6>

                </div>
                <div class="chart-box">
                </div>
            </div>
        </div>
        <div class="box-center">
        <div class="button"> <button @click="main" type="primary"style="box-shadow: rgb(82 243 255 / 30%) 0px 0px 12px 0px;
   
    border-style: outset;
    border-color: #0c5e94;
    border-color: #0c5e94;
    color: hsl(205deg 80% 79%);">返回主界面</button>
            <button @click="School" type="primary"style="box-shadow: rgb(82 243 255 / 30%) 0px 0px 12px 0px;
   
    border-style: outset;
    border-color: #0c5e94;
    border-color: #0c5e94;
    color: hsl(205deg 80% 79%);">高校数据</button>
            <button @click="Game" type="primary"style="box-shadow: rgb(82 243 255 / 30%) 0px 0px 12px 0px;
   
    border-style: outset;
    border-color: #0c5e94;
    border-color: #0c5e94;
    color: hsl(205deg 80% 79%);">赛事数据</button></div>
            <div class="center-top"style="color:#FFFFFF">
            
滁州学院4C竞赛信息
            </div>
           
            <div class="center-bottom">
                <div id="main" class="chart-box"style="border-style:inset;border-color:black">
   <iframe src="./static/anhui.html"frameborder="0" style="width:100%;height:100%;"></iframe>
                
   
                </div>

            </div>

        </div>
        <div class="box-right">
            <div class="right-top">
                <div class="title-box">
                    <h6 id="barTitle">XX</h6>

                </div>
                <p class="unit"></p>
                <div class="chart-box">
                    <div id="pie_age" style="width:100%;height:100%;"></div>
                </div>

            </div>
            <div class="right-center">

                <div class="title-box">
                    <h6>XXXXX</h6>
                </div>
                <div class="chart-box pie-chart">

                    <div id="qufenbu_data" style="width:90%;height:120px;margin-left:10px;"></div>

                </div>
            </div>


            <div class="right-bottom">
                <div class="title-box">
                    <p id="switchBtn"><span class="active" data-dataType="income">XXXXXXX</span></p>

                </div>
                <div id="line_time" style="width:90%;height:160px;margin-left:10px;"></div>

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
      showNav:true
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
       
    },
    main(){
        this.$router.push({path:'/data'})
    },
    Game(){
        this.$router.push({path:'/Game'})
    },
  }
}
  
  
</script>

<style scoped>

#page{
	margin: 0;
	padding: 0;
	background-image: url("../view/img/index_bg.png");
	height: 685px;
	width: 100%;
},
.button::after{
    border:none;
    
    
},
button{
background-color:transparent;
    
}




</style>