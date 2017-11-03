<template>
	<div>
 		<home-header/>
 		<swiper-content/>
 		<week-module/>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import WeekComponent from "./Week";
export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"week-module": WeekComponent
	}
}
</script>

<style>
</style>