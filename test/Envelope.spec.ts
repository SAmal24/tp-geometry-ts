import { describe, it, expect } from "vitest";
import Envelope from "../src/Envelope";

describe("test Envelope", () => {

    it("test constructor", () => {
        const env = new Envelope(0, 0, 2, 3);

        expect(env.toString()).to.equal("[0,0,2,3]");
    });

});