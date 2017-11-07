<template>
	<div class="week-module"> 
		<h2 class="week-where">周末去哪儿</h2>
		<router-link :to="item.link">
			<div class="week-list" v-for="item in weekend" :key="item.id">
				<a href="#" class="week-a">
					<img :src=item.imgUrl class="week-img"/>
				</a>
				<h3 class="week-headline">{{item.weekName}}</h3>
				<p class="week-describe">{{item.nameDetail}}</p>
			</div>
		</router-link>
 	</div>
</template>

<script>
	
	
	
</script>

<style>
	.week-where{
		width: 100%;
		height: .8rem;
    	line-height: .8rem;
   		background: #f5f5f5;
   		padding-left: .25rem;
   		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	/*.week-list{
		width: 100%;
		height: 4.08rem;
	}*/
	.week-img{
		width: 100%;
	}
	.week-headline{
		font-size: .28rem;
		line-height: .48rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: .25rem;
		padding-top: .14rem;
	}
	.week-describe{
		font-size: .24rem;
		line-height: .42rem;
		color: #616161;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding-left: .25rem;
		padding-bottom: .15rem;
	}
</style>