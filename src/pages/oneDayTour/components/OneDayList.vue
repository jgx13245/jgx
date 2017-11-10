<template>
	<div>
		<div class="oneDayList">
			<ul>
				<li class="oneDay-ticket" v-for="item in oneDayList" :key="item.id"> 
					<a class="ticket-aimg">
						<img :src=item.imgUrl class="ticket-img"/>
					</a>
					<div class="ticket-detail">
						<div class="ticket-site">
							<p class="ticket-site-p">{{item.site}}</p>
						</div>
						<div class="ticket-correlation">
							<p class="point-departure">
								<span class="deprt-city">{{item.city}}</span>|
								<span class="no-option">{{item.option}}</span>|
								<span class="no-shopping">{{item.shopping}}</span>
							</p>
							<span class="yet-sale">已售<em>{{item.number}}</em></span>
							<span class="ticket-money">
								<em>						
								¥<b>{{item.money}}</b>
								</em>起						
							</span>
						</div>
					</div>				
				</li>
			</ul>
	 	</div>
 	</div>
</template>

<script>
	//import { mapState } from "vuex";
	export default{
		computed:{
			oneDayList(){
				console.log(this.$store.state.oneDayTour.oneDayList);
				return this.$store.state.oneDayTour.oneDayList;				
			}
		}
	}
</script>

<style scoped>
	.oneDay-ticket{
		position: relative;
		display: flex;
	}
	.ticket-aimg{
		display: block;
		width: 1.6rem;
		height: 1.6rem;
		margin: .2rem;
	}
	.ticket-img{
		width: 100%;
	}
	.ticket-detail{
		position: relative;
		flex: 1;
		padding: .2rem .2rem .2rem 0;
		border-bottom: .01rem solid #C9CCCD;
		
	}
	.ticket-site{
		height: 0;
		overflow: hidden;
		padding-bottom: 16%;
	}
	.ticket-site-p{
		width: 5.3rem;
		font-size: .3rem;
		line-height: .36rem;
		word-wrap : break-word;
		overflow:hidden;
		text-overflow: ellipsis;
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
	}
	.ticket-correlation{
		font-size: .24rem;
	}
	.point-departure{
		
		overflow: hidden;
	}
	.point-departure{
		margin-bottom: .25rem;
		color: #B9B9B9;
		
	}
	.deprt-city{
		color: deepskyblue;
		margin-right: .1rem;
	}
	.no-option{
		margin-right: .1rem;
		color: #616161;
	}
	.no-shopping{
		color: #616161;
	}
	.ticket-money{
		position: absolute;
		right: .2rem;
		bottom: .35rem;
		font-size: .22rem;
    	font-weight: bold;
    	color: #9e9e9e;
	}
	.ticket-money>em{
    	color: #ff8300;
	}
	.ticket-money>em>b{
		font-weight: bold;
		font-size: .32rem;
		margin: 0 .05rem 0 .02rem;
	}
	.yet-sale{
		position: absolute;
		left: 0;
    	bottom: .2rem;
		color: #9e9e9e;
	}
</style>



