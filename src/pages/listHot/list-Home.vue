<template>
	<div>
 		<home-header></home-header>
		 <router-view></router-view>
		 <!-- <list-city></list-city> -->
		 <backcolor></backcolor>
 	</div>
</template>

<script>
import HeaderComponent from "./list-Header";
//import cityComponent from "./list-city";
import backComponent from "./backcolor";

export default {			
	components: {

				"home-header": HeaderComponent,
				// "list-city":cityComponent,
				"backcolor":backComponent
			}
		}

</script>


<style>
</style>



