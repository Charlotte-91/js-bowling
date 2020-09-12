"use strict;";
class Bowling {

  constructor() {
    this.strikeOrSpare = 0;
  } 

  frame(score1, score2) { 
    if  (score1 == 10) {
      this.strikeOrSpare += 2
      return 10
    } else if (( score1 + score2) == 10) {
      this.strikeOrSpare += 1
      return 10
    } else {
      return (score1 + score2)
    }
  }
  extraScore(score1, score2) {
    if (this.strikeOrSpare => 2) {
      if (score2 == 0){
        total += score1
        this.strikeOrSpare -= 1
      }
    }

  }



}