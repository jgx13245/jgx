<template>
	<div>
 		<list-header/>
		<list-filter @change="change"></list-filter>
		<list-sight ></list-sight>
 	</div>
</template>
<script>
import ListComponent from "./components/Header";
import ListFilter from "./components/Filter";
import SightComponent from "./components/Sight";

export default {
	components: {
		"list-header": ListComponent,
		"list-filter":ListFilter,
		"list-sight":SightComponent
	},
	methods:{
		change:function(e) {
			this.sight=!e;
		}
	},
	mounted(){
		if(this.$store.getters.shouldGetListClassifyData){
			this.$store.dispatch("getListClassifyInfo");
		}
		
	}
}

</script>


<style>
</style>



