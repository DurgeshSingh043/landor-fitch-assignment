import { Button, Icon, Title, Text } from '../../components/atoms';
import { Breadcrum, CarouselCard } from '../../components/molecules';
import { ICONS } from '../../constants/_icons';
import Slider from 'react-slick';

import './home.scss';
import { carouselConfig } from '../../configs/carousel';
import { homePageData } from '../../apis/mocks/homePage';

let slickSliderRef = null;
const Home = () => {
  const {
    breadcrum,
    title,
    subTitle,
    description,
    carouselData,
  } = homePageData;

  const navClickHandler = (event) => {
    const name = event?.target?.getAttribute('name');
    if (name === 'left') {
      slickSliderRef?.slickPrev();
    } else if (name === 'right') {
      slickSliderRef?.slickNext();
    }
  };

  return (
    <div className="main-content">
      <Breadcrum text={breadcrum} />
      <div className="main-content__nav" onClick={navClickHandler}>
        <label className="upper mr-2">Explore more</label>
        <Button name="left">
          <Icon name={ICONS.ArrowLeft} />
        </Button>
        <Button name="right" className="ml-2">
          <Icon name={ICONS.ArrowRight} />
        </Button>
      </div>
      <div className="main-content__header">
        <Title text={title} component="h1" />
        <Text className="caption mt-2" text={subTitle} />
        <Text className="mx-3" text={description} />
      </div>
      <div className="main-content__carousel">
        <Slider
          ref={(sliderRef) => (slickSliderRef = sliderRef)}
          {...carouselConfig}
        >
          {carouselData.map((item) => (
            <CarouselCard {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
