/**
 * 资源文件
 * 把模型和图片分开进行加载
 * 已掌握
 */

interface ITextures {
  name: string
  url: string
}

export interface IResources {
  textures?: ITextures[],
}

const filePath = './images/earth/'
const fileSuffix = [
  'gradient',
  'redCircle',
  "label",
  "aperture",
  'glow',
  'light_column',
  'aircraft',
  'flow',
  'eartharea',
]

const textures = fileSuffix.map(item => {
  return {
    name: item,
    url: filePath + item + '.png'
  }
})

textures.push({
  name: 'earth',
  url: filePath + 'earth.jpg'
})

textures.push({
  name: 'earthborder',
  url: filePath + 'earthborder.jpg'
})

const resources: IResources = {
  textures
}

export {
  resources
}