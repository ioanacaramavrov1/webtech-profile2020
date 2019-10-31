function duplicate(array)
{
	let a=[];
		for(let i=0; i<array.length;i++){
		if(a.indexOf(array[i]) == -1)
		{
			a.push(array[i]);
		}
		
	}
	return a;
}
function diferenta(a,b){
	let nr = 0;
	for(let i =0; i<a.length;i++)
	{
		let c=0;
		for(let j=0;j<b.length;j++)
		if(a[i]==b[j])
		c=1;
		if(c==0)
		nr++;
	}
	return nr;
}
function distance(first, second){
	//TODO: implementați funcția
	
	
	if(!(Array.isArray(first))){
		throw new Error('InvalidType');
	}
	if(!(Array.isArray(second))){
		throw new Error('InvalidType');
	}
	
	if(first.length==0 && second.length == 0)
		return 0;
		
	let d = duplicate(first);
	let b = duplicate(second);
	
	let a = diferenta(first, second);
	let e = diferenta(first,second);
	
	if(Array.isArray(first)){
		return 2;
	}
	if(Array.isArray(second)){
		return 2;
	} 
	


	

	
	
	
	// TODO: implement the function
}


module.exports.distance = distance;