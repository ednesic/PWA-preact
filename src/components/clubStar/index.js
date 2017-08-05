import { Component, PropTypes } from 'preact';
import style from './style';
import StoreItem from '../storeItem';

export default class ClubStar extends Component {

		static propTypes = {
			itens: PropTypes.array.isRequired
		}

		render() {
			return (<div className={style.clubStarComponent}>
				<img className={style.clubStarBanner} src={this.props.itens.bannerURL} />
				{ this.props.itens.map(item => <div> <StoreItem item={item} /> </div>) }
			</div>);
		}
}
