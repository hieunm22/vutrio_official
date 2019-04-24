import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Coverflow from '@vutr/react-coverflow'

const fn = function () {
  /* do your action */
}

export default class ProjectFlow extends React.Component {
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

  onChangeImage = active => this.setState({ active })

  toggleDetail = idx => {
    console.log('detail for: ', idx)
  }

  render() {
    const title = this.data[this.state.active].alt
    return (
      <div>
        <h1 className="text-center">{title}</h1>
        <Coverflow
          height="550"
          width="100%"
          displayQuantityOfSide={2}
          navigation
          enableScroll={false}
          clickable={true}
          active={this.state.active}
          onChange={this.onChangeImage}
        >
          {this.data.map((item, idx) => (
            <img
              src={item.img}
              key={item.href}
              data-action={this.toggleDetail}
            />
          ))}
        </Coverflow>
      </div>

    )
  }
}
