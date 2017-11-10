
<template>
	<div class="do-serach">
		<input type="text" class="input-city" placeholder="输入城市名或拼音">
 	</div>
</template>

<script>

export default {			

}

</script>


<style scoped>
.do-serach{
	margin-top: .88rem;
    padding: 0 .2rem .1rem .2rem;
    background: #00afc7;
    font-size: .26rem;
    color: #9e9e9e;

}
.input-city{
	display: block;
    width: 100%;
    height: .3rem;
    line-height: .3rem;
    padding: .16rem 0rem .16rem .1rem;
    background: #fff;
    border: 0;
    -webkit-border-radius: .06rem;
    -moz-border-radius: .06rem;
    border-radius: .06rem;
    text-align: center;
}
</style>
