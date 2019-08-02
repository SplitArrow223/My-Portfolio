import React  from 'react';
import './Carousel.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import PP1 from '../Images/PP1.png';
import PP2 from '../Images/PP2.png';
import PP3 from '../Images/PP3.png';
import PP4 from '../Images/PP4.png';

const data = [
    {
      id: 1,
      imgUrl: PP1
    },
    {
      id: 2,
      imgUrl: PP2
    },
    {
      id: 3,
      imgUrl: PP3
    },
    {
      id: 4,
      imgUrl: PP4
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
