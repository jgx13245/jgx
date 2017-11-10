<template>
	<div>	
		<order-header/>
		<order-details/>
		<order-num @changeTour="changeTour" />
		<order-information :value="value"/>
		<order-footer :value="value"/>
 	</div>
</template>

<script>

import Header from "./components/Header";
import Details from "./components/Details";
import Num from "./components/Num";
import DetailedInformation from "./components/DetailedInformation";
import Footer from "./components/Footer";

export default {
	data(){
		return {
			value: []
		}
	},
	methods: {
		changeTour(e) {
			this.value = e;
		}
	},
	
	components: {
		"order-header": Header,
		"order-details": Details,
		"order-num": Num,
		"order-information": DetailedInformation,
		"order-footer": Footer
	}
}

</script>

<style>
</style>



