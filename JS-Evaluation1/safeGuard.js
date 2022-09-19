let stringParameter = "vijay"

function withoutSafeguard(parameterOftypeFunction){    // Expects function as a parameter.
   if(typeof parameterOftypeFunction == "function"){   // Checking before calling the function parameter with typeof                     
    console.log(parameterOftypeFunction());
   }
}



withoutSafeguard(stringParameter);   // But passes string as an argument