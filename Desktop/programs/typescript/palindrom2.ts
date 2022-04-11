  function checkpalindrome( str )
  {
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;//forward character
      let y = str[j-i];//backward character
      if( x != y)
      {
        return false; // return false if string not match
      }
    }
     return true; // return true if string is palindrome
     
   }
 function ispalindrome( str )  //function that print output is string is palindrome
  {
    
  let ans = checkpalindrome(str); // variable that is true ig string is palindrome
    
    if( ans == true ) //condition checking ans is true or not
    {
      console.log("passed string is palindrome ");
    }
    else
    {
      console.log("passed string not a palindrome");
    }
  }
  // test variable
  let test = "racecar";
  ispalindrome(test)