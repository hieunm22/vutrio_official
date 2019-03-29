const Slider = () => window.slidr.create('slidr-div', {
  breadcrumbs: true,
  controls: 'none',
  direction: 'vertical',
  fade: true,
  transition: 'fade'
}).add('v', ['one', 'two', 'one']).auto(3000, 'up')

export default Slider
