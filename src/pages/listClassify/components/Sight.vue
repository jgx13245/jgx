<template>
	<div class="list" id="wrapper2">
		<div id="scroller">
			<div>
				<div v-for="item in sightInfo" :key="item.id" >
					<dl>
						<dt>
							<img :src="item.imgUrl" :alt="item.sightName" :title="item.sightName">
						</dt>
						<dd class="topborder1"><h4>{{item.sightName}}</h4><span>￥{{item.sightPrice}}<i>起</i></span> </dd>
						<dd class="topborder1">{{item.sightComment}}人评论</dd>
						<dd class="topborder1">{{item.sightPlace}}</dd>
						<dd class="topborder">               
							<h4>{{item.sightName}}{{item.sightAdultTitle}}</h4><span>￥{{item.sightAdultPrice}}</span>
						</dd>
						<dd class="topborder">
							<h4>{{item.sightName}}{{item.sightStudentTitle}}</h4><span>￥{{item.sightStudentPrice}}</span>
						</dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
require('../../../utils/iscroll-probe.js') 
	export default {
		computed:{
			sightInfo(){
				return 	this.$store.state.listClassify.sightInfo;
			},
			sightRedInfo(){
				return this.$store.state.listClassify.sightRedInfo;
			}
			
		},	
		mounted(){
			this.myScroll =new IScroll('#wrapper2', { probeType:1, mouseWheel: true });
			this.myScroll.on("scroll",()=>{
				if(this.myScroll.y>25){
					this.$store.commit("sightRedInfo");
				}
				if(this.myScroll.y<(-this.sightRedInfo.length * 164)){
					this.$store.commit("sightRedInfo");
				}
			})
		},
		updated(){
			this.myScroll.refresh();
		}
	}
</script>

<style scoped>
	#wrapper2{
		height:9rem;
		overflow: hidden;
	}
	h4{
        display: inline-block;
        color: #212121;
    }
	.modList {
		height: .8rem;
		padding-left: .26rem;
		line-height: .8rem;
		color: #212121;
		background: #f5f5f5;
	}
	
	.list dl {
		height: 2.6rem;
		padding: .24rem;
		border-bottom: .2rem solid #f5f5f5;
	}
	
	.list dd {
		height: .5rem;
		line-height: .4rem;
		color: #9e9e9e;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
        display: block;
	}
	
	.list dd span {
		color: #ff8300;
		font-size: .4rem;
       float: right;
       display: inline-block;
	}
    .list dd span i{
        color: #9e9e9e;
        font-size: .24rem;
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
	
    .topborder{
        height: .8rem;
        border-top:#9e9e9e dashed 1px;
        padding: 0.05rem 0;
        padding-top:.1rem
    }
</style>