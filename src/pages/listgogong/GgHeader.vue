<template>
	<div class="gugong-header">
		<div class="gugong-img">
			<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"/>
			<h3>故宫(AAAAA景区)</h3>
			<span class="gugong-number iconfont icon-tupian">10</span>	
			<router-link to="/"><span class="go-back iconfont icon-fanhui"></span></router-link> 
		</div>
		<div class="gugong-intro">
			<div class="gugong-site gugong-site-beijing">
				<p class="size-describe iconfont icon-hm-normal-local">北京市东城区景山前街4号</p>
				<span class="size-F iconfont icon-zimuf"></span>
			</div>
			<div class="gugong-site">
				<p class="size-describe iconfont icon-tupian">查看景点简介及开放时间</p>
				<span class="size-F iconfont icon-zimuf"></span>
			</div>
			<div class="gugong-site">
				<p class="size-describe">
					<span class="size-comment-zimu iconfont icon-tubiao1gaoxiaoxiaohua"></span>
					<span class="size-comment-zimu iconfont icon-wuxing"></span>
					<span class="size-comment-grade">5.0分</span>
					<span class="size-comment-number">147314评论</span>
				</p>
				<span class="size-F iconfont icon-zimuf"></span>
			</div>
			<div class="gugong-site site-warning">
				<p class="size-describe iconfont icon-laba">因重要活动需要，故宫博物馆11月8日（周三）临时关闭，给您带来的不便，敬请原谅。</p>
				<span class="size-F iconfont icon-zimuf"></span>
			</div>
		</div>
		<div class="reserve-ticket">
			<h3 class="reserve-headline iconfont icon-damuzhi">去哪儿推荐</h3>
			<ul>
				<li class="ticket-details">
					<div class="time-slot">
						<p class="time-slot-p">【上午场】 故宫成人票凭身份证入园</p>
						<span class="details-tomorrow iconfont icon-yuding">可定明日</span>
						<span class="details-tomorrow iconfont icon-icondingjinketui">条件退</span>
					</div>
					<div class="ticket-right">
						<p>￥40</p>
						<span class="ticket-details-reserve">预定</span>
					</div>
				</li>
				<li class="ticket-details">
					<div class="time-slot ">
						<p class="time-slot-p">【上午场】 故宫成人票+故宫全景手绘地图</p>
						<span class="details-tomorrow time-slot-color iconfont icon-yuding">可定明日</span>
						<span class="details-tomorrow iconfont icon-gantan">不可退</span>
					</div>
					<div class="ticket-right">
						<p>￥50</p>
						<span class="ticket-details-reserve">预定</span>
					</div>
				</li>
				<li class="ticket-details">
					<div class="time-slot">
						<p class="time-slot-p">【5大景点】 广场+故宫+八达岭长城+鸟巢水立方，北京一日游</p>
						<span class="details-tomorrow iconfont icon-yuding">可定明日</span>
						<span class="details-tomorrow iconfont icon-icondingjinketui">无购物</span>
						<span class="details-tomorrow iconfont icon-icondingjinketui">无自费</span>
					</div>
					<div class="ticket-right">
						<p>￥148起</p>
						<span class="ticket-details-reserve">预定</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.go-back{
		position: absolute;
		left: .15rem;
		top: .15rem;
		width: .72rem;
		height: .72rem;
		text-align: center;
		line-height: .72rem;
		border-radius: 50%;
		color: #fff;
		background: rgba(0,0,0,.5);
	}
	.gugong-header{
		overflow: hidden;
		margin-bottom: .2rem;
	}
	.gugong-img{
		position: relative;
		overflow: hidden;
   		height: 0;
   	 	width: 100%;
    	padding-bottom: 55%;
	}
	.gugong-img>img{
		width: 100%;
	}
	.gugong-img>h3{
		position: absolute;
		left: .3rem;
		bottom: .3rem;
		color: #fff;
		font-size: .32rem;
		width: 5rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.gugong-number{
		position: absolute;
		right: .3rem;
		bottom: .3rem;
		display: block;
		width: 1.2rem;
    	height: .4rem;
    	font-size: .24rem;
    	text-align: center;
    	line-height: .4rem;
		color: #fff;
		background: rgba(0,0,0,.5);
		border-radius: .2rem;
	}
	
	.gugong-intro{
		position: relative;
  		top: -.1rem;
  		border-radius: .1rem .1rem 0 0;
  		overflow: hidden;
  		
	}
	.gugong-site{
		position: relative;
		width: 100%;
		height: .88rem;
		line-height: .88rem;
		margin-bottom: .2rem;
		padding: 0 .2rem;
		background: #fff;
	}
	.size-describe{
		position: relative;
		width: 90%;
		font-size: .28rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.icon-houtai-changfangxing:before{
		padding-right: .15rem;
	}
	.icon-tupian:before{
		padding-right: .15rem;
	}
	.icon-hm-normal-local:before{
		padding-right: .15rem;
	}
	.icon-zimuf:before {
		color: #b9b9b9;
		position: absolute;
		right: .5rem;
		bottom: .05rem;
	}
	.icon-laba:before{
		font-size: .36rem;
		margin-right: .1rem;
	}
	.gugong-site-beijing{
		margin-bottom: 0;
	}
	
	.size-comment-zimu{
		color: #00bcd4;
		float: left;
		margin-left: .2rem;
	}
	.size-comment-grade{
		color: #00bcd4;
		float: left;
		margin-left: .7rem;
	}
	.size-comment-number{
		float: right;
	}
	.site-warning{
		color: #f1441a;
		background: #fdeede;
	}
	
	
	.reserve-ticket{
		background: #fff;
	}
	.reserve-headline{
		width: 100%;
		height: .88rem;
		line-height: .86rem;
		padding: 0 .2rem;
		border-bottom: .03rem solid #e1e8e1;
	}
	.icon-damuzhi:before{
		color: #F1441A;
		font-size: .5rem;
		margin-right: .2rem;
	}
	
/*	去哪儿推荐*/
	.ticket-details{
		width: 100%;
		padding: .2rem .2rem;
		display: flex;
	}
	.time-slot{
		flex: 9;
		width: 70%;
		border-right: .025rem solid #e1e8e1
	}
	.time-slot-p{
		line-height: .52rem;
    	font-size: .3rem;
		margin-bottom: .3rem;
		margin-right: .1rem;
		overflow:hidden;
		text-overflow: ellipsis;
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
	}
	.time-slot-color~.icon-gantan:before{
		color: #ff9800;
		margin-right: .15rem;
	}
	.icon-icondingjinketui:before{
		margin-right: .15rem;
	}
	.icon-yuding:before{
		margin-right: .15rem;
	}
	.details-tomorrow{
		font-size: .24rem;
		margin-right: .2rem;
	}
	.ticket-details-reserve{
		display: block;
		width: 1.6rem;
		height: .6rem;
		line-height: .6rem;
		color: #fff;
		background: #ff9800;
		border-radius: .1rem;
		text-align: center;
	}
	.ticket-right{
		flex: 4;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: .2rem;
	}
	.ticket-right>p{
		color: #ff9800;
		font-size: .32rem;
	}
	

</style>
