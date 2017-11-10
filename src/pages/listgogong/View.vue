<template>
	<div>
		<div class="view-header">看了该景点的人还看了</div>
		
		<div id="View">
			
		 	<div class="view" v-for ="item in message" :key="item.id">
		 		<div class="view-content">
		 			<div class="picture"><img :src="item.img"/></div>
		 			<div class="name">{{item.name}}</div>
		 			<div class="discuss">
		 				<span class="iconfont icon-wuxing"></span>
		 				<span class="num">10323条评论</span>
		 			</div>
		 			<div class="address">
		 				<span>北京·东城区</span>
		 			</div>
		 			<div class="price">
		 				<span class="price-1">￥20</span>
		 				<span class="price-2">起</span>
		 			</div>
		 		</div>
		 	</div>
		 	
	 	</div>
 	</div>
</template>

<script>
export default {
	data() {
		return {
			message: [
				{
					name: "天安门",
					img: "http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_228x168_bf40890b.jpg"
				},{
					name: "恭王府",
					img: "http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_228x168_9d25e6f0.jpg"
				},{
					name: "鸟巢",
					img: "http://img1.qunarzz.com/sight/p0/1508/fe/434ee530e21f1c11bad088e8cc8d5e93.water.jpg_228x168_6572dd12.jpg"
				},{
					name: "恭王府",
					img: "http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_228x168_9d25e6f0.jpg"
				},{
					name: "天坛公园",
					img: "http://img1.qunarzz.com/sight/p0/1508/fe/434ee530e21f1c11bad088e8cc8d5e93.water.jpg_228x168_6572dd12.jpg"
				},{
					name: "天安门",
					img: "http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_228x168_ec8547e9.jpg"
				},{
					name: "圆明园",
					img: "http://img1.qunarzz.com/sight/p0/1603/85/85c883189bf7293390.water.jpg_228x168_9d25e6f0.jpg"
				}	
			]
		}
	}
}
</script>

<style>
	.view-header{
		width: 100%;
		height: .88rem;
		padding: 0 .2rem;
		border-bottom: 2px solid #f5f5f5;
		font-size: .3rem;
    	line-height: .88rem;
	}
	.view-content{
		width: 100%;
		height: 2rem;
		overflow: hidden;
		position: relative;
	}
	.picture img{
		margin: .2rem .2rem 0 .2rem;
	    width: 1.62rem;
	    height: 1.62rem;
	    float: left;
	}
	.name{
		width: 40%;
		position: absolute;
	    top: .2rem;
	    left: 2.2rem;
	    right: 1.5rem;
		float: left;
		line-height: .4rem;
	    font-size: .3rem;
	    color: #212121;
	    white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.discuss{
		margin-top: 1rem;
	}
	.discuss .num{
		font-size: .24rem;
    	color: #9e9e9e;
    	padding-left: .15rem;
	}
	.address span{
	    color: #9e9e9e;
    	font-size: .24rem;
    	position: absolute;
    	top: 1.5rem;
	    left: 2.2rem;
	    right: 1.5rem;
	}
	.price{
		position: absolute;
    	top: .2rem;
	    right: 0.5rem;
	}
	.price .price-1{
		font-size: 0.4rem ;
		color: #ff9800;
	}
	.price .price-2{
		font-size: 0.1rem;
		color: #9e9e9e;
	}
</style>
