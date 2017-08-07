export function getFreePrice(price) {
	return `${price.slice(0,price.indexOf(' '))} 0${price.indexOf(',') ? `,` : `.`}00`;
}
