import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="Graf4ik yo!" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Graf4ik yo!");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="Graf4ik yo!" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <span> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="Graf4ik yo!" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="Graf4ik yo!" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("Graf4ik yo!");
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="Graf4ik yo!" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("Graf4ik yo!");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="Graf4ik yo!" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});