$(document).ready(function(){
	/*variables*/
		var hetMes = new mes();
		var deCamera = new camera();
		var hetSnijModel = new snijModel();
		var hetSushiModel = new sushiModel();
		var hetEindProductModel = new eindProduct();
		var hetTextModel = new textModel();
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	hetTextModel.toonBord();
	
	slicesound = document.getElementById('slice');
	mesbloksnd = document.getElementById('mesbloksnd');
	wrk_snd = document.getElementById('wrk_snd');
	
	
	/*click events*/
		//sushi roll click
		var roll_1_HTML = document.getElementById('roll_1');
		roll_1_HTML.addEventListener('click',function(e){
			klikOpSushiRoll(this);
		});
		roll_1_HTML.addEventListener('mouseenter',function(){toonFuseAnimation();});
		var roll_2_HTML = document.getElementById('roll_2');
		roll_2_HTML.addEventListener('click',function(e){
			klikOpSushiRoll(this);
		});
		roll_2_HTML.addEventListener('mouseenter',function(){toonFuseAnimation();});
		
		var roll_3_HTML = document.getElementById('roll_3')
		roll_3_HTML.addEventListener('click',function(e){
			klikOpSushiRoll(this);
		});
		roll_3_HTML.addEventListener('mouseenter',function(){toonFuseAnimation();});
		
		var roll_4_HTML = document.getElementById('roll_4');
		roll_4_HTML.addEventListener('click',function(e){
			klikOpSushiRoll(this);
		});
		roll_4_HTML.addEventListener('mouseenter',function(){toonFuseAnimation();});

		//knife onlclick PAKKEN EN PLAATSEN VAN MES
		var mesHTML = document.getElementById('knife')
		for(item in mesHTML.children){
			if($.isNumeric(item)){
				mesHTML.children[item].addEventListener('click',function(e){					
					klikOpMes();
				});
				mesHTML.children[item].addEventListener('mouseenter',function(){toonFuseAnimation();});
			}
		}
		//knifeblok onlcik PAKKEN EN PLAATSEN VAN MES
		var messenBlokHTML = document.getElementById('messenblok')
		for(item in messenBlokHTML.children){
			if($.isNumeric(item)){
				messenBlokHTML.children[item].addEventListener('click',function(e){
					klikOpMes();
				});
				messenBlokHTML.children[item].addEventListener('mouseenter',function(){toonFuseAnimation();});
			}
		}
		//snijen van de vis en groente
		var zalmHTML = document.getElementById('salmon')
		var tonijnHTML = document.getElementById('tuna')
		var komkommerHTML = document.getElementById('komkommer')
		var avocadoHTML = document.getElementById('avocado')
		zalmHTML.addEventListener('click',function(e){ snijZalm(); });
		tonijnHTML.addEventListener('click',function(e){ snijTonijn(); });
		komkommerHTML.addEventListener('click',function(e){ snijKomkommer(); });
		avocadoHTML.addEventListener('click',function(e){ snijAvocado(); });
		
		zalmHTML.addEventListener('mouseenter',function(){toonFuseAnimation();});
		tonijnHTML.addEventListener('mouseenter',function(){toonFuseAnimation();});
		komkommerHTML.addEventListener('mouseenter',function(){toonFuseAnimation();});
		avocadoHTML.addEventListener('mouseenter',function(){toonFuseAnimation();});
		//weggooien zooi
		var prullenbakHTML = document.getElementById('prullenbak');
		for(item in prullenbakHTML.children){
			if($.isNumeric(item)){
				prullenbakHTML.children[item].addEventListener('click',function(e){
					gooiWeg();
				});
				prullenbakHTML.children[item].addEventListener('mouseenter',function(){toonFuseAnimation();});
			}
		}
		//klik op rijst
		var rijstHTML = document.getElementById('kom_rijst');
		for(item in rijstHTML.children){
			if($.isNumeric(item)){
				rijstHTML.children[item].addEventListener('click',function(e){
					klikOpRijst();
				});
				rijstHTML.children[item].addEventListener('mouseenter',function(){toonFuseAnimation();});
			}
		}
		var zeewierHTML = document.getElementById('zeewier');
		for(item in zeewierHTML.children){
			if($.isNumeric(item)){
				zeewierHTML.children[item].addEventListener('click',function(e){
					klikOpZeewier();
				});
				zeewierHTML.children[item].addEventListener('mouseenter',function(){toonFuseAnimation();});
			}
		}
	//*************************
	// ONMOUSEOVER EVENTS FOR FUSE
	//*************************
	
	
	
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*#############################################*/
	/*functions*/
	function toonFuseAnimation(){
		console.log('GODVERDOMME');
		if ( !($( "#an_1" ).length )) {
			//console.log($( "#an_1" ).length )
		
		$('#fuse_animation').append('<a-animation id="an_1"  easing="ease-in" attribute="scale"'+
						 'fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>'+
					'<a-animation id="an_2"   easing="ease-in" attribute="scale"'+
						' fill="forwards" from="1 1 1" to="0.1 0.1 0.1" dur="750"></a-animation>');
		}
		setTimeout(function(){ 
			$('#an_1').remove();
			$('#an_2').remove();
		}, 600);
	}
	
	function klikOpGemaakteSushiRoll(zichzelf){
		//console.log('klicked op :',zichzelf)
		//mag snijden als je het mes hebt
		if(hetMes.geefOpgepakt()){
			gesneden_nr = hetEindProductModel.snijEindProduct(zichzelf);
			if($.isNumeric(gesneden_nr)){
				hetTextModel.inserttext('#sushi_is_gesneden');
				Eindproduct = hetEindProductModel.maakEindProduct(zichzelf,gesneden_nr);
				slice.play();
			}
		}

	}

	function klikOpSushiRoll(object){
		//console.log(hetSushiModel.geefRolls())

		opgepakte_item = deCamera.geefItem()
		if(opgepakte_item == 'zeewier'||opgepakte_item == 'rijst'||opgepakte_item == 'zalm'||opgepakte_item == 'tonijn'||opgepakte_item == 'komkommer'||opgepakte_item == 'avocado'){
			var geplaatst = hetSushiModel.bouwSushi(opgepakte_item,object.id);
			if(geplaatst){
				//als geplaatst verwijder item camera
				deCamera.zetCameraItem('');
				hetTextModel.inserttext('#ingredient_toegevoegd');
				wrk_snd.play();
			}
			//console.log(geplaatst)
		}
		if(opgepakte_item == ''){
			magRollen = hetSushiModel.magOprollen(object.id);
			if(magRollen){
				hetTextModel.inserttext('#sushi_gerold');
				new_sushi_roll = hetSushiModel.rolSushiOp(object.id);
				new_sushi_roll.addEventListener('click',function(e){ klikOpGemaakteSushiRoll(this); });
				wrk_snd.play();
			}
		}


	}
	function klikOpZeewier(){
		if(!(deCamera.draagtCameraItem())){
			deCamera.zetCameraItem('zeewier');
			hetTextModel.inserttext('#zeewier_gepakt');
			wrk_snd.play();
		}
	}
	function klikOpMes(){		
		if(hetMes.geefOpgepakt()){
			//console.log('het mes is geplaatst!')
			hetMes.pak();
			deCamera.zetCameraItem('');
			hetTextModel.inserttext('#mes_geplaatst');
			mesbloksnd.play();
		} else {
			if(!(deCamera.draagtCameraItem())){
				//console.log('het mes is gepakt!')
				hetMes.plaats();
				deCamera.zetCameraItem('mes');
				hetTextModel.inserttext('#mes_gepakt');
				mesbloksnd.play();
			}
		}
		//console.log('de camera draagt iets:',deCamera.draagtCameraItem())
	}
	function snijZalm(){
		if(hetMes.geefOpgepakt()){
			new_zalm = hetSnijModel.snijZalm();
			if((new_zalm != null)){
				hetTextModel.inserttext('#zalm_is_gesneden');
				new_zalm.addEventListener('click',function(e){ pakOp(this); });
				new_zalm.addEventListener('mouseenter',function(){toonFuseAnimation();});
				slicesound.play();
			}
		}
	}
	function snijTonijn(){
		if(hetMes.geefOpgepakt()){
			new_tuna = hetSnijModel.snijTonijn();
			if((new_tuna != null)){
				hetTextModel.inserttext('#tonijn_is_gesneden');
				new_tuna.addEventListener('click',function(e){ pakOp(this);});
				new_tuna.addEventListener('mouseenter',function(){toonFuseAnimation();});
				slicesound.play();
			}
		}
	}
	function snijKomkommer(){
		if(hetMes.geefOpgepakt()){
			new_komkommer = hetSnijModel.snijKomkommer();
			if((new_komkommer != null)){
				hetTextModel.inserttext('#komkommer_is_gesneden');
				new_komkommer.addEventListener('click',function(e){ pakOp(this); });
				new_komkommer.addEventListener('mouseenter',function(){toonFuseAnimation();});
				slicesound.play();
			}
		}
	}
	function snijAvocado(){
		if(hetMes.geefOpgepakt()){
			new_avocado = hetSnijModel.snijAvocado();
			if((new_avocado != null)){
				hetTextModel.inserttext('#avocado_is_gesneden');
				new_avocado.addEventListener('click',function(e){ pakOp(this); });
				new_avocado.addEventListener('mouseenter',function(){toonFuseAnimation();});
				slicesound.play();
			}
		}
	}
	function pakOp(object_click){
		if(!(deCamera.draagtCameraItem())){			
			sushi_soort = $(object_click).attr('name')
			console.log(sushi_soort);
			hetTextModel.inserttext('#'+sushi_soort+'_gepakt');
			wrk_snd.play();
			
			deCamera.zetCameraItem(sushi_soort);
			hetSnijModel.verwijderSushi(object_click);
		}
	}
	function gooiWeg(){
		if(deCamera.geefItem() != 'mes'){
			hetTextModel.inserttext('#object_weggeggooit');
			deCamera.zetCameraItem('');
		}
	}
	function klikOpRijst(){
		if(!(deCamera.draagtCameraItem())){
			hetTextModel.inserttext('#rijst_gepakt');
			deCamera.zetCameraItem('rijst');
			wrk_snd.play();
		}
	}
	/*#############################################*/
});
