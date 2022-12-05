import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardVideo() {
  return (
    <Card style={{ }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg" />
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Link to Video</Button>
      </Card.Body>
    </Card>
  );
}

export default CardVideo;
