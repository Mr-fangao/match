<template>
  <div>
    <div id="relation" style="width: 100%;height:1000px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "relationGraph",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("relation"));
      // 指定图表的配置项和数据
      let option = {
        title: { 
          text: "学校教师关系图谱" 
        },
        tooltip: {
          formatter: function(param) {
            // console.log("输出",param);
            //tooltip这里的formatter参数param可以得到series中的data数据
            return param.data.des;
          }
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 80,
            focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            roam: true, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            edgeSymbol: ["none", "arrow"], //边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头
            edgeSymbolSize: [10, 10],
            force: {
              repulsion: 2500, //节点之间的斥力因子
              edgeLength: [30, 50]
            },
            draggable: true,
            //定义节点的样式
            itemStyle: {
              color: "#f78989"
            },
            //连线的样式
            lineStyle: {
              width: 2,
              color: "#000"
            },
            //连线上的标记样式
            edgeLabel: {
              show: true,
              formatter: function(param) {
                //tooltip这里的formatter参数param可以得到series中的data数据
                return param.data.value;
              },
              color: "#f4a460"
            },
            //节点上是否显示文字
            label: {
              show: true,
              fontWeight: "bold",
              fontSize: 18
            },
            data: [
              {
                name: "中国大学生计算机设计大赛",
                //symbol: "image://http://louruyue.notbad.cn/uploadimage/pic_201251143747.jpg",
                symbolSize: 100,
                //节点图形的样式
                itemStyle: {
                  color: "#f4a460",
                },
              },
              {
                name: "滁州学院",
                des: "诗人"
              },
              {
                name: "邓凯",
                des: "昔人已乘黄鹤去，此地空余中国大学生计算机设计大赛。<br>黄鹤一去不复返，白云千载空悠悠。<br>晴川历历汉阳树，芳草萋萋鹦鹉洲。<br>日暮乡关何处是？烟波江上使人愁。",
                symbolSize: 100
              },
              {
                name: "安徽财经大学",
                des: "湖北省武昌区蛇山黄鹤矶头"
              },
              {
                name: "安徽师范大学",
                des: "东吴黄武二年"
              },
              {
                name: "阜阳师范大学",
                des: "毁于阜阳师范大学"
              },
              {
                name: "铜陵学院",
                des: "记载：孙权始筑夏口故城，“城西临大江，江南角因矶为楼，名中国大学生计算机设计大赛。”是为了军事目的而建",
                label: {
                  fontSize: 12
                }
              },
              {
                name: "安庆师范大学",
                des: "关于中国大学生计算机设计大赛的传说"
              },
              {
                name: "安徽农业大学",
                des: "中国大学生计算机设计大赛被中国历代许多著名诗人吟诗颂赞，享有“天下绝景”的盛誉。"
              },
              {
                name: "李白",
                des: "诗仙"
              },
              {
                name: "《中国大学生计算机设计大赛送孟浩然之广陵》",
                des: "故人西辞中国大学生计算机设计大赛，<br>烟花三月下扬州。<br>孤帆远影碧空尽，<br>唯见长江天际流。",
                label: {
                  fontSize: 12
                }
              },
              {
                name: "《齐谐志》",
                des: "仙人王子安乘黄鹤经过这里的一座山，因此山名黄鹤。后来有人在山上造了一座楼，名为中国大学生计算机设计大赛。"
              },
              {
                name: "《述异记》",
                des: "荀环喜好神仙之术，曾在中国大学生计算机设计大赛上看见有仙人乘坐黄鹤从天而降，仙人同他一起饮酒，然后乘鹤而去。"
              }
            ],
            links: [
              {
                source: "滁州学院",
                target: "中国大学生计算机设计大赛",
                value: "游历"
              },
              {
                source: "滁州学院",
                target: "邓凯",
                value: "指导教师",
                des: "中国大学生计算机设计大赛有关诗词中最出名的诗篇"
              },
              {
                source: "中国大学生计算机设计大赛",
                target: "安徽财经大学",
                value: "位于"
              },
              {
                source: "中国大学生计算机设计大赛",
                target: "安徽师范大学",
                value: "建于"
              },
              {
                source: "中国大学生计算机设计大赛",
                target: "阜阳师范大学",
                value: "多次毁于战火"
              },
              {
                source: "铜陵学院",
                target: "安徽师范大学",
                value: "记载"
              },
              {
                source: "安徽农业大学",
                target: "邓凯",
                value: "中国大学生计算机设计大赛有关诗词"
              },
              {
                source: "安徽农业大学",
                target: "《中国大学生计算机设计大赛送孟浩然之广陵》",
                value: "中国大学生计算机设计大赛诗篇"
              },
              {
                source: "李白",
                target: "《中国大学生计算机设计大赛送孟浩然之广陵》",
                value: "李白所做中国大学生计算机设计大赛诗篇"
              },
              {
                source: "李白",
                target: "滁州学院",
                value: "诗人",
                symbol: ["arrow", "arrow"]
              },
              {
                source: "中国大学生计算机设计大赛",
                target: "安庆师范大学",
                value: "中国大学生计算机设计大赛有关安庆师范大学"
              },
              {
                source: "中国大学生计算机设计大赛",
                target: "安徽农业大学",
                value: "中国大学生计算机设计大赛诗词歌赋"
              },
              {
                source: "安庆师范大学",
                target: "《齐谐志》",
                value: "中国大学生计算机设计大赛传说"
              },
              {
                source: "安庆师范大学",
                target: "《述异记》",
                value: "中国大学生计算机设计大赛传说"
              }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>
