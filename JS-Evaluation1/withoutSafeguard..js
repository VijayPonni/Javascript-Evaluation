let stringParameter = "vijay"

function withoutSafeguard(parameterOftypeFunction){    // Expects function as a parameter.
   console.log(parameterOftypeFunction());
}



withoutSafeguard(stringParameter);   // But passes string as an argument