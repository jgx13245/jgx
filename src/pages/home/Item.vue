<template>
	<div>
		<div class="item">
			<div class="item-list">				
				<span class="item-span iconfont icon-shouye">定位失败</span>			
			</div>
			<div class="item-list">				
				<span class="item-span iconfont icon-browser">五折泡温泉</span>				
			</div>
		</div>

		<div class="item1-img">
			<li class="dl">
				<img src="http://img1.qunarzz.com/piao/fusion/1710/a2/e395615b16fb1302.png" />
			</li>
			<li class="dl">
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
	
	.item-list {
		width: 50%;
		height: .98rem;
		background: #fff;
		float: left;
		line-height: .98rem;
		display: flex;
		justify-content: center;
	}
	.icon-shouye:before,.icon-browser:before{
		padding-right: .1rem;
	}
	.item-span{
		display: block;
		width:1.8rem;
		font-size: .28rem;
		color: #212121;
		padding-left: .2rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.item1-img {
		width: 100%;
		overflow: hidden;
	}
	
	.dl {
		width: 50%;
		float: left;
	}
	
	.dl img {
		width: 100%;
	}
</style>