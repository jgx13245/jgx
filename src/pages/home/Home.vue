<template>
	<div>	
		<index-header/>
		<index-swiper/>
		<index-iconSwiper/>
		<index-activity/>
 		<index-hostsale/>
 		<index-weekend/>
 	</div>
</template>

<script>

import Header from "./components/Header";
import Swiper from "./components/Swiper";
import IconSwiper from "./components/IconSwiper";
import Activity from "./components/Activity";
import Recommend from "./components/RecommendList";
import WeekendList from "./components/WeekendList";



export default {		
	components: {
				"index-header": Header,
				"index-swiper":Swiper ,
				"index-iconSwiper": IconSwiper,
				"index-activity":Activity ,
				"index-hostsale":Recommend,
				"index-weekend":WeekendList

	},
	
	mounted(){
		if(this.$store.getters.shouldGetData){
			this.$store.dispatch("getIndexInfo");
		}
		
	}
}

</script>

<style>
</style>



