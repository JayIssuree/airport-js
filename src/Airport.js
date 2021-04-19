class Airport {
  constructor() {
    this.CAPACITY = 20
    this.hangar = [];
  }

  store(plane) {
    if (this.isFull()) {
        return "Hangar is at capacity"
    }
    return this.hangar.push(plane);
  }

  removePlane(plane){
    var index = this.hangar.indexOf(plane)
    this.hangar.splice(index, 1)
  }

  isFull(){
      return this.hangar.length >= this.CAPACITY
  }
}
