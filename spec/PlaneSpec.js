describe("Plane", function () {
  var subject;
  var airportSpy;

  beforeEach(function () {
    subject = new Plane();
    airportSpy = {
      store: function () {}
    };
  });

  describe("land", function () {
    it("calls the airport to store the plane", function () {
      spyOn(airportSpy, "store");
      subject.land(airportSpy);
      expect(airportSpy.store).toHaveBeenCalledWith(subject);
    });
  });
});
