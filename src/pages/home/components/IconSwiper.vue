
<template>
  <swiper :options="swiperOption"  ref="mySwiper">

   		 <swiper-slide>
    		<div class="swiper-img-con">
					<ul class="first">
						<li  v-for="item in iconSwiper" :key="item.id">
							<router-link :to="item.link">	
							<img :src="item.imgUrl" alt="item.iconName" style="opacity: 1;">
							</router-link>
							<span>{{item.iconName}}</span>
							
						</li>
					</ul>
    		</div>
    	</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   			<ul class="second">						
						<li  v-for="item in iconSwiper1" :key="item.id">
							<img :src="item.imgUrl" alt="item.iconName" style="opacity: 1;">
							<span>{{item.iconName}}</span>
						</li>
			</ul>
   			</div>
   		</swiper-slide>
   	

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

		export default {
			props:["iconSwiper","iconSwiper1"],
			name: 'carrousel',
			data() {
				return {
					swiperOption: {
						autoplay: 3000,
						direction: 'horizontal',
						autoHeight: true,
						pagination: '.swiper-pagination',
						observeParents: true,     
					}
				} 
			},
		
			mounted() {   
				this.$refs.mySwiper.swiper.slideTo(3, 1000, false)
			},
			components:{
						swiper,
					swiperSlide
				}
		}
</script>

<style>
		.swiper-pagination-bullet {
			background: #00bcd4;
		}
		.first{
			box-sizing:border-box;
		}
		.first li{
			width:24%;
			height:1.6rem;
		
			float: left;
			display: flex;
			justify-content:space-around;
			flex-direction: column;
			align-items:center; 
			margin-top:0.2rem;
		}
		.first li span{
			display: block;
			width: 100%;
			text-align: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.first li img{
			width:0.7rem;
			height:0.7rem;
		}
		.second{
			box-sizing:border-box;
		}
		.second li{
			width:24%;
			height:1.6rem;
			float: left;
			display: flex;
			justify-content:space-around;
			flex-direction: column;
			align-items:center; 
			margin-top:0.2rem;
		}
		.second li span{
			display: block;
			width: 100%;
			text-align: center;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.second li img{
			width:0.7rem;
			height:0.7rem;
		}
</style>

<style scoped>
		.swiper-img-con {
			width: 100%;
			height: 4.5rem;
		}
		.swiper-img {
			width: 100%;
		}
			
</style>