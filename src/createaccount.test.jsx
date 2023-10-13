import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test } from "vitest";
import CreateAccount from "./createaccount";

test("fill fields on the form then submit", async () => {
  const user = userEvent.setup();
  const { getByText, getByTestId } = render(<CreateAccount />);

  //after rendering component
  const name = getByTestId("name");
  const email = getByTestId("email");
  const password = getByTestId("password");
  const button = getByTestId("submit");

  await user.type(name, "mark");
  await user.type(email, "mark@mit.edu");
  await user.type(password, "secret");
  await user.click(button);

  getByTestId("submit-another");
  getByText("Success");
});

// test("fill fields on the form then submit", () => {
//   const { getByText, getByLabelText, getByTestId } = render(<CreateAccount />);

//   //after rendering component
//   const name = getByTestId("name");
//   const email = getByTestId("email");
//   const password = getByTestId("password");
//   const button = getByTestId("submit");

//   fireEvent.change(name, { target: { value: "mark" } });
//   fireEvent.change(email, { target: { value: "mark@mit.edu" } });
//   fireEvent.change(password, { target: { value: "secret" } });
//   fireEvent.click(button);

//   getByTestId("submit-another");
//   getByText("Success");
// });
