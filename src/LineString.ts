import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
    private points: Array<Point>;

    constructor(points: Array<Point> = []) {
        this.points = [...points];
    }

    getType(): string {
        return "LineString";
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point {
        return this.points[n];
    }

    isEmpty(): boolean {
        if (this.points.length == 0) {
            return true;
        }
        return false;
    }

    translate(dx: number, dy: number): void {
        for (let i = 0; i < this.points.length; i++) {
            this.points[i].translate(dx, dy);
        }
    }
    
    clone(): LineString {
        const copie: Point[] = [];

        for (let i = 0; i < this.points.length; i++) {
            copie.push(this.points[i].clone());
        }

        return new LineString(copie);
    }
}