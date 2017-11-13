
<template>
	<div>
		<ul  class="letterPosition" @touchstart="handleWordClick">
			<li v-for="item in China" :key="item[0]" class="statirs">{{item[0]}}</li>
		</ul> 
 	</div>
</template>

<script>
import {mapState} from "vuex"	
export default {			
	
	
	computed: mapState({
			China(state){
					return state.selectCity.China
				},
		
		}),
	
	methods:{
		handleWordClick(e) {
			var m  =e.target.innerHTML;
			 this.$emit("changeWord",m);
			 document.addEventListener("touchmove",this.handleTouchMove,false);
			 document.addEventListener("touchend",this.handleTouchEnd,false);
			 
			 

		},
		handleTouchMove(e) {
			
			const ul = document.getElementsByClassName("letterPosition")[0]
			const ulOffsetTop = ul.offsetTop+38;
			const MouseOffsetTop = e.touches[0].clientY;
			const v = MouseOffsetTop-ulOffsetTop;
			const num =parseInt(v/20);
			console.log(num)
			 this.$emit("changeMove",num);
			 
		},
		handleTouchEnd(e) {
				document.removeEventListener("touchmove", this.handleTouchMove);
				document.removeEventListener("touchend", this.handleTouchEnd);

		}





	}

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
