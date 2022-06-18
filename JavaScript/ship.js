function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function(){
      draft -= crew*1.5;
      if (draft>20){
        return true
      }
      else return false
    }
   }

// Refactored solution

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function(){return this.draft-(this.crew*1.5)>20}
   }