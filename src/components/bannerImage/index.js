import { Component, PropTypes } from 'preact';
import style from './style';

export default class BannerImage extends Component {

		static propTypes = {
			itens: PropTypes.string.isRequired
		}

		render() {
			return (
				<img className={style.bannerImage} src={this.props.banner} />
			);
		}
}
