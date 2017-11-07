import axios from 'axios';
export default{
    state:{
        swiperInfo:[],
        iconSwiper:[],  
        iconSwiper1:[],
        activityInfo:[],
<<<<<<< HEAD
		recommendInfo:[]
=======
        weekend:[]

>>>>>>> 34096c0d8223bc6008eb9f5d5e5c9c77d7e9fb35
    },
    actions:{
        getIndexInfo(context){
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
<<<<<<< HEAD
            state.recommendInfo = data.recommendInfo;
=======
            state.weekend = data.weekend;
            console.log(data.weekend);
>>>>>>> 34096c0d8223bc6008eb9f5d5e5c9c77d7e9fb35
        }
    },
    getters:{
    	shouldGetData(state){
    		if(!state.swiperInfo.length &&
		       !state.iconSwiper.length&&
		   	   !state.iconSwiper1.length&&
		       !state.activityInfo.length&&
<<<<<<< HEAD
    		   !state.recommendInfo.length){
=======
    		   !state.weekend.length){
>>>>>>> 34096c0d8223bc6008eb9f5d5e5c9c77d7e9fb35
    				return true;
    		}else{
    			return false;
    		}
    	}
    }

}