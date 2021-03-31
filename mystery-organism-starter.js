// JavaScript Practice
// Uses factory functions

// Returns a random DNA base. DNA is comprised of four bases (Adenine, Thymine, Cytosine, and Guanine).
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Returns specimen number and a dna number
const pAequorFactory = (number, strand) => {
  return {
    specimenNum: number,
    dna: strand,
    //Mutates the original DNA of the pAequor
    mutate() {
      const removableBase = [Math.floor(Math.random() * this.dna.length)];
      const newBase = returnRandBase();
      if (newBase !== this.dna[removableBase]) {
        return this.dna.splice(removableBase, 1, newBase);
      }
    },
    //Compares two pAequor's DNAs and finds x% DNA in commom
    compareDNA(otherpAequor) {
      let sameDNA = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherpAequor.dna[i]) {
          sameDNA++;
        }
      }
      console.log(
        `Specimen #${this.specimenNum} and Specimen #${
          otherpAequor.specimenNum
        } have ${Math.floor((sameDNA / this.dna.length) * 100)}% DNA in common.`
      );
    },
    //Calculates what the percentage of survival is
    willLikelySurvive() {
      let cGBases = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if ((cGBases === 9)) {
          return true;
        } else if (this.dna[i] === "C" || this.dna[i] === "G") {
          cGBases++;
        }
      }
      return false;
    },
  };
};

//Create as many pAequors as desired
let pAequorSubjects = [];
const createSubjects = (totalNumberSubject) => {
  for (let i = 1; pAequorSubjects.length < totalNumberSubject; i++) {
    let preliminarypAequor = pAequorFactory(i,mockUpStrand());
    switch (preliminarypAequor.willLikelySurvive()) {
      case true:
        pAequorSubjects.push(preliminarypAequor)
        break;
      default:
        break;
    }
  } 
}

createSubjects(2);
console.log(pAequorSubjects);
console.log(pAequorSubjects);
console.log(AequorSubjects[0].willLikelySurvive());