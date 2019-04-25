import Slider from './component/Slider'
import StackAnimation from './component/StackAnimation'
import '@style/app.scss'

Slider()
StackAnimation()

const exec = () => {
  const checkAndRender = async () => {
    const ReactDOM = await import('react-dom')
    let Component = undefined

    if (window.innerWidth > 500) {
      Component = await import('./component/ProjectFlow')
    } else {
      Component = await import('./component/ProjectSwiper')
    }
    console.log(Component.default)
    ReactDOM.render(<Component.default />, document.getElementById('project-flow'))
  }
  setTimeout(checkAndRender, 3000)
}

exec()
