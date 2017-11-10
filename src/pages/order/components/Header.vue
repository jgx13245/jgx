<template>
 	<header class="order-header">
 		<router-link to="/listgogong">
 			<div class="order-left iconfont icon-fanhui"></div>
 		</router-link>
		<div class="order-write" >订单填写</div>
 		<div class="order-right">登录</div>
 	</header>
</template>

<script>
export default {
	
}
</script>

<style scoped>
 	.order-header {
 		overflow: hidden;
		position: relative;
		height: .88rem;
		background: #00BCD4;
		color: #fff;
		padding: ;
	}
	.order-left {
		float: left;
		width: 11%;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
		text-align: center;
	}
	.order-write {
		float: left;
		width: 70%;
		overflow: hidden;
		line-height: .88rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: center;
		color: #fff;
	}
	.order-right {
		float: left;
		width: 14%;
		width: 1rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: .88rem;
		text-align: center;
		color: #fff;
	}
	.icon-fanhui{
		color: #fff;
	}
</style>
