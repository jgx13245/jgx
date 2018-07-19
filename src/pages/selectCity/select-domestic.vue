<template>
	<div>
 		<do-serach @changeSerach="changeSerach"  @changeRemove="changeRemove"></do-serach>
		 <do-serach-list :show="show" :SearchCity="SearchCity"></do-serach-list>
         <do-list :show="!show" :word="word" :num="num"></do-list>
         <do-aside @changeWord="changeWord" @changeMove="changeMove"></do-aside>

		 <!-- <do-list :show="!show"></do-list>
         <do-aside></do-aside> -->
 	</div>
</template>

<script>
import doSerachComponent from "./components/domestic/do-serach";
import doListComponent from "./components/domestic/do-list";
import doAsideComponent from "./components/domestic/do-aside";
import doSerachListComponent from "./components/domestic/do-serach-list"
import {mapState} from "vuex";

export default {
	data() {
		return {
			show:false,
			SearchCity:[],
			word: "",
			num:'',
			ddd:0
		}
	},	
	components: {

			"do-serach": doSerachComponent,
			"do-list": doListComponent,
			"do-aside": doAsideComponent,
			"do-serach-list":doSerachListComponent
	},
	computed: mapState({
	China(state){
			return state.selectCity.China
		},
	
	}),
	computed: mapState({
			China(state){
					return state.selectCity.China
				}
		}),
	methods:{
		
		changeWord(word){
			this.word = word;
		},
		changeMove(num) {
			this.num = num;
			//console.log(this.num);
		},
		changeRemove() {
			this.show=false
		},
		
		changeSerach(e) {
			if( e ){
				var reg = /^[\u4e00-\u9fa5]+$/;
					//console.log(this.China)
				if( reg.test( e ) ){
					this.SearchCity = [];
					for( var i=0,l=this.China.length;i<l;i++ ){
						var cityList = this.China[i][1].city;
						//console.log(cityList);
						for( var j=0,len=cityList.length;j<len;j++ ){
							var str = cityList[j].cityarea
							if( str.indexOf( e ) !=-1 ){
								this.SearchCity.push( str );
							}
						}
					}
				}else{
					this.SearchCity = [];
					for( var i=0,l=this.China.length;i<l;i++ ){
						var cityList = this.China[i][1].city;
						//console.log(cityList)
						for( var j=0,len=cityList.length;j<len;j++ ){
							var obj = cityList[j]
							//console.log(obj)
							if( obj.cityName.indexOf( e ) !=-1 ){
								this.SearchCity.push( obj.cityarea );
							}
						}
					}
				}
				//console.log(this.SearchCity);
				if( this.SearchCity ){
					this.show = true;
				}else{
					this.show = false;
				}
			}else{
				this.SearchCity=[];
				this.show = false;
			}
				
		}
		
	},
	// mounted(){
	// 	// 测验
		
	// 	var index=0;
	// 	setInterval(() => {
	// 		index++;
	// 		console.log("dd "+index)
	// 		this.ddd = index;
	// 		this.$emit("change",this.ddd)
	// 	},1000)
	// }
	
}

</script>


<style>
</style>



