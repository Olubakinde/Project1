import { Click, EzComponent } from "@gsilber/webez";
import html from "./Display.component.html";
import css from "./Display.component.css";
import { StayComponent } from "../Stay/Stay.component";
import { CarComponent } from "../Car/Car.component";

export class DisplayComponent extends EzComponent {
    protected staay: StayComponent = new StayComponent();
    protected caar: CarComponent = new CarComponent();
    constructor() {
        super(html, css);
        this.addComponent(this.staay, "main");
    }

    @Click("Stay")
    stay() {
        this.removeComponent(this.caar);
        this.addComponent(this.staay, "main");
    }

    @Click("Car")
    car() {
        this.removeComponent(this.staay);
        this.addComponent(this.caar, "main");
    }
}
