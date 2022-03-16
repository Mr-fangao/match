<template>
  <div id="app">
    <pageheader v-show="showNav"></pageheader>
    
    <router-view  v-on:childvalue="childvalbyvalue"></router-view>
  </div>


</template>

<script>

import Header from './components/main/Header'
import Page from './components/Page'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import index from './components/login/index'
import left from './components/left'
import '../static/style/contents.css'
import'../static/style/login.css'


//import '../static/js/anhui.js'
export default {
  name: 'App',
  provide() {
    return {
     
    };
  },
  data(){
    return{
   

    };
  },
  mounted() {
   
  },
  methods: {
    childvalbyvalue(data){
      this.showNav=data
    }
  },
  components:{
    "pageheader":Header,
    "page":Page,
    "page1":Page1,
    "page2":Page2,
    "page3":Page3,
    "index":index,
    "pageleft":left,
    
  },
  
}
</script>

<style>
@import'../static/style/bootstrap.css';
#app{
background-color: #022f60;}
</style>
