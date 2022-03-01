<template>
 <div id="page">
  
  <div>
  <!--添加用户的对话框-->
    <el-dialog
      title="注册"
      :visible.sync="addDialogVisible"
      
      @close="addDialogClosed">
      <!--内容主体区域-->
      <el-form :model="userForm" label-width="70px">
        <el-form-item label="登录名" prop="loginName">
          <el-input v-model="userForm.loginName"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="userForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="userForm.password" show-password></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio v-model="userForm.sex" label="男">男</el-radio>
          <el-radio v-model="userForm.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userForm.email"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="userForm.address"></el-input>
        </el-form-item>
      </el-form>
      <!--底部按钮区域-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
<div class="box">
		<div class="login-box">
			<div class="login-title text-center">
				<h1>
					<small>安徽省本科院校AB类赛事智能分析系统</small>
				</h1>
			</div>
			<div class="login-content ">
				<div class="form">
					<form id="modifyPassword" class="form-horizontal" action="" method="post">							
						<!-- 用户名输入 -->
						<div class="form-group">
							<div class="col-xs-10 col-xs-offset-1">
								<div class="input-group">
									<span class="input-group-addon"><span
										class="el-icon-user-solid"></span></span> 
								<input type="text" v-model="loginForm.loginName"  auto-complete="off" class="form-control" placeholder="Admin" style="height:40px">
								</div>
							</div>
						</div>
						
						<!-- 密码输入 -->
						<div class="form-group">
							<div class="col-xs-10 col-xs-offset-1">
								<div class="input-group">
									<span class="input-group-addon"><span
										class="el-icon-s-goods"></span></span> 
										<input type="password" v-model="loginForm.password"  auto-complete="off" class="form-control" placeholder="123"style="height:40px">
								</div>
							</div>
						</div>
						
						<!-- 用户类型选择 -->
					
								
						<!-- 登录重置按钮 -->
						<div class="form-group form-actions">
							<div class="col-xs-12 text-center">
								<button type="button" id="login" class="btn btn-sm btn-success"@click="sign">
									<span class="el-icon-s-promotion"></span>登录
								</button>
                <button type="button" id="sign" class="btn btn-sm btn-success"@click="addDialogVisible = true">
									<span class="el-icon-postcard"></span>注册
								</button>				
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
</template>


