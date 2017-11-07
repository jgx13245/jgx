import Vuex from 'vuex'
import Vue from 'vue'
import home from "../pages/home/module.js";
/*import home from "../pages/listgogong/module.js";*/

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		home:home 
	}
})