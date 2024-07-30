import EventEmitter from "./EventEmitter"

export default class Sizes extends EventEmitter {
  constructor(){
    super()

    // Setup
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
    this.width = window.innerWidth
    this.height = window.innerHeight

    window.addEventListener('resize', () => {
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)
      this.width = window.innerWidth
      this.height = window.innerHeight

      this.trigger('resize')
    })
  }
}