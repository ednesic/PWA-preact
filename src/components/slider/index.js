import { Component, PropTypes } from 'preact';
import Slider from 'react-slick';
import style from './style';

export class BannerSlider extends Component {

  static propTypes = {
    itens: PropTypes.array.isRequired
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    };

    return (
      <Slider {...settings}>
        { this.props.itens.map(item => <div className={style.bannerDiv}><img className={style.bannerImage} src={item.bannerURL} /></div> ) }
      </Slider>
    );
  }

}

export class SimpleSlider extends Component {

  static propTypes = {
    itens: PropTypes.array.isRequired
  }

  render() {
    const settings = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      infinite: true,
      mobileFirst: true,
      variableWidth: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        }
      ]
      };

    return (
      <Slider {...settings} className={style.simpleItemSlider}>
        { this.props.itens.map(item =>
          <div className={style.simpleItemDiv}>
            <img className={style.simpleImage} src={item.iconURL} />
          <div>
            <p>{item.mediaTittle}</p>
            <p>{item.mediaDeveloper}</p>
            <p>{item.priceFrom}</p>
          </div>
           </div> ) }
      </Slider>
    );
  }
}

export class MultipleBannerSlider extends Component {

  static propTypes = {
    itens: PropTypes.array.isRequired
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      mobileFirst: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false
    };

    return (
      <Slider {...settings}>
        { this.props.itens.map(item => <div className={style.bannerDiv}><img className={style.bannerImageMult} src={item.bannerURL} /></div> ) }
      </Slider>
    );
  }
}
