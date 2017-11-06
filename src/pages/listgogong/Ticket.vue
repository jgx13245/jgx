<template>
	<div class="ticket-list">
		<div class="ticket-type">
			<h3 class="iconfont icon-piaowu"> 故宫当日票</h3>
			<!--<div class="ticket-types" id="ticket-types">-->
				<dl @click="handleClick">
					<dt>
						【当日票】故宫成人票<em>凭身份证入园</em>
					</dt>
					<dd>
						<i>￥</i>39<span>起</span><i class="iconfont icon-xiangxia-copy"></i>
					</dd>
					<div class="reserve">
						
					</div>
				</dl>
				<dl>
					<dt>
						【当日票】故宫学生票<em>凭身份证入园</em>
					</dt>
					<dd>
						<i>￥</i>20<span>起</span><i class="iconfont icon-xiangxia-copy"></i>
					</dd>
					
				</dl>
				<dl>
					<dt>
						【当日票】故宫老人票<em>凭身份证入园</em>
					</dt>
					<dd>
						<i>￥</i>20<span>起</span><i class="iconfont icon-xiangxia-copy"></i>
					</dd>
				</dl>
			<!--</div>-->
			<p @click="handleLookClick">查看剩余产品  <i class="iconfont icon-xiangxia-copy"></i></p>
		</div>
		
		<div class="ticket-type">
			<h3 class="iconfont icon-piaowu"> 故宫当日票</h3>
			<!--<div class="ticket-types" id="ticket-types">-->
				<dl @click="handleClick">
					<dt>
						【当日票】故宫成人票<em>凭身份证入园</em>
					</dt>
					<dd>
						<i>￥</i>39<span>起</span><i class="iconfont icon-xiangxia-copy"></i>
					</dd>
					<div class="reserve">
						
					</div>
				</dl>
				<dl>
					<dt>
						【当日票】故宫学生票<em>凭身份证入园</em>
					</dt>
					<dd>
						<i>￥</i>20<span>起</span><i class="iconfont icon-xiangxia-copy"></i>
					</dd>
					
				</dl>
				<dl>
					<dt>
						【当日票】故宫老人票<em>凭身份证入园</em>
					</dt>
					<dd>
						<i>￥</i>20<span>起</span><i class="iconfont icon-xiangxia-copy"></i>
					</dd>
				</dl>
			<!--</div>-->
			<p @click="handleLookClick">查看剩余产品  <i class="iconfont icon-xiangxia-copy"></i></p>
		</div>
		
		<div class="ticket-type">
			<h3 class="iconfont icon-piaowu"> 故宫当日票</h3>
			<!--<div class="ticket-types" id="ticket-types">-->
				<dl @click="handleClick">
					<dt>
						【当日票】故宫成人票<em>凭身份证入园</em>
					</dt>
					<dd>
						<i>￥</i>39<span>起</span><i class="iconfont icon-xiangxia-copy"></i>
					</dd>
					<div class="reserve">
						
					</div>
				</dl>
				<dl>
					<dt>
						【当日票】故宫学生票<em>凭身份证入园</em>
					</dt>
					<dd>
						<i>￥</i>20<span>起</span><i class="iconfont icon-xiangxia-copy"></i>
					</dd>
					
				</dl>
				<dl>
					<dt>
						【当日票】故宫老人票<em>凭身份证入园</em>
					</dt>
					<dd>
						<i>￥</i>20<span>起</span><i class="iconfont icon-xiangxia-copy"></i>
					</dd>
				</dl>
			<!--</div>-->
			<p @click="handleLookClick">查看剩余产品  <i class="iconfont icon-xiangxia-copy"></i></p>
		</div>
	</div>
</template>

<script>
	export default {
		
		methods: {
			handleClick(){
				
			},
			handleLookClick(){
				
			}
		}
		
		
	}
</script>

<style>
	.ticket-type{
		border-bottom: .2rem solid #f5f5f5;
	}
	/*.ticket-types{
		height: 3rem;
		overflow: hidden;
	}*/
	
	.ticket-type h3{
		position: relative;
		padding: 0 .2rem;
		height: .88rem;
		color: #333;
		font-size: .32rem;
		line-height: .88rem;
		border-bottom: 1px solid #F5F5F5;
	}
	.ticket-type dl{
		display: flex;
		justify-content: space-between;
		height: .96rem;
		position: relative;
		border-bottom: 1px solid #F5F5F5;
		padding: .24rem .2rem;
	}
	.ticket-type dt{
	
		/* flex-wrap:wrap*/
		width: 67%;
		float: left;
		color: #333;
		font-size: .3rem;
		line-height: .48rem;
		/*overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;*/
	}
	.ticket-type dd{
		line-height: .96rem;
		float: right;
		color: #ff9800;
		font-size: .36rem;
		margin-left: 1.3rem;
	}
	.ticket-type span,.ticket-type em{
		font-size: .24rem;
		color: #888;
		line-height: .32rem;
	}
	.ticket-type p{
		height: .8rem;
		color: #616161;
		text-align: center;
		line-height: .8rem;
	}
	.ticket-type span{}
	.ticket-type i{
		font-size: .24rem;
	}
	.icon-piaowu{
		color: #00bcd4;
	}
	.icon-xiangxia-copy{
		color: #bbb;
	}
</style>