import { render } from 'react-dom'
import StackAnimation from './component/StackAnimation'
import '@style/app.scss'

// render(<Carousel />, document.querySelector('.about--image-slider'))
window.slidr.create('slidr-div', {
  breadcrumbs: true,
  controls: 'none',
  direction: 'vertical',
  fade: true,
  transition: 'fade'
}).add('v', ['one', 'two', 'one']).auto(3000, 'up');

StackAnimation()
