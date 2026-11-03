export default class Envelope {
    private xMin: number;
    private yMin: number;
    private xMax: number;
    private yMax: number;

    constructor(xMin: number, yMin: number, xMax: number, yMax: number) {
        this.xMin = xMin;
        this.yMin = yMin;
        this.xMax = xMax;
        this.yMax = yMax;
    }

    toString(): string {
        return "[" + this.xMin + "," + this.yMin + "," + this.xMax + "," + this.yMax + "]";
    }
} 