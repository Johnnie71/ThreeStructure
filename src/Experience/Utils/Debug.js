import Experience from "../Experience";
import GUI from "lil-gui";

export default class Debug {
  constructor(){
    this.experience = new Experience
    this.scene = this.experience.scene
    this.active = window.location.hash === '#debug'

    if (this.active) {
      this.ui = new GUI()
    }
  }
}