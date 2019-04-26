import { render } from 'react-dom'
import '@style/app.scss'

const exec = () => {
  const checkAndRender = async () => {
    let Component = undefined

    if (window.innerWidth > 500) {
      Component = await import('./component/ProjectFlow')
    } else {
      Component = await import('./component/ProjectSwiper')
    }

    render(<Component.default />, document.getElementById('project-flow'))
  }
  setTimeout(checkAndRender, 500)
}

exec()
