import Vue from "vue";
import Vuex from 'vuex'
import app from './modules/app'
import api from './modules/api'
import {theme} from '@/config/index'

Vue.use(Vuex);
export default new Vuex.Store({
    ...app, //合并app总状态到对象
    modules: {
        api
    }
})