import SelectedWorks from "../SelectedWorks";

const SELECTED_WORKS_CARDS_SELECTOR = "[data-cy='selected-works-cards']";
const SELECTED_WORKS_CARD_1_SELECTOR = "[data-cy='RenatoDoList']";
const SELECTED_WORKS_CARD_2_SELECTOR = "[data-cy='Metronome']";
const SELECTED_WORKS_CARD_3_SELECTOR = "[data-cy='Picker']";
const SELECTED_WORKS_DOTS_SELECTOR = "[data-cy='Dots']";

describe("Cards", () => {
  beforeEach(() => {
    cy.viewport(300, 800);
    cy.mount(<SelectedWorks />);
  });

  it("Should display the component for mobile viewport", () => {
    cy.get(SELECTED_WORKS_CARDS_SELECTOR).should("be.visible");
  });

  it("Should not display the component for desktop viewport", () => {
    cy.viewport(1200, 800);
    cy.get(SELECTED_WORKS_CARDS_SELECTOR).should("not.be.visible");
  });

  it("should exists", () => {
    cy.get(SELECTED_WORKS_CARDS_SELECTOR).should("exist");
  });

  it("should have 3 div children", () => {
    cy.get(SELECTED_WORKS_CARDS_SELECTOR)
      .children("div")
      .should("have.length", 3);
  });

  describe("First Card", () => {
    it("should have the correct headline", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find("h3")
        .should("have.text", "RenatoDoList");
    });

    it("should have the correct subheadline", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find("h4")
        .should("have.text", "PWA");
    });

    it("should have the correct description", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find("p")
        .should(
          "have.text",
          "Basic metronome with tempo and time signature customisation."
        );
    });

    it("should have the correct first chip", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find("span:nth-child(1)")
        .should("have.text", "JS");
    });

    it("should have the correct second chip", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find("span:nth-child(2)")
        .should("have.text", "React");
    });

    it("should have the correct third chip", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find("span:nth-child(3)")
        .should("have.text", "HTML");
    });

    describe("CTA", () => {
      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
          .find("a")
          .should("have.text", "Check it out");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
          .find("a")
          .should("have.attr", "href", "#");
      });
    });
  });

  describe("Second Card", () => {
    it("should have the correct headline", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find("h3")
        .should("have.text", "Metronome");
    });

    it("should have the correct subheadline", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find("h4")
        .should("have.text", "WebApp");
    });

    it("should have the correct description", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find("p")
        .should("have.text", "Something somtehing...");
    });

    it("should have the correct first chip", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find("span:nth-child(1)")
        .should("have.text", "JS");
    });

    it("should have the correct second chip", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find("span:nth-child(2)")
        .should("have.text", "React");
    });

    it("should have the correct third chip", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find("span:nth-child(3)")
        .should("have.text", "HTML");
    });

    describe("CTA", () => {
      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
          .find("a")
          .should("have.text", "Check it out");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
          .find("a")
          .should("have.attr", "href", "#");
      });
    });
  });

  describe("Third Card", () => {
    it("should have the correct headline", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find("h3")
        .should("have.text", "Picker");
    });

    it("should have the correct subheadline", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find("h4")
        .should("have.text", "Web Component");
    });

    it("should have the correct description", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find("p")
        .should("have.text", "LALALALLALALALAalllala.");
    });

    it("should have the correct first chip", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find("span:nth-child(1)")
        .should("have.text", "JS");
    });

    it("should have the correct second chip", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find("span:nth-child(2)")
        .should("have.text", "React");
    });

    it("should have the correct third chip", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find("span:nth-child(3)")
        .should("have.text", "HTML");
    });

    describe("CTA", () => {
      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
          .find("a")
          .should("have.text", "Check it out");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
          .find("a")
          .should("have.attr", "href", "#");
      });
    });
  });

  describe("Dots", () => {
    it("should exists", () => {
      cy.get(SELECTED_WORKS_DOTS_SELECTOR).should("exist");
    });

    it("should have 4 div children", () => {
      cy.get(SELECTED_WORKS_DOTS_SELECTOR)
        .children("div")
        .should("have.length", 3);
    });
  });
});
