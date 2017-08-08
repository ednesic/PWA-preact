import { h, Component } from 'preact';
import style from './style';
import fetch from 'isomorphic-fetch';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Categories from '../../components/categories';

export default class Home extends Component {

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
		selected: 'Destaques',
		res: []
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

	render() {
		return (
			<div class={style.home}>
				{this.headerButtons()}
				<Categories itens={this.state.res} />
			</div>
		);
	}
}
