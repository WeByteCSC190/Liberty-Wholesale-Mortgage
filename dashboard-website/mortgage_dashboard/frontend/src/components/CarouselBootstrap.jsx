import Carousel from 'react-bootstrap/Carousel';

const CarouselBootstrap = ({data}) => { 
  return (
    <Carousel variant="dark" >
       {data.map((item) => {
                    return (
                     <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7130503/pexels-photo-7130503.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt={item.title}
        />
        <Carousel.Caption style={{bottom:"7rem"}}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </Carousel.Caption> 
      </Carousel.Item>
                    );
                  })}
      
     
    </Carousel>
  );
}

export default CarouselBootstrap;