import Button from 'react-bootstrap/Button';

// Button that opens a new tab to a website provided by url parameter
// Note: The database needs the url including HTTP or HTTPS protocol for the Link to work
// Example: "https://www.google.com" not "google.com"


const LinkBtn = ({nameBtn, color, url}) => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
      <Button 
          variant={color} onClick={() => openInNewTab(url)}>
       {nameBtn}
      </Button>
  );
};

export default LinkBtn;
