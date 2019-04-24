import anime from 'animejs/lib/anime.es.js'

const StackAnimation = () => {
  const boxes = [
    'backend',
    'frontend',
    'devops',
    'dapp',
  ]

  let activeStack = undefined

  boxes.forEach(skill => {
    const view_height = window.innerHeight
    const skill_box = document.getElementById(`${skill}-box`)
    const close_btn = document.getElementById(`${skill}-stack-close`)

    const hideStack = (sk, cb) => anime({
      targets: `.hidden-stacks.${sk}`,
      duration: 400,
      easing: 'easeOutSine',
      top: '200vh',
      complete: () => {
        activeStack = undefined
        return cb && cb()
      },
    })

    const showStack = sk => anime({
      targets: `.hidden-stacks.${sk}`,
      duration: 400,
      easing: 'easeOutSine',
      top: '50vh',
      complete: () => {
        activeStack = sk
      }
    })

    skill_box.onclick = () => {
      if (activeStack === skill) return hideStack(activeStack)
      return activeStack ? hideStack(activeStack, () => showStack(skill)) : showStack(skill)
    }
    close_btn.onclick = () => hideStack(skill)
  })
}


export default StackAnimation
