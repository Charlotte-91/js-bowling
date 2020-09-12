describe("Bowling", function() {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  it("Should be able to return a total score", function() {
    expect(bowling.frame(3,4)).toBe(7);
  });

  it("Should be return 10 and a Strike or Spare of 2", function() {
    expect(bowling.frame(10,0)).toBe(10);
    expect(bowling.strikeOrSpare).toBe(2);
  });
  it("Should be return 10 and a Strike or Spare of 1", function() {
    expect(bowling.frame(6,4)).toBe(10);
    expect(bowling.strikeOrSpare).toBe(1);
  });
  it("Should return the total score for that frame", function() {
    this.strikeOrSpare = 3
    expect(extraScore(10,0)).toBe(20);
  });
});