import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter";

describe("test WktWriter", () => {

    it("test Point", () => {
        const p = new Point([3, 4]);
        const writer = new WktWriter();

        expect(writer.write(p)).to.equal("POINT(3 4)");
    });

    it("test empty Point", () => {
        const p = new Point();
        const writer = new WktWriter();

        expect(writer.write(p)).to.equal("POINT EMPTY");
    });

    it("test LineString", () => {
        const p1 = new Point([0, 0]);
        const p2 = new Point([1, 1]);
        const p3 = new Point([5, 5]);

        const line = new LineString([p1, p2, p3]);
        const writer = new WktWriter();

        expect(writer.write(line)).to.equal("LINESTRING(0 0,1 1,5 5)");
    });

    it("test empty LineString", () => {
        const line = new LineString();
        const writer = new WktWriter();

        expect(writer.write(line)).to.equal("LINESTRING EMPTY");
    });

});