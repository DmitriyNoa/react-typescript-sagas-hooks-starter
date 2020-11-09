import React from "react";
import { mount } from "enzyme";
import { Character } from "./character";


describe("Pocket", ()=> {

    it('should render a pocket with currency code if no pocket name provided', () => {

        const pocketWrapper = mount(<Character pocket={{}} />);

        expect(pocketWrapper.find('[data-testid="pocketName"]').text()).toBe('test');
    });
})
