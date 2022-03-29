<template>
  <div class="box2">
    <div class="top" style="overflow: auto">
      <div id="left6">
        <div id="myChart" :style="{ width: '550px', height: '300px' }"></div>
      </div>
      <div id="right6" style="overflow: auto">
        <div id="trend" style="width: 550px; height: 300px; overflow: auto">
          <iframe
            id="rythemMap"
            src="/static/AllData/ch6.html"
            frameborder="0"
            style="overflow: auto"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div id="bottom1">
        <div id="myChart1" :style="{ width: '1100px', height: '500px' }"></div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      chartPie: null,
      a: ["0", "0", "0", "0", "0", "0", "0", "4", "3", "3", "4", "3", "4", "5"],
      b: [
        "1",
        "0",
        "2",
        "2",
        "4",
        "6",
        "4",
        "4",
        "8",
        "10",
        "8",
        "6",
        "8",
        "10",
      ],
      c: [
        "0",
        "0",
        "0",
        "3",
        "5",
        "7",
        "12",
        "8",
        "7",
        "8",
        "10",
        "11",
        "15",
        "14",
      ],
      d: ["0", "0", "0", "1", "0", "1", "2", "1", "2", "1", "0", "3", "4", "3"],
      e: [
        "0",
        "1",
        "1",
        "6",
        "8",
        "5",
        "4",
        "7",
        "8",
        "10",
        "14",
        "9",
        "14",
        "10",
      ],
      f: [
        "0",
        "0",
        "0",
        "2",
        "3",
        "2",
        "4",
        "4",
        "3",
        "4",
        "10",
        "7",
        "12",
        "8",
      ],
      g: ["1", "1", "1", "2", "2", "1", "3", "4", "3", "4", "4", "2", "1", "2"],
    };
  },
  mounted() {
    this.initData();
    this.drawLine();
  },
  methods: {
    initData() {
      var myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        toolbox: {},
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            roseType: "area",
            label: {
              normal: {
                formatter: "{b}:{c}: ({d}%)",
                textStyle: {
                  fontWeight: "normal",
                  fontSize: 15,
                },
              },
            },
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 80, name: "城市规划" },
              { value: 67, name: "生活服务" },
              { value: 51, name: "自然治理" },
              { value: 33, name: "时代记忆" },
              { value: 20, name: "校园服务" },
              { value: 15, name: "扶贫" },
              { value: 11, name: "旅游指南" },
            ],
          },
        ],
      });
    },
    drawLine() {
      var myChart = echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis",
          textStyle: {
            color: "#FFFFFF",
          },
        },

        legend: {
          data: [
            "扶贫",
            "自然治理",
            "城市规划",
            "旅游指南",
            "生活服务",
            "时代记忆",
            "校园服务",
          ],
          textStyle: {
            color: "#FFFFFF",
          },
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "8%",
          top: "8%",
        },

        xAxis: {
          type: "category",
          boundaryGap: true,
          //  /*  data: ["2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"], */
          data: [
            "2008",
            "2009",
            "2010",
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
            radius: "80%",
            name: "扶贫",
            type: "line",
            stack: "总量",
            data: this.a,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          {
            name: "自然治理",
            type: "line",
            stack: "总量",
            data: this.b,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          {
            name: "城市规划",
            type: "line",
            stack: "总量",
            data: this.c,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          {
            name: "旅游指南",
            type: "line",
            stack: "总量",
            data: this.d,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          {
            name: "生活服务",
            type: "line",
            stack: "总量",
            data: this.e,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          {
            name: "时代记忆",
            type: "line",
            stack: "总量",
            data: this.f,
            textStyle: {
              color: "#FFFFFF",
            },
          },
          {
            name: "校园服务",
            type: "line",
            stack: "总量",
            data: this.g,
            textStyle: {
              color: "#FFFFFF",
            },
          },
        ],
      });
    },
  },
};
</script>
<style>
.box2 {
}
.top {
  height: 300px;
  width: 100%;
}
#left6 {
  float: left;
  width: 50%;
  height: 100%;
  background-size: 100% 100%;
}
#right6 {
  float: right;
  width: 50%;
  height: 100%;
  border-style: solid;
  border-color: #142436;
  height: 100%;
  background-size: 100% 100%;
}
.bottom1 {
  width: 100%;
  height: 100%;
}
#myChart {
  border-style: solid;
  border-color: #142436;
  height: 100%;
}
#main {
  border-style: solid;
  border-color: #142436;
  height: 100%;
}
#rythemMap {
  height: 100%;
  width: 100%;
}
</style>
