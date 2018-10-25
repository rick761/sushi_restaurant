var mes = function(){	
	 /*variables*/
	 this.opgepakt = false;
	 this.mes_in_blok = document.getElementById('knife')
	 /*functions*/
	 this.geefOpgepakt = geefOpgepakt;
	 this.pakOfPlaatsMes = pakOfPlaatsMes;
	 this.pak=pak;
	 this.plaats=plaats;
}

function geefOpgepakt(){
	return this.opgepakt;
}
function pakOfPlaatsMes(){
	if(this.opgepakt){
		$(this.mes_in_blok).attr('visible','true')
		this.opgepakt = false;
	}else{
		$(this.mes_in_blok).attr('visible','false')
		this.opgepakt = true;
	}
}
function pak(){
	$(this.mes_in_blok).attr('visible','true')
	this.opgepakt = false;
}
function plaats(){
	$(this.mes_in_blok).attr('visible','false')
	this.opgepakt = true;
}
