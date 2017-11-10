<template>
	<div>
 		<fo-serach></fo-serach>
         <fo-list></fo-list>
         <fo-aside></fo-aside>
 	</div>
</template>

<script>
import foSerachComponent from "./components/foreign/fo-serach";
import foListComponent from "./components/foreign/fo-list";
import foAsideComponent from "./components/foreign/fo-aside";

export default {			
	components: {

                "fo-serach": foSerachComponent,
                "fo-list": foListComponent,
                "fo-aside": foAsideComponent
			}
		}

</script>


<style>
</style>
