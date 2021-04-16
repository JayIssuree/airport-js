class Airport {
  constructor() {
    this.hangar = [];
  }

  store(plane) {
    return this.hangar.push(plane);
  }
}
