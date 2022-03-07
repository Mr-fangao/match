<template>
  <nav >
  	<ul>
  		<li>
  			 
			  <a id="title"><span class="el-dropdown-link">
			<img :src="logo" class="logo" />
			</span>&nbsp;安徽省高校AB类竞赛智能分析系统</a>
			<a id="menu"> <router-link to="/data" exact class="el-icon-s-data">数据面板</router-link>
  			<router-link to="/InfoSerach"@click="sign()" exact class="el-icon-search" >统计查询</router-link>
			  <router-link to="/Map" exact class="el-icon-reading">专题地图</router-link>
			<router-link to="/ToWord" exact class="el-icon-data-analysis">时空分析</router-link>
  			<router-link to="/Photo" exact class="el-icon-picture-outline-round">选题分析</router-link></a>
			  <el-dropdown trigger="click" >
        <span id="icon"class="el-icon-s-custom"style="margin-left:-5px;color:#fff"></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
			 
			 
			  
  		</li>
  	</ul>
  </nav>
</template>

<script>
  export default {
    name: 'pageheader',
	data(){
		return{
			logo:require("../theme/logo/图层 1.png")
		}
	},
	methods: {
		sign(){

		},
		logout(){
			this.$router.push({path:'/'})
			this.$emit('childvalue',this.childvalue)
		}
	},

  }
</script>

<style scoped>
@font-face {
	 src:url('../theme/fonts/锐字潮牌真言简.ttf');
     font-family: '锐字潮牌真言简';
     font-weight: normal;  
     font-style: normal;
	
}
#title{
    margin-left:0px;
    font-family: '锐字潮牌真言简';
    font-size: 33px;
	letter-spacing:5px;
}
#menu{
	
    margin-left:35px;
    font-size: 17px;
	letter-spacing:0px;
	width: 100%;
}
.main1{
	margin-right:1200px;
	margin-bottom:5px;
	 
}
ul{
	list-style-type: none;/*消除黑点*/
	
	background-attachment:fixed;
	
	margin:0px;
	
}
li{
	display: inline-block;
	
	font-weight: 300;
	width: 100%;
}

a{
	color: #fff;/*设置字体颜色*/
	text-decoration: none;/*消除下划线*/
	padding: 12px 25px;
	border-radius: 5px;
	font-weight: 1000;
	
}
span{
	
}
nav{
	background: grey;
	padding:5px 0;
	background-color: rgb(0 34 71 / 100%);
    border-bottom-color: rgb(14 148 234 / 20%);
    border-bottom-style: outset;
	/* background-image: url("/static/img/4.png"); */
      background-size: 100% 100%;
	
}
/*选中则发生一些变化*/
.router-link-active{
	border-style:solid;
	border-color:#d9d9d900 #d9d9d900 #f56c6c;
},
.router{

}
#icon{
	font-size:25px
},
#user{
}
 .logo {
    width: 50px;
    height: 50px;
    
  }
  #icon{
	  
  }
</style>
