var sushiModel = function(){

	/*variabelen*/
	this.sushirolls ={
		1:{zeewier_roll:false,rijst_roll:false,toevoeging_1:false,toevoeging_2:false,toevoeging_3:false,toevoeging_4:false},
		2:{zeewier_roll:false,rijst_roll:false,toevoeging_1:false,toevoeging_2:false,toevoeging_3:false,toevoeging_4:false},
		3:{zeewier_roll:false,rijst_roll:false,toevoeging_1:false,toevoeging_2:false,toevoeging_3:false,toevoeging_4:false},
		4:{zeewier_roll:false,rijst_roll:false,toevoeging_1:false,toevoeging_2:false,toevoeging_3:false,toevoeging_4:false}
	}

	 /*functions*/
	this.geefRolls = geefRolls;
	this.bouwSushi = bouwSushi;
	this.renderSushi=renderSushi;
	this.magOprollen=magOprollen;
	this.rolSushiOp=rolSushiOp;
}
function rolSushiOp(objectId){
	gekozenRoll = objectId.split('_')[1];
	gemaakteSushiHTML = document.getElementById('fin_sushiroll_'+gekozenRoll).children[0];
	//console.log(gemaakteSushiHTML)
	$(gemaakteSushiHTML).attr('visible','true');
	//console.log(gemaakteSushiHTML,gemaakteSushiHTML.childElementCount)

	toevoeging_1 = this.sushirolls[gekozenRoll]['toevoeging_1'];
	toevoeging_2 = this.sushirolls[gekozenRoll]['toevoeging_2'];
	toevoeging_3 = this.sushirolls[gekozenRoll]['toevoeging_3'];
	toevoeging_4 = this.sushirolls[gekozenRoll]['toevoeging_4'];
	//console.log(toevoeging_1)

	for(i=0;i<gemaakteSushiHTML.childElementCount;i++){
		//console.log('WOLOLO',gemaakteSushiHTML.children[i]);
		id = gemaakteSushiHTML.children[i].id
		obj = $(gemaakteSushiHTML.children[i]);
		//console.log(obj,id)
		if(id == 'toevoeging_1'){
			//console.log(toevoeging_4)
			if(toevoeging_1 != false){
				obj.attr('src','#'+toevoeging_1+'_img');
				obj.attr('visible','true')
			}
		}
		if(id == 'toevoeging_2'){
			//console.log(toevoeging_4)
			if(toevoeging_2 != false){
				obj.attr('src','#'+toevoeging_2+'_img');
				obj.attr('visible','true')
			}
		}
		if(id == 'toevoeging_3'){
			//console.log(toevoeging_4)
			if(toevoeging_3 != false){
				obj.attr('src','#'+toevoeging_3+'_img');
				obj.attr('visible','true')
			}
		}
		if(id == 'toevoeging_4'){
			//console.log(toevoeging_4)
			if(toevoeging_4 != false){
				obj.attr('src','#'+toevoeging_4+'_img');
				obj.attr('visible','true')
			}
		}

	}
	//for(kind in gemaakteSushiHTML.childElementCount){
		//console.log('WOLOLO',gemaakteSushiHTML.children[kind]);
	//}


	//resetwaardes
	this.sushirolls[gekozenRoll] = {zeewier_roll:false,rijst_roll:false,toevoeging_1:false,toevoeging_2:false,toevoeging_3:false,toevoeging_4:false}
	this.renderSushi();
	return gemaakteSushiHTML;
}





function magOprollen(objectId){
	gekozenRoll = objectId.split('_')[1];
	if(this.sushirolls[gekozenRoll]['zeewier_roll'] == true && this.sushirolls[gekozenRoll]['rijst_roll'] == true ){
		return true
	}
	return false;
}


function geefRolls(){
	//console.log(this.sushirolls)
	return this.sushirolls;
}
function bouwSushi(item,objectId){
	gekozenRoll = objectId.split('_')[1];
	iets_geplaatst = false;
	//console.log(this.sushirolls)
	// Code voor zeewier en rijst
	if(item == 'zeewier'||item == 'rijst'){
		if(this.sushirolls[gekozenRoll][item+'_roll'] == false){
			this.sushirolls[gekozenRoll][item+'_roll'] = true;
			iets_geplaatst = true
		}
	}
	// Code voor zalm tonijn komkommer en avocado
	if(opgepakte_item == 'zalm'||opgepakte_item == 'tonijn'||opgepakte_item == 'komkommer'||opgepakte_item == 'avocado'){
		//zoek of er al een sushi is met deze flees of groente.
		zoekNaar = false;
		for (item in this.sushirolls[gekozenRoll]){
			if(this.sushirolls[gekozenRoll][item] == opgepakte_item ){
				zoekNaar = true;
				//console.log('er is er al een geplaatst')
			}
		} // probeer te plaatsen
		geplaatst = false;
		if(zoekNaar == false){
			hetObject = this.sushirolls[gekozenRoll]['toevoeging_1']
			//console.log(hetObject)
			for(var i = 1; i<5 ; i++){
				hetObject = this.sushirolls[gekozenRoll]['toevoeging_'+i];
				if(hetObject == false && geplaatst == false){
					//LEGE PLEK GEVONDEN
					geplaatst = true
					this.sushirolls[gekozenRoll]['toevoeging_'+i] = opgepakte_item
					iets_geplaatst = true
					//console.log('LEGE PLEK GEVONDEN')
				}
			}
		}
	}
	//console.log(this.sushirolls[gekozenRoll][item+'_roll']);
	this.renderSushi();
	return iets_geplaatst;
}

function renderSushi(){
	//console.log('comes here')
	html_objecten = {
		roll_1:document.getElementById('roll_1'),
		roll_2:document.getElementById('roll_2'),
		roll_3:document.getElementById('roll_3'),
		roll_4:document.getElementById('roll_4')
	}
	for (item in this.sushirolls){
		//console.log(item)
		//console.log(html_objecten['roll_'+item].children)
		for(kind in html_objecten['roll_'+item].children ){
			if($.isNumeric(kind)){
				hetKind = html_objecten['roll_'+item].children[kind];

				//als het zalm,tonijn,komkommer of avocado is
				if(typeof this.sushirolls[item][hetKind.id] ==  'string'){
					//console.log(this.sushirolls[item][hetKind.id])
					//plaats het object met weergave

					$(hetKind).attr('src','#'+this.sushirolls[item][hetKind.id]+'_img')
					$(hetKind).attr('visible','true');
				}
				else{// als het niet zo is
					$(hetKind).attr('visible',this.sushirolls[item][hetKind.id]);
				}
				//console.log(html_objecten['roll_'+item].children[kind])
			}
		}
	}

}
