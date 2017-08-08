import { Component } from 'preact';
import {
	SimpleSliderWith3,
	SimpleSliderWith2,
	BannerSlider,
	MultipleBannerSlider
} from './slider';
import ClubStar from './clubStar';
import BannerImage from './bannerImage';
import DoubleStoreItem from './doubleStoreItem';

export default class SliderChooser extends Component {

	storeItensSwitch(itens) {
		return itens.map((item) => {
			const title = <h1>{item.title}</h1>;
			switch (item.type) {
				case 1:
					return (
						<div>
							{title} <BannerImage banner={item.frames[0].itens[0].bannerURL} />
						</div>);
				case 2:
					return <MultipleBannerSlider itens={item.frames[0].itens} />;
				case 3:
					return <BannerSlider itens={item.frames[0].itens} />;
				case 4:
					return (
						<div>
							{title} <SimpleSliderWith3 itens={item.frames[0].itens} />
						</div>);
				case 5:
					return (
						<div>
							{title} <ClubStar itens={item.frames[0].itens} />
						</div>);
				case 6:
					return (
						<div>
							{title} <SimpleSliderWith2 itens={item.frames[0].itens} />
						</div>);
				case 7:
					return (
						<div>
							{title} <DoubleStoreItem itens={item.frames[0].itens} />
						</div>);
				default:
			}
		});
	}

	render() {
		return (
			<div>
				{this.storeItensSwitch(this.props.itens)}
			</div>);
	}
}
