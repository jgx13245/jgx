<template>
	<div class="order-num">
		<label class="roder-field">购买数量</label>
		<ul>
			<li>最多买5张</li>
			<li style="display: none;">每个身份证限购一张</li>
		</ul>
		<div class="order-number">
			<span :class="{'order-miu': isActive, 'order-miu1': hasError}" @click="handleClick1">-</span>
			<input v-model="value"/>
			<span :class="{'order-add': hasError, 'order-add1': isActive}" @click="handleClick">+</span>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			value: 1,
			todoList:[],
			isActive: true,
  			hasError: false
		}
	},
	
	mounted(){
		
	},
	
	methods: {
		handleClick(){
			this.value+=1;
			this.todoList.push(this.value)
			if(this.value>=5 && this.todoList.length>=4){
				this.value=5;
				this.todoList.length=4;
				this.isActive = false;
				this.hasError = true;
			}
		},
		
		handleClick1(){
			this.value-=1;
			if(this.value<=1){
				this.value=1
				this.isActive = true;
				this.hasError = false;
			}
			this.todoList.pop(this.value)
		}
	},
	
	updated() {
		this.$emit("changeTour",this.todoList);	
		if(this.value>1 && this.value<5){
			this.isActive = true;
			this.hasError = true;
		}
	}
}
</script>

<style scoped>
 	.order-num{
 		position: relative;
 		padding: .3rem .2rem .3rem .2rem;
 		border-bottom: .2rem solid #f5f5f5;
 		height: .5rem;
 	}
	.roder-field{
		position: relative;
		float: left;
		width: 1.6rem;
		color: #616161;
		font-size: .3rem;
		line-height: .5rem;
	}
	.order-num ul{
		position: absolute;
		top: .38rem;
		left: 1.6rem;
		margin-right: 2.1rem;
		color: #ccc;
		font-size: .28rem;
	}
	.order-number{
		display: inline-block;
		position: relative;
		border: .02rem solid #c7ced4;
		float: right;
	}
	.order-number span,.order-number input{
		display: block;
		float: left;
	}
	.order-miu{
		background: #f0f0f0;
	}
	.order-miu1{
		background: #00afc7;
	}
	.order-add{
		background: #f0f0f0;
	}
	.order-add1{
		background: #00afc7;
	}
	.order-number span:nth-child(1){
		color: #BBBBBB;
		margin: 1px;
		width: .56rem;
		height: .56rem;
		text-align: center;
		line-height: .56rem;
	}
	.order-number span:nth-child(3){
		color: #fff;
		margin: 1px;
		width: .56rem;
		height: .56rem;
		text-align: center;
		line-height: .56rem;
	}
	.order-number input{
		width: .6rem;
		height: .6rem;
		padding: 0 .06rem;
		text-align: center;
		vertical-align: top;
		border: none;
	}
</style>
