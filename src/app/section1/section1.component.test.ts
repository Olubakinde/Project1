import { describe, expect, test, beforeAll } from "@jest/globals";
import { Section1Component } from "./section1.component";
import { bootstrap } from "@gsilber/webez";

describe("Section1Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Section1Component>(Section1Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Section1Component);
        });
    });
});
