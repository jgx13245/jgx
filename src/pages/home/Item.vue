<template>
	<div>
		<div class="item">
			<li class="item-1 iconfont icon-shouye">
				<span class="item-span1">定位失败</span>
			</li>
			<li class="item-2 iconfont icon-browser">
				<span class="item-span2">五折泡温泉</span>
			</li>
		</div>

		<div class="item1-img">
			<li class="dl1">
				<img src="http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png" />
			</li>
			<li class="dl2">
				<img src="http://img1.qunarzz.com/piao/fusion/1710/54/1685d2108b652302.png" />
			</li>
		</div>
	</div>
</template>

<script>
</script>

<style>
	li {
		list-style: none;
	}
	
	.item {
		width: 100%;
		height: .98rem;
		border-bottom: 12px solid #f5f5f5;
	}
	
	.item-1 {
		width: 50%;
		height: .98rem;
		background: #fff;
		float: left;
		line-height: .98rem;
		text-align: center;
		
	}
	
	>.item-span1 {
		width:1.2rem;
		font-size: .28rem;
		color: #212121;
		float: left;
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.item-2 {
		width: 50%;
		height: .98rem;
		background: #fff;
		float: left;
		line-height: .98rem;
		text-align: center;
		display: block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	>.item-span2 {
		font-size: .28rem;
		color: #212121;
		float: left;
		
	}
	
	.item1-img {
		width: 100%;
		height: 1.4rem;
	}
	
	.dl1 {
		width: 50%;
		height: 1.6rem;
		float: left;
	}
	
	.dl1 img {
		width: 100%;
		height: 1.6rem;
	}
	
	.dl2 {
		width: 50%;
		height: 1.6rem;
		float: left;
	}
	
	.dl2 img {
		width: 100%;
		height: 1.6rem;
	}
</style>