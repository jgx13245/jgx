<template>
	<div>
 		<list-header/>
		 <list-filter></list-filter>
		 <list-sight></list-sight>
 	</div>
</template>

<script>
import ListComponent from "./Header";
import ListFilter from "./Filter";
import SightComponent from "./Sight";

export default {
		
	components: {
				"list-header": ListComponent,
				"list-filter":ListFilter,
				"list-sight":SightComponent
			}
	}

</script>


<style>
</style>



