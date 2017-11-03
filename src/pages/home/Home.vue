<template>
	<div>
 		<home-header/>
 		<banner-content></banner-content>
		<swiper-content></swiper-content>
 		<list-content></list-content>
 		<week-module></week-module>

 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import BannerComponent from "./Banner";
import ListComponent from "./List";
import SwiperComponent from "./Swiper";
import WeekComponent from "./Week";
export default {
	components: {
		"home-header": HeaderComponent,

		"swiper-content": SwiperComponent,
		"week-module": WeekComponent,

		"list-content": ListComponent,
		"banner-content":BannerComponent,
		"swiper-content":SwiperComponent

	}
}
</script>

<style>
</style>