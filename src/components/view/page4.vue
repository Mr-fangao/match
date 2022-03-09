<template>
  <div id="page4">
    <div class="side">
      <div class="right-top">
        <div id="div1" style="display: block">
          <el-tabs
            :style="selfstyle"
            v-model="activeName"
            @tab-click="handleClick"
          >
            <el-tab-pane label="A类赛事" name="first" style>
              <div
                id="left3"
                style="float: left; width: 50%; text-align: center"
              >
                <el-button @click="Math1" style="">{{ A1 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A2 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A3 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A4 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A5 }}</el-button
                ><br /><br />
              </div>
              <div
                id="right3"
                style="float: right; width: 50%; text-align: center"
              >
                <el-button @click="Math1" style="">{{ A8 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A7 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A6 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A9 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ A10 }}</el-button
                ><br /><br />
              </div>
            </el-tab-pane>
            <el-tab-pane label="B类赛事" name="B">
              <div
                id="left3"
                style="float: left; width: 50%; text-align: center"
              >
                <el-button
                  type="primary"
                  @click="Computer()"
                  style="background: red"
                  >{{ B1 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B2 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B3 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B4 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B5 }}</el-button
                ><br /><br />
              </div>
              <div
                id="right3"
                style="float: right; width: 50%; text-align: center"
              >
                <el-button @click="GIS()" style="">{{ B8 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B7 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B6 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B9 }}</el-button
                ><br /><br />
                <el-button @click="Math1" style="">{{ B10 }}</el-button
                ><br /><br />
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="selectleft">
        <div class="gxf_tips">
          <div class="gxf_tip">
            <i class="el-icon-warning-outline">信息提示</i>
          </div>
          <div>
            <p>1.&nbsp;请您输入“题目”和“关键词”进行选题的分析</p>
            <p>2.&nbsp;关键词最多可填写3个，多个关键词之间用英文分号“;”隔开</p>
          </div>
        </div>
        <div class="search-box">
          <ul class="SAset-box">
            <li class="clearfix">
              <div class="SA-title">题目：</div>
              <div class="SA-select">
                <input
                  id="topic_name"
                  class="easyui-textbox textbox-f"
                  style="width: 418px; display: none"
                />
                <span class="textbox" style="width: 80%; height: 30px">
                  <input
                    id="_easyui_textbox_input1"
                    type="text"
                    class="
                      height:30px;textbox-text
                      validatebox-text
                      textbox-prompt
                    "
                    autocomplete="off"
                    tabindex=""
                    placeholder="1111111111"
                    style="
                      margin: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                      height: 30px;
                      line-height: 25px;
                      width: 80%;
                      background-color: rgb(40 61 80);
                      color: #fff;
                      border-bottom: aqua;
                    " />
                  <input type="hidden" class="textbox-value" value=""
                /></span>
              </div>
            </li>

            <li class="clearfix">
              <div class="SA-title">关键词：</div>
              <div class="SA-select">
                <input
                  id="keyword"
                  class="easyui-textbox textbox-f"
                  data-options="prompt:' '"
                  style="width: 80%; height: 30px; display: none"
                />
                <span class="textbox" style="width: 418px">
                  <input
                    id="_easyui_textbox_input2"
                    type="text"
                    placeholder="请输入内容"
                    class="textbox-text validatebox-text textbox-prompt"
                    autocomplete="off"
                    tabindex=""
                    style="
                      margin: 0px;
                      padding-top: 0px;
                      padding-bottom: 0px;
                      height: 30px;
                      line-height: 25px;
                      width: 80%;
                      background-color: rgb(40 61 80);
                      color: #fff;
                      border-bottom: aqua;
                    " />
                  <input type="hidden" class="textbox-value" value="1111111111"
                /></span>
              </div>
            </li>

            <li class="clearfix">
              <div class="SA-title">&nbsp;</div>
              <div id="keyword_box" class="SA-select">
                <span
                  >推荐关键词：网络招聘；大数据；分析系统；
                  <div v-if="isShow"></div
                ></span>
              </div>
            </li>

            <li class="clearfix">
              <div class="SA-title"></div>
              <div id="analyze_btns" class="SA-select">
                <input
                  id="analyze_bolk"
                  type="button"
                  @click="Analyse()"
                  v-loading.fullscreen.lock="fullscreenLoading"
                  class="initial-btn"
                  value="选题分析"
                />
                <input
                  id="analyze_word"
                  type="button"
                  class="initial-btn"
                  value="关键词"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="start"></div>
      </div>
    </div>
    <div class="rside" v-show="isShow">
      <div class="title">
        <i class="el-icon-caret-right" />
        选题分析——基于近十年获奖数据
      </div>
      <el-tabs
        v-model="activeName1"
        type="border-card"
        @tab-click="handleClick1"
      >
              <el-tab-pane label="词频" name="zero">
          <div class="">
            <div class="title">>>次频分析</div>
            <div class="cahartCJQ">
              <div id="CJQ" style="width: 1100px; height: 500px"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="趋势分析" name="first">
          <div class="">
            <div class="title">>>选题趋势分析</div>
            <div class="caharts">
              <div id="main" style="width: 1100px; height: 500px"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关联分析" name="second">
          <div>
            <div class="title">>>选题关联分析</div>
            <div class="caharts">
              <div id="charts" style="width: 1100px; height: 800px"></div>
            </div></div
        ></el-tab-pane>
        <el-tab-pane label="行业应用分析" name="fouth">
          <div class="">
            <div class="title">>>行业应用分析</div>
            <div style="overflow: scroll; height: 600px">
              <div class="box1">
                <Analysis></Analysis>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import Analysis from "../Analysis.vue";
