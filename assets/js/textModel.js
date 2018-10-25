var textModel = function(){

	/*variabelen*/
	this.bord = ['','#welkom'];
	this.teksten = {
		1  : document.getElementById('stappenplan1'),
		2  : document.getElementById('stappenplan2'),
		3  : document.getElementById('stappenplan3'),
		4  : document.getElementById('stappenplan4'),
		5  : document.getElementById('stappenplan5'),
		6  : document.getElementById('stappenplan6'),
		7  : document.getElementById('stappenplan7'),
		8  : document.getElementById('stappenplan8'),
		9  : document.getElementById('stappenplan9'),
		10 : document.getElementById('stappenplan10'),
		11 : document.getElementById('stappenplan11'),
		12 : document.getElementById('stappenplan12')		
	}
	
	
	
	 /*functions*/
	
	this.toonBord=toonBord;
	this.inserttext=inserttext;
	
}

function toonBord(){	 
	for(i=1;i<12;i++){
		if(this.bord[(i)-1] != undefined){
			console.log('text:'+this.bord[(i)-1]);
			$(this.teksten[i]).attr('material','src:'+this.bord[(i)-1]);
		}
	}
}	
function inserttext(textvar){
	this.bord.unshift(textvar);
	this.toonBord();
}


