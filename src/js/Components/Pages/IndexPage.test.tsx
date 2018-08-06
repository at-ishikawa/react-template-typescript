import * as React from "react";
import { shallow } from "enzyme";
import IndexPage from "./IndexPage";

describe("IndexPage", () => {
  it("render", () => {
    const location = {
      pathname: "/path"
    };
    const actual = shallow(<IndexPage location={location} />);
    expect(actual.find(".counter").text()).toBe("0");
  });
});
