<template>
	<div>
	 	<div class="header">
			<router-link to="/"><span class="mp-header-left iconfont icon-fanhui"></span></router-link>
			<input class="search-input" placeholder="输入城市或景点" type="text"/>
			<span class="search">搜索</span>
		</div>
		
		
		<div class="tourList" v-show="show">
			<div id="wrapper1">
				<div id="scroller" style="width:34rem">		
					<span class="viewList " v-for="item in tourList" :key="item.id">
						{{item.name}}
					</span>
				</div>
			</div>
			<div class="down" @click="handleClick">
				<span class="iconfont icon-xiangxia-copy" ></span>
			</div>
		</div>

		
		<div class="tourList1" v-show="!show">
			<h3 class="listSelect">游玩景点</h3>
			<p class="listSelect1">(可多选)</p>
			<div id="wrapper">
				<div id="scroller">
					<div class="list">
						<span class="viewList" v-for="item in tourList" :key="item.id">
							{{item.name}}
						</span>
					</div>
				</div>
			</div>
			<div class="down" @click="handleClick1">
				<span class="iconfont icon-6" ></span>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import myScroll1 from "../../../utils/iscroll-probe.js"
export default{
	data:function(){
		return{
			show:true
		}
	},
	computed:{
		tourList(){
			return this.$store.state.oneDayTour.oneDayTour	
		}
	},
	methods:{
		handleClick:function(){
			this.show=false
		},
		handleClick1:function(){
			this.show=true
		}
	},
	mounted(){
		//var myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true });
		setTimeout(function(){
				var myScroll1 = new IScroll('#wrapper1', {  scrollX: true, scrollY: false, mouseWheel: true });
		},1000)
	

	}

}
</script>

<style scoped>
	#wrapper1{
	width: 50rem;
	height:0.88rem;
	width: 100%;
	overflow: hidden;
	}
	
	.list {
		height: 500px;
	}
	.header{
		width: 100%;
		height: .88rem;
    	background: #00bcd4;
    	color: #fff;
    	
	}
	.mp-header-left{
	    display: inline-block;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .2rem;
	    color: #fff;
	    font-size: .36rem;
	}
	.search-input{
		    display: inline-block;
		    width: 4.3rem;
		    height: 0.65rem;
		    font-size: .28rem;
		    border-radius: 0.1rem;
		    border: none;
	        padding-left: .12rem;
		    margin:0.01rem .2rem .15rem 0;
	}
	.search{
		display: inline-block;
	    width: .74rem;
	    margin-left: .06rem;
	    color: #fff;
	    font-size: .28rem;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.tourList{
			width: 100%;
		    height: .88rem;
		    background: #e5e7e8;
		    position: relative;
		    overflow: hidden;
			white-space: nowrap;
	}
	
	.viewList{
		display: inline-block;
		height: .56rem;
        padding: 0 .22rem;
        margin: .15rem .1rem;
		/*float: left;*/
		background: #fff;
		font-size: .26rem;
    	line-height: .56rem;
	    border-radius: .04rem;
	}
	.down{
		width: .8rem;
		height: .8rem;
		background: #e5e7e8;
	    font-size: .28rem;
	    line-height: .78rem;
	    text-align: center;
	    position: absolute;
	    right: 0;
	    top: 0;
	}
	.icon-xiangxia-copy{
		color: #aab2b7;
	}
	.tourList1{
		width: 100%;
	    /*height: 7rem;*/
	    background: #e5e7e8;
	    position: relative;
	    overflow: hidden;
		    
	}
	.listSelect{
		display: block;
		padding-right: .1rem;
		color: #212121;
	    font-size: .28rem;
	    line-height: .8rem;
	    text-indent: .2rem;
	    float: left;
	}
	.listSelect1{
		font-size: .24rem;
		line-height: 0.84rem;
    	padding-left: .1rem;
	}
	.icon-6{
		color: #aab2b7;
	}
</style>
