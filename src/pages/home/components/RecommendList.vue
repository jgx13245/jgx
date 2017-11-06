<template>
	<div class="list">
		<h2 class="modList">热销推荐</h2>
		<dl>
			<dt>
 				<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" title="故宫" alt="故宫">
 			</dt>
			<dd>故宫</dd>
			<dd>东方宫殿建筑代表，世界宫殿建筑典范</dd>
			<dd><i>￥</i><span>20</span> 起</dd>
		</dl>
		<dl>
			<dt>
 				<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg" alt="八达岭长城" title="八达岭长城">
 			</dt>
			<dd>八达岭长城</dd>
			<dd>不到长城非好汉</dd>
			<dd><i>￥</i><span>25</span> 起</dd>
		</dl>
		<dl>
			<dt>
 				<img src="http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg" alt="颐和园" title="颐和园">
 			</dt>
			<dd>颐和园</dd>
			<dd>保存完整的一座皇家行宫御苑</dd>
			<dd><i>￥</i><span>22</span> 起</dd>
		</dl>
		<dl>
			<dt>
 				<img src="http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg" alt="北京欢乐谷" title="北京欢乐谷">
 			</dt>
			<dd>北京欢乐谷</dd>
			<dd>七大主题园区带你畅享北京欢乐谷</dd>
			<dd><i>￥</i><span>15</span> 起</dd>
		</dl>
		<dl>
			<dt>
 				<img src="http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg" alt="慕田峪长城" title="慕田峪长城">
 			</dt>
			<dd>慕田峪长城</dd>
			<dd>秀美长城，关键是人少</dd>
			<dd><i>￥</i><span>19.1</span> 起</dd>
		</dl>
		<div class="botList">
			<a>查看所有产品</a>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.list {
		width: 100%;
	}
	
	.modList {
		height: .8rem;
		padding-left: .26rem;
		line-height: .8rem;
		color: #212121;
		background: #f5f5f5;
	}
	
	.list dl {
		height: 1.4rem;
		padding: .24rem;
		border-bottom: 1px solid #f5f5f5;
	}
	
	.list dd {
		float: left;
		height: .4rem;
		line-height: .4rem;
		width: 70%;
		color: #9e9e9e;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.list dd span {
		color: #ff8300;
		font-size: .4rem;
	}
	
	.list dd i {
		color: #ff8300;
	}
	
	.list dt {
		float: left;
		width: 1.4rem;
		height: 1.4rem;
		padding-right: .24rem;
	}
	
	.list dt img {
		display: block;
		width: 1.4rem;
		height: 1.4rem;
	}
	
	.botList {
		height: .88rem;
	}
	
	.botList a {
		height: .88rem;
		display: block;
		width: 100%;
		line-height: .88rem;
		text-align: center;
	}
</style>