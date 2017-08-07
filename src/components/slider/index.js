import { Component, PropTypes } from 'preact';
import Slider from 'react-slick';
import StoreItem from '../storeItem';
import BannerImage from '../bannerImage';
import style from './style';
import pureRender from 'pure-render-decorator';

@pureRender
export class BannerSlider extends Component {

		static propTypes = {
			itens: PropTypes.array.isRequired
		};

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
					{ this.props.itens.map(item => (
						<div className={style.bannerDiv}>
							<BannerImage banner={item.bannerURL} />
						</div>) ) }
				</Slider>
			);
		}

}

@pureRender
export class SimpleSliderWith3 extends Component {

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
						(<div>
							<StoreItem item={item} />
						</div>)) }
				</Slider>
			);
		}
}

@pureRender
export class SimpleSliderWith2 extends Component {

		static propTypes = {
			itens: PropTypes.array.isRequired
		}

		render() {
			const settings = {
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 1,
				infinite: true,
				mobileFirst: true,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							arrows: false,
							centerMode: true,
							centerPadding: '40px',
							slidesToShow: 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							arrows: false,
							centerMode: true,
							centerPadding: '40px',
							slidesToShow: 1
						}
					}
				]
			};

			return (
				<Slider {...settings} className={style.simpleItemSlider}>
					{ this.props.itens.map(item =>
						(<div>
							<StoreItem item={item} />
						</div>)) }
				</Slider>
			);
		}
}

@pureRender
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
					{ this.props.itens.map(item =>
						(<div className={style.bannerDiv}>
							<BannerImage banner={item.bannerURL} />
						</div>) ) }
				</Slider>
			);
		}
}
