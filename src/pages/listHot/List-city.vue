<template>
	<div class="hotsearch">
		<div class="hotsearch-head">
			<span class="hotsearch-title">热门搜索</span>
			<span class="hotsearch-change">
				<span class=" iconfont icon-huanyipi icon-changeOther"></span>
				<span class="hotsearch-refreshtext" @click="handleChange">换一批</span>	
			</span>
		</div>
		<div class="hotsearch-con">
			<div class="hotsearch-spot">
				<div class="hotsearch-typeicon">
					<div class="hotsearch-container">
						<img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png"/>
					</div>
				</div>
				<div class="hotsearch-items maxline">
					<div  class="hotsearch-items-inner" :style="{top:top0+'rem'}">
						<a href="javascript:;" class="hotsearch-items-con">宋城千古情</a>
						<a href="javascript:;" class="hotsearch-items-con">故宫</a>
						<a href="javascript:;" class="hotsearch-items-con">香山公园</a>
						<a href="javascript:;" class="hotsearch-items-con">天门狐仙</a>
						<a href="javascript:;" class="hotsearch-items-con">张家界大峡谷</a>
						<a href="javascript:;" class="hotsearch-items-con">颐和园</a>
						<a href="javascript:;" class="hotsearch-items-con">鼓浪屿</a>
						<a href="javascript:;" class="hotsearch-items-con">上海迪士尼乐园</a>
						<a href="javascript:;" class="hotsearch-items-con">北京欢乐谷</a>
						<a href="javascript:;" class="hotsearch-items-con">婺源</a>
						<a href="javascript:;" class="hotsearch-items-con">八达岭长城</a>
						<a href="javascript:;" class="hotsearch-items-con">恭王府</a>
						<a href="javascript:;" class="hotsearch-items-con">雍和宫</a>
						<a href="javascript:;" class="hotsearch-items-con">天坛公园</a>
						<a href="javascript:;" class="hotsearch-items-con">西岭雪山滑雪场</a>
						<a href="javascript:;" class="hotsearch-items-con">古北水镇</a>
						<a href="javascript:;" class="hotsearch-items-con">玉龙雪山</a>
						<a href="javascript:;" class="hotsearch-items-con">慈城古镇</a>
						<a href="javascript:;" class="hotsearch-items-con">乌镇西栅</a>
						<a href="javascript:;" class="hotsearch-items-con">都江堰</a>
						<a href="javascript:;" class="hotsearch-items-con">圆明园</a>
						<a href="javascript:;" class="hotsearch-items-con">泰山</a>
						<a href="javascript:;" class="hotsearch-items-con">成都欢乐谷</a>
						<a href="javascript:;" class="hotsearch-items-con">武汉欢乐谷</a>
						<a href="javascript:;" class="hotsearch-items-con">泸沽湖</a>
					</div>
				</div>
			</div>
			<div class="hotsearch-city hotsearch-spot">
				<div class="hotsearch-typeicon">
					<div class="hotsearch-container">
						<img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png"/>
					</div>
				</div>
				<div class="hotsearch-items middleline">
					<div class="hotsearch-items-inner" :style="{top:top1+'rem'}">
						<a href="javascript:;" class="hotsearch-cityitems">广州</a>
						<a href="javascript:;" class="hotsearch-cityitems">三亚</a>
						<a href="javascript:;" class="hotsearch-cityitems">上海</a>
						<a href="javascript:;" class="hotsearch-cityitems">苏州</a>
						<a href="javascript:;" class="hotsearch-cityitems">厦门</a>
						<a href="javascript:;" class="hotsearch-cityitems">重庆</a>
						<a href="javascript:;" class="hotsearch-cityitems">成都</a>
						<a href="javascript:;" class="hotsearch-cityitems">天津</a>
						<a href="javascript:;" class="hotsearch-cityitems">西安</a>
						<a href="javascript:;" class="hotsearch-cityitems">南京</a>
						<a href="javascript:;" class="hotsearch-cityitems">深圳</a>
						<a href="javascript:;" class="hotsearch-cityitems">宁波</a>
						
					</div>
				</div>
			</div>
		</div>
		<div class="hotsearch-footer">
			<a href="javascript:;">搜索身边的景点</a>
		</div>
		
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				top0:0,
				top1:0
			}
		},
		methods:{
			handleChange:function(){
				this.top0-=1.7;
				if(this.top0==-5.1){
					this.top0=0;
				}
				this.top1-=0.85;
				if(this.top1==-2.55){
					this.top1=0;
				}
			}
		}
	}
</script>

<style scoped>
	.hotsearch{
		height:4.6rem;
		background: #fff;
		box-shadow: 0 1px 2px 2px #c4c4c4;
	}
	
	.hotsearch-head{
		padding: 0 .2rem;
		background-color: #f0f5f6;
		height: .64rem;
		line-height: .64rem;
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	.hotsearch-title{
		font-size: .26rem;
		color:#888 ;
	}
	.hotsearch-change{
		color: #00afc7;
		font-size: .26rem;
	}
	.hotsearch-con{
		background: #fff;
	}
	.hotsearch-spot{
		position: relative;
		padding-left: .74rem;
		border-top: 1px solid #dce5e7;
	}
	.hotsearch-typeicon{
		position: absolute;
		width: .74rem;
		left:0;
		top: 0;
		height: 100%;
		line-height: 100%;
		text-align: center;
	}
	.hotsearch-container{
		position: absolute;
		width: .72rem;
		height: 70%;
		top: 15%;
		border-right: .02rem solid #DCE5E7;
	}
	.hotsearch-typeicon img{
		width: .3rem;
		height: .3rem;
		position: relative;
		top: 50%;
		margin-top: -.15rem;
	}
	.maxline{
		max-height: 1.8rem;
	}
	.middleline{
		max-height: .9rem;
	}
	.hotsearch-items{
		zoom: 1;
		overflow: hidden;
		position: relative;
		width: 100%;
	}
	.hotsearch-items-inner{
	    zoom: 1;
		overflow: hidden;
		position: relative;
		left: 0;
	}
	.hotsearch-items-con{
	    float: left;
	    height: .36rem;
	    max-width: 2.89rem;
	    line-height: .36rem;
	    text-align: center;
	    display: block;
	    padding-left: .3rem;
	    padding-right: .3rem;
	    border-right: 1px dashed #c9cccd;
	    color: #333;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-top: .25rem;
	    margin-bottom: .25rem;
	}
	.hotsearch-cityitems{
	    float: left;
	    height: .36rem;
	    width: 24.5%;
	    line-height: .36rem;
	    text-align: center;
	    display: block;
	    border-right: 1px dashed #c9cccd;
	    color: #333;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    margin-top: .25rem;
	    margin-bottom: .25rem;
	}
	.hotsearch-city{
		border-bottom: .02rem solid #DCE5E7;
	}
	.hotsearch-footer{
		height: .72rem;
		line-height: .72rem;
		margin: .2rem;
		border: 1px solid #dde1e3;
		border-radius: 0.06rem;
		text-align: center;
		background: #fff;
	}
	.hotsearch-footer a{
		color: #333;
	}
</style>
