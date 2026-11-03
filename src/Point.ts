import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
    private coordinate: Coordinate;

    constructor(coordinate: Coordinate = []) {
        this.coordinate = coordinate;
    }

    getCoordinate(): Coordinate {
        return this.coordinate;
    }

    x(): number {
        if (this.coordinate.length == 0) {
            return Number.NaN;
        }
        return this.coordinate[0];
    }

    y(): number {
        if (this.coordinate.length == 0) {
            return Number.NaN;
        }
        return this.coordinate[1];
    }

    getType(): string {
        return "Point";
    }

    isEmpty(): boolean {
        if (this.coordinate.length == 0) {
            return true;
        }
        return false;
    }
    
    translate(dx: number, dy: number): void {
        if (!this.isEmpty()) {
            this.coordinate[0] = this.coordinate[0] + dx;
            this.coordinate[1] = this.coordinate[1] + dy;
        }
    }
}