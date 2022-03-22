<template >

  <div id="page">
   
   <router-view></router-view>
    <div class="container-flex" tabindex="0" hidefocus="true">
   <left></left>
       <div class="box-left">
            <div class="left-top"style="">
           
            <div id="left">
            <div class="people1">
            <div class="text1"style="float:left">报名人数：</div>
            <div class="data">{{people}}人</div>
            </div>
             <div class="people2">
             <div class="text" style="float:left">获奖人数：</div>
             <div class="data">{{people1}}人</div>
             
             </div>
             </div>
            <div id="right">
            <div class="percent">
            <el-progress :text-inside="true" :stroke-width="22" :percentage="12"></el-progress></div>
              <div class="percent1">
              <el-progress :text-inside="true" :stroke-width="22" :percentage="17.5"></el-progress>
             </div>
             </div>
             <div id="left1"> 
             <div style="text-align:center;font-size:15px">参赛学院：15个</div>
             <div class="cellege">
             <div  class="alt"style="text-align:center">地信学院
             </div>
             <div  class="alt"style="text-align:center">信息院
             </div>
             <div  class="alt"style="text-align:center">化工院
             </div>


             </div>
             <div class="cellege1">
             <div class="alt"style="text-align:center">文学院
             </div>
             <div  class="alt"style="text-align:center">美术学院
             </div>
             <div  class="alt"style="text-align:center">音乐学院
             </div>
             </div>
              </div>
             <div id="right1">  
              <div style="text-align:center;font-size:15px">参赛种类</div>
             <div class="cellege">
             <div  class="alt1"style="text-align:center">A类
             </div>
             </div>
             <div class="cellege1">
             <div class="alt1"style="text-align:center">B类
            </div>
            </div>
             </div>
            </div>
            <div class="left-center">
            <div style="height:10%;margin-left:30%;color: #fff;fontFamily: Microsoft YaHei;fontSize: 15;fontWeight: 150">2020-滁州学院-AB类赛事-赛事类型</div>
           <div id="myChart" :style="{ width: '100%', height: '100%',top:'10%',position:'absolute' }"></div>
            </div>
            <div class="left-bottom" >
             <iframe src="./static/chzu/nianfen.html"frameborder="0"  scrolling="no"style="width:100%;height:100%;"></iframe>
            </div>
        </div>
        <div class="box-center">
                 <div class="time"style="height:6%">
              <div class="rootBar">
              <div class="childrenBar">
             
    <el-row>
  <el-button type="danger" style="background-color: #f78989">2020年</el-button>
                <el-button type="primary" @click="data2019()">2019年</el-button>
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
              <div class="introduce">
              <div class="stitle">
              <a href="https://baike.baidu.com/item/%E6%BB%81%E5%B7%9E%E5%AD%A6%E9%99%A2/4466920?fr=aladdin">滁州学院</a>
              </div>
              <div class="sintroduce">
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;{{introduce}}
              </div>
              </div>
              <div class="map">
               <iframe src="./static/chzu/map.html"frameborder="0"  scrolling="no"style="width:100%;height:100%;"></iframe>
              </div>
  
            
            </div>
            <div class="center-bottom1"style="overflow:auto">
           <iframe src="./static/chzu/赛事热度排行榜2020.html"frameborder="0"  scrolling="no"style="width:100%;height:100%;"></iframe>
          
             </div>
    
    </div>
        <div class="box-right">
        <div class="right-top">
    <div id="div1" style="display:block; color:#fff">
    <el-tabs :style="selfstyle" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="985高校" name="first"style="padding-left: 12px;">
     <el-button type="danger"@click="Math1" >中国科学技术大学</el-button>
    </el-tab-pane>
    <el-tab-pane label="211高校" name="second">
    <div style="width:100%;height:100%">
    <el-button type="danger"@click="Math1" style="margin-left:100px">合肥工业大学</el-button>&nbsp;
    <el-button type="danger"@click="Math1"style="margin-left:100px">安徽大学</el-button>
    </div>
    </el-tab-pane>
    <el-tab-pane label="普通本科" name="third"style="height:100%;overflow:auto">
    <div id="un"style="">
    <div id="left3"style="float:left;width:50%;text-align:center;">
    <el-button type="danger"@click="Math1" style="background-color:#f56c6c">滁州学院</el-button></br>
    <el-button type="danger"@click="Math1" >安徽理工大学</el-button></br>
    <el-button type="danger"@click="Math1" >安徽农业大学</el-button></br>
    <el-button type="danger"@click="Math1" >安徽医科大学</el-button></br>
    <el-button type="danger"@click="Math1" >阜阳师范大学</el-button></br>
    <el-button type="danger"@click="Math1" >安徽工业大学</el-button></br>
    <el-button type="danger"@click="Math1" >中国科学技术大学</el-button></br>
    <el-button type="danger"@click="Math1" >中国科学技术大学</el-button>
    </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
    <el-button type="danger"@click="Math1" >安徽师范大学</el-button></br>
    <el-button type="danger"@click="Math1" >安徽科技学院</el-button></br>
    <el-button type="danger"@click="Math1" >皖西学院</el-button></br>
    <el-button type="danger"@click="Math1" >淮北师范大学</el-button></br>
    <el-button type="danger"@click="Math1" >皖南医学院</el-button></br>
    <el-button type="danger"@click="Math1" >安徽文达信息科技学院</el-button></br>
    <el-button type="danger"@click="Math1" >中国科学技术大学</el-button></br>
    <el-button type="danger"@click="Math1" >中国科学技术大学</el-button>
    </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="普通专科" name="four"></el-tab-pane>
 
  </el-tabs>
       
    </div>
    <div id="div2" style="display:none;">
    <el-tabs :style="selfstyle" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="理工类" name="first"style="padding-left: 12px;">
    <div id="left3"style="float:left;width:50%;text-align:center;">
    <el-button type="danger"@click="Math1" >安徽理工大学</el-button></br>
    <el-button type="danger"@click="Math1" >安徽工业大学</el-button></br>
    <el-button type="danger"@click="Math1" >中国科学技术大学</el-button></br>
    <el-button type="danger"@click="Math1" >皖江工学院</el-button></br>
    <el-button type="danger"@click="Math1" >马鞍山学院</el-button></br>
    <el-button type="danger"@click="Math1" >池州学院</el-button></br>
    <el-button type="danger"@click="Math1" >蚌埠学院</el-button></br>
    <el-button type="danger"@click="Math1" >安徽文达信息科技学院</el-button></br>

    </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
    <el-button type="danger"@click="Math1" >安徽科技学院</el-button></br>
    <el-button type="danger"@click="Math1" >皖西学院</el-button></br>
    <el-button type="danger"@click="Math1" >宿州学院</el-button></br>
    <el-button type="danger"@click="Math1" >中国科学技术大学</el-button></br>
    <el-button type="danger"@click="Math1" >合肥学院</el-button></br>
    <el-button type="danger"@click="Math1" >合肥工业大学</el-button></br>
    <el-button type="danger"@click="Math1" >阜阳师范大学信息工程学院</el-button></br>
    <el-button type="danger"@click="Math1" >安徽信息工程学院</el-button></br>
    </div>
    </el-tab-pane>
    </el-tab-pane>
    <el-tab-pane label="医学类" name="third">
    <div id="un"style="">
    <div id="left3"style="float:left;width:50%;text-align:center;">
    <el-button type="danger"@click="Math1" >安徽医科大学</el-button></br>
    <el-button type="danger"@click="Math1" >安徽中医药大学</el-button></br>
    <el-button type="danger"@click="Math1" >安徽医科大学临床医学院</el-button></br>
    </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
      <el-button type="danger"@click="Math1" >皖南医学院</el-button></br>
    <el-button type="danger"@click="Math1" >蚌埠医学院</el-button></br>
    <el-button type="danger"@click="Math1" >安徽医学高等专科学校</el-button></br>
    </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="综合类" name="two">
        <div id="left3"style="float:left;width:50%;text-align:center;">
    <el-button type="danger"@click="Math1" >滁州学院</el-button></br>
    <el-button type="danger"@click="Math1" >亳州学院</el-button></br>
    </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
    <el-button type="danger"@click="Math1" >安徽大学</el-button></br>
    </div>
    </el-tab-pane>
    <el-tab-pane label="师范类" name="four">
         <div id="left3"style="float:left;width:50%;text-align:center;">
    <el-button type="danger"@click="Math1" >安徽师范大学</el-button></br>
    <el-button type="danger"@click="Math1" >皖西学院</el-button></br>
    <el-button type="danger"@click="Math1" >宿州学院</el-button></br>
    <el-button type="danger"@click="Math1" >巢湖学院</el-button></br>
    <el-button type="danger"@click="Math1" >安庆师范大学</el-button></br>
    <el-button type="danger"@click="Math1" >黄山学院</el-button></br>
 </div>
    <div id="right3"style="float:right;width:50%;text-align:center">
    <el-button type="danger"@click="Math1" >淮南师范学院</el-button></br>
    <el-button type="danger"@click="Math1" >淮北师范大学</el-button></br>
    <el-button type="danger"@click="Math1" >合肥师范学院</el-button></br>
    <el-button type="danger"@click="Math1" >阜阳师范大学</el-button></br>
    <el-button type="danger"@click="Math1" >安徽科技学院</el-button></br>
    </div>
    </el-tab-pane>
  </el-tabs>
       
       </div>
       <input class="qiehuan"type="button" @click="showAndHidden1();" value=">"style="" />
       </div>
             <el-dialog title="朱金鑫老师-获奖详情" :visible.sync="dialogTableVisible"center color="red">
          <table class="tab"style="color:#fff;margin:auto;width:100%;border-collapse:separate; border-spacing:0px 10px;">
               <thead>
                    <tr style="font-size:15px;">
                        <th>比赛名称</th>
                        <th>类别分组</th>
                        <th>比赛题目</th>
                        <th style="width:150px">获奖等级</th>
                        <th>赛事级别</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for ="(detail) in details">
                      <td>{{detail.比赛名称}}</td>
                       <td>{{detail.类别分组}}</td>
                      <td>{{detail.比赛题目}}</td>       
                      <td>{{detail.获奖等级}}</td>
                      <td>{{detail.赛事级别}}</td>
                     
                    </tr>
                    
                </tbody>
            </table>
        </el-dialog> 
       <div class="right-center">
            进入滁州学院：<el-select v-model="value" placeholder="AB类赛事"@change="changeHref(parseInt(value))">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
          
           </div>     
     <div class="right-bottom">
    <div class="heading"style="text-align:center;height:7%">2020-滁州学院-AB类赛事-导师获奖排行榜</div>
            <div class="table"style="overflow:auto;text-align:center;">
            
            <div >
            <table class="tab"style="color:#fff;margin:auto;width:95%;border-collapse:separate; border-spacing:0px 10px;">
               <thead>
                    <tr style="font-size:15px;text-align: center;">
                        <th>排名</th>
                        <th style="font-size:15px;text-align: center;">指导老师</th>
                        <th>获奖数</th>
                        <th>获奖详情</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for ="(teacher,index) in teachers">
                      <td>{{index+1}}</td>
                      <td>{{teacher.第一指导老师}}</td>
                      <td>{{teacher.获奖数}}</td>
                      <td>
                      <el-button type="text" lock-scroll="false"@click="dialogTableVisible=true"style="color:#fff;font-size:5px;background-color:#f56c6c">详细信息</el-button>
                      </td>
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
import left from "../../left.vue";
import "./style/style.css";
//import  "./js/index.json"
import "./style/index.css";
import axios from "axios";
export default {
  name: "page",
  components: {
    left,
  },
  data() {
    return {
      people: 4263,
      people1: 624,
      introduce:
        "滁州学院位于安徽省滁州市，是安徽省省属全日制普通本科院校，是安徽省高等教育振兴计划“地方应用型高水平大学建设”高校、国家级大学生创新创业训练计划实施高校、全国深化创新创业教育改革示范高校、“应急安全智慧学习工场（2020）”暨应急管理学院建设首批试点学校 ，CDIO工程教育联盟成员单位。",
      msg: "Welcome to Your Vue.js App",
      activeName: "third",
      options: [
        {
          value: "1",
          label: "中国大学生计算机设计大赛",
        },
        {
          value: "2",
          label: "安徽省大学生GIS技能大赛",
        },
        {
          value: "3",
          label: "安徽省大学生互联网+大学生创新创业大赛",
        },
        {
          value: "4",
          label: "安徽省大数据与人工智能应用竞赛",
        },
        {
          value: "5",
          label: "安徽省机器人大赛",
        },
      ],
      value: "",
      selfstyle: {
        color: "#fff",
        left: "5%",
      },
      detail: {},
      details: [
        {
          比赛名称: "中国大学生计算机设计大赛",
          类别分组: "数媒动漫与微电影（专业组）-纪录片",
          比赛题目: "金石志",
          获奖等级: "三等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "中国大学生计算机设计大赛",
          类别分组: "数媒中华优秀民族文化元素（专业组）-平面设计（静态设计）",
          比赛题目: "十二生肖数字插画",
          获奖等级: "一等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "安徽省“互联网+”大学生创新创业大赛",
          类别分组: "初创组",
          比赛题目: "“未名湖”文化创意设计工作室",
          获奖等级: "三等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "视频类",
          比赛题目: "《疫·志》",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "平面类",
          比赛题目: "轻轻一“点”",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "平面类",
          比赛题目: "蝠祸相依",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "平面类",
          比赛题目: "少说多做—口罩篇",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "平面类",
          比赛题目: "《加减乘除》",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "平面类",
          比赛题目: "《成为一个英雄》",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "平面类",
          比赛题目: "疫不容辞",
          获奖等级: "三等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "平面类",
          比赛题目: "《昨是今非》",
          获奖等级: "三等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "平面类",
          比赛题目: "《防护不规范，无疫路漫漫》",
          获奖等级: "三等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "动画类",
          比赛题目: "《娃哈哈黑糖奶茶》",
          获奖等级: "三等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "广播类",
          比赛题目: "智慧感光，自然出众",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "广播类",
          比赛题目: "《爱“洗”猫》",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "广播类",
          比赛题目: "碱越多减越多",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "广播类",
          比赛题目: "对不起，只帮到这。",
          获奖等级: "三等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "文案类",
          比赛题目: "水分 ",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "文案类",
          比赛题目: "每个人的爱华仕",
          获奖等级: "二等奖",
          赛事级别: "省赛",
        },
        {
          比赛名称: "全国大学生广告艺术大赛",
          类别分组: "文案类",
          比赛题目: "美丽不掉线",
          获奖等级: "三等奖",
          赛事级别: "省赛",
        },
      ],
      dialogTableVisible: false,
      teacher: { 第一指导老师: "", 获奖数: "" },
      teachers: [
        {
          第一指导老师: "朱金鑫",
          获奖数: "20",
        },
        {
          第一指导老师: "金灿",
          获奖数: "15",
        },
        {
          第一指导老师: "何雯",
          获奖数: "11",
        },
        {
          第一指导老师: "张悦",
          获奖数: "7",
        },
        {
          第一指导老师: "江梅梅",
          获奖数: "6",
        },
        {
          第一指导老师: "李振洋",
          获奖数: "6",
        },
        {
          第一指导老师: "刘竞遥",
          获奖数: "5",
        },
        {
          第一指导老师: "吴豹",
          获奖数: "5",
        },
        {
          第一指导老师: "邓凯",
          获奖数: "4",
        },
        {
          第一指导老师: "申思达",
          获奖数: "4",
        },
        {
          第一指导老师: "董锐",
          获奖数: "4",
        },
        {
          第一指导老师: "陈海宝",
          获奖数: "4",
        },
        {
          第一指导老师: "吴玉",
          获奖数: "4",
        },

        {
          第一指导老师: "冷荣亮",
          获奖数: "4",
        },
        {
          第一指导老师: "孙凯传",
          获奖数: "4",
        },
        {
          第一指导老师: "顾善凯",
          获奖数: "4",
        },
        {
          第一指导老师: "王杨",
          获奖数: "3",
        },
        {
          第一指导老师: "赵亮",
          获奖数: "3",
        },
        {
          第一指导老师: "张宇",
          获奖数: "3",
        },
        {
          第一指导老师: "温卫敏",
          获奖数: "3",
        },
        {
          第一指导老师: "余晓美",
          获奖数: "3",
        },
        {
          第一指导老师: "吕日琴",
          获奖数: "2",
        },
        {
          第一指导老师: "甘翔",
          获奖数: "2",
        },
        {
          第一指导老师: "杜良丽",
          获奖数: "2",
        },
        {
          第一指导老师: "张珂",
          获奖数: "2",
        },
        {
          第一指导老师: "任丽颖",
          获奖数: "2",
        },
        {
          第一指导老师: "李伟涛",
          获奖数: "2",
        },
        {
          第一指导老师: "孙勇",
          获奖数: "2",
        },
        {
          第一指导老师: "郭雪燕",
          获奖数: "2",
        },
        {
          第一指导老师: "陈一笑",
          获奖数: "2",
        },
        {
          第一指导老师: "朱泽婷",
          获奖数: "2",
        },
        {
          第一指导老师: "徐志红",
          获奖数: "2",
        },
        {
          第一指导老师: "陈寿文",
          获奖数: "2",
        },
        {
          第一指导老师: "侯晓珊",
          获奖数: "1",
        },
        {
          第一指导老师: "龚洁松",
          获奖数: "1",
        },
        {
          第一指导老师: "丁素云",
          获奖数: "1",
        },
        {
          第一指导老师: "倪敏",
          获奖数: "1",
        },
        {
          第一指导老师: "袁玲",
          获奖数: "1",
        },
        {
          第一指导老师: "黄梅",
          获奖数: "1",
        },
        {
          第一指导老师: "程艳",
          获奖数: "1",
        },
        {
          第一指导老师: "彭俊",
          获奖数: "1",
        },
        {
          第一指导老师: "刘国秀",
          获奖数: "1",
        },
        {
          第一指导老师: "董再秀",
          获奖数: "1",
        },
        {
          第一指导老师: "赵玉艳",
          获奖数: "1",
        },
        {
          第一指导老师: "郑娟",
          获奖数: "1",
        },
        {
          第一指导老师: "潘宏",
          获奖数: "1",
        },
        {
          第一指导老师: "施韵佳",
          获奖数: "1",
        },
        {
          第一指导老师: "杜良丽",
          获奖数: "1",
        },
        {
          第一指导老师: "陈寿文",
          获奖数: "1",
        },
        {
          第一指导老师: "包建国",
          获奖数: "1",
        },
        {
          第一指导老师: "孙书亚",
          获奖数: "1",
        },
        {
          第一指导老师: "江岭",
          获奖数: "1",
        },
        {
          第一指导老师: "赵亚飞",
          获奖数: "1",
        },
        {
          第一指导老师: "刘玉锋",
          获奖数: "1",
        },
        {
          第一指导老师: "张帅",
          获奖数: "1",
        },
        {
          第一指导老师: "王国奎",
          获奖数: "1",
        },
        {
          第一指导老师: "高来鑫",
          获奖数: "1",
        },
        {
          第一指导老师: "王松劼",
          获奖数: "1",
        },
        {
          第一指导老师: "崔平安",
          获奖数: "1",
        },
        {
          第一指导老师: "李龙伟",
          获奖数: "1",
        },
        {
          第一指导老师: "赵明伟",
          获奖数: "1",
        },
        {
          第一指导老师: "周亮广",
          获奖数: "1",
        },
        {
          第一指导老师: "叶涛",
          获奖数: "1",
        },
        {
          第一指导老师: "李建梅",
          获奖数: "1",
        },
        {
          第一指导老师: "张巧云",
          获奖数: "1",
        },
        {
          第一指导老师: "何君洁",
          获奖数: "1",
        },
        {
          第一指导老师: "方纯",
          获奖数: "1",
        },
        {
          第一指导老师: "李楠",
          获奖数: "1",
        },
        {
          第一指导老师: "于春燕",
          获奖数: "1",
        },
        {
          第一指导老师: "黄骁力",
          获奖数: "1",
        },
        {
          第一指导老师: "马良",
          获奖数: "1",
        },
        {
          第一指导老师: "杨传健",
          获奖数: "1",
        },
        {
          第一指导老师: "赵生慧",
          获奖数: "1",
        },
        {
          第一指导老师: "沈晓",
          获奖数: "1",
        },
        {
          第一指导老师: "王婷",
          获奖数: "1",
        },
        {
          第一指导老师: "董国娟",
          获奖数: "1",
        },
        {
          第一指导老师: "王永贵",
          获奖数: "1",
        },
        {
          第一指导老师: "周阿洋",
          获奖数: "1",
        },
        {
          第一指导老师: "李慧",
          获奖数: "1",
        },
        {
          第一指导老师: "王涛",
          获奖数: "1",
        },
        {
          第一指导老师: "王玉亮",
          获奖数: "1",
        },
        {
          第一指导老师: "台德进",
          获奖数: "1",
        },
        {
          第一指导老师: "程长明",
          获奖数: "1",
        },
        {
          第一指导老师: "崇蓉蓉",
          获奖数: "1",
        },
        {
          第一指导老师: "耿刘利",
          获奖数: "1",
        },
        {
          第一指导老师: "宫瑱",
          获奖数: "1",
        },
        {
          第一指导老师: "陶雨萍",
          获奖数: "1",
        },
        {
          第一指导老师: "孙超",
          获奖数: "1",
        },
        {
          第一指导老师: "王大星",
          获奖数: "1",
        },
        {
          第一指导老师: "李爱军",
          获奖数: "1",
        },
        {
          第一指导老师: "教练组",
          获奖数: "1",
        },
        {
          第一指导老师: "胡贝贝",
          获奖数: "1",
        },
      ],
    };
  },
  mounted() {
    this.drawLine();
    this.nianfen();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    showAndHidden1() {
      var div1 = document.getElementById("div1");
      var div2 = document.getElementById("div2");
      if (div1.style.display == "block") div1.style.display = "none";
      else div1.style.display = "block";
      if (div2.style.display == "block") div2.style.display = "none";
      else div2.style.display = "block";
    },
    ALL() {
      this.$router.push({ path: "/chzu" });
    },
    changeHref: function (sortnum) {
      switch (sortnum) {
        case 1:
          this.$router.push({
            path: "/chzuc2020",
          });
          break;
        case 2:
          this.$router.push({
            path: "/chzuc2020",
          });
          break;
        case 2:
          this.$router.push({
            path: "/chzuc2020",
          });
          break;
        case 2:
          this.$router.push({
            path: "/GIS1",
          });
          break;
        case 2:
          this.$router.push({
            path: "/GIS1",
          });
          break;
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let dataMax = [
        { name: "理工", max: "100" },
        { name: "文科", max: "100" },
        { name: "体育", max: "100" },
        { name: "综合", max: "100" },
        { name: "艺术", max: "100" },
      ];
      let option = {
        title: {
          text: "",
          left: "5%",
          top: "0px",
          textStyle: {
            color: "#fff",
            fontFamily: "Microsoft YaHei",
            fontSize: "15",
            fontWeight: "150",
          },
        },
        //配置维度的最大值
        radar: {
          name: {
            show: true,
            color: "white",
          },
          //   雷达图的指示器，用来指定雷达图中的多个变量（维度）
          indicator: dataMax,
          shape: "", //对雷达图形设置成一个圆形,可选 circle:圆形,polygon:多角形(默认)
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "15%",
          top: "30%",
        },
        series: [
          {
            top: "20%",
            type: "radar",
            label: {
              show: false, //显示数值
            },
            areaStyle: {}, //每个雷达图形成一个阴影的面积
            data: [
              {
                name: "赛事类型",
                value: [92, 74, 60, 82, 84],
              },
            ],
          },
        ],
      };
      // 绘制图表
      myChart.setOption(option);
    },
    insert: function () {
      this.users.push(this.user);
    },
    remove: function (index) {
      this.users.splice(index, 1);
    },
    data2019() {
      this.$router.push({ path: "/data2019" });
    },
    data2018() {
      this.$router.push({ path: "/data2018" });
    },
    nianfen() {},
    open() {
      this.$alert(
        '<iframe src="./static/chzu/赛事热度排行榜.html"frameborder="0"  scrolling="no"style="width:100%;height:500px;"></inframe>',
        {
          dangerouslyUseHTMLString: true,
        }
      );
    },
  },
};
</script>

<style scoped>
#page {
  height: 691px;
  width: 100%;
  float: right;
  margin-top: 4px;
}

