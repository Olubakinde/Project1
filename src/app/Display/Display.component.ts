import { EzComponent } from "@gsilber/webez";
import html from "./Display.component.html";
import css from "./Display.component.css";
import { Section1Component } from "../section1/section1.component";
import { Section2Component } from "../section2/section2.component";
import { Section3Component } from "../section3/section3.component";

export class DisplayComponent extends EzComponent {
    protected sec1: Section1Component = new Section1Component();
    protected sec2: Section2Component = new Section2Component();
    protected sec3: Section3Component = new Section3Component();
    constructor() {
        super(html, css);
        this.addComponent(this.sec1, "sec1");
        this.addComponent(this.sec2, "sec2");
        this.addComponent(this.sec3, "sec3");
    }
}
