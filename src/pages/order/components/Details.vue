<template>
	<div class="order-details">
		<dl>
			<dt>【上午场】故宫成人票凭身份证入园</dt>
			<dd><img src="https://img1.qunarzz.com/piao/fusion/1703/ac/1c9b308337e3f902.png">2011-11-11</dd>
			<dd><img src="https://img1.qunarzz.com/piao/fusion/1703/bd/868afac58cdab802.png"> 条件退</dd>
		</dl>
		<ul>
			<li><em>￥</em><span>40</span>/张</li>
			<li>预定须知</li>
		</ul>
	</div>
</template>

<script>
export default {
	
}
</script>

<style scoped>
	.order-details{
		position: relative;
		overflow: hidden;
		padding: .2rem .2rem .1rem .2rem;
		border-bottom: .2rem solid #f5f5f5;
	}
	.order-details dl dt{
		color: #212121;
		font-size: .32rem;
		line-height: .44rem;
		margin-bottom: .04rem;
		width: 80%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.order-details dl dd{
		float: left;
		line-height: .44rem;
		margin-left: .2rem;
		color: #616161;
		font-size: .24rem;
	}
	.order-details dd img{
		position: relative;
		top: .08rem;
		width: .24rem;
		height: .24rem;
		margin-right: .08rem;
		vertical-align: top;
	}
	.order-details ul{
		position: absolute;
		right: .2rem;
		top: .2rem;
		width: 1.8rem;
		text-align: right;
	}
	.order-details ul li:nth-child(1){
		height: .44rem;
		line-height: .44rem;
		color: #9e9e9e;
		font-size: .24rem;
	}
	.order-details li:nth-child(1) em{
		color: #ff8300;
	}
	.order-details li:nth-child(1) span{
		color: #ff8300;
		margin-left: .04rem;
		font-size: .4rem;
	}
	.order-details ul li:nth-child(2){
		margin-top: .12rem;
		line-height: .32rem;
		color: #00bcd4;
		font-size: .28rem;
	}
</style>
