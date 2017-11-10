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
			<li class="dl" v-for="item in activityInfo" :key="item.id">
				<img :src="item.imgUrl" :alt="item.alt"/>
			</li>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default{
	computed:mapState({
		activityInfo(state){
			return state.home.activityInfo;
		}
	}),
	/*computed:{
    	activityInfo(){
    		return this.$store.state.home.activityInfo;
    	}
    }*/
}
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
		display: flex;
		overflow: hidden;
	}
	
	.dl {
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-bottom: 21%;
		flex:1;
	}
	
	.dl img {
		width: 100%;
	}
</style>