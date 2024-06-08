import { describe, expect, test, beforeAll } from "@jest/globals";
import { InimageComponent } from "./inimage.component";
import { bootstrap } from "@gsilber/webez";

describe("InimageComponent", () => {
    let component: any = undefined;
    beforeAll(() => {
        const html: string = `<div>Testing Environment</div><div id='main-target'></div>`;
        component = bootstrap<InimageComponent>(InimageComponent, html);
    });
    describe("Constructor", () => {
        test("Create Instance", () => {
            expect(component).toBeInstanceOf(InimageComponent);
        });
    });
});
