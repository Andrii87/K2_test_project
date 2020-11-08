
   
        
        fetch('https://my-json-server.typicode.com/TomaszJaworski/test-api/news')
            .then(response=>{
                return response.json();
               

            })
            .then(data =>{
               console.log(data);
               data.forEach(myFunction); // iterating data as an array
               
                // document.getElementById("demo").innerHTML = txt;
            })
            
            // var txt = "";

            function myFunction(value, index, array) {
                // txt = txt + "index: "+index +"<br>"+"title: "+ array[index].title+"<br>";
                //  console.log(array.length);
                
                 //-----------this adds div to the /columns/ -----------//
                var node = document.createElement("div");
                node.setAttribute("id", "Div"+index);
                node.setAttribute("class", "newsContainer");
                if (index%2==0) {
                document.getElementById("column1").appendChild(node);}
                else    {
                document.getElementById("column2").appendChild(node);}

                //-----------this adds div_and_q  to the newsContainer-----------//
                var node = document.createElement("div");
                node.setAttribute("id", "div_and_q"+index);
                node.setAttribute("class", "div_and_quotes");
                document.getElementById("Div"+index).appendChild(node);

                //-----------this adds quotes  to the div_and_q-----------//
                var node = document.createElement("div");
                node.setAttribute("id", "quotes"+index);
                node.setAttribute("class", "quotes");
                document.getElementById("div_and_q"+index).appendChild(node);


                 //-----------this adds h2 to the new div-----------//
                var node = document.createElement("h2");
                var textnode = document.createTextNode(array[index].title);
                node.appendChild(textnode);
                document.getElementById("div_and_q"+index).appendChild(node);
              
                //-----------this adds h2 to the myList div-----------//

                 //-----------this adds date to the new div-----------//
                 var node = document.createElement("text");
                 
                node.setAttribute("class", "newsDate");
                var textnode = document.createTextNode("Data dodania: "+array[index].date);
                node.appendChild(textnode);
                document.getElementById("Div"+index).appendChild(node);
                //-----------this adds p to the myList div-----------//

                 //-----------this adds p to the new div-----------//
                 var node = document.createElement("p");
                 node.setAttribute("class", "newsText");
                var textnode = document.createTextNode(array[index].text);
                node.appendChild(textnode);
                document.getElementById("Div"+index).appendChild(node);
                //-----------this adds p to the myList div-----------//
               
                //-----------this adds img to the new div-----------//
                var img = document.createElement('img');
                img.setAttribute("class", "newsImg");
                img.src = array[index].image;
                document.getElementById("Div"+index).appendChild(img);
                

                




            

            }