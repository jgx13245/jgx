<template>
	<div>
 		<index-header/>
		<index-swiper :swiperInfo="swiperInfo"/>
		<index-iconSwiper />
		<index-activity />
 		<index-hostsale />
 		<index-weekend />
 	</div>
</template>

<script>
import Header from "./components/Header";
import Swiper from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import Activity from "./components/Activity";
import Recommend from "./components/RecommendList";
import WeekendList from "./components/WeekendList";
import axios from 'axios';

export default {
	data(){
		return{
			swiperInfo:[]
		}
	},			
	components: {

				"index-header": Header,
				"index-swiper":Swiper ,
				"index-iconSwiper": IconSwiper,
				"index-activity":Activity ,
				"index-hostsale":Recommend,
				"index-weekend":WeekendList

	},
	methods:{
		getHomeData(){
			axios.get('/static/index.json')
			.then(this.handleGetDataSucc.bind(this))
			.catch(this.handleGetDataErr.bind(this)); 
		},
		handleGetDataSucc:function(response){
			if(response.status === 200){
				const {data}=response.data;
				this.swiperInfo=data.swiperInfo;
			}
		},
		handleGetDataErr:function(err){
			console.log(err);
		}
	},
	mounted(){
		this.getHomeData();
	}
}

</script>

<style>
</style>



