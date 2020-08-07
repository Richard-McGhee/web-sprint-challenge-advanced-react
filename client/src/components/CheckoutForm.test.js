import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import App from '../App'

test("App renders without crashing as well as Checkoutform", () => {
    render(<App />)
    render(<CheckoutForm />)
})

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    expect(getByText(/checkout form/i)).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    const { getByLabelText, getByRole, getByTestId } = render(<CheckoutForm />)
    const fnameInput = getByLabelText(/first name/i)
    const submitButton = getByRole("button")
    // expect(fnameInput).toBeInTheDocument()
    // expect(submitButton).toBeInTheDocument()

    fireEvent.change(fnameInput, {target: {value: "A name to test"}})
    expect(fnameInput.value).toBe("A name to test")
    fireEvent.click(submitButton)

    
    expect(await waitFor(() => {
        const successMessage = getByTestId("successMessage")
        return successMessage
    })).toBeInTheDocument()
});
