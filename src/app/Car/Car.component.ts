import { EzComponent } from "@gsilber/webez";
import html from "./Car.component.html";
import css from "./Car.component.css";

export class CarComponent extends EzComponent {
    constructor() {
        super(html, css);
    }
}
