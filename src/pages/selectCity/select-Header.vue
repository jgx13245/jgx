<template>
 	<header class="header">
		 <router-link to="/">
 		<div class="header-left iconfont icon-fanhui"></div>
		 </router-link>

 		<div class="header-right"  @click="handleChangeColor">
 			<span class="mp-header-city mp-header-city-active"  isDomesti="true" :class="{changecolor:change}">国内</span>
             <span class="mp-header-city" mp-role="tabItem" :class="{changecolor:!change}">海外</span>
 		</div>
 	</header>
</template>

<script>
export default {
		data() {
			return {
				change:true
			}
		},
		methods:{
			handleChangeColor:function(e) {
				//获取元素内的属性
				const isDomesti = e.target.getAttribute("isDomesti");
				if(isDomesti){
					this.change= true;
				}else{
					this.change= false;
				}
				this.$emit("changeTypeList",this.change)

		}	
		
	}
}

</script>

<style scoped>
 .header {
		height: .88rem;
        width:100%;
        position: fixed;
		background: #00afc7;
		z-index: 5;
		top: 0;
	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-right {
	    display:inline-block;
        float:left;
        font-size: 0;
        margin-left:0.5rem;

	}
    .mp-header-city{
        display: inline-block;
        width: 2rem;
        height: .56rem;
        line-height: .56rem;
        margin-top: .15rem;
        background: #00afc7;
        font-size: .28rem;
        border: .02rem solid #fff;
        text-align: center;
        border-radius:0.02rem;
		color: #fff;
    }
	/*点击国内国外颜色发生变化*/
	.changecolor{
		background:#fff;
		color:#00afc7;
	}


</style>
