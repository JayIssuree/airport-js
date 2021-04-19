describe("Plane", function () {
  var subject;
  var airportSpy;

  beforeEach(function () {
    subject = new Plane();
    airportSpy = {
      store: function () {},
    };
  });

  describe("land", function () {
    it("calls the airport to store the plane", function () {
      spyOn(airportSpy, "store");
      subject.isFlying = true;
      subject.land(airportSpy);
      expect(airportSpy.store).toHaveBeenCalledWith(subject);
    });
    it("saves the airport it has landed at", function () {
      subject.isFlying = true;
      subject.land(airportSpy);
      expect(subject._location).toEqual(airportSpy);
    });
    it("does not a land a plane that is not in flight", function () {
      expect(subject.land(airportSpy)).toEqual("Plane is not in flight.");
      expect(subject.isFlying).toBe(false);
    });
  });

  describe("takeOff", function () {
    it("takes off from the airport", function () {
      subject.isFlying = true;
      subject.land(airportSpy);
      subject.takeOff();
      expect(subject._location).toBeNull();
    });
    it("does not take off a plane that is already in flight", function () {
      subject.isFlying = true;
      expect(subject.takeOff()).toEqual("Plane is already in flight.");
    });
  });
});
