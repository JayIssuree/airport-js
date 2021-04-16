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
  });
});
