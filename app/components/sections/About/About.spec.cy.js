import About from "./About";

// - Image
// -- Loading
// -- Has an alt attribute
// - Paragraph
// -- should exists
// -- should contain text

describe("Headline", () => {
  beforeEach(() => {
    cy.mount(<About />);
  });

  it("should exists", () => {
    cy.get("h1").should("exist");
  });

  it("should have the correct label", () => {
    cy.get("h1").should("have.text", "Hi!");
  });
});