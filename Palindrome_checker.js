//Palindrome checker Programme

/*A palindrome is a word or sentence that's
 spelled the same way both forward and backward,
  ignoring punctuation, case, and spacing.*/

const palindrome = (str) => {
    //Initialising variable that will be used
    let str1 = "";
    let str2 = "";
    let status = false;
    let strChecker = true

    //Check to see if input value is a string or not
    if (typeof str != "string") {
        strChecker = false;
    }
    
    /*We should check the length of the string
    It should be at least 2 character*/
    if (str.length < 2) {  
        status = false
    } else {
        if (strChecker == true) {
            status = true
            /*Removing all non-alphanumeric characters from the string
            after it passes first check
            And changing all upercase to lowecase*/
            str = str.replace(/[^a-zA-Z0-9+]/g, "")
            str = str.toLowerCase() 
            str = str.split("")
        }        
    }

    
    while (str.length > 1 && status == true && strChecker) {
        
        //Get the first and last characters inside the string and compare the two
        str1 = str.pop()
        str2 = str.shift()
        if (str1 !== str2) {
            status = false
        }

  
    }
    return status;
  }
  
  
  
  console.log(palindrome("My age is 0, 0 si ega ym."));
  console.log(palindrome("0_0 (: /-\ :) 0-0"))
  console.log(palindrome("racecar"))
  console.log(palindrome("RaceCar"))
  console.log(palindrome("race  // Car"))
  console.log(palindrome("2A3*3a2"))
  console.log(palindrome("2A3 3a2"))
  console.log(palindrome(2332))
