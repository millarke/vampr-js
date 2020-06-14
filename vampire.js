class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVamps = 0;
    let currentVamp = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numberOfVamps++;
    }
    return numberOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    // console.log(this.numberOfOffspring());
    // console.log(vampire.numberOfOffspring());
    // console.log(numberOfOffspring());
    // console.log(vampire.numberOfOffspring());

    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    return false;



    // if (get this.numberOfOffspring() < get vampire.numberOfOffspring()) {
    //   return true
    // } else {
    //    return false
    // }

   

  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {

    if (this.name === name) {
      return this;
    }

    for (const childNode of this.offspring) {
      if (childNode.vampireWithName(name)) {
        return childNode.vampireWithName(name);
      }
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
    let totalDescendentsCount = 0; // 1

    totalDescendentsCount += this.numberOfOffspring;

    for (const childNode of this.offspring) {
      let newVar = childNode.totalDescendents; // 2
      // totalEmployeesCount += ;
      totalDescendentsCount += newVar;
    }
    return totalDescendentsCount;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
    let newArr = [];

    if (this.yearConverted > 1980) {
      newArr.push(this);
    }

    for (const childNode of this.offspring) {
      newArr = newArr.concat(childNode.allMillennialVampires);
    }

    return newArr;

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
  // TODO: tip - no loop!
  }
}

module.exports = Vampire;