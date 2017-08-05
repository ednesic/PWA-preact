import { Component, PropTypes } from 'preact';
import style from './style';

export default class StoreItem extends Component{

		static propTypes = {
			itens: PropTypes.object.isRequired
		}

		render() {
			return (
				<div className={style.simpleItemDiv}>
					<img className={style.simpleImage} src={this.props.item.iconURL} />
					<div>
						<p>{this.props.item.mediaTitle}</p>
						<p>{this.props.item.mediaDeveloper}</p>
						<p>{this.props.item.priceFrom}</p>
					</div>
				</div>
			);
		}
}
