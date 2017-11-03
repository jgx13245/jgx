<template>
	<div>
 		<home-header/>
 		<home-item/>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import ItemComponent from "./Item";
export default {
	components: {
		"home-header": HeaderComponent,
		"home-item":ItemComponent
	}
}
</script>

<style>
</style>