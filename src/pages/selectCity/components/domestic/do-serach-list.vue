
<template>
	<div>
		<ul  class="letterPosition">
			<li  class="statirs" v-show="show" v-for="item in SearchCity" :key="item">
             {{item}}
			</li>
		</ul> 
 	</div>
</template>

<script>
import {mapState} from "vuex"	
export default {			
    props:['show','SearchCity']
}

</script>


<style scoped>
.letterPosition {
	    width:100%;
		top: 20%;
		color: #00AFC7;
	}
	
	.statirs {
	line-height: .76rem;
    padding-left: .2rem;
    font-size: .28rem;
    color: #212121;
    border-bottom: .02rem solid #f4f4f4;
	}
</style>
