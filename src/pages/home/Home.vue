<template>
	<div>
 		<home-header/>
		<banner-content></banner-content>
		<swiper-content></swiper-content>
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
import Axios from "axios"
export default {			
	components: {
		"home-header": HeaderComponent,
		"list-content": ListComponent,
		"banner-content": BannerComponent,
		"swiper-content": SwiperComponent,
		"item-content":ItemComponent,
		"week-module":WeekComponent
		},
	mounted:function(){
		Axios.get('home/b').then(function(res){
			console.log(res.data)
		})
	}	
	}

</script>


<style>
</style>



