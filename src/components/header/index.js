import { h, Component } from 'preact';
import style from './style';

export default class Header extends Component {
	render() {
		const { hamburgerClick } = this.props;
		return (
			<header class={style.header}>
				<img src="../../assets/hamburger.png" onClick={hamburgerClick} />
				<h1>Preact App</h1>
			</header>
		);
	}
}
