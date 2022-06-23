$(function(){
	crossroads.addRoute('',function(){
		$(ajax({ 
type: "POST", 
url: "https://kerbau.odaje.biz/getstaff.php", 
data: '', 
cache: false. 
success: function(datareceived){ 
 //instructions to execute when the ajax call is succeeds
			var datareceived = JSON.parse(datareceived);
			if(datareceived.status === 1){
			alert("Update Data succeeds")
		}else{
			   alert("Update Data Failed, see admin")
			   }
}, 
error: function(){ 
//instructions to execute when the ajax call is failed 
				console.log("error in ajax function!");
				alert("AJAX Failed, see admin!");			
} 
}); 
	});
        

})