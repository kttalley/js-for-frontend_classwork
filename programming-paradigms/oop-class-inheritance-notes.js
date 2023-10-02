// create your classes here
class Plant {
  growUp() {
    console.log('Thanks sunshine, I am growing.')
  }
}

class Pepper extends Plant {
  growUp() {
    super.growUp()
    console.log('Also, I am probably spicy.')
  }
}

class Habanero extends Pepper {
  growUp() {
    super.growUp()
    console.log('like cause you hiccups spicy.')
  }
}

let myPlant = new Plant()
let myPepper = new Pepper()
let myHabanero = new Habanero()

myPlant.growUp()
myPepper.growUp()
myHabanero.growUp()