,
.button::after {
  border: none;
}
,
button {
  background-color: transparent;
}
.qiehuan {
  background-color: #ffffff2d;
  position: absolute;
  top: 7px;
  left: 445px;
  z-index: 1000;
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.time {
  background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat,
    linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat,
    linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
    linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat;
  background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
  background-color: rgb(14 148 234 / 5%);
  height: 6%;
}
.heading {
  color: #fff;
  font-size: 15px;
}
.table {
  width: 100%;
  height: 90%;

  color: #fff;
}
el-progress-bar__outer {
  background-color: red;
}

.tab {
  background-color: rgb(0 34 71 / 70%);
}

.left-top {
  background: linear-gradient(to left, #0e94eb, #0e94eb) left top no-repeat,
    linear-gradient(to bottom, #0e94eb, #0e94eb) left top no-repeat,
    linear-gradient(to left, #0e94eb, #0e94eb) right top no-repeat,
    linear-gradient(to bottom, #0e94eb, #0e94eb) right top no-repeat;
  background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
  background-color: rgb(58 83 134 / 15%);
  height: 34%;
}
.left-center {
  background-color: rgb(58 83 134 / 15%);
  top: -2%;
  height: %;
}
.left-bottom {
  top: -2%;
  height: 34%;
}
.center-bottom {
  margin-top: 1px;
  background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
  background-color: rgb(58 83 134 / 15%);
}
.right-top {
  
  height: 31%;
}
.right-center {
  background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
  background-color: rgb(58 83 134 / 15%);
  height: 7%;
  text-align: center;
  font-size: 15px;
  color: #fff;
}
.right-bottom {
  top:2%;
  height: 61%;
}
>>> .el-select {
  display: inline-block;
  position: relative;
  margin-top: 5px;
}
>>> .el-popper[x-placement^="bottom"] {
  margin-top: 12px;
  min-width: 232.4px;
  transform-origin: center top;
  z-index: 2009;
  right: 77px;
  width: 200px;
  background-color: rgb(20, 38, 59);
  /* height: 100%; */
  position: absolute;
  top: 321px;
  left: 1221px;
}
#un {
  overflow: auto;
  width: 100%;
  height: 50%;
}
ul {
  list-style-type: none; /*消除黑点*/

  background-attachment: fixed;

  margin: 0px;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 100%;
}

a {
  color: #fff; /*设置字体颜色*/
  text-decoration: none; /*消除下划线*/
  padding: 1px;
  border-radius: 5px;
  margin: 0px auto;
}

/*选中则发生一些变化*/
.router-link-active {
  background: rgba(120, 255, 255, 1);
  color: #444;
}
.button1 {
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

.year {
  color: #fff;
  font-size: large;
  font-family: math;
  float: right;
  margin-top: 8px;
}
p {
  margin-bottom: 0;
  font-size: 13px;
  min-height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  margin-top: 5px;
  color: #fff;
  white-space: normal;
}
.rootBar {
  width: 100%;
  height: 100%;

  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
}
.childrenBar {
  width: 650px;
  height: 100%;
  position: relative;
  display: inline-block;
  color: #66b1ff;
}
.one {
  color: orange;
  font-size: 20px;
  margin-bottom: 0;
  min-height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  margin-top: 5px;
  white-space: normal;
}
.two {
  color: orange;
  font-size: 20px;
  margin-bottom: 0;
  min-height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  margin-top: 5px;
  white-space: normal;
}
.three {
  color: orange;
  font-size: 20px;
  margin-bottom: 0;
  min-height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  margin-top: 5px;
  white-space: normal;
}
.four {
  color: orange;
  font-size: 20px;
  margin-bottom: 0;
  min-height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31px;
  margin-top: 5px;
  white-space: normal;
}
.center-bottom1 {
  background-image: url("../../img/back.png");
  background-size: 100% 100%;
  background-position: 10% 10%;
  width: 100%;
  height: 31%;
  margin-top: 1px;
}
</style>
<style>
.el-button {
  padding: 12px 8px;
  margin-left: 1px;
}
.el-tabs__item {
  padding: 0 35px;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  position: relative;
  margin-left: 0%;
}
.cententBox .el-tabs--border-card > .el-tabs__content {
  position: absolute;
  top: 125px;
  bottom: 0;
  left: 30px;
  right: 30px;
  overflow-y: auto;
  background-color: #fff;
}
.center-bottom1 {
  
  width: 100%;
  height: 27%;
  margin-top: 1px;
}
.pie1 {
  width: 50%;
  height: 100%;
}
.pie2 {
  height: 100%;
  width: 50%;
}
.select-style {
  position: relative;
  display: inline-block;
}
.select {
  color: "#fff";
  margin: 0px auto;
}
</style>
