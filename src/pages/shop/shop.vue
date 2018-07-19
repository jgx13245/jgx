<template>
    <div class="wrap">
        <div class="header">
            <!-- <div @click="changeFan"><img src="../../assets/images/icon/shang/zou.png" alt="" class="headerImg"></div> -->
            商品
        </div>
        <div class="container">
            <div class="left">
                左边列表
            </div>
            <div class="right">
                右侧列表
            </div>
        </div>
        <div class="footer">
            这是脚步
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }
    },
    methods:{
        changeFan() {
            this.$router.push({
                path:'/'
            })
            console.log(11)
        }
    }
}
</script>

<style scoped>
.wrap{
    width:100%;
    height:100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.header{
    width:100%;
    height:0.9rem;
    background: skyblue;
    font-size: 0.48rem;
    color: #fff;
    line-height: 0.9rem;
    text-align: center;
    position: relative;
}
.headerImg{
    position: absolute;
    right: 0;
    top: 25%;
}
.container{
    width: 100%;
    background: #0ff;
    flex: 1;
}
.left{

}
.right{
    
}
.footer{
    width:100%;
    height:0.9rem;
    background: #0f0;
}
</style>
