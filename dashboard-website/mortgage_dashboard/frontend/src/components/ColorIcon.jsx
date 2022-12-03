import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ColorIcons = ({page, input}) => {  

   var colorChoice = []; 
   console.log("Color Icon: " + input); 


   if(page == "Leads"){

   } else if (page == "Borrowers"){

   }
    else if(page == "Lenders") {

        switch(input){
            case 'A':
                colorChoice = "green"
                break;

             case "A-":
                colorChoice = "yellow"
                break;

            case 'B+':
                colorChoice = "blue"
                 break; 

            case 'B':
                colorChoice = "orange"
                break;

            case 'C':
                colorChoice = "purple"
                break; 

            case 'U':
                colorChoice = "black"
                break; 
        }
        return colorChoice; 
    }
        console.log("End of colorChoice " + colorChoice);
       return (
         <FontAwesomeIcon icon={Icons.faCircle} color={colorChoice}/>
        )
    
}

export default ColorIcons; 