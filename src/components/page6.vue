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
          text: "黄鹤楼图谱" 
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
              color: "#eba844"
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
              color: "#000"
            },
            //节点上是否显示文字
            label: {
              show: true,
              fontWeight: "bold",
              fontSize: 18
            },
            data: [
              {
                name: "黄鹤楼",
                symbol: "image://http://louruyue.notbad.cn/uploadimage/pic_201251143747.jpg",
                symbolSize: 100,
                //节点图形的样式
                itemStyle: {
                  color: "#000",
                },
              },
              {
                name: "崔颢",
                des: "诗人"
              },
              {
                name: "《黄鹤楼》",
                des: "昔人已乘黄鹤去，此地空余黄鹤楼。<br>黄鹤一去不复返，白云千载空悠悠。<br>晴川历历汉阳树，芳草萋萋鹦鹉洲。<br>日暮乡关何处是？烟波江上使人愁。",
                symbolSize: 100
              },
              {
                name: "武昌蛇山",
                des: "湖北省武昌区蛇山黄鹤矶头"
              },
              {
                name: "223年",
                des: "东吴黄武二年"
              },
              {
                name: "火灾",
                des: "毁于火灾"
              },
              {
                name: "《元和郡县图志》",
                des: "记载：孙权始筑夏口故城，“城西临大江，江南角因矶为楼，名黄鹤楼。”是为了军事目的而建",
                label: {
                  fontSize: 12
                }
              },
              {
                name: "传说",
                des: "关于黄鹤楼的传说"
              },
              {
                name: "历代吟诵",
                des: "黄鹤楼被中国历代许多著名诗人吟诗颂赞，享有“天下绝景”的盛誉。"
              },
              {
                name: "李白",
                des: "诗仙"
              },
              {
                name: "《黄鹤楼送孟浩然之广陵》",
                des: "故人西辞黄鹤楼，<br>烟花三月下扬州。<br>孤帆远影碧空尽，<br>唯见长江天际流。",
                label: {
                  fontSize: 12
                }
              },
              {
                name: "《齐谐志》",
                des: "仙人王子安乘黄鹤经过这里的一座山，因此山名黄鹤。后来有人在山上造了一座楼，名为黄鹤楼。"
              },
              {
                name: "《述异记》",
                des: "荀环喜好神仙之术，曾在黄鹤楼上看见有仙人乘坐黄鹤从天而降，仙人同他一起饮酒，然后乘鹤而去。"
              }
            ],
            links: [
              {
                source: "崔颢",
                target: "黄鹤楼",
                value: "游历"
              },
              {
                source: "崔颢",
                target: "《黄鹤楼》",
                value: "作品",
                des: "黄鹤楼有关诗词中最出名的诗篇"
              },
              {
                source: "黄鹤楼",
                target: "武昌蛇山",
                value: "位于"
              },
              {
                source: "黄鹤楼",
                target: "223年",
                value: "建于"
              },
              {
                source: "黄鹤楼",
                target: "火灾",
                value: "多次毁于战火"
              },
              {
                source: "《元和郡县图志》",
                target: "223年",
                value: "记载"
              },
              {
                source: "历代吟诵",
                target: "《黄鹤楼》",
                value: "黄鹤楼有关诗词"
              },
              {
                source: "历代吟诵",
                target: "《黄鹤楼送孟浩然之广陵》",
                value: "黄鹤楼诗篇"
              },
              {
                source: "李白",
                target: "《黄鹤楼送孟浩然之广陵》",
                value: "李白所做黄鹤楼诗篇"
              },
              {
                source: "李白",
                target: "崔颢",
                value: "诗人",
                symbol: ["arrow", "arrow"]
              },
              {
                source: "黄鹤楼",
                target: "传说",
                value: "黄鹤楼有关传说"
              },
              {
                source: "黄鹤楼",
                target: "历代吟诵",
                value: "黄鹤楼诗词歌赋"
              },
              {
                source: "传说",
                target: "《齐谐志》",
                value: "黄鹤楼传说"
              },
              {
                source: "传说",
                target: "《述异记》",
                value: "黄鹤楼传说"
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
