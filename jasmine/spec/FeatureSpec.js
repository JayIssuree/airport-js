describe("Feature Test:", function () {
  var flyingPlane;
  var airport;

  beforeEach(function () {
    flyingPlane = new Plane();
    flyingPlane.isFlying = true;
    airport = new Airport();
  });

  it("planes can be instructed to land at an airport", function () {
    flyingPlane.land(airport);
    expect(airport.hangar).toContain(flyingPlane);
  });
});
