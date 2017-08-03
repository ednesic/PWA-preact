import { h, Component } from 'preact';
import style from './style';
import { SimpleSlider, BannerSlider, MultipleBannerSlider } from '../../components/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
					switch (item.type) {
						case 3:
							return <BannerSlider itens={item.frames[0].itens} />;
						case 4:
							return <SimpleSlider itens={item.frames[0].itens} />;
						case 5:
							return <MultipleBannerSlider itens={item.frames[0].itens} />;
						// case 3:
						// 	return <SimpleSlider itens={item.frames.itens} />;
						// case 4:
						// 	return <SimpleSlider itens={item.frames.itens} />;
						// case 5:
						// 	 return <SimpleSlider itens={item.frames.itens} />;
						// case 6:
						// 	return <SimpleSlider itens={item.frames.itens} />;
						// case 7:
						// 	return <SimpleSlider itens={item.frames.itens} />;
						default:
					}
				})}
				<p>This is the Home component.</p>
			</div>
		);
	}
}
