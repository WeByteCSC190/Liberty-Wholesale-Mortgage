import Carousel from 'react-bootstrap/Carousel';

const CarouselBootstrap = ({data}) => { 
  return (
    <Carousel variant="dark" >
       {data.map((item) => {
                    return (
        <Carousel.Item classname="carousel-item">
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7130503/pexels-photo-7130503.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt={item.title}
        />
        
        <Carousel.Caption style={{top: "50%",transform: 'translateY(-50%)',bottom: "initial"}} >
          <div  >
          <h3 className="carousel-text">{item.title}</h3>
          <p className="carousel-text">{item.content}</p>
          </div>
        </Carousel.Caption> 

      </Carousel.Item>
                    );
                  })}
      
     
    </Carousel>
  );
}

export default CarouselBootstrap;