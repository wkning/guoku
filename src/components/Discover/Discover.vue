<template>
	<div id="Discover">
		<searchBar></searchBar>
		<scorllAD :banner=data.banner></scorllAD>
		<navList :categories=data.categories></navList>
		<hotArtical :articles=data.articles></hotArtical>
		<recUser :authorizeduser=data.authorizeduser></recUser>
		<hotGoods :entities=data.entities></hotGoods>
	</div>
</template>
<script>
	import searchBar from './searchBar/searchBar'
	import scorllAD from './scorllAD/scorllAD'
	import navList from './navList/navList'
	import hotArtical from './hotArtical/hotArtical'
	import recUser from './recUser/recUser'
	import hotGoods from './hotGoods/hotGoods'
	export default{
		components:{searchBar,scorllAD,navList,hotArtical,recUser,hotGoods},
		data(){
			return {
				data:[],
			}
		},
		created(){
			var _this=this;
			var j=0;
			var iconNames=["健康险","奶瓶","拼图","笔记本","自行车","眼镜","男装","女装","汉堡包","笔记本1","美容","椅子"];
			this.$http.get(window.apiAddress+"/api/discover").then(function(response){
				for(var item of response.data.articles){
					item.article.cover="http://imgcdn.guoku.com/"+item.article.cover;
				}
				for(var i of response.data.categories){
					i.category.name=iconNames[j];
					j++;
				}
				_this.data=response.data;
				
			})
		},
	}
</script>

<style lang="scss" scoped>
	
</style>