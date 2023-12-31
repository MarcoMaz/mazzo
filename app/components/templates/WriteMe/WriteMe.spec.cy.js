import WriteMe from "./WriteMe";

const WRITE_ME_HEADING_SELECTOR = "[data-cy='write-me-heading']";
const WRITE_ME_DIV_SELECTOR = "[data-cy='write-me-cta']";

describe("Headline", () => {
  beforeEach(() => {
    cy.mount(<WriteMe />);
  });

  it("should exists", () => {
    cy.get(WRITE_ME_HEADING_SELECTOR).should("exist");
  });

  it("should have the correct label", () => {
    cy.get(WRITE_ME_HEADING_SELECTOR).should("have.text", "Write me");
  });
});

describe("CTA", () => {
  beforeEach(() => {
    cy.mount(<WriteMe />);
  });

  it("should exists", () => {
    cy.get(WRITE_ME_DIV_SELECTOR).should("exist");
  });

  it("should have the correct label", () => {
    cy.get(WRITE_ME_DIV_SELECTOR).should("have.text", "here");
  });

  it("should have the correct url", () => {
    cy.get(WRITE_ME_DIV_SELECTOR).should(
      "have.attr",
      "href",
      "mailto:mazzai.marco@gmail.com"
    );
  });

  it("should have the ::after animated", () => {
    cy.get(WRITE_ME_DIV_SELECTOR).should(($element) => {
      const pseudoElement = window.getComputedStyle($element[0], "::after");
      const animationName = pseudoElement.getPropertyValue("animation");
      expect(animationName).to.not.be.empty;
    });
  });
});
