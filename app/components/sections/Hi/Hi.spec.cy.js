import Hi from "./Hi";

// - Image
// -- Has an alt attribute
// - Paragraph
// -- should exists
// -- should contain text

describe("Headline", () => {
  beforeEach(() => {
    cy.mount(<Hi />);
  });

  it("should exists", () => {
    cy.get("h1").should("exist");
  });

  it("should have the correct label", () => {
    cy.get("h1").should("have.text", "Hi!");
  });
});

describe("Image", () => {
  beforeEach(() => {
    cy.mount(<Hi />);
  });

  it("should exists", () => {
    cy.get("img").should("exist");
  });

  it("should have the correct alt text", () => {
    cy.get("img").should("have.attr", "alt", "Picture of Marco Mazzai");
  });
});
