import { describe, expect, test, beforeAll } from "@jest/globals";
import { Section3Component } from "./section3.component";
import { bootstrap } from "@gsilber/webez";

describe("Section3Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Section3Component>(Section3Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Section3Component);
        });
    });
});
