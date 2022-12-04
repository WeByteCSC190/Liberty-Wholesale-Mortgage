import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

// Returns the Icons and its color
const ColorIcons = ({choice}) => { 

    const value = choice; 
    
    const colorChoice = {
       // For Leads and Borrowers
        'Application_Complete' : 'blue',
        'Closing_Package_Sent': 'green', 
        'Needs_Attention': 'red',
        'Missing_Paperwork': 'red',

        // For Leads
        'Recently_Added' : 'orange', 
        'Contacted': 'green', 
        'Declined': 'black',
        'In_Progress': 'gold',
        

        // For Borrowers
        "AUS_Cleared" : 'pink',
        "Initial_Disclosure Sent" : 'orange',
        "Title_Ordered" : 'orange',
        "Title_Recieved" : 'gold',
        "Appraisal_Ordered": "gray", 
        "Appraisal_Received" : "brown", 
        "Initial_Disclosure, Received" : "green", 
        "UW_Submitted" : "green", 
        "UW_Response" : "green", 
        "Pending_Conditions" : "green", 
        "Cleared_to_Closed" : "gray", 

    
        // For Lenders
        'A' : 'green',
        'B+': 'blue',
        'B' : 'brown',
        'C' : 'gray',
        'U' : 'black', 
    }
    
    return (
        <FontAwesomeIcon icon={Icons.faCircle} color={colorChoice[value]}/>
    );
}

export default ColorIcons;