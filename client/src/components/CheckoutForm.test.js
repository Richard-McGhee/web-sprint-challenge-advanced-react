import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App'

test("App renders without crashing as well as Checkoutform", () => {
    render(<App />)
    render(<CheckoutForm />)
})

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});

test("form shows success message on submit with form details", () => {});
