<template>
	<div>
		<div class="item1">
			<div class="item-list">				
				<span class="item-span iconfont icon-select " @click="handleClickClassify">全部分类</span>
			</div>
			<div class="item-list">				
				<span class="item-span iconfont icon-select">推荐排序</span>				
			</div>
			<div class="filterContent" v-show="show">
				<div id="wrapper" >
					<div>
						<div class="scroller" >
							<ul id="list">
								<li id="loadNotice" style="display:none;">松开加载</li>
								<li v-for="(item,index) in allSortInfo" :key="item.id" @click="allSortClick(item,index,$event)"  >
									<span>{{item.sortName}}</span>
								</li>	
							</ul>
						</div>
					</div>
				</div>
				<div id="wrapper1" v-show="allSortShow">
					<div>
						<div class="scroller1" >
							<ul id="list">
								<li id="loadNotice" style="display:none;">松开加载</li>
								<li v-for="item in m" :key="item.id" >
									<span>{{item}}</span>
								</li>	
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>		
	</div>
</template>

<script>
require('../../../utils/iscroll-probe.js') 
export default {	
	data() {
		return {
			show:false,
			allSortShow:false,
			m:[]			
		}
		
	},			
	methods:{
		handleClickClassify:function(){
			if(!this.show){
				this.show=true;
			}else{
				this.show=false;
			}
			this.$emit("change",this.show);
		},
		allSortClick:function(item,index,e){
			this.m=[];
			this.allSortShow=true;		
			for(var i = 0;i<this.detailInfo[index].detailName.length;i++){
			　　this.m.push(this.detailInfo[index].detailName[i]);			
			}	
		
		}
	},
	computed:{
    	allSortInfo(){
    		return this.$store.state.listClassify.allSortInfo;
		},
		detailInfo(){
    		return this.$store.state.listClassify.detailInfo;
		}
    },
	mounted(){
		this.myScrollLeft = new IScroll('#wrapper', {  mouseWheel: true });
		this.myScrollRight = new IScroll('#wrapper1', {  mouseWheel: true });
	},
	updated(){
		this.myScrollLeft.refresh();
		this.myScrollRight.refresh();
	}
}
</script>




<style scoped>
	.filterContent{
		position: absolute;
		z-index: 1;
		top: 1.86rem;
		bottom: 0;
		left: 0;
		width: 100%;
		background: #cccccc;
	}
	#wrapper{
		position: absolute;
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 0;
		width: 50%;
		height: 5rem;
		overflow: hidden;
	}
	#wrapper1{
		position: absolute;
		left: 50.2%;
		top: 10;
		width: 100%;
		height: 5rem;
		overflow:hidden;
	}

	 ul {
		list-style: none;
		padding: 0;
		margin: 0;
		width: 100%;
		text-align: left;
		background-color: #fafafa;
	}
	.scroller1 ul{
		background-color: #eee;
	}
	li {
		padding: 0 0.2rem;
		height: 0.8rem;
		line-height: 0.8rem;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #fff;	
		font-size: 14px;
	}
	.scroller1 li{
		border: none;
		height: 0.83rem;
	}
	.item1 {
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
	.rgachange{
		background: #666;
	}
</style>