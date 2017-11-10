
import axios from 'axios'

export default{
    state:{
        allSortInfo:[],
        detailInfo:[],
        sightInfo:[]//,
       // sightRedInfo:[]
    },
    actions:{
        getListClassifyInfo(context){
            axios.get('/static/listClassify.json')
			.then((response)=>{
                if(response.status === 200){
                    const {data}=response.data;
                     context.commit("changeListClassifyInfo",data);               
                }
            })
        }
    },
    mutations:{
        changeListClassifyInfo(state,data){
            state.allSortInfo = data.allSortInfo;
            state.detailInfo = data.detailInfo;
            state.sightInfo=data.sightInfo;
        }//,
        // sightRedInfo(state,data){
        //     //var num=(Math.random()*state.sightInfo.length).toFixed(0)
        //     state.sightInfo.push(state.sightInfo);
        // }
    },
    getters:{
        shouldGetListClassifyData(state){
            if(!state.allSortInfo.length && 
               !state.detailInfo.length &&
               !state.sightInfo.length){
                   return true
               }else{
                   return false
               }
        }
    }
}