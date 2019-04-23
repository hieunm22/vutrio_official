import { render } from 'react-dom'
import Slider from './component/Slider'
import StackAnimation from './component/StackAnimation'
import ProjectFlow from './component/ProjectFlow'
import '@style/app.scss'

Slider()
StackAnimation()
render(<ProjectFlow />, document.getElementById('project-flow'))
