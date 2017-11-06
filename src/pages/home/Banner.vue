
<template>
  <swiper :options="swiperOption"  ref="mySwiper">

    <swiper-slide v-for="item in swiperInfo" :key="item.id">
    		<div class="swiper-img-con">
					<!--一定要绑定:src-->
    			<img class="swiper-img" :src="item.imgUrl">
    		</div>
		</swiper-slide>
  

    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
		props:["swiperInfo"],
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
</style>

<style scoped>
	.swiper-img-con {
		/*让高度自动变为宽度的31.25%,只能用padding实现*/
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
	}
	.swiper-img {
		width: 100%;
	}
</style>