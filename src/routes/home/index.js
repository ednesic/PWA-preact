import { h, Component } from 'preact';
import style from './style';
import SimpleSlider from '../../components/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Home extends Component {
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
