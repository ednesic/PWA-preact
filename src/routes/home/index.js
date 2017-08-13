import { h, Component } from 'preact';
import style from './style';
import { Categories, Highlights } from '../../components/storeViews';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Home extends Component {

	headerButtons() {
		return (
			<div>
				<button className={[style.headerButtons, this.isActive(this.state.tabs[0])].join(' ')} onClick={this.showHighlights}>{this.state.tabs[0]}</button>
				<button className={[style.headerButtons, this.isActive(this.state.tabs[1])].join(' ')} onClick={this.showCategories} >{this.state.tabs[1]}</button>
			</div>
		);
	}

	setFilter(filter) {
		this.slider.slickGoTo(filter === this.state.tabs[0] ? 0 : 1);
		this.setState({ selected: filter });
	}

	isActive(value) {
		return (value===this.state.selected) ? style.pressed : '';
	}

	constructor(props) {
		super(props);
		this.showHighlights = this.setFilter.bind(this, this.state.tabs[0]);
		this.showCategories = this.setFilter.bind(this, this.state.tabs[1]);
	}

	state = {
		selected: 'Destaques',
		tabs: ['Destaques', 'Categorias']
	}

	render() {

		const settings = {
			dots: false,
			infinite: false,
			speed: 500,
			mobileFirst: true,
			arrows: false,
			draggable: false,
			fade: true,
			swipe: false,
			lazyLoad: true
		};

		return (
			<div class={style.home}>
				{this.headerButtons()}
				<Slider ref={(c) => { this.slider = c; }} {...settings}>
					<div><Categories /></div>
					<div><Highlights /></div>
				</Slider>
			</div>
		);
	}
}
