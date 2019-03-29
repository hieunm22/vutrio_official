import anime from 'animejs/lib/anime.es.js'

const StackAnimation = () => {
  const boxes = [
    'backend',
    'frontend',
    //    'devops',
    // 'dapp',
  ]

  boxes.forEach(skill => {
    const viewheight = window.innerHeight
    const skill_box = document.getElementById(`${skill}-box`)
    const close_btn = document.getElementById(`${skill}-stack-close`)
    console.log(viewheight)
    skill_box.onclick = () => anime({
      targets: `.hidden-stacks.${skill}`,
      duration: 500,
      easing: 'easeOutSine',
      top: 0,
    })

    close_btn.onclick = () => anime({
      targets: `.hidden-stacks.${skill}`,
      duration: 500,
      easing: 'easeOutCubic',
      top: viewheight,
    })
  })
}


export default StackAnimation
