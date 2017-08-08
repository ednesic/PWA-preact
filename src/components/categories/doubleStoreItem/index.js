import { Component, PropTypes } from 'preact';
import style from './style';
import pureRender from 'pure-render-decorator';
import StoreItem from '../../storeItem';

@pureRender
export default class DoubleStoreItem extends Component {

		static propTypes = {
			itens: PropTypes.array.isRequired
		}

		render() {
			return (
				<div className={style.doubleStoreItemComponent} >
					{ this.props.itens.map(item =>
						(<div className={style.item}>
							<StoreItem item={item} />
						</div>)
					)}
				</div>
			);
		}
}
