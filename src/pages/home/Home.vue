<template>
	<div>
 		<home-header/>
		 <banner-content></banner-content>
		 <swiper-content></swiper-content>
 		<list-content></list-content>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import BannerComponent from "./Banner";
import ListComponent from "./List";
import SwiperComponent from "./Swiper";
export default {
	components: {
		"home-header": HeaderComponent,
		"list-content": ListComponent,
		"banner-content":BannerComponent,
		"swiper-content":SwiperComponent
	}
}
</script>

<style>
</style>
