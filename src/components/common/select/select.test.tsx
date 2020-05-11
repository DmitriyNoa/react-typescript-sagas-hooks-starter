import React from "react";
import { IOption, Select } from "./select";
import { mount } from "enzyme";

describe("Select", () => {
    it("should render a select with options",  () => {
        const options: IOption[] = [
            {
                title: "Test 1",
                value: "111",
            },
            {
                title: "Test 2",
                value: "333",
            },
            {
                title: "Test 3",
                value: "5455",
            }
        ];
        const label = "Awesome select";
        const selected = "333";
        const onChange = jest.fn();
        const select = mount(<Select onChange={onChange} selected={selected} label={label} options={options} />);

        expect(select.find("label").text()).toBe(label);
        expect(select.find("option").length).toBe(options.length);

        select.find("select").simulate("change");
        expect(onChange).toHaveBeenCalled();
    });
});