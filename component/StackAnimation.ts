import anime from 'animejs/lib/anime.es.js'

const StackAnimation = () => {
  const boxes = [
    'backend',
    'frontend',
    'devops',
    'dapp',
  ]

  boxes.forEach(skill => {
    const skill_box = document.getElementById(`${skill}-box`)
    skill_box.onclick = () => {
      const stackbox_height = document.querySelector(`.hidden-stacks.${skill}`).clientHeight
      anime({
        targets: `.hidden-stacks.${skill}`,
        duration: 500,
        easing: 'linear',
        translateY: -500,
      })
    }
  })
}


export default StackAnimation
