function changeColor(e){
	
	var active=document.querySelectorAll('.color')
	if(e.target.tagName ==='LI'){
	active.forEach( item=>{
	
	if(item.className==='color'){

	item.className =''
    }
})
		if(e.target.className ===''){
			e.target.className += 'color'
        }

    }

}
