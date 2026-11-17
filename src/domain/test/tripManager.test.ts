import { describe, beforeEach, test, expect } from "vitest";
import TripManager from "../tripManager.ts";
import City from "../city.ts";
import Accommodation from "../accommodation.ts";

describe("TripManager", () => {
  let manager: TripManager;
  beforeEach(() => {
    manager = new TripManager();
  });

  test("get cities", () => {
    expect(manager.getAllCities()).toEqual([]);
  });

  test("find city by name", () => {
    let accommodation = new Accommodation("Hotel",100);
    let dateFrom = new Date("01/07/2021");
    let dateEnd = new Date("01/07/2022")
    let ciudad = new City("tokyo","japon",dateFrom, dateEnd,"",accommodation);
    manager.addCity(ciudad);
    expect(manager.findCityByName("tokyo")).toEqual(ciudad);
  });

  test("find city by name returns null if not found", () => {
    expect(manager.findCityByName("NonExistentCity")).toBeNull();
  });
});
