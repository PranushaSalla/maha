let givenStr = "Hello world !!";
    
    let ch = 'l';
    let count = 0;
   let  char = "tech at core"
    
    for(let i = 0; i<givenStr.length; i++){
      if(givenStr.charAt(i) == char){
        count ++;
      }
    }
    
    console.log(`Total occurrence : ${char }`);
    