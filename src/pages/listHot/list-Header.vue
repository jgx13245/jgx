<template>
 	<header class="header">
		 <router-link to="/">
 		<div class="header-left iconfont icon-fanhui"></div>
		 </router-link>
		 <input class="header-title" placeholder="输入城市或景点" @focus="jujiaoClick" @blur="shijiaoClick">
 			
	
 		<div class="header-right">
 			<div class="header-city-wrapper">
 				<span class="header-city">搜索</span>
 			</div>
 		</div>
 	</header>
</template>

<script>
export default {
	methods:{
		jujiaoClick:function(){
			this.$router.push("/listHot/a")
		},
		shijiaoClick:function(){
		// 	this.$router.push("/listHot")
		}
	}
}
</script>

<style scoped>
 .header {
		height: .88rem;

		background:/* #00bcd4*/#FF0000;
		overflow: hidden;

		background: #00bcd4;
		overflow:hidden;

	}
	.header-left {
		float: left;
		width: .4rem;
		padding: 0 .2rem;
		line-height: .88rem;
		font-size: .4rem;
		color: #fff;
	}
	.header-title {
		width:4.6rem;
		height:0.6rem;
		border-radius:0.1rem;
		margin-top:0.15rem;
		outline: none;
		border: none;
		text-indent: 0.2rem;
	}
	.header-right {
		float: right;
		width: 1.0rem;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
	.header-city-wrapper {

		position: relative;
		padding-right: .3rem;
	}
	.header-city {
		overflow: hidden;
		display: inline-block;
		white-space: nowrap;
		width: 1rem;
		text-overflow: ellipsis;
	}
	/* .header-city::after {
		content: "\0020";
		position: absolute;		
		top: .4rem;
		right: .14rem;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-top: .1rem solid #fff;
	} */
</style>
