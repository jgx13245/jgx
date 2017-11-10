
<template>
	<div>
		<ul  class="letterPosition">
			<li v-for="item in Foreign" :key="item[0]" class="statirs">
				{{item[0]}}
			</li>
		</ul> 
 	</div>
</template>

<script>
import {mapState} from "vuex"	
export default {			
	computed: mapState({
			Foreign(state){
					return state.selectCity.Foreign
				},
		
		})
	


}

</script>


<style scoped>
.letterPosition {
		position: fixed;
		right: 0;
		top: 2.5rem;
		color: #00AFC7;
	}
	
	.statirs {
		width:.2rem;
		height:.3rem;
		padding:.05rem;
		font-size:.22rem
	}
</style>
