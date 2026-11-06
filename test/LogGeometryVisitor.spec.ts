import { describe, it, expect, vi } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";
import LogGeometryVisitor from "../src/LogGeometryVisitor";

describe("test LogGeometryVisitor", () => {

    it("test Point", () => {
        const p = new Point([2, 3]);
        const visitor = new LogGeometryVisitor();

        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        p.accept(visitor);

        expect(log).toHaveBeenCalledWith("Je suis un point avec x=2.0 et y=3.0.");

        log.mockRestore();
    });

    it("test empty Point", () => {
        const p = new Point();
        const visitor = new LogGeometryVisitor();

        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        p.accept(visitor);

        expect(log).toHaveBeenCalledWith("Je suis un point vide.");

        log.mockRestore();
    });

    it("test LineString", () => {
        const p1 = new Point([0, 0]);
        const p2 = new Point([1, 1]);
        const p3 = new Point([2, 2]);

        const line = new LineString([p1, p2, p3]);
        const visitor = new LogGeometryVisitor();

        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        line.accept(visitor);

        expect(log).toHaveBeenCalledWith("Je suis une polyligne définie par 3 point(s).");

        log.mockRestore();
    });

    it("test empty LineString", () => {
        const line = new LineString();
        const visitor = new LogGeometryVisitor();

        const log = vi.spyOn(console, "log").mockImplementation(() => {});

        line.accept(visitor);

        expect(log).toHaveBeenCalledWith("Je suis une polyligne vide.");

        log.mockRestore();
    });

});