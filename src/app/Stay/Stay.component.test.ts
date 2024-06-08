import { describe, expect, test, beforeAll } from "@jest/globals";
import { StayComponent } from "./Stay.component";
import { bootstrap } from "@gsilber/webez";

describe("StayComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<StayComponent>(StayComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(StayComponent);
        });
    });
});
