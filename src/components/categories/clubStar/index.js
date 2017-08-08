import { Component, PropTypes } from 'preact';
import style from './style';
import StoreItem from '../../storeItem';
import BannerImage from '../bannerImage';
import pureRender from 'pure-render-decorator';

@pureRender
export default class ClubStar extends Component {

		static propTypes = {
			itens: PropTypes.array.isRequired
		}

		render() {
			return (
				<figure className={style.clubStarFigure}>
					<div className={style.positioning}>
						{ this.props.itens.map(item =>
							(<div className={style.clubStarItem}>
								<StoreItem item={item} />
					 </div>)) }
					</div>
					<div className={style.clubStarBanner}>
						<BannerImage banner={this.props.itens[0].bannerURL} />
					</div>
				</figure>);
		}
}
