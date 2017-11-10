

<template>
	<div class="position" v-show="show" ref="mmm">
		<div class="your-position">
			<div class="CityChange-main-title">您的位置</div>
			<div class="your-position-now">
				<div class="your-position-now-name"><a>北京</a></div>
			</div>
		</div>
		<div class="your-position">
			<div class="CityChange-main-title">热门城市</div>
			<div class="your-position-now">
				<div class="your-position-now-name" v-for="item in foreignHotCity" :key="item">
					<a>{{item}}</a>
				</div>
			</div>
		</div>
		<ul>
			<li v-for="item in Foreign" :key="item.id"  class="cityPosition">
				<div class="CityChange-main-title" ref="item">{{item[0]}}</div>
				<ul>
					<li v-for="item in item[1].city" class="city-detail" :key="item.id" >{{item.cityarea}}</li>
				</ul>
			</li>
		</ul>
	</div>
 	</div>
</template>

<script>

import {mapState} from "vuex"

export default {	
	props:['show','word','num'],
	data() {
		return {
			alpha:{},
			alphanum:{}
		}
	},
	computed: mapState({
			Foreign(state){
					return state.selectCity.Foreign
				},
			foreignHotCity(state){
					return state.selectCity.foreignHotCity
			}
		}),
	watch :{
		//监听传输过来的值，做成函数
			num() {
				for(var j=0;j<this.$refs.item.length;j++){
						this.alphanum[j]= this.$refs.item[j].offsetTop
				}	
				//console.log(this.alphanum);
				for(var i  in this.alphanum){
					if(i==this.num){
						document.documentElement.scrollTop=this.alphanum[this.num]-46;
					}
				}
			},
			word() {
				for(var j=0;j<this.$refs.item.length;j++){
				this.alpha[this.$refs.item[j].innerHTML]= this.$refs.item[j].offsetTop;
			}
			
			for(var i  in this.alpha){
				if(i==this.word){
					document.documentElement.scrollTop=this.alpha[this.word]-46;
					break;
				}
			}
			}


	},

	updated() {
			
	}


}

</script>


<style scoped>
.CityChange-header {
		position: fixed;
	    top: 0;
	    left: 0;
	    height: .88rem;
	    width: 100%;
	    background: #00afc7;
	    color: #fff;
	    z-index: 100;
	}
	
	.CityChange-fanhui {
		display: inline-block;
		position: absolute;
		z-index:10;
	    width: .4rem;
	    line-height: .88rem;
	    padding: 0 .22rem;
	    font-size: .36rem;
	    color: #fff;
	}
	
	.foreignOrChina {
		position: absolute;
		text-align: center;
		top:.15rem;
		width:100%;
	}
	.foc-connent{
		border: .02rem solid #fff;
		border-radius: .1rem;
		display: inline-block;
	}
	
	.CityChange-city {
		display: inline-block;
		width: 2rem;
		height: .56rem;
		line-height: .56rem;
		text-align: center;
		color: #fff;
	}
	
	.currentCity {
		background: #fff;
		color: #00afc7;
	}
	
	.CityChange-main {
		margin-top: .88rem;
	}
	
	.CityChange-search {
		height: .88rem;
	    width: 100%;
	    background: #00afc7;
	    color: #fff;
	}
	
	.input-city {
		margin-left: .22rem;
		width: 95%;
		height: 80%;
		border: 0;
		border-radius: .1rem;
		font-size: .1rem;
		
	}
	
	.CityChange-main-title {
		line-height: .54rem;
	    padding-left: .3rem;
	    color: #616161;
	    font-size: .26rem;
	    border-bottom:1px solid #f4f4f4;
	    background: #f4f4f4;
	}
	
	.your-position-now {
		padding-top: .04rem;
    	padding-bottom: .26rem;
    	padding-left: .3rem;
    	padding-right: .5rem;
    	background-color: #fff;
	}
	
	.your-position-now-name {
		display: inline-block;
		box-sizing: border-box;
		width:33.33%;
		padding: .2rem .14rem 0 .1rem;
	}
	.your-position-now-name a{
		display: block;
		width:100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		line-height: 28px;
		text-align: center;
		border-radius: .06rem;
		border: .02rem solid #c9cccd;
	}
	
	.cityPosition {
		background: #fff;
		border-bottom: 1px solid #f4f4f4;
	}
	
	.city-detail {
		line-height: .76rem;
	    padding-left: .2rem;
	    font-size: .28rem;
	    color: #212121;
	    border-bottom: .02rem solid #f4f4f4;
	}
</style>
