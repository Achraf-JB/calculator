let x = document.querySelector("#X");
      let y = document.querySelector("#Y");
      function shows() {
        document.querySelector("h3").innerHTML ="Resulat: "+ somme(
          Number(x.value),
          Number(y.value)
        );
      }
      function shown() {
        document.querySelector("h3").innerHTML ="Resulat: "+ sous(
          Number(x.value),
          Number(y.value)
        );
      }
      function showm() {
        document.querySelector("h3").innerHTML ="Resulat: "+ mult(
          Number(x.value),
          Number(y.value)
        );
      }
      function showd() {
        document.querySelector("h3").innerHTML ="Resulat: "+  div(
          Number(x.value),
          Number(y.value)
        );
      }
    
      function somme (x, y) {
            return (x + y) 
      }
      function sous (x, y) {
            return (x - y) 
      }
      function mult (x, y) {
            return (x * y) 
      }
      function div (x, y) {
            return (x / y) 
      }