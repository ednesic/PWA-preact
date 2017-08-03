import { h, Component } from 'preact';
// import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import Img from 'react-image';
import style from './style';

export default class AppSideBar extends Component {

	render() {

		return (
			<nav>
				<h1>Preactor</h1>
				<Img
					src={['../../assets/icons/apple-touch-icon.png']}
					loader={<img className={style.load} src="../../assets/loading.gif" />}
				/>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link>
			</nav>);
	}
}
