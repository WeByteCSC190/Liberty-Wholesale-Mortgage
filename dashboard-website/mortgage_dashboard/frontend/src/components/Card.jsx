import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardVideo({ title, desc, link }) {
  const playUrl="data:image/png;base64,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"
  return (
    <Card style={{ }}>
      <Card.Img variant="top" src={playUrl} alt="Play Icon" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {desc}
        </Card.Text>
        <Button variant="secondary" target="_blank" href={link}>Link to Video</Button>
      </Card.Body>
    </Card>
  );
}

export default CardVideo;
