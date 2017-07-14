import { h, Component } from 'preact';
import style from './style';
import SimpleSlider from '../../components/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Home extends Component {

	componentDidMount() {

		const headers = {
									 method: 'GET',
		               mode: 'cors',
									 header: {
							     'Access-Control-Allow-Origin':'*',
							     'Content-Type': 'application/json'
							 		}}

			const data =  fetch('http://node-cors-server.herokuapp.com/simple-cors', headers)
			.then(data => data.json())
			.then(res => console.log(res))
			.catch(err => { console.log(err)});

	}

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<SimpleSlider />
				<p>This is the Home component.</p>
			</div>
		);
	}
}
