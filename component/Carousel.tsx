import vale from '@static/vale.jpg'
import jude from '@static/jude.jpg'

export default class Carousel extends React.Component {
  state = {
    images: [jude],
    active: 0,
  }

  componentDidMount() {
    this.slider = setInterval(() => {
      const currentActive = this.state.active
      const newActive = currentActive === this.state.images.length - 1 ?  0 : currentActive + 1
      this.setState({ active: newActive })
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.slider)
  }

  render() {

    return (
      <React.Fragment>
        {this.state.images.map((img, idx) => idx === this.state.active && (
           <div
             className="about--image-slider__image"
             style={{ backgroundImage: `url(${img})`  }}
             key={idx}
             >
           </div>
        ))}
      </React.Fragment>
    )
  }
}
