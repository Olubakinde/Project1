import { describe, expect, test, beforeAll } from "@jest/globals";
import { Section2Component } from "./section2.component";
import { bootstrap } from "@gsilber/webez";

describe("Section2Component", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<Section2Component>(Section2Component, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(Section2Component);
        });
    });
});
