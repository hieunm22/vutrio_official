import * as React from 'react'
import * as ReactSwipe from 'react-swipe'

export default class ProjectSwiper extends React.Component {
  state = {
    active: 2
  }

  data = [
    {
      img: '/assets/projects/factoryfinder.png',
      alt: 'FactoryFinder (2017)',
      href: 'https://www.factoryfinder.com',
    },
    {
      img: '/assets/projects/6kicks.png',
      alt: '6Kicks (2017)',
      href: 'https://www.6kicks.com',
    },
    {
      img: '/assets/projects/talentmind.png',
      alt: 'TalentMind (2018)',
      href: 'https://talentmind.ai',
    },
    {
      img: '/assets/projects/bondecor.png',
      alt: 'Bondecor (2019)',
      href: 'https://www.bondecor.vn',
    },
    {
      img: '/assets/projects/tomo-relayer.png',
      alt: 'TomoRelayer (2019)',
      href: 'https://www.tomochain.com',
    },
  ]

  onChangeImage = (idx, el) => {
    this.setState({ active: idx })
  }

  toggleDetail = idx => {
    console.log('detail for: ', idx)
  }

  reactSwipeEl = undefined

  render() {
    const active = this.state.active
    const title = this.data[active].alt
    const setActiveClass = idx => `swiper-image--container${idx === active ? ' active': ''}`
    return (
      <div>
        <h1 className="text-center">{title}</h1>
        <div>
          <ReactSwipe
            className="project-swiper"
            swipeOptions={{
              continuous: false,
              callback: this.onChangeImage
            }}
            ref={el => (this.reactSwipeEl = el)}
          >
            {this.data.map((item, idx) => (
              <div key={item.href} className={setActiveClass(idx)}>
                <img src={item.img} />
              </div>
            ))}
          </ReactSwipe>
        </div>
      </div>
    )
  }
}
