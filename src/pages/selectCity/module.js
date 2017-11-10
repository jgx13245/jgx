import axios from 'axios';
export default{
    state:{
      China:[],
      Foreign:[],
      ChinahotCity:[],
      foreignHotCity:[]
    },
    actions:{
        getCityList(context){
            axios.get('/static/city.json')
			.then((response)=>{
                if(response.status === 200){
                    const {data}=response.data;
                     
                     context.commit("changeCityInfo",data);
                     //commit调用mutation方法
                }
            })
        }
    },
    mutations:{
        changeCityInfo(state,data){
           
            state.China = data.inlandCity;
            state.Foreign=data.foreign;
            state.ChinahotCity=data.ChinahotCity;
            state.foreignHotCity=data.foreignHotCity;
           
        }
    },
    getters:{
        //减少数据冗余
        getCityList(state){
            if(!store.state.China.length && 
               !store.state.Foreign.length &&
               !store.state.ChinahotCity.length&&
               !store.state.foreignHotCity.length){
                    return true
            }else{
                return false
            }
        }
    }

}