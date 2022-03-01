<template>
  <div id="page5">
 
 


  </div>
</template>

<script>
import{AwardsNumberByYear} from "@/api/table"
const axios = require('axios')
import echarts from 'echarts'
  export default {
    name: 'page5',
    data(){
      return{
       Awards:{},
      }
    },
     mounted() {
      this.drawLine();
   
  },
    methods: {
         drawLine(){
           
    },
    getAwardsNumberByYear(){
      this.$http.post("/api/mainController/getAwardsNumberByYear").then((res)=>{
        console.log(res);
      })
  
  .catch(function (error) {
    console.log(error);
  });
    } 
  },
   created () {
    
    
  }
  }
</script>

<style scoped>
#page5{
		margin: 0;
	padding: 0;
	background-image: url("../view/img/index_bg.png");
	height: 673px;
	width: 100%;
}
</style>