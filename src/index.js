function getGraphicsType() {
  return PIXI.utils.isWebGLSupported() ? 'WebGL' : 'canvas'
}

let type = getGraphicsType()
PIXI.utils.sayHello(type)
