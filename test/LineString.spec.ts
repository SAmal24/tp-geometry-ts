import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LineString", () => {

    it("test default constructor", () => {
        const line = new LineString();

        expect(line.getType()).to.equal("LineString");
        expect(line.getNumPoints()).to.equal(0);
        expect(line.isEmpty()).to.equal(true);
    });

    it("test constructor with points", () => {
        const p1 = new Point([0, 0]);
        const p2 = new Point([2, 3]);

        const line = new LineString([p1, p2]);

        expect(line.getNumPoints()).to.equal(2);
        expect(line.getPointN(0)).to.equal(p1);
        expect(line.getPointN(1)).to.equal(p2);
        expect(line.isEmpty()).to.equal(false);
    });

    it("test translate", () => {
        const p1 = new Point([1, 2]);
        const p2 = new Point([3, 4]);

        const line = new LineString([p1, p2]);

        line.translate(2, 3);

        expect(line.getPointN(0).x()).to.equal(3);
        expect(line.getPointN(0).y()).to.equal(5);

        expect(line.getPointN(1).x()).to.equal(5);
        expect(line.getPointN(1).y()).to.equal(7);
    });

    it("test translate empty line", () => {
        const line = new LineString();

        line.translate(2, 3);

        expect(line.isEmpty()).to.equal(true);
    });

});