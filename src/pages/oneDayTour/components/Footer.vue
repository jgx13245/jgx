<template>
 	<div class="footer">
		<ul class="footer-box">
			<li class="footer-list">
				<span class="footer-Icon iconfont icon-quanbufenlei"></span>
				<p class="footer-Written">全部分类</p>
			</li>
			<li class="footer-list">
				<span class="footer-Icon iconfont icon-filter"></span>
				<p>筛选</p>
			</li>
			<li class="footer-list">
				<span class="footer-Icon iconfont icon-paixu"></span>
				<p>推荐排序</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	
	
}
computed:{
	
}
</script>

<style scoped>
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,.8);
		color: #fff;
	}
	.footer-box{

		display: flex;
		text-align: center;
	}
	.footer-list{
		flex: 1;
		height: .72rem;
		line-height: .36rem;
		flex-direction: column;
	}
	.footer-Written{
		font-size: .24rem;
	}
</style>