export default {
  components: {
    Analysis,
  },
  name: "page4",
  data() {
    return {
      fullscreenLoading: false,
      isShow: false,
      activeName1: "first",
      charts: "",
      /*	opinion: ["1", "3", "3", "4", "5"],*/
      opinionData: ["0", "0", "0", "0", "0", "0", "0", "4", "3", "8", "10"],
      Internetdata: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "0"],
      Esridata: ["0", "0", "0", "0", "0", "1", "1", "1", "1", "2", "3"],
      activeName: "B",
      A1: " “西门子杯”中国智能制造挑战赛",
      A2: "全国医学院临床基本技能竞赛",
      A3: "全国电子设计竞赛",
      A4: "全国工程训练综合能力竞赛",
      A5: "全国大学生广告艺术大赛",
      A6: "全国大学生机械创新设计大赛",
      A7: "全国大学生交通科技大赛",
      A8: "全国大学生节能减排科技竞赛",
      A9: "全国大学生数学建模竞赛",
      A10: "全国大学生物理实验竞赛",
      B1: "中国大学生计算机设计大赛",
      B2: "“中国软件杯”软件设计大赛",
      B7: "安徽省机器人大赛",
      B4: "安徽省GIS应用技能大赛",
      B5: "全国统计建模大赛",
      B6: "全国高等学校测绘技能大赛",
      B11: "安徽省大数据与人工智能应用竞赛",
      B8: "安徽省大学生GIS技能大赛",
      B9: "全国大学生汽车方程式大赛",
      B10: "中国服务外包创新创业大赛",
      A11: "全国原创动漫大赛",
      B3: "全国英语辩论赛",
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.drawLine("main");
      this.drawLineCJQ("CJQ ");
    })
    this.drawLine1();
  },
  methods: {
    Analyse() {
      const loading = this.$loading({
        lock: true,
        text: "任务进行中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 1)",
      });
      setTimeout(() => {
        loading.close();
      }, 1500);
      this.isShow = !this.isShow;
    },
    drawLine(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "#FFFFFF",
          },
        },

        legend: {
          data: [
            "中国大学生计算机设计大赛",
            "安徽省“互联网+”大学生创新创业大赛",
            "Esri杯中国大学生GIS软件开发竞赛",
          ],
          textStyle: {
            color: "#FFFFFF",
          },
        },
        toolbox: {
          //可视化的工具箱
          show: true,
          feature: {
            dataView: {
              //数据视图
              show: true,
            },
            restore: {
              //重置
              show: true,
            },
            dataZoom: {
              //数据缩放视图
              show: true,
            },
            saveAsImage: {
              //保存图片
              show: true,
            },
            magicType: {
              //动态类型切换
              type: ["bar", "line"],
            },
          },
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          top: "8%",
        },

        xAxis: {
          type: "category",
          boundaryGap: true,
          //  /*  data: ["2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"], */
          data: [
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
          ],
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: true,
          axisLabel: {
            textStyle: {
              color: "#fff", //坐标值得具体的颜色
            },
          },
        },

        series: [
          {
            name: "中国大学生计算机设计大赛",
            type: "line",
            stack: "总量",
            data: this.opinionData,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          {
            name: "安徽省“互联网+”大学生创新创业大赛",
            type: "line",
            stack: "总量",
            data: this.Internetdata,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          {
            name: "Esri杯中国大学生GIS软件开发竞赛",
            type: "line",
            stack: "总量",
            data: this.Esridata,
            textStyle: {
              color: "#FFFFFF",
            },
          },
        ],
      });
    },
    drawLine1() {
      var myChart = echarts.init(document.getElementById("charts"));
      var categories = [];
      for (var i = 0; i < 2; i++) {
        categories[i] = {
          name: "类目" + i,
        };
      }
      let option = {
        // 图的标题
        title: {
          text: "",
        },
        // 提示框的配置
        tooltip: {
          formatter: function (x) {
            return x.data.des;
          },
        },
        //调整布局
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          top: "8%",
        },
        // 工具箱
        toolbox: {
          // 显示工具箱
          show: true,
          feature: {
            mark: {
              show: true,
            },
            // 还原
            restore: {
              show: true,
            },
            // 保存为图片
            saveAsImage: {
              show: true,
            },
          },
        },
        legend: [
          {
            // selectedMode: 'single',
            data: categories.map(function (a) {
              return a.name;
            }),
          },
        ],
        series: [
          {
            type: "graph", // 类型:关系图
            layout: "force", //图的布局，类型为力导图
            symbolSize: 40, // 调整节点的大小
            roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [2, 10],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 20,
                },
              },
            },
            force: {
              repulsion: 2500,
              edgeLength: [10, 50],
            },
            draggable: true,
            lineStyle: {
              normal: {
                width: 2,
                color: "#4b565b",
              },
            },
            edgeLabel: {
              normal: {
                show: true,
                formatter: function (x) {
                  return x.data.name;
                },
              },
            },
            label: {
              normal: {
                show: true,
                textStyle: {},
              },
            },

            // 数据
            data: [
              {
                name: "大数据；系统",
                des: "nodedes01",
                symbolSize: 70,
                category: 0,
              },
              {
                name: "安徽工程大学",
                des: "nodedes02",
                symbolSize: 50,
                category: 1,
              },
              {
                name: "安徽农业大学",
                des: "nodedes3",
                symbolSize: 50,
                category: 1,
              },
              {
                name: "滁州学院",
                des: "nodedes04",
                symbolSize: 50,
                category: 1,
              },
              {
                name: "中国科学技术大学",
                des: "nodedes05",
                symbolSize: 50,
                category: 1,
              },
              {
                name: "安徽师范大学",
                des: "nodedes06",
                symbolSize: 50,
                category: 1,
              },
              {
                name: "安徽医科大学",
                des: "nodedes07",
                symbolSize: 50,
                category: 1,
              },
              {
                name: "池州学院",
                des: "nodedes08",
                symbolSize: 50,
                category: 1,
              },
              {
                name: "合肥工业大学",
                des: "nodedes09",
                symbolSize: 50,
                category: 1,
              },
              {
                name: "邓凯",
                des: "nodedes10",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "董再秀",
                des: "nodedes10",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "邵雪梅",
                des: "nodedes10",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "王涛",
                des: "nodedes10",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "皇苏斌",
                des: "皇苏斌",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "陶皖",
                des: "陶皖",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "傅雷扬",
                des: "傅雷扬",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "高羽佳",
                des: "高羽佳",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "胡哲",
                des: "胡哲",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "乐毅",
                des: "乐毅",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "孙力",
                des: "孙力",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "左开中",
                des: "左开中",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "禇诗伟",
                des: "禇诗伟",
                symbolSize: 40,
                category: 1,
              },

              {
                name: "翟世臣",
                des: "翟世臣",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "卜俊杰",
                des: "卜俊杰",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "杨飞",
                des: "杨飞",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "刘玉艳",
                des: "刘玉艳",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "李怀敏",
                des: "李怀敏",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "王康喆",
                des: "王康喆",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "张玺",
                des: "张玺",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "李建国",
                des: "李建国",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "齐平",
                des: "齐平",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "叶明全",
                des: "叶明全",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "杨灿灿",
                des: "杨灿灿",
                symbolSize: 30,
                category: 1,
              },
              {
                name: "张启兴",
                des: "张启兴",
                symbolSize: 40,
                category: 1,
              },
              {
                name: "网络招聘大数据分析系统",
                des: "nodedes10",
                symbolSize: 30,
                category: 1,
              },
              {
                name: "网络招聘大数据分析与就业推荐系统",
                des: "nodedes10",
                symbolSize: 30,
                category: 1,
              },
              {
                name: "基于租房大数据的房源推荐系统",
                des: "nodedes10",
                symbolSize: 30,
                category: 1,
              },
              {
                name: "二等奖",
                des: "二等奖",
                symbolSize: 30,
                category: 1,
              },
              {
                name: "优胜奖",
                des: "二等奖",
                symbolSize: 30,
                category: 1,
              },
            ],
            links: [
              {
                source: "大数据；系统",
                target: "安徽工程大学",
                name: "相关机构",
                des: "link01des",
              },
              {
                source: "大数据；系统",
                target: "安徽农业大学",
                name: "相关机构",
                des: "link02des",
              },
              {
                source: "大数据；系统",
                target: "滁州学院",
                name: "相关机构",
                des: "link03des",
              },
              {
                source: "大数据；系统",
                target: "中国科学技术大学",
                name: "相关机构",
                des: "link05des",
              },

              {
                source: "大数据；系统",
                target: "安徽师范大学",
                name: "相关机构",
                des: "link05des",
              },
              {
                source: "大数据；系统",
                target: "安徽医科大学",
                name: "相关机构",
                des: "link05des",
              },
              {
                source: "大数据；系统",
                target: "池州学院",
                name: "相关机构",
                des: "link05des",
              },
              {
                source: "大数据；系统",
                target: "合肥工业大学",
                name: "相关机构",
                des: "link05des",
              },
              {
                source: "滁州学院",
                target: "邓凯",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "滁州学院",
                target: "董再秀",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "滁州学院",
                target: "邵雪梅",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "滁州学院",
                target: "王涛",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "安徽工程大学",
                target: "皇苏斌",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "安徽工程大学",
                target: "陶皖",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "安徽农业大学",
                target: "高羽洋",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "安徽农业大学",
                target: "胡哲",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "安徽农业大学",
                target: "乐毅",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "安徽农业大学",
                target: "孙力",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "安徽文达信息工程学院",
                target: "褚诗伟",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "安徽信息工程学院",
                target: "翟世臣",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "安徽医科大学",
                target: "杨飞",
                name: "第一指导老师",
                des: "link01des",
              },
              {
                source: "池州学院",
                target: "刘玉艳",
                name: "第一指导老师",
                des: "link01des",
              },

              {
                source: "邓凯",
                target: "网络招聘大数据分析系统",
                name: "指导作品",
                des: "link05des",
              },
              {
                source: "网络招聘大数据分析系统",
                target: "杨灿灿",
                name: "第二指导老师",
                des: "link05des",
              },
              {
                source: "网络招聘大数据分析与就业推荐系统",
                target: "杨灿灿",
                name: "第二指导老师",
                des: "link05des",
              },
              {
                source: "网络招聘大数据分析系统",
                target: "二等奖",
                name: "获奖等级",
                des: "link05des",
              },
              {
                source: "网络招聘大数据分析与就业推荐系统",
                target: "优胜奖",
                name: "获奖等级",
                des: "link05des",
              },
              {
                source: "基于租房大数据的房源推荐系统",
                target: "杨灿灿",
                name: "第二指导老师",
                des: "link05des",
              },
              {
                source: "基于租房大数据的房源推荐系统",
                target: "优胜奖",
                name: "获奖等级",
                des: "link05des",
              },
              {
                source: "邓凯",
                target: "网络招聘大数据分析与就业推荐系统",
                name: "指导作品",
                des: "link05des",
              },
              {
                source: "邓凯",
                target: "基于租房大数据的房源推荐系统",
                name: "指导作品",
                des: "link05des",
              },
            ],
            categories: categories,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
