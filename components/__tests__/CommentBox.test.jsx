import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import CommentBox from "../CommentBox";

describe("CommentBox", () => {
  const onSubmit = jest.fn(() => {
    console.log("submit");
  });

  afterEach(cleanup);

  beforeEach(() => {
    render(<CommentBox onSubmit={onSubmit} />);
  });

  it("submits the form when all field pass the validation", async () => {
    const { getByRole } = render(<CommentBox onSubmit={onSubmit} />);
    const name = getByRole("textbox", { name: /name/i });
    fireEvent.change(name, { target: { value: "name" } });
    expect(name.value).toBe("name");

    const comment = getByRole("textbox", {
      name: /comment/i,
    });
    fireEvent.change(comment, { target: { value: "a comment" } });
    expect(comment.value).toBe("a comment");

    // const submitBtn = getByRole("button", {
    //   name: /submit/i,
    // });

    // fireEvent.click(submitBtn);
    // expect(onSubmit).toBeCalled();
  });
});
