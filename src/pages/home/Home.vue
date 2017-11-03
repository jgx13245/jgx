<template>
	<div>
 		<home-header/>
		 <swiper-content></swiper-content>
 		<list-content></list-content>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import ListComponent from "./List";
export default {
	components: {
		"home-header": HeaderComponent,
		"list-content": ListComponent,
		"swiper-content":SwiperComponent
	}
}
</script>

<style>
</style>