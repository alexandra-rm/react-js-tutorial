import React from "react";
import renderer from "react-test-renderer";
import { Select } from "./Select";

describe("Select", () => {
  it("renders Select with two options", () => {
    expect(
      renderer.create(<Select options={["X", "Y"]} />).toJSON()
    ).toMatchSnapshot();
  });
});
