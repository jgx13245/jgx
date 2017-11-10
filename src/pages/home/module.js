import axios from 'axios';
export default{
    state:{
        swiperInfo:[],
        iconSwiper:[],
        iconSwiper1:[]

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
        }
    },
    getters:{
        shouldGetData(state){
            if(!store.state.iconSwiper.length && 
                !store.state.iconSwiper1.length &&
                !store.state.swiperInfo.length){
                    return true
            }else{
                return false
            }
        }
    }

}