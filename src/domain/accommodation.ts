class Accommodation {
  // TODO: implementar clase Accommodation con los campos name y cost
  #name!: string;
  #cost!: number;
  

  constructor(
    name: string,
    cost: number,
    
  ) {
    this.setName(name);
    this.setCost(cost);
    
  }
  getCost(): number {
    return this.#cost;
  }

  setCost(cost: number): void {
    if(cost < 0){
      throw new Error("costo tiene que ser mayor a 0")
    }
    this.#cost = cost;
  }

  getName(): string {
    return this.#name;
  }
  setName(name: string): void{
    this.#name = name;
  }
}
export default Accommodation;
