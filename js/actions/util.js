/*
 *到后台发送请求的方法
 *校验返回的接口，并将正确的结果返回
 */

 export function getData(url){
 	fetch(url).then(function(res){
 		if(res.ok){
 			res.json().then(function(data){
 				console.log(data);
 			})
 		}else{
 			console.log("Looks like the response wasn't perfect, got status", res.status);
 		}
 	},function(e){
 		console.log("Fetch failed!", e);
 	});
 }