<script>
import { userLogin,userList, userAdd, userUpdate, userDelete, userBatchDelete} from "@/api/user";
 export default {
    name: 'index',
data(){
    return{
		userList: [], // 用户列表
      total: 0, // 用户总数
      // 获取用户列表的参数对象
      queryInfo: {
        keyword: "", // 查询参数
        pageNo: 1, // 当前页码
        pageSize: 5, // 每页显示条数
      },
	  userForm: {
        //用户
        loginName: "",
        userName: "",
        password: "",
        sex: "",
        email: "",
        address: "",
      },
      
		 addDialogVisible: false,// 控制注册用户信息对话框是否显示
     childvalue:true,
	loginForm: {
          loginName: '',
          password: ''
        },
        responseResult: []
    };
  },
  created() {
	  this.getUserList();
  },
  methods: {
	 getUserList() {
      userList(this.queryInfo)
        .then((res) => {
          if (res.data.code === 200) {
            //用户列表
            this.userList = res.data.data.records;
            this.total = res.data.data.total;
          } else {
            this.userList = res.data.data.records;
            this.total = res.data.data.total;
          }
        })
        
    },
	// 监听 pageSize 改变的事件
    handleSizeChange(newSize) {
      // console.log(newSize)
      this.queryInfo.pageSize = newSize;
      // 重新发起请求用户列表
      this.getUserList();
    },
    // 监听 当前页码值 改变的事件
    handleCurrentChange(newPage) {
      // console.log(newPage)
      this.queryInfo.pageNo = newPage;
      // 重新发起请求用户列表
      this.getUserList();
    },
    //添加用户
    addUser() {
      userAdd(this.userForm)
        .then((res) => {
          if (res.data.code === 200) {
            this.addDialogVisible = false;
            this.getUserList();
            this.$message({
              message: "添加用户成功",
              type: "success",
            });
          } else {
             this.addDialogVisible = false;
            this.getUserList();
            this.$message({
              message: "添加用户成功",
              type: "success",
            });
			
          }
        })
        .catch((err) => {
          this.$message.error("添加用户异常");
          console.log(err);
        });
    },

    // 监听 添加用户对话框的关闭事件
    addDialogClosed() {
      // 表单内容重置为空
      this.$refs.addFormRef.resetFields();
    },

    // 监听 修改用户状态
    showEditDialog(userinfo) {
      this.editDialogVisible = true;
      console.log(userinfo);
      this.editForm = userinfo;
    },
    
	  sign(){
		  //   var _this = this;
      // userLogin({
      //   loginName: this.loginForm.loginName,
      //   password: this.loginForm.password,
      // }).then((resp) => {
      //   let code=resp.data.code;
      //   if(code===200){
      //     let data=resp.data.data;
      //     let token=data.token;
      //     let user=data.user;
      //     //存储token
      //     _this.$store.commit('SET_TOKENN', token);
      //     //存储user，优雅一点的做法是token和user分开获取
      //     _this.$store.commit('SET_USER', user);
      //     console.log(_this.$store.state.token);
      //     var path = this.$route.query.redirect
      //     this.$router.replace({path: path === '/data' || path === undefined ? '/data' : path})
		  // this.$emit('childvalue',this.childvalue)
      //   }
      // });
      this.$router.push({path:'/data'})
		  this.$emit('childvalue',this.childvalue)
	  }
  },
  };
  
  
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.el-card {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1) !important;
  height: 60pt;
}
#page{
  background-color:#26467d;
  margin: 0;
	padding: 0;
	height: 755px;
	width: 100%;
  
}
ul li{font-size: 30px;color:#2ec0f6;}
	.tyg-div{z-index:-1000;float:left;position:absolute;left:5%;top:20%;}
	.tyg-p{
		font-size: 14px;
	    font-family: 'microsoft yahei';
	    position: absolute;
	    top: 135px;
	    left: 60px;
	}
	.tyg-div-denglv{
		z-index:1000;float:right;position:absolute;right:3%;top:10%;
	}
	.tyg-div-form{
		background-color:#15224e;
		width:300px;
		height:auto;
		margin:120px auto 0 auto;
		color:#2ec0f6;
    margin-right: 530px;
	}
	.tyg-div-form form {padding:10px;}
	.tyg-div-form form input[type="text"]{
		width: 270px;
	    height: 30px;
	    margin: 25px 10px 0px 0px;
	}
	.tyg-div-form form button {
	    cursor: pointer;
	    width: 270px;
	    height: 44px;
	    margin-top: 25px;
	    padding: 0;
	    background: #2ec0f6;
	    -moz-border-radius: 6px;
	    -webkit-border-radius: 6px;
	    border-radius: 6px;
	    border: 1px solid #2ec0f6;
	    -moz-box-shadow:
	        0 15px 30px 0 rgba(255,255,255,.25) inset,
	        0 2px 7px 0 rgba(0,0,0,.2);
	    -webkit-box-shadow:
	        0 15px 30px 0 rgba(255,255,255,.25) inset,
	        0 2px 7px 0 rgba(0,0,0,.2);
	    box-shadow:
	        0 15px 30px 0 rgba(255,255,255,.25) inset,
	        0 2px 7px 0 rgba(0,0,0,.2);
	    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
	    font-size: 14px;
	    font-weight: 700;
	    color: #fff;
	    text-shadow: 0 1px 2px rgba(0,0,0,.1);
	    -o-transition: all .2s;
	    -moz-transition: all .2s;
	    -webkit-transition: all .2s;
	    -ms-transition: all .2s;
}
.radio-group{
  color: #483434;
}

</style>