var camera = function(){
	 /*variables*/
	 this.item = '';
	 this.camera_mes = document.getElementById('cam_knife');
	 this.camera_zalm = document.getElementById('cam_zalm');
	 this.camera_tuna = document.getElementById('cam_tuna');
	 this.camera_komkommer = document.getElementById('cam_komkommer');
	 this.camera_avocado = document.getElementById('cam_avocado');
	 this.camera_rijst = document.getElementById('cam_rijst');
	 this.camera_zeewier = document.getElementById('cam_zeewier');
	 /*functions*/
	 this.draagtCameraItem = draagtCameraItem;
	 this.zetCameraItem=zetCameraItem;
	 this.geefItem=geefItem;
	 this.hideAllCamera=hideAllCamera;
	 
}

function draagtCameraItem(){
	if(this.item == ''){
		return false;
	} else {
		return true;
	}
}



function zetCameraItem(item){
	this.item=item;
	$(this.camera_mes).attr('visible','false')
	$(this.camera_zalm).attr('visible','false')
	$(this.camera_tuna).attr('visible','false')
	$(this.camera_komkommer).attr('visible','false')
	$(this.camera_avocado).attr('visible','false')
	$(this.camera_rijst).attr('visible','false')
	$(this.camera_zeewier).attr('visible','false')
	switch(item){
		case 'mes':
			$(this.camera_mes).attr('visible','true')
		break;
		case 'zalm':
			api('salmon');
			$(this.camera_zalm).attr('visible','true')
		break;
		case 'tonijn':
			api('tuna');
			$(this.camera_tuna).attr('visible','true')
		break;
		case 'komkommer':
			api('cucumber');
			$(this.camera_komkommer).attr('visible','true')
		break;
		case 'avocado':
			api('avocado');
			$(this.camera_avocado).attr('visible','true')
		break;
		case 'rijst':
			api('rice');
			$(this.camera_rijst).attr('visible','true')
		break;
		case 'zeewier':
			api('seaweed');
			$(this.camera_zeewier).attr('visible','true')
		break;

		default:
		break;
	}
}
function api(item){
	$.ajax({
		type: "GET",
		async: false,
		url: 'https://api.nutritionix.com/v1_1/search/'+item+'?'+
		'fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=64fd42a8&appKey=7f052cbb7b4c1a9bbcb4a0f585f1b8c8',
		success: function(d)
		{
			storedSearchItem = d.hits;
			$("#product").attr("text", "text: Product: " + storedSearchItem[1].fields.item_name);
			$("#carbs").attr("text", "text: Calorien: " + storedSearchItem[1].fields.nf_calories);
			console.log(storedSearchItem[1].fields);
		}
	});
}


function hideAllCamera(){
	console.log('hideall')
}
function geefItem(){
	return this.item;
}
