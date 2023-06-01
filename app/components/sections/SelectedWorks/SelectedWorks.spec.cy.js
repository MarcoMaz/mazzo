import SelectedWorks from "./SelectedWorks";

const SELECTED_WORKS_HEADING_SELECTOR = "[data-cy='selected-works-heading']";
const SELECTED_WORKS_NDA_HEADING_SELECTOR =
  "[data-cy='selected-works-nda-heading']";
const SELECTED_WORKS_KNOW_MORE_HEADING_SELECTOR =
  "[data-cy='selected-works-know-more-heading']";
const SELECTED_WORKS_LINKS_SELECTOR = "[data-cy='selected-works-links']";

describe("Headline", () => {
  beforeEach(() => {
    cy.mount(<SelectedWorks />);
  });

  it("should exists", () => {
    cy.get(SELECTED_WORKS_HEADING_SELECTOR).should("exist");
  });

  it("should have the correct label", () => {
    cy.get(SELECTED_WORKS_HEADING_SELECTOR).should(
      "have.text",
      "Selected works"
    );
  });
});

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
});

describe("Know more", () => {
  beforeEach(() => {
    cy.mount(<SelectedWorks />);
  });

  describe("Headline", () => {
    it("should exists", () => {
      cy.get(SELECTED_WORKS_KNOW_MORE_HEADING_SELECTOR).should("exist");
    });

    it("should have the correct label", () => {
      cy.get(SELECTED_WORKS_KNOW_MORE_HEADING_SELECTOR).should(
        "have.text",
        "Know more:"
      );
    });
  });

  describe("Links", () => {
    it("should exist", () => {
      cy.get(SELECTED_WORKS_LINKS_SELECTOR).should("exist");
    });

    it("should have the correct label", () => {
      cy.get(SELECTED_WORKS_LINKS_SELECTOR).should(
        "have.text",
        "Github or Linkedin"
      );
    });

    describe("Github", () => {
      it("should exist", () => {
        cy.get(SELECTED_WORKS_LINKS_SELECTOR).find("a").first().should("exist");
      });

      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_LINKS_SELECTOR)
          .find("a")
          .first()
          .should("have.text", "Github");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_LINKS_SELECTOR)
          .find("a")
          .first()
          .should("have.attr", "href", "https://github.com/marcomaz");
      });
    });

    describe("Linkedin", () => {
      it("should exist", () => {
        cy.get(SELECTED_WORKS_LINKS_SELECTOR).find("a").eq(1).should("exist");
      });

      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_LINKS_SELECTOR)
          .find("a")
          .eq(1)
          .should("have.text", "Linkedin");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_LINKS_SELECTOR)
          .find("a")
          .eq(1)
          .should(
            "have.attr",
            "href",
            "https://www.linkedin.com/in/marcomazzai/"
          );
      });
    });
  });
});
