import React  from 'react';
import './Carousel.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import GP1 from '../Images/GP1.png';
import GP2 from '../Images/GP2.png';
import GP3 from '../Images/GP3.png';
import GP4 from '../Images/GP4.png';
import GP5 from '../Images/GP5.png';

const data = [
    {
      id: 1,
      imgUrl: GP1
    },
    {
      id: 2,
      imgUrl: GP2
    },
    {
      id: 3,
      imgUrl: GP3
    },
    {
      id: 4,
      imgUrl: GP4
    },
    {
      id: 5,
      imgUrl: GP5
    }
  ];

const Carousel = () => (
	<div>
		<Slider className="slider-wrapper">
			{data.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.imgUrl}') no-repeat center center` }}
				>
					
				</div>
			))}
		</Slider>
	</div>
);

export default Carousel
