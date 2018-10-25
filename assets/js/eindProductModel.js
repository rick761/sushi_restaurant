var eindProduct = function(){	
	 /*variables*/
	 this.eindproduct= {
		 1:{
			 eindproductenGemaakt:0
		 },
		 2:{
			 eindproductenGemaakt:0
		 },
		 3:{
			 eindproductenGemaakt:0
		 },
		 4:{
			 eindproductenGemaakt:0
		 }
	 }
	 this.new_element_id=0	 
	 
	 /*functions*/
	 this.snijEindProduct = snijEindProduct;
	 this.maakEindProduct= maakEindProduct;
	 
}
function maakEindProduct(eindproduct,nummer){
		
	eindproduct = eindproduct;
	nummer = nummer;
	eindproduct_parent = eindproduct.parentElement;
	het_kind = eindproduct_parent.children[nummer+1];
	console.log("EINDPRODUCT:",eindproduct,"NUMMER:",nummer,"PARENT:",eindproduct_parent);
	lijst = []
	
	for(i = 0; i <  eindproduct.childElementCount ; i++){
		het_id = eindproduct.children[i].id;
		switch(het_id.split('_')[0]){
			case 'toevoeging':
				//console.log(eindproduct.children[i].attributes)
				try{					
					source = eindproduct.children[i].attributes[7].value;
					lijst.push(source)
				}
				catch(TypeError){}	
			break;		
		}		
	}
	
	count = 2
	for(item in lijst){
		console.log(lijst[item])
		console.log(het_kind.children)
		$(het_kind.children[count]).attr('src',lijst[item])
		$(het_kind.children[count]).attr('visible','true');
		count++;
	}
	
	$(het_kind).attr('visible','true')

}




function snijEindProduct(zichzelf){
	gekozenRoll = zichzelf.parentElement.id.split("_")[2];
	jquerySelf = $(zichzelf);
	//console.log('hoeeveeelll',gekozenRoll)
	
	switch(this.eindproduct[gekozenRoll]['eindproductenGemaakt']){
		case 0:
			jquerySelf.attr('scale','1 1 0.75');
			jquerySelf.attr('position','0 0 0.15');
			return_getal = this.eindproduct[gekozenRoll]['eindproductenGemaakt']
			this.eindproduct[gekozenRoll]['eindproductenGemaakt']+=1;
			return return_getal;			
		break;
		case 1:
			jquerySelf.attr('scale','1 1 0.5');
			jquerySelf.attr('position','0 0 0.3');
			return_getal = this.eindproduct[gekozenRoll]['eindproductenGemaakt']
			this.eindproduct[gekozenRoll]['eindproductenGemaakt']+=1;			
			return return_getal;
		break;
		case 2:
			jquerySelf.attr('scale','1 1 0.25');
			jquerySelf.attr('position','0 0 0.45');
			return_getal = this.eindproduct[gekozenRoll]['eindproductenGemaakt']
			this.eindproduct[gekozenRoll]['eindproductenGemaakt']+=1;			
			return return_getal;
		break;
		case 3:
			jquerySelf.attr('scale','1 1 1');
			jquerySelf.attr('position','0 0 0');
			jquerySelf.attr('visible',false);
			return_getal = this.eindproduct[gekozenRoll]['eindproductenGemaakt']
			this.eindproduct[gekozenRoll]['eindproductenGemaakt']=0;			
			return return_getal;
		break;
	}
	
	
	
	
	
	
	
	
	
	
}


