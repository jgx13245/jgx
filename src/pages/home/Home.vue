<template>
	<div>
 		<home-header/>
		 <banner-content></banner-content>
 		<list-content></list-content>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import BannerComponent from "./Banner";
import ListComponent from "./List";
export default {
	components: {
		"home-header": HeaderComponent,
		"list-content": ListComponent,
		"banner-content":BannerComponent
	}
}
</script>

<style>
</style>