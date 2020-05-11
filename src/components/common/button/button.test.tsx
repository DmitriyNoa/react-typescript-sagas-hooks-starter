import React from "react";
import { Button } from "./button";
import { mount } from "enzyme";

describe("Button", () => {

    const text = "Click me";
    const onClick = jest.fn();

    it("should render a button", () => {
        const button = mount(<Button text={text} onClick={onClick} />)
        expect(button.find("button").text()).toBe(text);
    });

    it("should call onClick handler function when clicked", () => {
        const button = mount(<Button text={text} onClick={onClick} />)
        button.simulate("click");
        expect(onClick).toHaveBeenCalled();
    });
});