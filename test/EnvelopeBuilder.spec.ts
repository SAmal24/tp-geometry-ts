import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {

    it("test build", () => {
        const builder = new EnvelopeBuilder();

        builder.insert([0, 1]);
        builder.insert([2, 0]);
        builder.insert([1, 3]);

        const env = builder.build();

        expect(env.toString()).to.equal("[0,0,2,3]");
    });

    it("test build with one point", () => {
        const builder = new EnvelopeBuilder();

        builder.insert([3, 4]);

        const env = builder.build();

        expect(env.toString()).to.equal("[3,4,3,4]");
    });

});