
<template>
  <swiper :options="swiperOption"  ref="mySwiper">

    <swiper-slide>
    		<div class="swiper-img-con">
					<ul class="first">
						<li>
							<img src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="景点门票" style="opacity: 1;">
							<span>景点门票</span>
						</li>
						<li>
							<img src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png" alt="动植物园" style="opacity: 1;">
							<span>动植物园</span>
						</li>
						<li>
							<img src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png" alt="故宫" style="opacity: 1;">
							<span>故宫</span>
						</li>
						<li>
							<img src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png" alt="一日游" style="opacity: 1;">
							<span>一日游</span>
						</li>
						<li>
							<img src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png" alt="必游榜单" style="opacity: 1;">
							<span>必游榜单</span>
						</li>
						<li>
							<img src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png" alt="秋色美" style="opacity: 1;">
							<span>秋色美</span>
						</li>
						<li>
							<img src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png" alt="游乐场" style="opacity: 1;">
							<span>游乐场</span>
						</li>
						<li>
							<img src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png" alt="泡温泉" style="opacity: 1;">
							<span>泡温泉</span>
						</li>
					</ul>
    		</div>
    	</swiper-slide>
   		<swiper-slide>
   			<div class="swiper-img-con">
   			<ul class="second">						
						<li><img src="http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png" alt="城市观光" style="opacity: 1;">
							<span>城市观光</span>
						</li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png" alt="玻璃栈道" style="opacity: 1;">
							<span>玻璃栈道</span>
						</li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png" alt="名胜古迹" style="opacity: 1;">
							<span>名声古迹</span>
						</li>
						<li><img src="https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png" alt="周边游" style="opacity: 1;">
							<span>周边游</span></li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png" alt="自然风光" style="opacity: 1;">
							<span>自然风光</span>
						</li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png" alt="古北水镇" style="opacity: 1;">
							<span>古北水镇</span>
						</li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png" alt="景点讲解" style="opacity: 1;">
							<span>景点讲解</span>
						</li>
						<li><img src="http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png" alt="全部" style="opacity: 1;">
							<span>全部</span>
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
				}
				.first li img{
					width:0.7rem;
					height:0.7rem;
				}
<<<<<<< HEAD
=======


>>>>>>> 00e33d3e6ac8ca123dbff006e6a9c8bc8c269c1e
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
					/*让高度自动变为宽度的31.25%,只能用padding实现*/
				/* overflow: hidden; */
					width: 100%;
					height: 4.5rem;
					/* padding-bottom: 31.25%; */
				}
				.swiper-img {
					width: 100%;
				}
			
</style>