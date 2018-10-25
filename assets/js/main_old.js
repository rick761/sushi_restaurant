$(document).ready(function(){

	/*VARIABLES*/
		var tafel_1 = document.getElementById('tafel_1');
		var tafel_2 = document.getElementById('tafel_2');
		var tafel_3 = document.getElementById('tafel_3');
		var camera = document.getElementById('camera');

		var isItemOpgepakt = false;
		var holding_item = document.getElementById('holding_item')
		var opgepakteItem; //<-- de specificatie's van het opgepakte item staan hier opgeslagen

	/* IETS MET DIE STACKS
	for(item in sushi_stack_0.children){
		if($.isNumeric(item)){
			sushi_stack_0.children[item].addEventListener('click',function(e){clickOp(this);});
		}
	}
	for(item in sushi_stack_1.children){
		if($.isNumeric(item)){
			sushi_stack_1.children[item].addEventListener('click',function(e){clickOp(this);});
		}
	}
	for(item in sushi_stack_2.children){
		if($.isNumeric(item)){
			sushi_stack_2.children[item].addEventListener('click',function(e){clickOp(this);});
		}
	}
	*/

	mouseEnter();

  function mouseEnter()
  {
    // GOOI ALLE PRODUCTEN IN EEN VARIABELE
    var producten = document.getElementsByClassName("product");

    // LOOP DOOR DE PRODUCTEN HEEN
    for(var i = 0; i < producten.length; i++)
    {
      // MOUSEENTER TOEVOEGEN AAN ALLE PRODUCTEN
      document.getElementsByClassName("product")[i].addEventListener("mouseenter", function()
      {
        // ANDERE FUNCTIE AANROEPEN
        clickOp(this);
      });
    }
  }

	function clickOp(item){
		if(!isItemOpgepakt){
			//er is geen item opgepakt
			console.log('niet opgepakt')
			pakObject(item);
			isItemOpgepakt = true;
		} else {
			//er is wel een item opgepakt
			console.log('wel opgepakt')
			//plaatsObject(item);
			isItemOpgepakt = false;
		}
	}

	function pakObject(item){
		opgepakteItem = item.attributes;
		/*move to camera*/
		$(opgepakteItem).map(function(){
			naam = this.name;
			waarde = this.value;
			if(naam == "id")
			{
				$.ajax({
					type: "GET",
					async: false,
					url: 'https://api.nutritionix.com/v1_1/search/'+waarde+'?'+
					'fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=64fd42a8&appKey=7f052cbb7b4c1a9bbcb4a0f585f1b8c8',
					success: function(d)
					{
						storedSearchItem = d.hits;
						$("#product").attr("text", "text: Product: " + storedSearchItem[1].fields.item_name);
						$("#portie").attr("text", "text: Portie: " + storedSearchItem[1].fields.nf_serving_size_qty);
						$("#carbs").attr("text", "text: Calorien: " + storedSearchItem[1].fields.nf_calories);
						console.log(storedSearchItem[1].fields);
					}
				});
			}
			//console.log(naam +' '+waarde)
			if(naam != 'id' && naam != 'position' && naam != 'height'&& naam != 'width'&& naam != 'depth')
			{
				$(holding_item).attr(naam,waarde);
				if(naam = 'height')
				{
					console.log(waarde)
				}
			}
		})
		$(holding_item).attr('visible','true');
		$(item).remove();

		//reArrangeTheSushis();
		//bugFix();
	}

	/* IETS MET STACKS
	function plaatsObject(item){
		element_create_str = "<a-box "
		$(opgepakteItem).map(function(){
			element_create_str += ' '+this.name+'="'+this.value+'" ';
		});
		element_create_str+= "></a-box>"
		$(item.parentElement).append(element_create_str)
		//console.log(opgepakteItem[0].value)
		//fixTheRestOfTheStuff
		reArrangeTheSushis();
		var nieuwe_item = document.getElementById(opgepakteItem[0].value);
		nieuwe_item.addEventListener('click',function(e){clickOp(this);});// create click event
		opgepakteItem='';
		$(holding_item).attr('visible','false');
	}

	function bugFix(){
		console.log(opgepakteItem);
		huidige_foto = opgepakteItem[1].value;
		$('holding_item').attr('src','');
		$('holding_item').attr('src',huidige_foto);
		reArrangeTheSushis();
	}

	var positie = ["0 0 0", "0 0 0.6", "0.6 0 0", "0.6 0 0.6", "1.2 0 0", "1.2 0 0.6", "1.8 0 0", "1.8 0 0.6", "2.4 0 0", "2.4 0 0.6", "3.2 0 0", "3.2 0 0.6"];
	console.log(positie[0]);

	function reArrangeTheSushis(){
		for(item in sushi_stack_0.children){
			if($.isNumeric(item)){
				$(sushi_stack_0.children[item]).attr('position',positie[item])
			}
		}
		for(item in sushi_stack_1.children){
			if($.isNumeric(item)){
				$(sushi_stack_1.children[item]).attr('position',positie[item])
			}
		}
		for(item in sushi_stack_2.children){
			if($.isNumeric(item)){
				$(sushi_stack_2.children[item]).attr('position',positie[item])
			}
		}
		//console.log('RE-ARRANGED')
	}
	*/
});
