import Vuex from 'vuex'
import Vue from 'vue'
import home from '../pages/home/module.js'
import selectCity from '../pages/selectCity/module.js'
import oneDayTour from "../pages/oneDayTour/module.js";
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        home:home,
        selectCity:selectCity,
        oneDayTour:oneDayTour
    }

})