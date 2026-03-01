import imageFront from '../src/assets/shirtsImages/front-shirt.jpg'
import imageBack from '../src/assets/shirtsImages/back-shirt.jpg'
import blueFront from '../src/assets/shirtsImages/blueFront.webp'
import blueBack from '../src/assets/shirtsImages/blueBack.webp'
import blueFrontTo from '../src/assets/shirtsImages/blueToFront.webp'
import blueBackTo from '../src/assets/shirtsImages/blueToBack.webp'
import redFront from '../src/assets/shirtsImages/redFront.webp'
import redBack from '../src/assets/shirtsImages/redBack.webp'

import blueSimpleFront from '../src/assets/clickCardImgSld/simpleFront.avif'
import blueSimpleBack from '../src/assets/clickCardImgSld/simpleBack.avif'

import whiteFrontSim from '../src/assets/clickCardImgSld/whiteFrontSim.avif'
import whiteBackSim from '../src/assets/clickCardImgSld/whiteBackSim.avif'

import redFrontSim from '../src/assets/clickCardImgSld/redFrontSim.avif'
import redBackSim from '../src/assets/clickCardImgSld/redBackSim.avif'

import BlueFrontSim from '../src/assets/clickCardImgSld/BlueFrontSim.avif'
import BlueBackSim from '../src/assets/clickCardImgSld/blueBackSim.avif'

const data = [
  {
    id: 1,
    name: "Custom Soccer Jersey",
    variants: [
      {
        color: "GREEN & BLACK",
        icon: imageFront,
        images: [
          imageFront,
          imageBack,
          blueSimpleFront,
          blueSimpleBack
        ]
      },
      {
        color: "Grey-Blue",
        icon: blueFront,
        images: [
          blueFront,
          blueBack,
          BlueFrontSim,
          BlueBackSim
        ]
      },
    ]
  },

  {
    id: 2,
    name: "Premium Sports Shirt",
    variants: [
      {
        color: "Red",
        icon: redFront,
        images: [
          redFront,
          redBack,
          redFrontSim,
          redBackSim
        ]
      },
      {
        color: "Blue",
        icon: blueFrontTo,
        images: [
          blueFrontTo,
          blueBackTo,
          blueSimpleFront,
          blueSimpleBack
        ]
      }
    ]
  },

  {
    id: 3,
    name: "Elite Performance Jersey",
    variants: [
      {
        color: "Grey-Blue",
        icon: blueFront,
        images: [
          blueFront,
          blueBack,
          BlueFrontSim,
          BlueBackSim
        ]
      },
      {
        color: "Red",
        icon: redFront,
        images: [
          redFront,
          redBack,
          redFrontSim,
          redBackSim
        ]
      }
    ]
  },

  {
    id: 4,
    name: "Classic Sports Kit",
    variants: [
      {
        color: "Blue",
        icon: blueFrontTo,
        images: [
          blueFrontTo,
          blueBackTo,
          blueSimpleFront,
          blueSimpleBack
        ]
      },
      {
        color: "GREEN & BLACK",
        icon: imageFront,
        images: [
          imageFront,
          imageBack,
          whiteFrontSim,
          whiteBackSim
        ]
      }
    ]
  }
]

export default data