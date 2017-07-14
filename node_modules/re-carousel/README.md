# re-carousel [![npm-version][npm-badge]][npm-link]

Minimal carousel component for React.

demo: https://amio.github.io/re-carousel/

### Usage

`import Carousel from 're-carousel'`

then:

```html
<Carousel auto>
  <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
  <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
  <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
</Carousel>
```

### Attributes

All attributes are optional.

- `axis` {enum} `'x'` or `'y'` (`'x'` by default)
- `loop` {boolean} `true` or `false` (`false` by default) toggle loop mode.
- `auto` {boolean} `true` or `false` (`false` by default) toggle auto sliding.
- `interval` {number} (`4000`ms by default) interval for auto sliding.
- `duration` {number} (`300`ms by default) duration for animation.
- `widgets` {Array of ReactClass} Indicator and switcher could be various,
  so it's not builtin. Here's some example custom widgets
  ([dots indicator](src/indicator-dots.js),
  [prev/next buttons](src/buttons.js)):

  ```javascript
  import Carousel from 're-carousel'
  import IndicatorDots from './indicator-dots'
  import Buttons from './buttons'

  export default function carousel () {
    return <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
      <div style={{backgroundColor: 'tomato', height: '100%'}}>Frame 1</div>
      <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
      <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
    </Carousel>
  }
  ```
- `frames` {Array of ReactElement} If you want to create frames programmatically,
  use this attribute:

  ```javascript
  import Carousel from 're-carousel'

  export default function carousel (props) {
    const frames = props.frameArray.map((frame, i) => {
      return <div>Frame {i}</div>
    })
    return <Carousel auto frames={frames}>
      <span>These children element will be appended to Carousel,</span>
      <span>as normal element other than "frame".</span>
    </Carousel>
  }
  ```

### Contributes

```bash
npm run start # start local dev server
npm run build # build lib
npm run test  # run tests
```

## License

[MIT][mit] © [Amio][author]

[npm-badge]:https://img.shields.io/npm/v/re-carousel.svg?style=flat-square
[npm-link]: https://www.npmjs.com/package/re-carousel
[mit]:      http://opensource.org/licenses/MIT
[author]:   http://github.com/amio
