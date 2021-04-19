class Plane {
  constructor() {
    this._location = null;
    this.isFlying = false;
  }

  land(airport) {
    if (this.isFlying == false) {
      return "Plane is not in flight.";
    } else {
      airport.store(this);
      this._location = airport;
      this.isFlying = false;
    }
  }

  takeOff() {
    if (this.isFlying == true) {
      return "Plane is already in flight.";
    }
    this._location.removePlane(this)
    this._location = null;
    this.isFlying = true;
  }
}
