describe("Airport", function () {
  var subject;
  var planeSpy;

  beforeEach(function () {
    subject = new Airport();
    planeSpy = {};
  });

  describe("stores", function () {
    it("the plane in the hangar", function () {
      subject.store(planeSpy);
      expect(subject.hangar).toContain(planeSpy);
    });
    it("is empty upon creation", function () {
      expect(subject.hangar).toEqual([]);
    });
  });

  describe("removePlane", function(){
      it("removes the plane from the hangar", function(){
          subject.store(planeSpy)
          expect(subject.hangar).toContain(planeSpy)
          subject.removePlane(planeSpy)
          expect(subject.hangar).toEqual([])
      })
  })

  describe("capacity", function(){
      it("prevents landing when at capacity", function(){
        do {
            subject.store(planeSpy)
        } while (subject.isFull() == false)
        expect(subject.store(planeSpy)).toEqual("Hangar is at capacity")
      })
  })
});
