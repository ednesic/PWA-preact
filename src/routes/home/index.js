import { h, Component } from 'preact';
import style from './style';
import {
	SimpleSliderWith3,
	SimpleSliderWith2,
	BannerSlider,
	MultipleBannerSlider
} from '../../components/slider';
import ClubStar from '../../components/clubStar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fetch from 'isomorphic-fetch';

export default class Home extends Component {

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
			.catch(err => console.log(err));
	}

	render({}, { res=[] } ) {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				{res.map((item) => {
					const title = <h2>{item.title}</h2>;
					switch (item.type) {
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
						case 7:
							return (
								<div>
									{title} <SimpleSliderWith2 itens={item.frames[0].itens} />
								</div>);
						case 2:
							return <MultipleBannerSlider itens={item.frames[0].itens} />;
						// case 5:
						// 	 return <SimpleSlider itens={item.frames[0].itens} />;
						// case 6:
						// 	return <SimpleSlider itens={item.frames[0].itens} />;
						// case 7:
						// 	return <SimpleSlider itens={item.frames[0].itens} />;
						default:
					}
				})}
			</div>
		);
	}
}
