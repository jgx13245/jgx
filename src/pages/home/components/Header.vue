<template>
 	<header class="header">

 		<div class="header-left iconfont icon-fanhui"></div>
		 <router-link to="/listHot">
		 <div class="header-title" >
 			输入城市/景点/游玩主题
 		 </div>
		 </router-link>
	
 		<div class="header-right">
 			<div class="header-city-wrapper" @click="handletosele">
				 <!-- <router-link to="/selectCity"> -->
 					<span class="header-city">北京</span>
				 <!-- </router-link> -->
 			</div>
 		</div>
 	</header>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	methods:{
		handletosele() {
			this.$router.push({
				path:"/selectCity"
			})
			console.log(11)
		}
	}
};
</script>

<style scoped>
.header {
  height: 0.88rem;

  background:/* #00bcd4*/ #ff0000;
  overflow: hidden;

  background: #00bcd4;
  overflow: hidden;
}
.header-left {
  float: left;
  width: 0.4rem;
  padding: 0 0.2rem;
  line-height: 0.88rem;
  font-size: 0.4rem;
  color: #fff;
}
.header-title {
  position: absolute;
  left: 0.8rem;
  right: 1.36rem;
  top: 0.14rem;
  line-height: 0.6rem;
  background: #fff;
  border-radius: 0.06rem;
  text-indent: 0.2rem;
  color: #ccc;
}
.header-right {
  float: right;
  width: 1.28rem;
  line-height: 0.88rem;
  text-align: center;
  color: #fff;
}
.header-city-wrapper {
  position: relative;
  padding-right: 0.3rem;
}
.header-city {
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
  width: 1rem;
  text-overflow: ellipsis;
  color: #fff;
}
.header-city::after {
  content: "\0020";
  position: absolute;
  top: 0.4rem;
  right: 0.14rem;
  width: 0;
  height: 0;
  border: 0.1rem solid transparent;
  border-top: 0.1rem solid #fff;
}
</style>
