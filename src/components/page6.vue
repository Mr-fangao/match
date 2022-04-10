<template>
  <div id="relations">
    <div id="relation" style="width: 70%; height: 90%"></div>
    <div class="right">
      <div class="gjd">
        <el-row :gutter="20">
          <el-col :span="6"><span>根节点:</span></el-col>
          <el-col :span="18">
            <div class="grid-content bg-specially">
              <div class="tab">
                <el-select v-model="value1" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options1"
                    :key="item.value1"
                    :label="item.label1"
                    :value="item.value1"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><span>过滤条件:</span></el-col>
          <el-col :span="9">
            <div class="grid-content bg-specially">
              <div class="tab">
                <el-select v-model="value2" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options2"
                    :key="item.value2"
                    :label="item.label2"
                    :value="item.value2"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="grid-content bg-specially">
              <div class="tab">
                <el-input v-model="input1" placeholder=" 输入内容"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="cjd">
        <el-row :gutter="20">
          <el-col :span="6"><span>次节点:</span></el-col>
          <el-col :span="18">
            <div class="grid-content bg-specially">
              <div class="tab">
                <el-select v-model="value3" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options3"
                    :key="item.value3"
                    :label="item.label3"
                    :value="item.value3"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><span>过滤条件:</span></el-col>
          <el-col :span="9">
            <div class="grid-content bg-specially">
              <div class="tab">
                <el-select v-model="value4" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options4"
                    :key="item.value4"
                    :label="item.label4"
                    :value="item.value4"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="grid-content bg-specially">
              <div class="tab">
                <el-input v-model="input2" placeholder=" 输入内容"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="zjd">
        <el-row :gutter="20">
          <el-col :span="6"><span>子节点:</span></el-col>
          <el-col :span="18">
            <div class="grid-content bg-specially">
              <div class="tab">
                <el-select v-model="value5" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options5"
                    :key="item.value5"
                    :label="item.label5"
                    :value="item.value5"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6"><span>过滤条件:</span></el-col>
          <el-col :span="9">
            <div class="grid-content bg-specially">
              <div class="tab">
                <el-select v-model="value6" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options6"
                    :key="item.value6"
                    :label="item.label6"
                    :value="item.value6"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="grid-content bg-specially">
              <div class="tab">
                <el-input v-model="input3" placeholder=" 输入内容"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="btn">
        <el-button @click="skanalysis()">开始分析</el-button
        ><el-button @click="clear()">重置选择</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "relationGraph",
  data() {
    return {
      data1: [
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
        },
        {
          name: "安徽财经大学",
        },
        // {
        //   name: "安徽师范大学",
        // },
        // {
        //   name: "阜阳师范大学",
        // },
        {
          name: "安徽大学",
        },
        {
          name: "安徽工程大学",
        },
        {
          name: "安徽建筑大学",
        },
        // {
        //   name: "安徽理工大学",
        // },
        // {
        //   name: "安徽医科大学",
        // },
        // {
        //   name: "安徽中医药大学",
        // },
        // {
        //   name: "巢湖学院",
        // },
        // {
        //   name: "池州学院",
        // },
        // {
        //   name: "合肥工业大学",
        // },
        // {
        //   name: "黄山学院",
        // },
        // {
        //   name: "铜陵学院",
        //   label: {
        //     fontSize: 12,
        //   },
        // },
        // {
        //   name: "宿州学院",
        // },
        // {
        //   name: "安庆师范大学",
        // },
        // {
        //   name: "安徽农业大学",
        // },
        {
          name: "基于人工智能技术的安全帽识别系统",
          symbolSize: 50,
        },
        {
          name: "趣佳节",
          symbolSize: 50,
        },
        {
          name: "暮卷夕山",
          symbolcolor: "#f73989",
          symbolSize: 50,
        },
        {
          name: "基于深度学习的中文情感分析模型及应用",
          symbolSize: 50,
        },
        {
          name: "停课不停教，停课不停学——基于Web的安财疫情短期线上教学系统",
          symbolSize: 50,
        },
        {
          name: "艺廷小程序开发",
          symbolSize: 50,
        },
        {
          name: "沙画鸟鸣涧",
          symbolSize: 50,
        },
        {
          name: "朱鹮与人类",
          symbolSize: 50,
        },
        {
          name: "基于物联网的一体化污水处理设备设计",
          symbolSize: 50,
        },
        {
          name: "疫情期间空气质量变好了吗？",
          symbolSize: 50,
        },
        {
          name: "电商平台搜索广告转化率预测——基于梯度提升决策树模型的用户购买意向预估",
          symbolSize: 50,
        },
        {
          name: "繁华三千",
          symbolSize: 50,
        },
        {
          name: "诉",
          symbolSize: 50,
        },
        {
          name: "网易云音乐评论分析系统",
          symbolSize: 50,
        },
        {
          name: "基于堆栈算法的“蚁穴”机器人",
          symbolSize: 50,
        },
        {
          name: "朱鹮的独白",
          symbolSize: 50,
        },
        {
          name: "三千皖韵在其中",
          symbolSize: 50,
        },
        {
          name: "小岗村文化衍生品设计",
          symbolSize: 50,
          //color:'#f73989',
        },
        {
          name: "Photoshop赛博朋克风格调色教学",
          symbolSize: 50,
        },
        {
          name: "智能搜寻—基于RFID及LANDMARC三维定位算法的应用",
          symbolSize: 50,
        },
        {
          name: "基于Echarts的中国与世界疫情可视化",
          symbolSize: 50,
        },
        {
          name: "疫情视角下解析“淘宝口罩”供需对接现状——基于Python的数据可视化分析",
          symbolSize: 50,
        },
        {
          name: "世域揭览",
          symbolSize: 50,
        },
        {
          name: "武凌",
          symbolSize: 50,
        },
        {
          name: "常郝",
          symbolSize: 50,
        },
        {
          name: "根据微博热搜数据探索疫情对民众舆论导向影响的预测",
          symbolSize: 50,
        },
        {
          name: "醉入梨园",
          symbolSize: 50,
        },
        {
          name: "温酒斩华雄",
          symbolSize: 50,
        },
        {
          name: "鸟与人类：逃出生天",
          symbolSize: 50,
        },
        {
          name: "印鉴中国味",
          symbolSize: 50,
        },
        {
          name: "边塞诗歌的盛唐气象",
          symbolSize: 50,
        },
        {
          name: "黄山市野生毛茛科中草药科普",
          symbolSize: 50,
        },
        {
          name: "基于深度学习的心脏图像分析系统",
          symbolSize: 50,
        },
        {
          name: "橘中戏",
          symbolSize: 50,
        },
        {
          name: "穿越",
          symbolSize: 50,
        },
        {
          name: "贵池傩",
          symbolSize: 50,
        },
        {
          name: "溯羽",
          symbolSize: 50,
        },
        {
          name: "鸟博士拯救之旅",
          symbolSize: 50,
        },
        {
          name: "重归梦里桃源",
          symbolSize: 50,
        },
        {
          name: "花生与花生仁——中国传统家具与现代技术的结合",
          symbolSize: 50,
        },
        {
          name: "万物生",
          symbolSize: 50,
        },
        {
          name: "绿色小课堂之地球“肺”火中烧",
          symbolSize: 50,
        },
        {
          name: "科学旅途之杠杆原理",
          symbolSize: 50,
        },
        {
          name: "“将军饮马”数学模型——轴对称的应用",
          symbolSize: 50,
        },
        {
          name: "太行深处的香格里拉",
          symbolSize: 50,
        },
        {
          name: "人类与微生物的斗争-细菌病毒与杀菌技术的科普图表",
          symbolSize: 50,
        },
        {
          name: "基于足迹特征的人体健康状态评估",
          symbolSize: 50,
        },
        {
          name: "竹扇新风",
          symbolSize: 50,
        },
        {
          name: "枪响之后没有赢家",
          symbolSize: 50,
        },
        {
          name: "安大简×守护人计划",
          symbolSize: 50,
        },
        {
          name: "自然都市共融共生",
          symbolSize: 50,
        },
        {
          name: "安徽大学艺术学院公共空间改造",
          symbolSize: 50,
        },
        {
          name: "走过千年",
          symbolSize: 50,
        },
        {
          name: "基于Ai软件的名片绘制",
          symbolSize: 50,
        },
        {
          name: "哈哈小课堂之巴氏消毒法",
          symbolSize: 50,
        },
        {
          name: "基于大数据的高校贴吧舆情分析系统",
          symbolSize: 50,
        },
        {
          name: "徽程立知-面向安徽工程大学的垂直搜索引擎",
          symbolSize: 50,
        },
        {
          name: "宣纸——纸润千年",
          symbolSize: 50,
        },
        {
          name: "SaveBirds",
          symbolSize: 50,
        },
        {
          name: "基于大数据分析的动画电影内容创作",
          symbolSize: 50,
        },
        {
          name: "智慧校园生活信息门户",
          symbolSize: 50,
        },
        {
          name: "Planet：BirdRescue",
          symbolSize: 50,
        },
        {
          name: "历史年轮上的汉字",
          symbolSize: 50,
        },
        {
          name: "智能快递取件系统",
          symbolSize: 50,
        },
        {
          name: "基于Angular的疫情可视化网站",
          symbolSize: 50,
        },
        {
          name: "安徽旅游知识图谱的构建",
          symbolSize: 50,
        },
        {
          name: "面向网格化管理的人脸识别测温打卡系统",
          symbolSize: 50,
        },
        {
          name: "秦韵生肖",
          symbolSize: 50,
        },
        {
          name: "时代中国",
          symbolSize: 50,
        },
        {
          name: "基于计算机仿真设计无人机",
          symbolSize: 50,
        },
        {
          name: "智能寝室系统设计",
          symbolSize: 50,
        },
        {
          name: "MC-Fashion",
          symbolSize: 50,
        },
        {
          name: "非遗文化宣纸工艺传承",
          symbolSize: 50,
        },

        {
          name: "生死牌",
          symbolSize: 50,
        },
        {
          name: "镜花缘之两面国",
          symbolSize: 50,
        },
        {
          name: "豆腐的前世今生",
          symbolSize: 50,
        },
        {
          name: "云.山.茶.东方映像",
          symbolSize: 50,
        },
        {
          name: "简拍",
          symbolSize: 50,
        },
        {
          name: "黄小丽战记",
          symbolSize: 50,
        },
        {
          name: "古井寻酿",
          symbolSize: 50,
        },
        {
          name: "栖语",
          symbolSize: 50,
        },
        {
          name: "追光者（SeekLight）",
          symbolSize: 50,
        },
        {
          name: "智能火灾人员搜寻车",
          symbolSize: 50,
        },
        {
          name: "仰望苍穹归鹤人",
          symbolSize: 50,
        },
        {
          name: "迩听山语-合肥蜀山社区群众公共文化交流空间改造设计",
          symbolSize: 50,
        },
        {
          name: "剪茶",
          symbolSize: 50,
        },
        {
          name: "寻酿徽州",
          symbolSize: 50,
        },
        {
          name: "香道",
          symbolSize: 50,
        },
        {
          name: "金寨·印影",
          symbolSize: 50,
        },

        {
          name: "杨灿灿",
          symbolSize: 50,
        },
        {
          name: "邓凯",
          symbolSize: 50,
        },
        {
          name: "陈海宝",
          symbolSize: 50,
        },
        {
          name: "赵玉艳",
          symbolSize: 50,
        },

        {
          name: "李振洋",
          symbolSize: 50,
        },
        {
          name: "施韵佳",
          symbolSize: 50,
        },
        {
          name: "潘宏",
          symbolSize: 50,
        },
        {
          name: "冷荣亮",
          symbolSize: 50,
        },
        {
          name: "陈一笑",
          symbolSize: 50,
        },
        {
          name: "叶涛",
          symbolSize: 50,
        },
        {
          name: "刘竞遥",
          symbolSize: 50,
        },
        {
          name: "胡晓静",
          symbolSize: 50,
        },
        {
          name: "赵亚飞",
          symbolSize: 50,
        },
        {
          name: "张丽惠",
          symbolSize: 50,
        },
        {
          name: "甘翔",
          symbolSize: 50,
        },
        {
          name: "张悦",
          symbolSize: 50,
        },
        {
          name: "吴玉",
          symbolSize: 50,
        },
        {
          name: "左铁峰",
          symbolSize: 50,
        },
        {
          name: "朱金鑫",
          symbolSize: 50,
        },
        {
          name: "张巧云",
          symbolSize: 50,
        },
        {
          name: "刘国秀",
          symbolSize: 50,
        },
        {
          name: "何君洁",
          symbolSize: 50,
        },
        {
          name: "于春燕",
          symbolSize: 50,
        },
        {
          name: "马良",
          symbolSize: 50,
        },
        {
          name: "徐志红",
          symbolSize: 50,
        },
        {
          name: "陈芳",
          symbolSize: 50,
        },
        {
          name: "董再秀",
          symbolSize: 50,
        },
        {
          name: "方纯",
          symbolSize: 50,
        },
        {
          name: "赵生慧",
          symbolSize: 50,
        },
        {
          name: "董锐",
          symbolSize: 50,
        },
        {
          name: "温卫敏",
          symbolSize: 50,
        },
        {
          name: "金亮",
          symbolSize: 50,
        },
        {
          name: "赵亮",
          symbolSize: 50,
        },
        {
          name: "刘进军",
          symbolSize: 50,
        },
        {
          name: "季璇",
          symbolSize: 50,
        },
        {
          name: "吴豹",
          symbolSize: 50,
        },
        {
          name: "孙勇",
          symbolSize: 50,
        },
        {
          name: "崔华国",
          symbolSize: 50,
        },
        {
          name: "申思达",
          symbolSize: 50,
        },
        {
          name: "孙凯传",
          symbolSize: 50,
        },
        {
          name: "郑娟",
          symbolSize: 50,
        },
        {
          name: "邵雪梅",
          symbolSize: 50,
        },
        {
          name: "高来鑫",
          symbolSize: 50,
        },
        {
          name: "张珂",
          symbolSize: 50,
        },
        {
          name: "李玲纯",
          symbolSize: 50,
        },
        {
          name: "金灿",
          symbolSize: 50,
        },

        {
          name: "撒后余",
          symbolSize: 50,
        },

        {
          name: "COVID-19疫情多尺度智能监控与预警系统",
          symbolSize: 50,
        },
        {
          name: "基于机器学习的恶意PE文件检测系统",
          symbolSize: 50,
        },
        {
          name: "化茧成蝶",
          symbolSize: 50,
        },
        {
          name: "锦绣金陵",
          symbolSize: 50,
        },
        {
          name: "髹漆成器",
          symbolSize: 50,
        },
        {
          name: "纸艺刻韵",
          symbolSize: 50,
        },
        {
          name: "青铜器·铸",
          symbolSize: 50,
        },
        {
          name: "刻意江南",
          symbolSize: 50,
        },
        {
          name: "中华原酿-薪火相传",
          symbolSize: 50,
        },
        {
          name: "十二生肖",
          symbolSize: 50,
        },
        {
          name: "鼓起凤鸣",
          symbolSize: 50,
        },
        {
          name: "洄锦充电桩",
          symbolSize: 50,
        },
        {
          name: "如鱼得水——窗花造型直饮机设计",
          symbolSize: 50,
        },
        {
          name: "滁州十二景",
          symbolSize: 50,
        },
        {
          name: "十二生肖数字插画",
          symbolSize: 50,
        },
        {
          name: "泥土涅槃",
          symbolSize: 50,
        },
        {
          name: "醉翁亭与欧阳修系列故事",
          symbolSize: 50,
        },
        {
          name: "大话数据库之概念模型",
          symbolSize: 50,
        },
        {
          name: "话说5G",
          symbolSize: 50,
        },
        {
          name: "基于vue滁州市环境污染分析系统",
          symbolSize: 50,
        },
        {
          name: "基于大数据的疫情数据分析系统",
          symbolSize: 50,
        },
        {
          name: "基于Spark的国际足球数据分析系统",
          symbolSize: 50,
        },
        {
          name: "冬去春来",
          symbolSize: 50,
        },
        {
          name: "基于眼球定位的翻书系统",
          symbolSize: 50,
        },
        {
          name: "SmartAgent基于AI的社区老人生活辅助系统",
          symbolSize: 50,
        },
        {
          name: "AA-校园拼游网",
          symbolSize: 50,
        },
        {
          name: "安徽省县域农村精准扶贫空间分析系统",
          symbolSize: 50,
        },
        {
          name: "ResC资源回收服务系统",
          symbolSize: 50,
        },
        {
          name: "健康帮扶系统",
          symbolSize: 50,
        },
        {
          name: "面向实时共享出行的网约车智能调度系统",
          symbolSize: 50,
        },
        {
          name: "色影·梦桥相会",
          symbolSize: 50,
        },
        {
          name: "晋中醯",
          symbolSize: 50,
        },
        {
          name: "百年宏音-笙乐天成",
          symbolSize: 50,
        },
        {
          name: "琅琊遇醉翁",
          symbolSize: 50,
        },
        {
          name: "小城春节",
          symbolSize: 50,
        },
        {
          name: "国学趣学",
          symbolSize: 50,
        },
        {
          name: "颂经典-扬文化",
          symbolSize: 50,
        },
        {
          name: "纸卷打印机",
          symbolSize: 50,
        },
        {
          name: "车王村景观规划",
          symbolSize: 50,
        },
        {
          name: "铜胎掐丝珐琅之美",
          symbolSize: 50,
        },
        {
          name: "南宋风华",
          symbolSize: 50,
        },
        {
          name: "从军行·其四赏析",
          symbolSize: 50,
        },
        {
          name: "青少年管家--智能书桌系统",
          symbolSize: 50,
        },
        {
          name: "脑电控制的FeedingRobot",
          symbolSize: 50,
        },
        {
          name: "基于flask和ajax的糖尿病数据可视化平台",
          symbolSize: 50,
        },
        {
          name: "基于JavaWeb与ECharts的疫情数据可视化系统",
          symbolSize: 50,
        },
        {
          name: "榫卯建筑·阴阳相生",
          symbolSize: 50,
        },
        {
          name: "基于ELK和Kafka的Web日志实时分析系统",
          symbolSize: 50,
        },
        {
          name: "星火",
          symbolSize: 50,
        },
        {
          name: "小咕咚睡前故事屋",
          symbolSize: 50,
        },
        {
          name: "雨霖铃",
          symbolSize: 50,
        },
        {
          name: "欧梅亭韵",
          symbolSize: 50,
        },
        {
          name: "素釉·彩韵流芳",
          symbolSize: 50,
        },
        {
          name: "金石志",
          symbolSize: 50,
        },
        {
          name: "守艺",
          symbolSize: 50,
        },
        {
          name: "传艺承情",
          symbolSize: 50,
        },
        {
          name: "speed",
          symbolSize: 50,
        },
        {
          name: "匠心传承，食在民间",
          symbolSize: 50,
        },
        {
          name: "时间序列",
          symbolSize: 50,
        },
        {
          name: "青玉案.元夕",
          symbolSize: 50,
        },
        {
          name: "唐宋古韵微课",
          symbolSize: 50,
        },
        {
          name: "“影子”的秘密",
          symbolSize: 50,
        },
        {
          name: "帮帮盲",
          symbolSize: 50,
        },
        {
          name: "基于脑机接口的智能轮椅",
          symbolSize: 50,
        },
        {
          name: "基于滁州养老数据的可视化展示",
          symbolSize: 50,
        },
        {
          name: "基于NLP实现社会舆情分析与数据可视化",
          symbolSize: 50,
        },
      ],
      links1: [
        {
          source: "中国大学生计算机设计大赛",
          target: "安徽财经大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "安徽大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "安徽工程大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "安徽建筑大学",
          value: "获奖学校",
        },

        {
          source: "中国大学生计算机设计大赛",
          target: "安徽理工大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "安徽外国语学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "安徽医科大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "安徽中医药大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "蚌埠学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "蚌埠医学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "亳州学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "巢湖学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "池州学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "合肥工业大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "合肥学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "淮北师范大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "黄山学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "铜陵学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "皖南医学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "皖西学院",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "宿州学院",
          value: "获奖学校",
        },
        // {
        //   source: "中国大学生计算机设计大赛",
        //   target: "安徽师范大学",
        //   value: "获奖学校",
        // },
        {
          source: "中国大学生计算机设计大赛",
          target: "阜阳师范大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "安庆师范大学",
          value: "获奖学校",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "安徽农业大学",
          value: "获奖学校",
        },
        {
          source: "安徽财经大学",
          target: "基于人工智能技术的安全帽识别系统",
          value: "一等奖",
        },
        {
          source: "安徽财经大学",
          target: "趣佳节",
          value: "一等奖",
        },
        {
          source: "安徽财经大学",
          target: "暮卷夕山",
          value: "二等奖",
        },
        {
          source: "安徽财经大学",
          target: "基于深度学习的中文情感分析模型及应用",
          value: "二等奖",
        },
        {
          source: "安徽财经大学",
          target: "停课不停教，停课不停学——基于Web的安财疫情短期线上教学系统",
          value: "二等奖",
        },
        {
          source: "安徽财经大学",
          target: "艺廷小程序开发",
          value: "二等奖",
        },
        {
          source: "安徽财经大学",
          target: "沙画鸟鸣涧",
          value: "二等奖",
        },
        {
          source: "安徽财经大学",
          target: "朱鹮与人类",
          value: "二等奖",
        },
        {
          source: "安徽财经大学",
          target: "基于物联网的一体化污水处理设备设计",
          value: "二等奖",
        },
        {
          source: "安徽财经大学",
          target: "疫情期间空气质量变好了吗？",
          value: "二等奖",
        },
        {
          source: "安徽财经大学",
          target:
            "电商平台搜索广告转化率预测——基于梯度提升决策树模型的用户购买意向预估",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "繁华三千",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "诉",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "网易云音乐评论分析系统",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "基于堆栈算法的“蚁穴”机器人",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "朱鹮的独白",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "三千皖韵在其中",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "小岗村文化衍生品设计",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "Photoshop赛博朋克风格调色教学",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "智能搜寻—基于RFID及LANDMARC三维定位算法的应用",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "基于Echarts的中国与世界疫情可视化",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target:
            "疫情视角下解析“淘宝口罩”供需对接现状——基于Python的数据可视化分析",
          value: "三等奖",
        },
        {
          source: "安徽财经大学",
          target: "世域揭览",
          value: "三等奖",
        },
        {
          source: "基于人工智能技术的安全帽识别系统",
          target: "武凌",
          value: "指导教师",
        },
        {
          source: "基于Echarts的中国与世界疫情可视化",
          target: "武凌",
          value: "指导教师",
        },
        {
          source: "基于人工智能技术的安全帽识别系统",
          target: "常郝",
          value: "指导教师",
        },
        {
          source: "安徽大学",
          target: "根据微博热搜数据探索疫情对民众舆论导向影响的预测",
          value: "一等奖",
        },
        {
          source: "安徽大学",
          target: "醉入梨园",
          value: "一等奖",
        },
        {
          source: "安徽大学",
          target: "温酒斩华雄",
          value: "一等奖",
        },
        {
          source: "安徽大学",
          target: "鸟与人类：逃出生天",
          value: "一等奖",
        },
        {
          source: "安徽大学",
          target: "印鉴中国味",
          value: "一等奖",
        },
        {
          source: "安徽大学",
          target: "边塞诗歌的盛唐气象",
          value: "一等奖",
        },
        {
          source: "安徽大学",
          target: "黄山市野生毛茛科中草药科普",
          value: "一等奖",
        },
        {
          source: "安徽大学",
          target: "基于深度学习的心脏图像分析系统",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "橘中戏",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "穿越",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "贵池傩",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "溯羽",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "鸟博士拯救之旅",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "重归梦里桃源",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "花生与花生仁——中国传统家具与现代技术的结合",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "万物生",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "绿色小课堂之地球“肺”火中烧",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "科学旅途之杠杆原理",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "“将军饮马”数学模型——轴对称的应用",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "太行深处的香格里拉",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "人类与微生物的斗争-细菌病毒与杀菌技术的科普图表",
          value: "二等奖",
        },
        {
          source: "安徽大学",
          target: "基于足迹特征的人体健康状态评估",
          value: "三等奖",
        },
        {
          source: "安徽大学",
          target: "竹扇新风",
          value: "三等奖",
        },
        {
          source: "安徽大学",
          target: "枪响之后没有赢家",
          value: "三等奖",
        },
        {
          source: "安徽大学",
          target: "安大简×守护人计划",
          value: "三等奖",
        },
        {
          source: "安徽大学",
          target: "自然都市共融共生",
          value: "三等奖",
        },
        {
          source: "安徽大学",
          target: "安徽大学艺术学院公共空间改造",
          value: "三等奖",
        },
        {
          source: "安徽大学",
          target: "走过千年",
          value: "三等奖",
        },
        {
          source: "安徽大学",
          target: "基于Ai软件的名片绘制",
          value: "三等奖",
        },
        {
          source: "安徽大学",
          target: "哈哈小课堂之巴氏消毒法",
          value: "三等奖",
        },
        {
          source: "安徽工程大学",
          target: "基于大数据的高校贴吧舆情分析系统",
          value: "一等奖",
        },
        {
          source: "安徽工程大学",
          target: "徽程立知-面向安徽工程大学的垂直搜索引擎",
          value: "一等奖",
        },
        {
          source: "安徽工程大学",
          target: "宣纸——纸润千年",
          value: "一等奖",
        },
        {
          source: "安徽工程大学",
          target: "SaveBirds",
          value: "一等奖",
        },
        {
          source: "安徽工程大学",
          target: "基于大数据分析的动画电影内容创作",
          value: "二等奖",
        },
        {
          source: "安徽工程大学",
          target: "智慧校园生活信息门户",
          value: "二等奖",
        },
        {
          source: "安徽工程大学",
          target: "Planet：BirdRescue",
          value: "二等奖",
        },
        {
          source: "安徽工程大学",
          target: "历史年轮上的汉字",
          value: "二等奖",
        },
        {
          source: "安徽工程大学",
          target: "智能快递取件系统",
          value: "二等奖",
        },
        {
          source: "安徽工程大学",
          target: "基于Angular的疫情可视化网站",
          value: "二等奖",
        },
        {
          source: "安徽工程大学",
          target: "安徽旅游知识图谱的构建",
          value: "三等奖",
        },
        {
          source: "安徽工程大学",
          target: "面向网格化管理的人脸识别测温打卡系统",
          value: "三等奖",
        },
        {
          source: "安徽工程大学",
          target: "秦韵生肖",
          value: "三等奖",
        },
        {
          source: "安徽工程大学",
          target: "时代中国",
          value: "三等奖",
        },
        {
          source: "安徽工程大学",
          target: "基于计算机仿真设计无人机",
          value: "三等奖",
        },
        {
          source: "安徽工程大学",
          target: "智能寝室系统设计",
          value: "三等奖",
        },
        {
          source: "安徽工程大学",
          target: "MC-Fashion",
          value: "三等奖",
        },
        {
          source: "安徽工程大学",
          target: "非遗文化宣纸工艺传承",
          value: "三等奖",
        },

        {
          source: "安徽建筑大学",
          target: "生死牌",
          value: "一等奖",
        },
        {
          source: "安徽建筑大学",
          target: "镜花缘之两面国",
          value: "一等奖",
        },
        {
          source: "安徽建筑大学",
          target: "豆腐的前世今生",
          value: "一等奖",
        },
        {
          source: "安徽建筑大学",
          target: "云.山.茶.东方映像",
          value: "一等奖",
        },
        {
          source: "安徽建筑大学",
          target: "简拍",
          value: "二等奖",
        },
        {
          source: "安徽建筑大学",
          target: "黄小丽战记",
          value: "二等奖",
        },
        {
          source: "安徽建筑大学",
          target: "古井寻酿",
          value: "二等奖",
        },
        {
          source: "安徽建筑大学",
          target: "栖语",
          value: "二等奖",
        },
        {
          source: "安徽建筑大学",
          target: "追光者（SeekLight）",
          value: "二等奖",
        },
        {
          source: "安徽建筑大学",
          target: "智能火灾人员搜寻车",
          value: "二等奖",
        },
        {
          source: "安徽建筑大学",
          target: "仰望苍穹归鹤人",
          value: "三等奖",
        },
        {
          source: "安徽建筑大学",
          target: "迩听山语-合肥蜀山社区群众公共文化交流空间改造设计",
          value: "三等奖",
        },
        {
          source: "安徽建筑大学",
          target: "剪茶",
          value: "三等奖",
        },
        {
          source: "安徽建筑大学",
          target: "寻酿徽州",
          value: "三等奖",
        },
        {
          source: "安徽建筑大学",
          target: "香道",
          value: "三等奖",
        },
        {
          source: "安徽建筑大学",
          target: "金寨·印影",
          value: "三等奖",
        },
        {
          source: "中国大学生计算机设计大赛",
          target: "滁州学院",
          value: "参赛学校",
        },
        {
          source: "滁州学院",
          target: "COVID-19疫情多尺度智能监控与预警系统",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "基于机器学习的恶意PE文件检测系统",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "化茧成蝶",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "锦绣金陵",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "髹漆成器",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "纸艺刻韵",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "青铜器·铸",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "刻意江南",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "中华原酿-薪火相传",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "十二生肖",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "COVID-19疫情多尺度智能监控与预警系统",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "基于机器学习的恶意PE文件检测系统",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "化茧成蝶",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "锦绣金陵",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "髹漆成器",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "纸艺刻韵",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "青铜器·铸",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "刻意江南",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "中华原酿-薪火相传",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "十二生肖",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "鼓起凤鸣",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "洄锦充电桩",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "如鱼得水——窗花造型直饮机设计",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "滁州十二景",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "十二生肖数字插画",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "泥土涅槃",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "醉翁亭与欧阳修系列故事",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "大话数据库之概念模型",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "话说5G",
          value: "一等奖",
        },
        {
          source: "滁州学院",
          target: "基于vue滁州市环境污染分析系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "基于大数据的疫情数据分析系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "基于Spark的国际足球数据分析系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "冬去春来",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "基于眼球定位的翻书系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "SmartAgent基于AI的社区老人生活辅助系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "AA-校园拼游网",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "安徽省县域农村精准扶贫空间分析系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "ResC资源回收服务系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "健康帮扶系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "面向实时共享出行的网约车智能调度系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "色影·梦桥相会",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "晋中醯",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "百年宏音-笙乐天成",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "琅琊遇醉翁",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "小城春节",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "国学趣学",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "颂经典-扬文化",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "纸卷打印机",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "车王村景观规划",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "铜胎掐丝珐琅之美",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "南宋风华",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "从军行·其四赏析",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "青少年管家--智能书桌系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "脑电控制的FeedingRobot",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "基于flask和ajax的糖尿病数据可视化平台",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "基于JavaWeb与ECharts的疫情数据可视化系统",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "榫卯建筑·阴阳相生",
          value: "二等奖",
        },
        {
          source: "滁州学院",
          target: "基于ELK和Kafka的Web日志实时分析系统",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "星火",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "小咕咚睡前故事屋",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "雨霖铃",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "欧梅亭韵",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "素釉·彩韵流芳",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "金石志",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "守艺",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "传艺承情",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "speed",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "匠心传承，食在民间",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "时间序列",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "青玉案.元夕",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "唐宋古韵微课",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "“影子”的秘密",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "帮帮盲",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "基于脑机接口的智能轮椅",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "“育婴帮”智能照护系统",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "基于滁州养老数据的可视化展示",
          value: "三等奖",
        },
        {
          source: "滁州学院",
          target: "基于NLP实现社会舆情分析与数据可视化",
          value: "三等奖",
        },
        {
          source: "COVID-19疫情多尺度智能监控与预警系统",
          target: "邓凯",
          value: "指导教师",
        },
        {
          source: "COVID-19疫情多尺度智能监控与预警系统",
          target: "杨灿灿",
          value: "指导教师",
        },
        {
          source: "基于机器学习的恶意PE文件检测系统",
          target: "陈海宝",
          value: "指导教师",
        },
        {
          source: "基于机器学习的恶意PE文件检测系统",
          target: "赵玉艳",
          value: "指导教师",
        },
        {
          source: "化茧成蝶",
          target: "李振洋",
          value: "指导教师",
        },
        {
          source: "化茧成蝶",
          target: "撒后余",
          value: "指导教师",
        },
        {
          source: "锦绣金陵",
          target: "施韵佳",
          value: "指导教师",
        },
        {
          source: "锦绣金陵",
          target: "潘宏",
          value: "指导教师",
        },
        {
          source: "髹漆成器",
          target: "冷荣亮",
          value: "指导教师",
        },
        {
          source: "纸艺刻韵",
          target: "冷荣亮",
          value: "指导教师",
        },
        {
          source: "青铜器·铸",
          target: "陈一笑",
          value: "指导教师",
        },
        {
          source: "青铜器·铸",
          target: "叶涛",
          value: "指导教师",
        },
        {
          source: "刻意江南",
          target: "李振洋",
          value: "指导教师",
        },
        {
          source: "刻意江南",
          target: "施韵佳",
          value: "指导教师",
        },
        {
          source: "中华原酿-薪火相传",
          target: "刘竞遥",
          value: "指导教师",
        },
        {
          source: "中华原酿-薪火相传",
          target: "胡晓静",
          value: "指导教师",
        },
        {
          source: "十二生肖",
          target: "赵亚飞",
          value: "指导教师",
        },
        {
          source: "十二生肖",
          target: "张丽惠",
          value: "指导教师",
        },
        {
          source: "鼓起凤鸣",
          target: "张悦",
          value: "指导教师",
        },
        {
          source: "鼓起凤鸣",
          target: "甘翔",
          value: "指导教师",
        },
        {
          source: "洄锦充电桩",
          target: "左铁峰",
          value: "指导教师",
        },
        {
          source: "洄锦充电桩",
          target: "吴玉",
          value: "指导教师",
        },
        {
          source: "如鱼得水——窗花造型直饮机设计",
          target: "甘翔",
          value: "指导教师",
        },
        {
          source: "滁州十二景",
          target: "叶涛",
          value: "指导教师",
        },
        {
          source: "滁州十二景",
          target: "冷荣亮",
          value: "指导教师",
        },
        {
          source: "十二生肖数字插画",
          target: "朱金鑫",
          value: "指导教师",
        },
        {
          source: "泥土涅槃",
          target: "刘国秀",
          value: "指导教师",
        },
        {
          source: "泥土涅槃",
          target: "张巧云",
          value: "指导教师",
        },
        {
          source: "醉翁亭与欧阳修系列故事",
          target: "何君洁",
          value: "指导教师",
        },
        {
          source: "大话数据库之概念模型",
          target: "于春燕",
          value: "指导教师",
        },
        {
          source: "大话数据库之概念模型",
          target: "马良",
          value: "指导教师",
        },
        {
          source: "话说5G",
          target: "徐志红",
          value: "指导教师",
        },
        {
          source: "话说5G",
          target: "徐志红",
          value: "指导教师",
        },
        {
          source: "基于vue滁州市环境污染分析系统",
          target: "陈芳",
          value: "指导教师",
        },
        {
          source: "基于vue滁州市环境污染分析系统",
          target: "刘国秀",
          value: "指导教师",
        },
        {
          source: "基于大数据的疫情数据分析系统",
          target: "方纯",
          value: "指导教师",
        },
        {
          source: "基于大数据的疫情数据分析系统",
          target: "董再秀",
          value: "指导教师",
        },
        {
          source: "基于Spark的国际足球数据分析系统",
          target: "赵生慧",
          value: "指导教师",
        },
        {
          source: "基于Spark的国际足球数据分析系统",
          target: "陈海宝",
          value: "指导教师",
        },
        {
          source: "冬去春来",
          target: "郭雪燕",
          value: "指导教师",
        },
        {
          source: "冬去春来",
          target: "董锐",
          value: "指导教师",
        },
        {
          source: "基于眼球定位的翻书系统",
          target: "金亮",
          value: "指导教师",
        },
        {
          source: "基于眼球定位的翻书系统",
          target: "温卫敏",
          value: "指导教师",
        },
        {
          source: "SmartAgent基于AI的社区老人生活辅助系统",
          target: "刘进军",
          value: "指导教师",
        },
        {
          source: "SmartAgent基于AI的社区老人生活辅助系统",
          target: "赵亮",
          value: "指导教师",
        },
        {
          source: "AA-校园拼游网",
          target: "吴豹",
          value: "指导教师",
        },
        {
          source: "AA-校园拼游网",
          target: "刘竞遥",
          value: "指导教师",
        },
        {
          source: "安徽省县域农村精准扶贫空间分析系统",
          target: "杨灿灿",
          value: "指导教师",
        },
        {
          source: "安徽省县域农村精准扶贫空间分析系统",
          target: "邓凯",
          value: "指导教师",
        },
        {
          source: "ResC资源回收服务系统",
          target: "季璇",
          value: "指导教师",
        },
        {
          source: "ResC资源回收服务系统",
          target: "刘竞遥",
          value: "指导教师",
        },
        {
          source: "健康帮扶系统",
          target: "吴豹",
          value: "指导教师",
        },
        {
          source: "健康帮扶系统",
          target: "刘竞遥",
          value: "指导教师",
        },
        {
          source: "面向实时共享出行的网约车智能调度系统",
          target: "孙勇",
          value: "指导教师",
        },
        {
          source: "色影·梦桥相会",
          target: "潘宏",
          value: "指导教师",
        },
        {
          source: "色影·梦桥相会",
          target: "崔华国",
          value: "指导教师",
        },
        {
          source: "晋中醯",
          target: "崔华国",
          value: "指导教师",
        },
        {
          source: "晋中醯",
          target: "申思达",
          value: "指导教师",
        },
        {
          source: "百年宏音-笙乐天成",
          target: "潘宏",
          value: "指导教师",
        },
        {
          source: "百年宏音-笙乐天成",
          target: "申思达",
          value: "指导教师",
        },
        {
          source: "琅琊遇醉翁",
          target: "孙凯传",
          value: "指导教师",
        },
        {
          source: "琅琊遇醉翁",
          target: "吴豹",
          value: "指导教师",
        },
        {
          source: "小城春节",
          target: "郑娟",
          value: "指导教师",
        },
        {
          source: "小城春节",
          target: "吴豹",
          value: "指导教师",
        },
        {
          source: "国学趣学",
          target: "邵雪梅",
          value: "指导教师",
        },
        {
          source: "国学趣学",
          target: "孙凯传",
          value: "指导教师",
        },
        {
          source: "颂经典-扬文化",
          target: "李玲纯",
          value: "指导教师",
        },
        {
          source: "颂经典-扬文化",
          target: "高来鑫",
          value: "指导教师",
        },
        {
          source: "纸卷打印机",
          target: "左铁峰",
          value: "指导教师",
        },
        {
          source: "纸卷打印机",
          target: "吴玉",
          value: "指导教师",
        },
        {
          source: "车王村景观规划",
          target: "金灿",
          value: "指导教师",
        },
        {
          source: "车王村景观规划",
          target: "张珂",
          value: "指导教师",
        },
        {
          source: "铜胎掐丝珐琅之美",
          target: "叶涛",
          value: "指导教师",
        },
        {
          source: "铜胎掐丝珐琅之美",
          target: "陈一笑",
          value: "指导教师",
        },

        // {
        //   source: "铜陵学院",
        //   target: "安徽师范大学",
        //   value: "记载",
        // },
      ],
      data2: [
        {
          name: "滁州学院",
          symbolSize: 100,
          //节点图形的样式
          itemStyle: {
            color: "#5faee3",
          },
        },
        {
          name: "杨灿灿",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "邓凯",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "陈海宝",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "赵玉艳",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },

        {
          name: "李振洋",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "施韵佳",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "潘宏",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "冷荣亮",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "陈一笑",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "叶涛",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "刘竞遥",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "胡晓静",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "赵亚飞",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "张丽惠",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "甘翔",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "张悦",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "吴玉",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "左铁峰",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "朱金鑫",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "张巧云",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "刘国秀",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "何君洁",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "于春燕",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "马良",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "徐志红",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "陈芳",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "董再秀",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "方纯",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "赵生慧",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "董锐",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "温卫敏",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "金亮",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "赵亮",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "刘进军",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "季璇",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "吴豹",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "孙勇",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "崔华国",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "申思达",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "孙凯传",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "郑娟",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "邵雪梅",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "高来鑫",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "张珂",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "李玲纯",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "金灿",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "撒后余",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "任倩",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "王玉亮",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "陈杰",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "徐阳",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "沈晓",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "丁刚",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "赵亭",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "张静",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "江梅梅",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "任丽颖",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "郭华",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "张海洋",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "张志远",
          symbolSize: 80,
          itemStyle: {
            color: "#f4a460",
          },
        },
        {
          name: "COVID-19疫情多尺度智能监控与预警系统",
          symbolSize: 50,
        },
        {
          name: "基于机器学习的恶意PE文件检测系统",
          symbolSize: 50,
        },
        {
          name: "化茧成蝶",
          symbolSize: 50,
        },
        {
          name: "锦绣金陵",
          symbolSize: 50,
        },
        {
          name: "髹漆成器",
          symbolSize: 50,
        },
        {
          name: "纸艺刻韵",
          symbolSize: 50,
        },
        {
          name: "青铜器·铸",
          symbolSize: 50,
        },
        {
          name: "刻意江南",
          symbolSize: 50,
        },
        {
          name: "中华原酿-薪火相传",
          symbolSize: 50,
        },
        {
          name: "十二生肖",
          symbolSize: 50,
        },
        {
          name: "鼓起凤鸣",
          symbolSize: 50,
        },
        {
          name: "洄锦充电桩",
          symbolSize: 50,
        },
        {
          name: "如鱼得水——窗花造型直饮机设计",
          symbolSize: 50,
        },
        {
          name: "滁州十二景",
          symbolSize: 50,
        },
        {
          name: "十二生肖数字插画",
          symbolSize: 50,
        },
        {
          name: "泥土涅槃",
          symbolSize: 50,
        },
        {
          name: "醉翁亭与欧阳修系列故事",
          symbolSize: 50,
        },
        {
          name: "大话数据库之概念模型",
          symbolSize: 50,
        },
        {
          name: "话说5G",
          symbolSize: 50,
        },
        {
          name: "基于vue滁州市环境污染分析系统",
          symbolSize: 50,
        },
        {
          name: "基于大数据的疫情数据分析系统",
          symbolSize: 50,
        },
        {
          name: "基于Spark的国际足球数据分析系统",
          symbolSize: 50,
        },
        {
          name: "冬去春来",
          symbolSize: 50,
        },
        {
          name: "基于眼球定位的翻书系统",
          symbolSize: 50,
        },
        {
          name: "SmartAgent基于AI的社区老人生活辅助系统",
          symbolSize: 50,
        },
        {
          name: "AA-校园拼游网",
          symbolSize: 50,
        },
        {
          name: "安徽省县域农村精准扶贫空间分析系统",
          symbolSize: 50,
        },
        {
          name: "ResC资源回收服务系统",
          symbolSize: 50,
        },
        {
          name: "健康帮扶系统",
          symbolSize: 50,
        },
        {
          name: "面向实时共享出行的网约车智能调度系统",
          symbolSize: 50,
        },
        {
          name: "色影·梦桥相会",
          symbolSize: 50,
        },
        {
          name: "晋中醯",
          symbolSize: 50,
        },
        {
          name: "百年宏音-笙乐天成",
          symbolSize: 50,
        },
        {
          name: "琅琊遇醉翁",
          symbolSize: 50,
        },
        {
          name: "小城春节",
          symbolSize: 50,
        },
        {
          name: "国学趣学",
          symbolSize: 50,
        },
        {
          name: "颂经典-扬文化",
          symbolSize: 50,
        },
        {
          name: "纸卷打印机",
          symbolSize: 50,
        },
        {
          name: "车王村景观规划",
          symbolSize: 50,
        },
        {
          name: "铜胎掐丝珐琅之美",
          symbolSize: 50,
        },
        {
          name: "南宋风华",
          symbolSize: 50,
        },
        {
          name: "从军行·其四赏析",
          symbolSize: 50,
        },
        {
          name: "青少年管家--智能书桌系统",
          symbolSize: 50,
        },
        {
          name: "脑电控制的FeedingRobot",
          symbolSize: 50,
        },
        {
          name: "基于flask和ajax的糖尿病数据可视化平台",
          symbolSize: 50,
        },
        {
          name: "基于JavaWeb与ECharts的疫情数据可视化系统",
          symbolSize: 50,
        },
        {
          name: "榫卯建筑·阴阳相生",
          symbolSize: 50,
        },
        {
          name: "基于ELK和Kafka的Web日志实时分析系统",
          symbolSize: 50,
        },
        {
          name: "星火",
          symbolSize: 50,
        },
        {
          name: "小咕咚睡前故事屋",
          symbolSize: 50,
        },
        {
          name: "雨霖铃",
          symbolSize: 50,
        },
        {
          name: "欧梅亭韵",
          symbolSize: 50,
        },
        {
          name: "素釉·彩韵流芳",
          symbolSize: 50,
        },
        {
          name: "金石志",
          symbolSize: 50,
        },
        {
          name: "守艺",
          symbolSize: 50,
        },
        {
          name: "传艺承情",
          symbolSize: 50,
        },
        // {
        //   name: "speed",
        //   symbolSize: 50,
        // },
        // {
        //   name: "匠心传承，食在民间",
        //   symbolSize: 50,
        // },
        // {
        //   name: "时间序列",
        //   symbolSize: 50,
        // },
        // {
        //   name: "青玉案.元夕",
        //   symbolSize: 50,
        // },
        // {
        //   name: "唐宋古韵微课",
        //   symbolSize: 50,
        // },
        // {
        //   name: "“影子”的秘密",
        //   symbolSize: 50,
        // },
        // {
        //   name: "帮帮盲",
        //   symbolSize: 50,
        // },
        // {
        //   name: "基于脑机接口的智能轮椅",
        //   symbolSize: 50,
        // },
        // {
        //   name: "基于滁州养老数据的可视化展示",
        //   symbolSize: 50,
        // },
        // {
        //   name: "基于NLP实现社会舆情分析与数据可视化",
        //   symbolSize: 50,
        // },
      ],
      links2: [
        // {
        //   source: "中国大学生计算机设计大赛",
        //   target: "滁州学院",
        //   value: "参赛院校",
        // },
        {
          source: "滁州学院",
          target: "杨灿灿",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "邓凯",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "陈海宝",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "赵玉艳",
          value: "指导教师",
        },

        {
          source: "滁州学院",
          target: "李振洋",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "施韵佳",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "潘宏",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "冷荣亮",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "陈一笑",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "叶涛",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "刘竞遥",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "胡晓静",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "赵亚飞",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "张丽惠",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "甘翔",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "张悦",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "吴玉",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "左铁峰",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "朱金鑫",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "张巧云",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "刘国秀",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "何君洁",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "于春燕",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "马良",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "徐志红",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "陈芳",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "董再秀",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "方纯",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "赵生慧",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "董锐",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "温卫敏",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "金亮",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "赵亮",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "刘进军",
        },
        {
          source: "滁州学院",
          target: "季璇",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "吴豹",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "孙勇",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "崔华国",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "申思达",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "孙凯传",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "郑娟",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "邵雪梅",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "高来鑫",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "张珂",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "李玲纯",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "金灿",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "撒后余",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "任倩",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "王玉亮",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "陈杰",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "徐阳",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "沈晓",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "丁刚",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "赵亭",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "张静",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "江梅梅",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "任丽颖",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "郭华",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "张海洋",
          value: "指导教师",
        },
        {
          source: "滁州学院",
          target: "张志远",
          value: "指导教师",
        },
        {
          source: "邓凯",
          target: "COVID-19疫情多尺度智能监控与预警系统",
          value: "指导作品",
        },
        {
          source: "杨灿灿",
          target: "COVID-19疫情多尺度智能监控与预警系统",
          value: "指导作品",
        },
        {
          source: "陈海宝",
          target: "基于机器学习的恶意PE文件检测系统",
          value: "指导作品",
        },
        {
          source: "赵玉艳",
          target: "基于机器学习的恶意PE文件检测系统",
          value: "指导作品",
        },
        {
          source: "李振洋",
          target: "化茧成蝶",
          value: "指导作品",
        },
        {
          source: "撒后余",
          target: "化茧成蝶",
          value: "指导作品",
        },
        {
          source: "施韵佳",
          target: "锦绣金陵",
          value: "指导作品",
        },
        {
          source: "潘宏",
          target: "锦绣金陵",
          value: "指导作品",
        },
        {
          source: "冷荣亮",
          target: "髹漆成器",
          value: "指导作品",
        },
        {
          source: "冷荣亮",
          target: "纸艺刻韵",
          value: "指导作品",
        },
        {
          source: "陈一笑",
          target: "青铜器·铸",
          value: "指导作品",
        },
        {
          source: "叶涛",
          target: "青铜器·铸",
          value: "指导作品",
        },
        {
          source: "李振洋",
          target: "刻意江南",
          value: "指导作品",
        },
        {
          source: "施韵佳",
          target: "刻意江南",
          value: "指导作品",
        },
        {
          source: "刘竞遥",
          target: "中华原酿-薪火相传",
          value: "指导作品",
        },
        {
          source: "胡晓静",
          target: "中华原酿-薪火相传",
          value: "指导作品",
        },
        {
          source: "赵亚飞",
          target: "十二生肖",
          value: "指导作品",
        },
        {
          source: "张丽惠",
          target: "十二生肖",
          value: "指导作品",
        },
        {
          source: "张悦",
          target: "鼓起凤鸣",
          value: "指导作品",
        },
        {
          source: "甘翔",
          target: "鼓起凤鸣",
          value: "指导作品",
        },
        {
          source: "左铁峰",
          target: "洄锦充电桩",
          value: "指导作品",
        },
        {
          source: "吴玉",
          target: "洄锦充电桩",
          value: "指导作品",
        },
        {
          source: "甘翔",
          target: "如鱼得水——窗花造型直饮机设计",
          value: "指导作品",
        },
        {
          source: "叶涛",
          target: "滁州十二景",
          value: "指导作品",
        },
        {
          source: "冷荣亮",
          target: "滁州十二景",
          value: "指导作品",
        },
        {
          source: "朱金鑫",
          target: "十二生肖数字插画",
          value: "指导作品",
        },
        {
          source: "刘国秀",
          target: "泥土涅槃",
          value: "指导作品",
        },
        {
          source: "张巧云",
          target: "泥土涅槃",
          value: "指导作品",
        },
        {
          source: "何君洁",
          target: "醉翁亭与欧阳修系列故事",
          value: "指导作品",
        },
        {
          source: "于春燕",
          target: "大话数据库之概念模型",
          value: "指导作品",
        },
        {
          source: "马良",
          target: "大话数据库之概念模型",
          value: "指导作品",
        },
        {
          source: "徐志红",
          target: "话说5G",
          value: "指导作品",
        },
        {
          source: "徐志红",
          target: "话说5G",
          value: "指导作品",
        },
        {
          source: "陈芳",
          target: "基于vue滁州市环境污染分析系统",
          value: "指导作品",
        },
        {
          source: "刘国秀",
          target: "基于vue滁州市环境污染分析系统",
          value: "指导作品",
        },
        {
          source: "方纯",
          target: "基于大数据的疫情数据分析系统",
          value: "指导作品",
        },
        {
          source: "董再秀",
          target: "基于大数据的疫情数据分析系统",
          value: "指导作品",
        },
        {
          source: "赵生慧",
          target: "基于Spark的国际足球数据分析系统",
          value: "指导作品",
        },
        {
          source: "陈海宝",
          target: "基于Spark的国际足球数据分析系统",
          value: "指导作品",
        },
        {
          source: "郭雪燕",
          target: "冬去春来",
          value: "指导作品",
        },
        {
          source: "董锐",
          target: "冬去春来",
          value: "指导作品",
        },
        {
          source: "金亮",
          target: "基于眼球定位的翻书系统",
          value: "指导作品",
        },
        {
          source: "温卫敏",
          target: "基于眼球定位的翻书系统",
          value: "指导作品",
        },
        {
          source: "刘进军",
          target: "SmartAgent基于AI的社区老人生活辅助系统",
          value: "指导作品",
        },
        {
          source: "赵亮",
          target: "SmartAgent基于AI的社区老人生活辅助系统",
          value: "指导作品",
        },
        {
          source: "吴豹",
          target: "AA-校园拼游网",
          value: "指导作品",
        },
        {
          source: "刘竞遥",
          target: "AA-校园拼游网",
          value: "指导作品",
        },
        {
          source: "杨灿灿",
          target: "安徽省县域农村精准扶贫空间分析系统",
          value: "指导作品",
        },
        {
          source: "邓凯",
          target: "安徽省县域农村精准扶贫空间分析系统",
          value: "指导作品",
        },
        {
          source: "季璇",
          target: "ResC资源回收服务系统",
          value: "指导作品",
        },
        {
          source: "刘竞遥",
          target: "ResC资源回收服务系统",
          value: "指导作品",
        },
        {
          source: "吴豹",
          target: "健康帮扶系统",
          value: "指导作品",
        },
        {
          source: "刘竞遥",
          target: "健康帮扶系统",
          value: "指导作品",
        },
        {
          source: "孙勇",
          target: "面向实时共享出行的网约车智能调度系统",
          value: "指导作品",
        },
        {
          source: "潘宏",
          target: "色影·梦桥相会",
          value: "指导作品",
        },
        {
          source: "崔华国",
          target: "色影·梦桥相会",
          value: "指导作品",
        },
        {
          source: "崔华国",
          target: "晋中醯",
          value: "指导作品",
        },
        {
          source: "申思达",
          target: "晋中醯",
          value: "指导作品",
        },
        {
          source: "潘宏",
          target: "百年宏音-笙乐天成",
          value: "指导作品",
        },
        {
          source: "申思达",
          target: "百年宏音-笙乐天成",
          value: "指导作品",
        },
        {
          source: "孙凯传",
          target: "琅琊遇醉翁",
          value: "指导作品",
        },
        {
          source: "吴豹",
          target: "琅琊遇醉翁",
          value: "指导作品",
        },
        {
          source: "郑娟",
          target: "小城春节",
          value: "指导作品",
        },
        {
          source: "吴豹",
          target: "小城春节",
          value: "指导作品",
        },
        {
          source: "邵雪梅",
          target: "国学趣学",
          value: "指导作品",
        },
        {
          source: "孙凯传",
          target: "国学趣学",
          value: "指导作品",
        },
        {
          source: "李玲纯",
          target: "颂经典-扬文化",
          value: "指导作品",
        },
        {
          source: "高来鑫",
          target: "颂经典-扬文化",
          value: "指导作品",
        },
        {
          source: "左铁峰",
          target: "纸卷打印机",
          value: "指导作品",
        },
        {
          source: "吴玉",
          target: "纸卷打印机",
          value: "指导作品",
        },
        {
          source: "金灿",
          target: "车王村景观规划",
          value: "指导作品",
        },
        {
          source: "张珂",
          target: "车王村景观规划",
          value: "指导作品",
        },
        {
          source: "叶涛",
          target: "铜胎掐丝珐琅之美",
          value: "指导作品",
        },
        {
          source: "陈一笑",
          target: "铜胎掐丝珐琅之美",
          value: "指导作品",
        },
        {
          source: "刘竞遥",
          target: "南宋风华",
          value: "指导作品",
        },
        {
          source: "任倩",
          target: "南宋风华",
          value: "指导作品",
        },
        {
          source: "方纯",
          target: "从军行·其四赏析",
          value: "指导作品",
        },
        {
          source: "徐志红",
          target: "从军行·其四赏析",
          value: "指导作品",
        },
        {
          source: "王玉亮",
          target: "青少年管家--智能书桌系统",
          value: "指导作品",
        },
        {
          source: "吴豹",
          target: "青少年管家--智能书桌系统",
          value: "指导作品",
        },
        {
          source: "吴豹",
          target: "脑电控制的FeedingRobot",
          value: "指导作品",
        },
        {
          source: "温卫敏",
          target: "脑电控制的FeedingRobot",
          value: "指导作品",
        },
        {
          source: "陈海宝",
          target: "基于flask和ajax的糖尿病数据可视化平台",
          value: "指导作品",
        },
        {
          source: "陈杰",
          target: "基于flask和ajax的糖尿病数据可视化平台",
          value: "指导作品",
        },
        {
          source: "马良",
          target: "基于JavaWeb与ECharts的疫情数据可视化系统",
          value: "指导作品",
        },
        {
          source: "徐阳",
          target: "基于JavaWeb与ECharts的疫情数据可视化系统",
          value: "指导作品",
        },
        {
          source: "沈晓",
          target: "榫卯建筑·阴阳相生",
          value: "指导作品",
        },
        {
          source: "丁刚",
          target: "榫卯建筑·阴阳相生",
          value: "指导作品",
        },
        {
          source: "赵玉艳",
          target: "基于ELK和Kafka的Web日志实时分析系统",
          value: "指导作品",
        },
        {
          source: "赵亭",
          target: "基于ELK和Kafka的Web日志实时分析系统",
          value: "指导作品",
        },
        {
          source: "张静",
          target: "星火",
          value: "指导作品",
        },
        {
          source: "郭雪艳",
          target: "星火",
          value: "指导作品",
        },
        {
          source: "徐志红",
          target: "小咕咚睡前故事屋",
          value: "指导作品",
        },
        {
          source: "刘竞遥",
          target: "小咕咚睡前故事屋",
          value: "指导作品",
        },
        {
          source: "李振洋",
          target: "雨霖铃",
          value: "指导作品",
        },
        {
          source: "陈一笑",
          target: "雨霖铃",
          value: "指导作品",
        },
        {
          source: "冷荣亮",
          target: "欧梅亭韵",
          value: "指导作品",
        },
        {
          source: "申思达",
          target: "素釉·彩韵流芳",
          value: "指导作品",
        },
        {
          source: "潘宏",
          target: "素釉·彩韵流芳",
          value: "指导作品",
        },
        {
          source: "朱金鑫",
          target: "金石志",
          value: "指导作品",
        },
        {
          source: "申思达",
          target: "金石志",
          value: "指导作品",
        },
        {
          source: "金灿",
          target: "守艺",
          value: "指导作品",
        },
        {
          source: "吴玉",
          target: "守艺",
          value: "指导作品",
        },
        {
          source: "江梅梅",
          target: "传艺承情",
          value: "指导作品",
        },
        {
          source: "张悦",
          target: "传艺承情",
          value: "指导作品",
        },
      ],
      options1: [
        {
          value1: "选项1",
          label1: "院校",
        },
      ],
      options2: [
        {
          value2: "选项1",
          label2: "滁州学院",
        },
      ],
      options3: [
        {
          value3: "选项1",
          label3: "指导教师",
        },
      ],
      options4: [
        {
          value4: "选项1",
          label4: "全部",
        },
      ],
      options5: [
        {
          value5: "选项1",
          label5: "获奖作品",
        },
      ],
      options6: [
        {
          value6: "选项1",
          label6: "全部",
        },
      ],
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      input1: "",
      input2: "",
      input3: "",
    };
  },
  methods: {
    skanalysis() {
      this.drawChart(this.data2, this.links2);
    },
    clear() {
      this.drawChart(this.data1, this.links1);
    },
    drawChart(mydata, mylinks) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("relation"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "学校教师关系图谱",
        },
        tooltip: {
          formatter: function (param) {
            // console.log("输出",param);
            //tooltip这里的formatter参数param可以得到series中的data数据
            return param.data.des;
          },
        },
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 70,
            focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            roam: true, //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            edgeSymbol: ["none", "arrow"], //边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头
            edgeSymbolSize: [10, 10],
            force: {
              repulsion: 2500, //节点之间的斥力因子
              edgeLength: [30, 50],
            },
            draggable: true,
            //定义节点的样式
            itemStyle: {
              color: "#f78989",
            },
            //连线的样式
            lineStyle: {
              width: 2,
              color: "#AAF7DC6F",
            },
            //连线上的标记样式
            edgeLabel: {
              show: true,
              formatter: function (param) {
                //tooltip这里的formatter参数param可以得到series中的data数据
                return param.data.value;
              },
              color: "#f4a460",
            },
            //节点上是否显示文字
            label: {
              show: true,
              fontWeight: "bold",
              fontSize: 10,
            },
            data: mydata,
            links: mylinks,
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawChart(this.data1, this.links1);
  },
};
</script>
<style scoped>
#relations {
  height: 691px;
  background-image: url("view/img/index_bg.png");
  width: 100%;
  float: right;
  margin-top: 4px;
  display: flex;
  flex-direction: row;
}
.right {
  width: 28%;
  height: 94%;
  display: flex;
  float: left;
  flex-direction: column;
  /* justify-content: center; */
  color: #fff;
  margin: 1% 1%;
}
.gjd {
  width: 95%;
  height: 20%;
  margin-left: 5%;
  margin-bottom: 5%;
  display: flex;
  float: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#4780f3) left top no-repeat,
    linear-gradient(#4780f3) left top no-repeat,
    linear-gradient(#4780f3) right top no-repeat,
    linear-gradient(#4780f3) right top no-repeat,
    linear-gradient(#4780f3) left bottom no-repeat,
    linear-gradient(#4780f3) left bottom no-repeat,
    linear-gradient(#4780f3) right bottom no-repeat,
    linear-gradient(#4780f3) right bottom no-repeat;
  background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
}
.cjd {
  width: 95%;
  height: 20%;
  margin-left: 5%;
  margin-bottom: 5%;
  display: flex;
  float: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#4780f3) left top no-repeat,
    linear-gradient(#4780f3) left top no-repeat,
    linear-gradient(#4780f3) right top no-repeat,
    linear-gradient(#4780f3) right top no-repeat,
    linear-gradient(#4780f3) left bottom no-repeat,
    linear-gradient(#4780f3) left bottom no-repeat,
    linear-gradient(#4780f3) right bottom no-repeat,
    linear-gradient(#4780f3) right bottom no-repeat;
  background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
}
.zjd {
  width: 95%;
  height: 20%;
  margin-left: 5%;
  margin-bottom: 5%;
  display: flex;
  float: left;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#4780f3) left top no-repeat,
    linear-gradient(#4780f3) left top no-repeat,
    linear-gradient(#4780f3) right top no-repeat,
    linear-gradient(#4780f3) right top no-repeat,
    linear-gradient(#4780f3) left bottom no-repeat,
    linear-gradient(#4780f3) left bottom no-repeat,
    linear-gradient(#4780f3) right bottom no-repeat,
    linear-gradient(#4780f3) right bottom no-repeat;
  background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
}
.el-row {
  height: 35px;
  width: 98%;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-col span {
  margin-left: 10px;
}
.el-select {
  height: 35px;
  width: 100%;
}
.el-select >>> .el-input--suffix .el-input__inner {
  height: 35px;
}
.tab >>> .el-input__inner {
  height: 35px;
}
.tab >>> .el-input__icon {
  line-height: 35px;
}
.el-button {
  margin: 20px;
}
</style>