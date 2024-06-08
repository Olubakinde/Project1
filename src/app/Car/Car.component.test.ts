import { describe, expect, test, beforeAll } from "@jest/globals";
import { CarComponent } from "./Car.component";
import { bootstrap } from "@gsilber/webez";

describe("CarComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<CarComponent>(CarComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(CarComponent);
        });
    });
});
