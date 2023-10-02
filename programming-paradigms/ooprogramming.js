// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name
        this.age = age
        this.energy = energy
    }
    sleep() {
       console.log(`I gained 10 energy, my total energy will be ${this.energy + 10}, after I finish sleeping.`)
    }
    doSomethingFun() {
        console.log(`I still have ${this.energy - 10} energy let's keep dancing!`)
        if (this.energy < 50) {
            console.log(`I'm pooped, let's head home and watch TV.`)
        }
    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(xp, hourlyWage);
        this.name = name
        this.xp = xp
        this.hourlyWage = hourlyWage
    }
    goToWork() {
        console.log(`What a long day.` + `${this.name}'s XP increased: ${this.xp + 10} points`)
    }
}

// Task 3: Code an intern object, run methods
function intern() {
    const inter1 = new Worker('Bob', 21, 110, 0, 10)
    inter1.goToWork()
    return inter1
}
console.log(intern())

// Task 4: Code a manager object, methods
function manager() {
    const manager1 = new Worker('Alice', 30, 120, 100, 30)
    manager1.doSomethingFun()
    return manager1
}
console.log(manager())