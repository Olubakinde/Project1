import { EzComponent } from "@gsilber/webez";
import html from "./section1.component.html";
import css from "./section1.component.css";

export class Section1Component extends EzComponent {
    constructor() {
        super(html, css);
    }
}
