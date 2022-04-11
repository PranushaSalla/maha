function duplicateCharCount(str)
 {
   if(str)
    {
		var str1 = str.split('').sort().join('');
		var obj = {};
		for(let i = 0; i < str.length; i++) {
			if(obj[str[i]]){
				obj[str[i]] += obj[str[i]];
			}else {
				obj[str[i]] = 1;
			}
		}
		console.log(obj);
	}

}
duplicateCharCount("tech.at.core");