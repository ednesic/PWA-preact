import { Component, PropTypes } from 'preact';
import style from './style';
import { getFreePrice } from '../../helpers';
import pureRender from 'pure-render-decorator';

@pureRender
export default class StoreItem extends Component{

		static propTypes = {
			itens: PropTypes.object.isRequired
		}

		render() {
			return (
				<div className={style.simpleItemDiv}>
					<img className={style.simpleImage} src={this.props.item.iconURL} />
					<div className={style.itemInfo} >
						<p className={style.mediaTitle} >{this.props.item.mediaTitle}</p>
						<p className={style.price} >{getFreePrice(this.props.item.priceFrom)}</p>
						<p className={style.priceFrom} >{this.props.item.priceFrom}</p>
					</div>
				</div>
			);
		}
}
