import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        swiperInfo:[],
        iconSwiper:[],
        iconSwiper1:[],
        weekend: []

    },
    actions:{
        getSwiper(context){
            axios.get('/static/index.json')
			.then((response)=>{
                if(response.status === 200){
                    const {data}=response.data;
                     context.commit("changeSwiprInfo",data.swiperInfo);
                     context.commit("changeIconSwipr",data.iconSwiper);
                     context.commit("changeIconSwipr1",data.iconSwiper1);
                     context.commit("changeWeekend",data.weekend);
                
                }
            })
        }
    },
    mutations:{
        changeSwiprInfo(state,data){
            state.swiperInfo = data
        },
        changeIconSwipr(state,data){
            state.iconSwiper = data
        },
        changeIconSwipr1(state,data){
            state.iconSwiper1 = data
        },
        changeWeekend(state,data){
            state.weekend = data
        }

    },
    getters:{},

})