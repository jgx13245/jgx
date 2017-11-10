import axios from 'axios';
export default{
    state:{
        swiperInfo:[],
        iconSwiper:[],
        iconSwiper1:[],
        recommendInfo:[],
        weekend:[],
        activityInfo:[]


    },
    actions:{
        getSwiper(context){
            axios.get('/static/index.json')
			.then((response)=>{
                if(response.status === 200){
                    const {data}=response.data;
                     context.commit("changeIndexInfo",data);
                }
            })
        }
    },
    mutations:{
        changeIndexInfo(state,data){
            state.swiperInfo = data.swiperInfo;
            state.iconSwiper = data.iconSwiper;
            state.iconSwiper1 = data.iconSwiper1;
            state.activityInfo = data.activityInfo;
            state.recommendInfo = data.recommendInfo;
            state.weekend = data.weekend;
        }
    },
    getters:{
        shouldGetData(state){
    		if(!state.swiperInfo.length &&
		       !state.iconSwiper.length&&
		   	   !state.iconSwiper1.length&&
		       !state.activityInfo.length&&
    		   !state.recommendInfo.length&&
    		   !state.weekend.length){
    				return true;
    		}else{
    			return false;
    		}
    	}
    }

}