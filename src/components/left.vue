<template>
  <nav >
  <ul>
  <li>


<router-link to="/data" exact class="el-icon-s-home" ></router-link></br>
<router-link to="/computer2020" exact class="el-icon-s-promotion"></router-link></br>
 <router-link to="/chzu2020" exact class="el-icon-office-building" ></router-link></br>


</li>
</ul>
</nav>
</template>

<script>
  export default {
    name: 'pageleft',

  }
</script>

<style scoped>
#title{
   margin-left: 60px;
   font-family: kaiti;
    font-size: large;
}
.main1{
	margin-right:1200px;
	margin-bottom:5px;
}
a{
	color: #fff;/*设置字体颜色*/
	text-decoration: none;/*消除下划线*/
	padding: 12px;
	border-radius: 5px;
}
ul
{
	margin:0;
	padding:0;
    list-style-type: none;/*消除黑点*/
	background-attachment:fixed;
	margin:0px;
}
nav{
    background: grey;
	float:left;
	background-color: rgb(0 34 71 / 100%);
    border-bottom-color: rgb(14 148 234 / 20%);
    border-bottom-style: outset;
    width:3%;
    height:691px;
    border: inset;
    border-color: #12304b;
}
li{
    display:grid;
    margin:10px auto;
    font-size:20px;
    height:100px
    
}
.router-link-active{
    box-shadow: 0px 0px 9px 0px rgb(105 243 255 / 50%) inset;
	color: red;
}
</style>
