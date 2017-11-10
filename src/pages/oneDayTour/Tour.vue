<template>
	<div>	
		<tour-header/>
		<tour-onedaylist/>
		<tour-footer/>
 	</div>
</template>

<script>
import Header from "./components/Header";
import OneDayList from "./components/OneDayList";
import Footer from "./components/Footer";

export default {
	components: {
		"tour-header": Header,
		"tour-onedaylist": OneDayList,
		"tour-footer": Footer
	},
	
	mounted(){
		if(this.$store.getters.shouldGetData1){
			this.$store.dispatch("getOneDayTour")
		}
	}
}

</script>

<style>
</style>



