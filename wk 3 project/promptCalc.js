
        function calculate(){
        let input1 = prompt("Enter your first number");
       
        let input2 = prompt("Enter your second Number");
        int1 = parseInt(input1);
        int2 = parseInt(input2);
        let operator = prompt ("Choose an operator: add(+) , subtract(-) , multiply (*) , divide (/)")
               
                if (operator === "+"){
                   add();

                     }
                else if(operator === '-') {
                    subtract();

                      }

                else if (operator === '*') {
                        multiply();
                }

                else {
                    divide();

        }
            }
       

        function add(){
            let sum = int1 + int1;
                      alert(sum);
                      
        }
        
        function subtract(){
            let difference = int1 - int2;
                    alert(difference);
        }

        function multiply(){
            let rise = int1 * int2;
              alert(rise);
        }

        function divide(){
            let split = int1 / int2;
                     alert(split);
        }


/*

        function ask(question, yes, no){
            if(confirm(question))
            yes();
            else no();
        }
      
      function exit(){
          alert("Thank you for using prompt calculator")
      }
        
      ask("Do you want to calculate with prompt or the real calculator?", calculate, exit)


  */