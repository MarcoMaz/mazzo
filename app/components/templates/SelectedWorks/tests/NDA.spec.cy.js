import SelectedWorks from "../SelectedWorks";

const SELECTED_WORKS_NDA_HEADING_SELECTOR =
  "[data-cy='selected-works-nda-heading']";
const SELECTED_WORKS_NDA_IMAGES_SELECTOR =
  "[data-cy='selected-works-nda-images']";

describe("NDA", () => {
  describe("Headline", () => {
    beforeEach(() => {
      cy.mount(<SelectedWorks />);
    });

    it("should exists", () => {
      cy.get(SELECTED_WORKS_NDA_HEADING_SELECTOR).should("exist");
    });

    it("should have the correct label", () => {
      cy.get(SELECTED_WORKS_NDA_HEADING_SELECTOR).should(
        "have.text",
        "Nda work:"
      );
    });
  });

  describe("Images", () => {
    beforeEach(() => {
      cy.mount(<SelectedWorks />);
    });

    it("should exist", () => {
      cy.get(SELECTED_WORKS_NDA_IMAGES_SELECTOR).should("exist");
    });

    it("should have 3 children images", () => {
      cy.get(SELECTED_WORKS_NDA_IMAGES_SELECTOR)
        .children("img")
        .should("have.length", 3);
    });

    describe("First Image", () => {
      it("should be Bosch", () => {
        cy.get(SELECTED_WORKS_NDA_IMAGES_SELECTOR)
          .find(":first-child")
          .should("have.attr", "data-cy", "/assets/images/bosch-logo.png");
      });
    });

    describe("Second Image", () => {
      it("should be Mercedes", () => {
        cy.get(SELECTED_WORKS_NDA_IMAGES_SELECTOR)
          .find(":nth-child(2)")
          .should("have.attr", "data-cy", "/assets/images/mercedes-logo.png");
      });
    });

    describe("Third Image", () => {
      it("should be Olymp", () => {
        cy.get(SELECTED_WORKS_NDA_IMAGES_SELECTOR)
          .find(":nth-child(3)")
          .should("have.attr", "data-cy", "/assets/images/olymp-logo.png");
      });
    });
  });
});
