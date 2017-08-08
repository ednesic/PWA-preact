import { h, Component } from 'preact';
import style from './style';
import {
	SimpleSliderWith3,
	SimpleSliderWith2,
	BannerSlider,
	MultipleBannerSlider
} from '../../components/slider';
import ClubStar from '../../components/clubStar';
import BannerImage from '../../components/bannerImage';
import DoubleStoreItem from '../../components/doubleStoreItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fetch from 'isomorphic-fetch';

export default class Home extends Component {

	storeItensSwitch(itens) {
		return itens.map((item) => {
			const title = <h1>{item.title}</h1>;
			switch (item.type) {
				case 1:
					return (
						<div>
							{title} <BannerImage banner={item.frames[0].itens[0].bannerURL} />
						</div>);
				case 2:
					return <MultipleBannerSlider itens={item.frames[0].itens} />;
				case 3:
					return <BannerSlider itens={item.frames[0].itens} />;
				case 4:
					return (
						<div>
							{title} <SimpleSliderWith3 itens={item.frames[0].itens} />
						</div>);
				case 5:
					return (
						<div>
							{title} <ClubStar itens={item.frames[0].itens} />
						</div>);
				case 6:
					return (
						<div>
							{title} <SimpleSliderWith2 itens={item.frames[0].itens} />
						</div>);
				case 7:
					return (
						<div>
							{title} <DoubleStoreItem itens={item.frames[0].itens} />
						</div>);
				default:
			}
		});
	}

	headerButtons() {
		return (
			<div>
				<button className={[style.headerButtons, this.isActive('Destaques')].join(' ')} onClick={this.showHighlights}>Categorias</button>
				<button className={[style.headerButtons, this.isActive('Categorias')].join(' ')} onClick={this.showCategories} >Destaques</button>
			</div>
		);
	}

	setFilter(filter) {
		this.setState({ selected: filter });
	}

	isActive(value) {
		return (value===this.state.selected) ? style.pressed : '';
	}

	constructor(props) {
		super(props);

		this.showHighlights = this.setFilter.bind(this, 'Destaques');
		this.showCategories = this.setFilter.bind(this, 'Categorias');
	}

	state = {
		selected: 'Destaques'
	}

	componentWillMount() {
		const headers = {
									 method: 'GET',
		               mode: 'cors',
									 header: {
							     'Access-Control-Allow-Origin': '*',
							     'Content-Type': 'application/json'
								 }
							 };

		fetch('http://localhost:3000/products', headers)
			.then(data => data.json())
			.then(res => {
				this.setState({ res: res.menu.sections });
			})
			.catch(err => console.error(err));
	}

	render({}, { res=[] } ) {
		return (
			<div class={style.home}>
				{this.headerButtons()}
				{this.storeItensSwitch(res)}
			</div>
		);
	}
}
