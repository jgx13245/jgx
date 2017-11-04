<template>
	<div>
		<div class="item">
			<div class="item-list">				
				<span class="item-span iconfont icon-select">全部分类</span>

			</div>
			<div class="item-list">				
				<span class="item-span iconfont icon-select">推荐排序</span>				
			</div>
		</div>		
	</div>
</template>

<script>
export default {			
	
}
</script>

<style scoped>
	li {
		list-style: none;
	}
	
	.item {
		width: 100%;
		height: .98rem;
		border-bottom: 1px solid #eaeaea;

	}
	
	.item-list {
		width: 49.8%;
		height: .98rem;
		background: #fff;
		float: left;
		line-height: .98rem;
		display: flex;
		justify-content: center;
        position: relative;
	}
    .item-list:nth-of-type(1){
        border-right: solid 1px #eaeaea;
    }
	.icon-select:after{
		content: "\0020";
		position: absolute;		
		top: 0.42rem;
        left: 2.24rem;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-top: .1rem solid #666;
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

</style>