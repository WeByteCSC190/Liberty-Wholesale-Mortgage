import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ColorIcons=({page, input})=> {  

   var color = " "; 
   console.log("Color Icon" + input); 
   if(page == "Leads"){

   } else if (page == "Borrowers"){

   }
    else if(page == "Lenders") {

        switch(input){
            case 'A':
                color = "green"
                break;

             case 'A-':
                color = "yellow"
                break;

            case 'B+':
                color = "blue"
                break; 

            case 'B':
                color = "orange"
                break;

            case 'C':
                color = "purple"
                break; 

            case 'U':
                color = "black"
                break; 
        }
        console.log(color);

    }

         return (
         <FontAwesomeIcon icon={Icons.faCircle} color={color}/>
        )
    
}

export default ColorIcons; 