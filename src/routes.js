/**
 * 
 * @authors Zoey Huang (1768771373@qq.com)
 * @date    2019-07-21 13:27:48
 * @version $Id$
 */

// 引入各个组件
import Page from './components/Page.vue'
import data2019 from './components/data2019.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/view/Page4.vue'
import Page5 from './components/view/Page5.vue'
import Page6 from './components/Page6.vue' 
import index from './components/login/index'
import School from './components/view/School.vue'
import Computer from './components/view/Game/Computer.vue'
import Computer2020 from './components/view/Game/Computer2020.vue'
import chzuc2020 from './components/view/School/chzuc2020.vue'
import Match from './components/view/Game/Match.vue'
import chzu from './components/view/School/chzu.vue'
import chzu2020 from './components/view/School/chzu2020.vue'
import All2021 from './components/view/All2021/index.vue'
import GISALL from './components/view/GIS/GISALL.vue'
import Tools from './components/left.vue'
import color from './view/map/color.vue'
import dot from './view/map/dot.vue'
import heatmap from './view/map/heatmap.vue'
import yingguang from './view/map/yingguang.vue'
import Tocolor from './view/map/Tocolor.vue'
import type from './view/map/type.vue'
import query from './components/query.vue'
import GIS2020 from './components/view/Game/GIS2020.vue'
import biao1 from './view/SpatialAnalyst/标准差椭圆.vue'
import biao2 from './view/SpatialAnalyst/标准差椭圆2.vue'
import biao3 from './view/SpatialAnalyst/标准差椭圆3.vue'
import hotspot from './view/SpatialAnalyst/hotspot.vue'
import LMi from './view/SpatialAnalyst/LMi.vue'
// 设置路径
export default [
    { path: "/", component: index },
    { path: "/Tools", component: Tools },

    { path: "/data", component: Page },
    { path: "/InfoSerach", component: Page1 },
    { path: "/Map", component: Page2 },
    { path: "/Toword", component: Page3 },
    { path: "/Photo", component: Page4 },
    { path: "/Relation", component: Page6 },
    { path: "/AI", component: Page5 },
    { path: "/School", component: School },
    { path: "/Computer", component: Computer },
    { path: "/Computer2020", component: Computer2020 },
    { path: "/Match", component: Match },
    { path: "/chzu", component: chzu },
    { path: "/chzu2020", component: chzu2020 },
    { path: "/chzuc2020", component: chzuc2020 },
    { path: "/All2021", component: All2021 },
    { path: "/GIS", component: GISALL },
    { path: "/data2019", component: data2019 },
    { path: "/color", component: color },
    { path: "/dot", component: dot },
    { path: "/heatmap", component: heatmap },
    { path: "/yingguang", component: yingguang },
    { path: "/Tocolor", component: Tocolor },
    { path: "/type", component: type },
    { path: "/query", component: query },
    { path: "/biao1", component: biao1 },
    { path: "/biao2", component: biao2 },
    { path: "/biao3", component: biao3 },
    { path: "/hotspot", component: hotspot },
    { path: "/LMi", component: LMi },
    { path: "/GIS2020", component: GIS2020 },
]