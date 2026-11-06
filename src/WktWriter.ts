import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";

export default class WktWriter {

    write(geometry: Geometry): string {

        if (geometry instanceof Point) {
            if (geometry.isEmpty()) {
                return "POINT EMPTY";
            }

            return "POINT(" + geometry.x() + " " + geometry.y() + ")";
        }

        else if (geometry instanceof LineString) {
            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY";
            }

            let result = "LINESTRING(";

            for (let i = 0; i < geometry.getNumPoints(); i++) {
                const p = geometry.getPointN(i);

                if (i > 0) {
                    result = result + ",";
                }

                result = result + p.x() + " " + p.y();
            }

            return result + ")";
        }

        else {
            throw new TypeError("geometry type not supported");
        }
    }
}