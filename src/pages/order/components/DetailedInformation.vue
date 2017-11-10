<template>
	<div>
		
	 	<div class="order-information">
	 		<div class="order-name">
	 			<label for="order-name">游客1</label>
	 			<input id="order-name" placeholder="游客姓名"/>
	 		</div>
	 		<div class="order-phone">
	 			<label for="order-phone">手机号</label>
	 			<input id="order-phone" placeholder="请填写手机号码"/>
	 		</div>
	 		<div class="order-card">
	 			<label for="order-card">身份证</label>
	 			<input id="order-card" placeholder="请填写正确的身份证号码"/>
	 		</div>
	 	</div>
	 	
	 	<div class="order-information" v-for="item in value" :key="item">
	 		<div class="order-name">
	 			<label for="order-name">游客{{item}}</label>
	 			<input id="order-name" placeholder="游客姓名"/>
	 		</div>
	 		<div class="order-card">
	 			<label for="order-card">身份证</label>
	 			<input id="order-card" placeholder="请填写正确的身份证号码"/>
	 		</div>
	 	</div>
 		<div class="footer"></div>
 	</div>
</template>

<script>
import { mapState } from "vuex"
export default {
	props: ['value']
}
</script>

<style scoped>
	.order-information{
		border-bottom: .2rem solid #f5f5f5;
	}
	.order-information label{
		float: left;
		width: 1.6rem;
		color: #616161;
		font-size: .3rem;
		line-height: .5rem;
	}
	.order-information input{
		display: block;
		border: none;
		margin-left: 1.7rem;
		line-height: .5rem;
		height: .38rem;
		padding: .06rem 0;
		color: #212121;
		font: normal .32rem/.38rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
	}
 	.order-name,.order-card,.order-phone{
 		padding: .24rem;
 		border: 1px solid #f5f5f5;
 	}
	.footer{
		background: #f5f5f5;
		height: 5rem;
	}
</style>
