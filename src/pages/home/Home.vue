<template>
	<div>
 		<home-header/>
 		<list-content></list-content>
 	</div>
</template>

<script>
import HeaderComponent from "./Header";
import ListComponent from "./List";
export default {
	components: {
		"home-header": HeaderComponent,
		"list-content": ListComponent
	}
}
</script>

<style>
</style>