body {
  height: 100%;
}
html {
  height: 100%;
}
#page4 {
  margin: 0;
  padding: 0;
  background-image: url("../view/img/index_bg.png");
  height: 691px;
  width: 100%;
  float: right;
  margin-top: 4px;
}
.side {
  float: left;
  height: 100%;
  width: 25%;
  background-color: #413f3f1c;
  background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
}
.rside {
  float: right;
  height: 100%;
  width: 74%;
  background-color: #413f3f1c;
}
.title {
  height: 5%;
  margin-top: 1%;
  border: 1px solid rgb(26 60 85);
}
.caharts {
  height: 500px;
}
.box1 {
  height: 850px;
}
.line-wrap {
  width: 50%;
  height: 50%;
}
>>> .el-tabs__item {
  margin-left: 65px;
  color: #fff;
}
>>> .el-button {
  border: #0c5e9400;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(221, 219, 219);
  font-size: 13px;
}
>>> .el-tabs--border-card > .el-tabs__header {
  background-color: rgba(0, 0, 0, 0);
  /* border-bottom: 1px solid #E4E7ED; */
  margin: 0;
}
>>> .el-tabs--border-card {
  background: #ffffff05;
  border: 1px solid rgb(26 60 85);
  -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);
}
.right-top {
  background: white;
  padding: 10px;
  width: 100%;
  background-color: #413f3f1c;
  height: 300px;
  border: 1px solid rgb(26 60 85);
}
.gxf_tips {
  margin: 15px 0 10px;
  border: 1px solid rgb(26 60 85);
  padding: 20px 10px 10px 20px;
  position: relative;
}
.gxf_tip {
  border: 1px solid #ccc;
  padding: 2px 2px 2px 20px;
  background-color: #fff;
  color: #dd4b39;
  position: absolute;
  top: -15px;
  left: 30px;
}
.SAset-box {
  border: 1px solid rgb(26 60 85);
}
.SAset-box li {
  margin-top: 10px;
  color: #333;
  position: relative;
  padding-left: 270px;
  min-height: 20px;
  margin-bottom: 2%;
}
.SAset-box > li {
  padding-left: 100px;
}
.SA-title {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 270px;
  text-align: right;
  margin-right: 5px;
  position: absolute;
  left: 0;
  top: 6px;
}
.SA-title {
  width: 100px;
}
.SA-select {
  line-height: 20px;
}
.initial-btn:hover {
  color: #fff3f3;
  background-color: #22b3b8;
  border: 1px solid #22b3b8;
}
.initial-btn {
  display: inline-block;
  cursor: pointer;
  color: #666;
  padding: 5px 15px;
  background-color: #fff;
  border: 1px solid #aaaaaa;
}
</style>