
<template>
	<div>
 		<fo-serach @changeSerach="changeSerach"  @changeRemove="changeRemove"></fo-serach>
		 <fo-serach-list :show="show" :SearchCity="SearchCity"></fo-serach-list>
         <fo-list :show="!show" :word="word" :num="num"></fo-list>
         <fo-aside @changeWord="changeWord" @changeMove="changeMove"></fo-aside>

		 <!-- <do-list :show="!show"></do-list>
         <do-aside></do-aside> -->
 	</div>
</template>

<script>
import foSerachComponent from "./components/foreign/fo-serach";
import foListComponent from "./components/foreign/fo-list";
import foAsideComponent from "./components/foreign/fo-aside";
import foSerachListComponent from "./components/foreign/fo-serach-list"
import {mapState} from "vuex";

export default {
	data() {
		return {
			show:false,
			SearchCity:[],
			word: "",
			num:''
		}
	},	
	components: {

                "fo-serach": foSerachComponent,
                "fo-list": foListComponent,
				"fo-aside": foAsideComponent,
				"fo-serach-list":foSerachListComponent
	},
	computed: mapState({
	Foreign(state){
			return state.selectCity.Foreign
		},
	
	}),
	computed: mapState({
			Foreign(state){
					return state.selectCity.Foreign
				}
		}),
	
	methods:{
		changeWord(word){
			this.word = word;
			
		},
		changeMove(num) {
			//console.log(num)
			this.num = num;
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
					for( var i=0,l=this.Foreign.length;i<l;i++ ){
						var cityList = this.Foreign[i][1].city;
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
					for( var i=0,l=this.Foreign.length;i<l;i++ ){
						var cityList = this.Foreign[i][1].city;
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
		
	}
	
}

</script>


<style>
</style>



