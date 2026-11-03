import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {

    it("test default constructor", () => {
        const p = new Point();

        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
        expect(p.isEmpty()).to.equal(true);
    });

    it("test constructor with coordinates", () => {
        const p = new Point([3, 4]);

        expect(p.getCoordinate()).to.deep.equal([3, 4]);
        expect(p.x()).to.equal(3);
        expect(p.y()).to.equal(4);
        expect(p.isEmpty()).to.equal(false);
    });

    it("test getType", () => {
        const p = new Point([3, 4]);

        expect(p.getType()).to.equal("Point");
    });

    it("test translate", () => {
        const p = new Point([3, 4]);

        p.translate(2, 5);

        expect(p.x()).to.equal(5);
        expect(p.y()).to.equal(9);
    });

    it("test translate empty point", () => {
        const p = new Point();

        p.translate(2, 5);

        expect(p.isEmpty()).to.equal(true);
    });

});