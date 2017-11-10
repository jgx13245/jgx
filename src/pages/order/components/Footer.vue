<template>
 	<footer class="order-footer">
 		<ul>
 			<li class="order-left">产品价格￥<span>{{(this.value.length+1)*40}}</span></li>
 			<li class="order-right" @click="handleClick">提交订单</li>
 		</ul>
 	</footer>
</template>

<script>
export default {
	props: ['value'],
	methods: {
		handleClick(){
			this.$router.go(0);
		}
	}
}

</script>

<style scoped>
 	.order-footer ul{
 		position: fixed;
 		right: 0;
 		bottom: 0;
 		left: 0;
 		width: 100%;
 		height: 1rem;
 	}
 	.order-left{
 		position: relative;
 		float: left;
 		width: 50%;
 		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
 		font-size: .24rem;
 		line-height: 1rem;
 		text-align: center;
 		color: #ff8300;
 		background: #fff;
 	}
 	.order-left span{
 		font-size: .48rem;
 	}
	.order-right{
		float: left;
		width: 50%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		background: #ff9800;
		color: #fff;
		text-align: center;
		line-height: 1rem;
	}
</style>
