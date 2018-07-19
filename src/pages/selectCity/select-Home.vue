<template>
	<div>
		<!--保持和传过来的组件方法名一样-->
 		<select-header @changeTypeList="changeTypeList"></select-header>
    	<domestic v-show="show" @change="change"></domestic>
        <foreign v-show="!show"></foreign> 
 	</div>
</template>

<script>
import HeaderComponent from "./select-Header";
import domesticComponent from "./select-domestic";
import foreignComponent from "./select-foreign";

export default {	
	data() {
		return {
			show:true
		}
	},		
	components: {

		"select-header": HeaderComponent,
		"domestic": domesticComponent,
		"foreign": foreignComponent
	},
	methods:{
		changeTypeList:function(e) {
			this.show=e
		},
			change(e){
			console.log(e)
		}	
	},
	mounted() {
		this.$store.dispatch("getCityList");
	
	}
		
}

</script>


<style>
</style>
