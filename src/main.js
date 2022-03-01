// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由
import VueRouter from 'vue-router'
// 引入路由的配置文件routes.js
import Routes from './routes'
import AMap from 'vue-amap'
import store from './store'

const echarts = require('echarts');
Vue.prototype.$echarts = echarts;
import ElementUI from 'element-ui'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import $ from 'jquery'
Vue.prototype.$echarts = echarts
Vue.use(Antd);
import TableFor from 'vue-table-for'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(TableFor)

Vue.use(AMap)
    // 初始化地图
AMap.initAMapApiLoader({　
    key: 'f51106c415510d32314b99f894f09a3a',
    　plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'] // 插件集合
})
const axios = require('axios')
    // 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.config.productionTip = false
    // 使用声明
Vue.use(VueRouter)

// 创建路由
const router = new VueRouter({
        routes: Routes,
        // 消除地址栏中的“#”
        //mode: "history"
    })
    //钩子函数，访问路由前调用
router.beforeEach((to, from, next) => {
        //路由需要认证
        if (to.meta.requireAuth) {
            //判断store里是否有token
            if (store.state.token) {
                next()
            } else {
                next({
                    path: 'login',
                    query: { redirect: to.fullPath }
                })
            }
        } else {
            next()
        }
    })
    /* eslint-disable no-new */
new Vue({
        el: '#app',
        components: { App },
        template: '<App/>',
        router: router,
        store,
    })
    // 设置反向代理，前端请求默认发送到 http://localhost:8888/api
axios.defaults.baseURL = 'http://localhost:8082/api'