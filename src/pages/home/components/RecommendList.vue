<template>
	<div class="Reclist">
		<h2 class="modList">热销推荐</h2>
		<div class="listFoe" v-for="item in recommendInfo" :key="item.id">
			<dl>
				<dt>
	 				<img :src="item.imgUrl" :alt="item.alt">
	 			</dt>
				<dd>{{item.recname}}</dd>
				<dd>{{item.explain}}</dd>
				<dd><i>{{item.sale}}</i><span>{{item.num}}</span> 起</dd>
			</dl>
		</div>
		<div class="botList">
			<a>查看所有产品</a>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		computed:mapState({
		recommendInfo(state){
			return state.home.recommendInfo;
		}
	}),
	}
</script>

<style scoped>
	.Reclist {
		width: 100%;
	}
	
	.modList {
		height: .8rem;
		padding-left: .26rem;
		padding-right: .26rem;
		line-height: .8rem;
		width: 93%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #212121;
		background: #f5f5f5;
	}
	
	.Reclist dl {
		height: 1.4rem;
		padding: .24rem;
		border-bottom: 1px solid #f5f5f5;
	}
	
	.Reclist dd {
		float: left;
		height: .4rem;
		line-height: .4rem;
		width: 76%;
		color: #9e9e9e;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.Reclist dd span {
		color: #ff8300;
		font-size: .4rem;
	}
	
	.Reclist dd i {
		color: #ff8300;
	}
	
	.Reclist dt {
		float: left;
		width: 1.4rem;
		height: 1.4rem;
		padding-right: .24rem;
	}
	
	.Reclist dt img {
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