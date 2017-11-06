<template>
	<div>
 		<home-header/>
		<banner-content :swiperInfo="swiperInfo"></banner-content>
		<swiper-content :iconSwiper="iconSwiper" :iconSwiper1="iconSwiper1"></swiper-content>
		<item-content></item-content>
 		<list-content></list-content>
 		<week-module></week-module>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import ItemComponent from "./Item";
import BannerComponent from "./Banner";
import ListComponent from "./list-content";
import SwiperComponent from "./Swiper";
import WeekComponent from "./Week";
import Axios from "axios";
export default {	
	data() 	{
		return {
			swiperInfo:[],
			iconSwiper:[],
			iconSwiper1:[]
		}
	},	
	components: {
		"home-header": HeaderComponent,
		"list-content": ListComponent,
		"banner-content": BannerComponent,
		"swiper-content": SwiperComponent,
		"item-content":ItemComponent,
		"week-module":WeekComponent
	},
	methods:{
			getIndexData (){
				Axios.get('./static/index.json')
				.then(this.handleSuccGetData.bind(this))
				.catch(this.handleErroGetData.bind(this));	
			},
			handleSuccGetData:function(response){
				if(response.status===200){
					const {data} = response.data;
					this.swiperInfo = data.swiperInfo;
					this.iconSwiper = data.iconSwiper;
					this.iconSwiper1 = data.iconSwiper1;
	
				}
			},
			handleErroGetData:function(err){
				
			}
			
		},
	mounted (){
			this.getIndexData();

	}
}

</script>
<style></style>



