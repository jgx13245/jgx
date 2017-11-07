<template>
	<div>	
		<index-header/>
		<index-swiper :swiperInfo="this.$store.state.swiperInfo"/>
		<index-iconSwiper :iconSwiper="this.$store.state.iconSwiper" :iconSwiper1="this.$store.state.iconSwiper1" />
		<index-activity />
 		<index-hostsale />
 		<index-weekend :weekend="this.$store.state.weekend"/>
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
	this.$store.dispatch("getSwiper");
	}
}

</script>

<style>
</style>



