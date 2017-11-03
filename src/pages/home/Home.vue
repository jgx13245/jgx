<template>
	<div>
 		<home-header/>
 		<!--<home-item/>-->
		<banner-content></banner-content>
		<swiper-content></swiper-content>
		<item-content></item-content>
 		<list-content></list-content>

 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import ItemComponent from "./Item";
import BannerComponent from "./Banner";
import ListComponent from "./List";
import SwiperComponent from "./Swiper";
export default {
	
			
	components: {
				"home-header": HeaderComponent,
				"list-content": ListComponent,
				"banner-content": BannerComponent,
				"swiper-content": SwiperComponent,
				"item-content":ItemComponent

			}
		}

</script>

<style></style>