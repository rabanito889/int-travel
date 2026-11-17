import { describe, beforeEach, test, expect } from "vitest";
import Accommodation from "../accommodation.ts";

describe("Accommodation", () => {
  let accommodation: Accommodation;
  beforeEach(() => {
    accommodation = new Accommodation("Hotel", 100);
    void accommodation;
  });

  describe("Accommodation name", () => {
    test("should get name correctly", () => {
      expect(accommodation.getName()).toBe("Hotel");
    });
    test("should set name correctly", () => {
      accommodation.setName("PEPE");
      expect(accommodation.getName()).toBe("PEPE");
    });
    // TODO: agregar más tests para el nombre

    describe("Accommodation cost", () => {
      test.todo("agregar tests para el costo");

      test("should get the correct cost", () => {
        expect(accommodation.getCost()).toBe(100);
      });

      test("should set the correct cost", () => {
        accommodation.setCost(50);
        expect(accommodation.getCost()).toBe(50);
      });

      test("should throw the invalid cost", () => {
        expect(() => accommodation.setCost(-1)).toThrow();
      });
    });
  });
});
