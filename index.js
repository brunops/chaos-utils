const chaos = {
  init (elementId) {
    this.canvas = document.getElementById(elementId)
    this.context = this.canvas.getContext('2d')

    this.setSize(window.innerWidth, window.innerHeight)
  },

  setSize (width, height) {
    this.width = this.canvas.width = width
    this.height = this.canvas.height = height
  },

  clear (color) {
    if (color) {
      this.context.fillStyle(color)
      this.context.fillRect(0, 0, this.width, this.height)
    }
    else {
      this.context.clearReact(0, 0, this.width, this.height)
    }
  },

  popImage () {
    const win = window.open('', 'Canvas Image')
    const src = this.canvas.toDataURL('image/png')

    win.document.write(`<img src="${src}" width="${this.width}" height="${this.height}"`)
  }
}

export default chaos
