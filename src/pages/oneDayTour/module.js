import axios from 'axios';
export default{
    state:{
    	oneDayTour:[],
        oneDayList:[]
    },
    actions:{
        getOneDayTour(context){
            axios.get('/static/oneDayTour.json')
			.then((response)=>{
                if(response.status === 200){
                    const {data}=response.data;
                     context.commit("changeOneDayTour",data);                         
                }
            })
        }
    },
   
    mutations:{
        changeOneDayTour(state,data){
            state.oneDayList = data.oneDayList;
            state.oneDayTour = data.tourList;
        }
    },
    getters:{
    	shouldGetData1(state){
    		if(!state.oneDayList.length&&
    		!state.oneDayTour.length){
    				return true;
    		}else{
    			return false;
    		}
    	}
    }

}