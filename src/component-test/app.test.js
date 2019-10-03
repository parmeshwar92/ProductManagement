import React from "react";
import ReactDOM from "react-dom";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter } from "react-router";
import App from "./../app";
import JSONBASEDTABLE from "./../jsonbasedtable";
import NotFound from "./../notfound";

configure({ adapter: new Adapter() });

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("should show jsontable component for '/' routing", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(component.find(JSONBASEDTABLE)).toHaveLength(1);
  });
  it("should show not found component when not found route", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/unknown"]}>
        <App />
      </MemoryRouter>
    );
    expect(component.find(NotFound)).toHaveLength(1);
  });
});
