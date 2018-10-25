var snijModel = function(){

	 this.gesnedenZalm = [["0 0 0",'empty'],["-0.5 0 0",'empty'],["-1 0 0",'empty'],["-1.5 0 0",'empty']];
	 this.gesnedenTonijn = [["0 0 0",'empty'],["-0.5 0 0",'empty'],["-1 0 0",'empty'],["-1.5 0 0",'empty']];
	 this.gesnedenKomkommer = [["0 0 0",'empty'],["-0.5 0 0",'empty'],["-1 0 0",'empty'],["-1.5 0 0",'empty']];
	 this.gesnedenAvocado = [["1.8 0 0",'empty'],["-0 0 1",'empty'],["1.8 0 2",'empty'],["0 0 3",'empty']]
	 this.gesnedenIdCount=0

	 this.zalmgesneden_parent = document.getElementById('zalm_gesneden');
	 this.tonijn_gesneden_parent = document.getElementById('tonijn_gesneden');
	 this.komkommer_gesneden_parent = document.getElementById('komkommer_gesneden');
	 this.avocado_gesneden_parent = document.getElementById('gesneden_avocado');


	 /*functions*/
	this.snijZalm = snijZalm;
	this.snijTonijn=snijTonijn;
	this.snijKomkommer=snijKomkommer;
	this.snijAvocado=snijAvocado;
	this.verwijderSushi=verwijderSushi;
}

function snijZalm(){
	for (i in this.gesnedenZalm){
		positie = this.gesnedenZalm[i][0]
		gevuld = this.gesnedenZalm[i][1]
		//console.log(this.gesnedenZalm[i])
		//console.log(positie,gevuld)
		if(gevuld == 'empty'){
			this.gesnedenZalm[i][1] = 'takeable_'+this.gesnedenIdCount
			$(this.zalmgesneden_parent).append('<a-box name="zalm" id="takeable_'+this.gesnedenIdCount+'" src="#zalm" height="0.12" width="0.2" depth="0.5" position="'+positie+'" material="src:#zalm" geometry="primitive:box;height:0.12;width:0.2;depth:0.5" scale="1 1 1"></a-box>')
			het_object = document.getElementById('takeable_'+this.gesnedenIdCount);
			this.gesnedenIdCount++;
			return het_object;
		}
	}
}
function snijTonijn(){
	for (i in this.gesnedenTonijn){
		positie = this.gesnedenTonijn[i][0]
		gevuld = this.gesnedenTonijn[i][1]
		//console.log(positie,gevuld)
		if(gevuld == 'empty'){
			this.gesnedenTonijn[i][1] = 'takeable_'+this.gesnedenIdCount
			$(this.tonijn_gesneden_parent).append('<a-box name="tonijn" id="takeable_'+this.gesnedenIdCount+'" src="#tonijn" height="0.12" width="0.2" depth="0.5" position="'+positie+'" geometry="primitive:box;height:0.12;width:0.2;depth:0.5" scale="1 1 1"></a-box>')
			het_object = document.getElementById('takeable_'+this.gesnedenIdCount);
			this.gesnedenIdCount++;
			return het_object;
		}
	}
}
function snijKomkommer(){
	for (i in this.gesnedenKomkommer){
		positie = this.gesnedenKomkommer[i][0]
		gevuld = this.gesnedenKomkommer[i][1]
		//console.log(positie,gevuld)
		if(gevuld == 'empty'){
			this.gesnedenKomkommer[i][1] = 'takeable_'+this.gesnedenIdCount
			//console.log('WOLOLO')
			$(this.komkommer_gesneden_parent).append('<a-box name="komkommer" id="takeable_'+this.gesnedenIdCount+'" position="'+positie+'" src="#komkommer_img"  geometry="primitive:box;depth:0.8;height:0.1;width:0.1"></a-box>')
			het_object = document.getElementById('takeable_'+this.gesnedenIdCount);
			this.gesnedenIdCount++;
			return het_object;
		}
	}
}
function snijAvocado(){
	for (i in this.gesnedenAvocado){
		positie = this.gesnedenAvocado[i][0]
		gevuld = this.gesnedenAvocado[i][1]
		//console.log(positie,gevuld)
		if(gevuld == 'empty'){
			this.gesnedenAvocado[i][1] = 'takeable_'+this.gesnedenIdCount
			$(this.avocado_gesneden_parent).append('<a-entity name="avocado" position="'+positie+'"  id="takeable_'+this.gesnedenIdCount+'">'+
				+'<a-torus color="silver" material="side:front" geometry="primitive:torus;radiusTop:1;radiusBottom:0.5;radius:0.91;radiusTubular:0.05" position="0.72 1.84 -0.56" rotation="90 0 0" scale="1 1 1" visible="true"></a-torus>'
				+'<a-cone color="silver" material="side:front" geometry="primitive:cone;radiusTop:1;radiusBottom:0.5" position="0.72 1.31 -0.56"></a-cone>'
				+'<a-ring src="#avocado_img"   geometry="primitive:ring;segmentsPhi:10;segmentsTheta:20;radiusInner:0.001;radiusOuter:0.8" position="0.72 1.86 -0.57" rotation="-90 0 0"></a-ring>'
				+'</a-entity>');
			het_object = document.getElementById('takeable_'+this.gesnedenIdCount);
			this.gesnedenIdCount++;
			return het_object;
		}
	}
}
function verwijderSushi(sushi_object){
	console.log(sushi_object);
	var object = $(sushi_object)
	switch(object.attr('name')){
		case 'zalm':
			for(i in this.gesnedenZalm){
				if(this.gesnedenZalm[i][1]==object.attr('id')){
					this.gesnedenZalm[i][1] = 'empty';
				}
			}
		break;
		case 'tonijn':
			for(i in this.gesnedenTonijn){
				if(this.gesnedenTonijn[i][1]==object.attr('id')){
					this.gesnedenTonijn[i][1] = 'empty';
				}
			}
		break;
		case 'komkommer':
			for(i in this.gesnedenKomkommer){
				if(this.gesnedenKomkommer[i][1]==object.attr('id')){
					this.gesnedenKomkommer[i][1] = 'empty';
				}
			}
		break;
		case 'avocado':
			for(i in this.gesnedenAvocado){
				if(this.gesnedenAvocado[i][1]==object.attr('id')){
					this.gesnedenAvocado[i][1] = 'empty';
				}
			}
		break;

	}
	$(sushi_object).remove();
}
