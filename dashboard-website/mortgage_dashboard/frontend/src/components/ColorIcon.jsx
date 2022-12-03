import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

// Returns the Icons and its color
const ColorIcons = ({choice}) => { 

    const value = choice; 
    
    const colorChoice = {
       // For Leads and Borrowers
        'Application Complete' : 'blue',
        'Closing Package Sent': 'green', 
        'Needs Attention': 'red',
        'Missing Paperwork': 'red',

        // For Leads
        'Recently Added' : 'orange', //
        'Contacted': 'green', //
        'Declined': 'black',
        'In Progress': 'gold',
        

        // For Borrowers
        "AUS Cleared" : 'pink',
        "Initial Disclosure Sent" : 'orange',
        "Title Ordered" : 'orange',
        "Title Recieved" : 'gold',
        "Appraisal Ordered": "gray", //
        "Appraisal Received" : "sliver", //
        "Initial Disclosure, Received" : "green", //
        "UW Submitted" : "green", //
        "UW Response" : "green", //
        "Pending Conditions" : "green", //
        "Cleared to Closed" : "gray", //

        

        // For Lenders
        'A' : 'red',
        'B+': 'blue',
        'B' : 'green',
        'C' : 'gray',
        'U' : 'black', 
    }
    
    
    return (
        <FontAwesomeIcon icon={Icons.faCircle} color={colorChoice[value]}/>
    );
}

export default ColorIcons;