import SelectedWorks from "../SelectedWorks";

const SELECTED_WORKS_ACCORDION_SELECTOR =
  "[data-cy='selected-works-accordion']";

const SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR =
  "[data-cy='selected-works-accordion-panel-RenatoDoList']";
const SELECTED_WORKS_ACCORDION_PANEL_1_DOT_SELECTOR = `${SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR} div:nth-child(2)`;
const SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR =
  "[data-cy='selected-works-accordion-panel-Metronome']";
const SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR =
  "[data-cy='selected-works-accordion-panel-Picker']";

const SELECTED_WORKS_ACCORDION_HEADER_1_SELECTOR =
  "[data-cy='selected-works-accordion-group-RenatoDoList']";
const SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR =
  "[data-cy='selected-works-accordion-group-Metronome']";
const SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR =
  "[data-cy='selected-works-accordion-group-Picker']";

describe("Accordion", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.mount(<SelectedWorks />);
  });

  it("should display the component for desktop viewport", () => {
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR).should("be.visible");
  });

  it("should not display the component for mobile viewport", () => {
    cy.viewport("iphone-6");
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR).should("not.be.visible");
  });

  it("should exists", () => {
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR).should("exist");
  });

  it("should have the correct tag", () => {
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR).should(
      "have.prop",
      "tagName",
      "DIV"
    );
  });

  it("should have 3 children", () => {
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR)
      .children()
      .should("have.length", 3);
  });

  describe("First child (AccordionPanel)", () => {
    it("should exists", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR).should("exist");
    });

    it("should have the correct tag", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR).should(
        "have.prop",
        "tagName",
        "DIV"
      );
    });

    it("should do nothing on click", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR).click().should("exist");
    });

    it("should have 2 children", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR)
        .children()
        .should("have.length", 2);
    });

    describe("First child (Description)", () => {
      it("should exists", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR).should("exist");
      });

      it("should have the correct tag", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR).should(
          "have.prop",
          "tagName",
          "DIV"
        );
      });

      it("should have the correct headline", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR)
          .find("h4")
          .should("have.text", "RenatoDoList");
      });

      it("should have the correct subheadline", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR)
          .find("h5")
          .should("have.text", "PWA");
      });

      it("should have the correct description", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR)
          .find("p")
          .should(
            "have.text",
            "Basic metronome with tempo and time signature customisation."
          );
      });

      it("should have the correct first chip", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR)
          .find("span:nth-child(1)")
          .should("have.text", "JS");
      });

      it("should have the correct second chip", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR)
          .find("span:nth-child(2)")
          .should("have.text", "React");
      });

      it("should have the correct third chip", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR)
          .find("span:nth-child(3)")
          .should("have.text", "HTML");
      });

      describe("CTA", () => {
        it("should have the correct label", () => {
          cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR)
            .find("a")
            .should("have.text", "Check it out");
        });

        it("should have the correct url", () => {
          cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR)
            .find("a")
            .should("have.attr", "href", "#");
        });
      });
    });

    describe("Second child (Dot)", () => {
      it("should exists", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_DOT_SELECTOR).should("exist");
      });

      it("should have the correct tag", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_1_DOT_SELECTOR).should(
          "have.prop",
          "tagName",
          "DIV"
        );
      });
    });
  });

  describe("Second child (Accordion Header)", () => {
    it("should exists", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR).should("exist");
    });

    it("should have the correct tag", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR).should(
        "have.prop",
        "tagName",
        "H3"
      );
    });

    it("should open the corresponding panel on click", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR).click();
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR).should("exist");
    });

    it("should have a child button", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
        .find("button")
        .should("exist");
    });

    it("should have two grandchildren", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
        .children()
        .children()
        .should("have.length", 2);
    });

    describe("First child (Description)", () => {
      it("should exists", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
          .find("button > span")
          .should("exist");
      });

      it("should have the correct tag", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
          .find("button > span")
          .should("have.prop", "tagName", "SPAN");
      });

      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
          .find("button > span")
          .should("have.text", "Metronome");
      });
    });

    describe("Second child (Dot)", () => {
      it("should exists", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
          .find("button > div")
          .should("exist");
      });

      it("should have the correct tag", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
          .find("button > div")
          .should("have.prop", "tagName", "DIV");
      });
    });
  });

  describe("Third child (Accordion Header)", () => {
    it("should exists", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR).should("exist");
    });

    it("should have the correct tag", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR).should(
        "have.prop",
        "tagName",
        "H3"
      );
    });

    it("should open the corresponding panel on click", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR).click();
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR).should("exist");
    });

    it("should have a child button", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
        .find("button")
        .should("exist");
    });

    it("should have two grandchildren", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
        .children()
        .children()
        .should("have.length", 2);
    });

    describe("First child (Description)", () => {
      it("should exists", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
          .find("button > span")
          .should("exist");
      });

      it("should have the correct tag", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
          .find("button > span")
          .should("have.prop", "tagName", "SPAN");
      });

      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
          .find("button > span")
          .should("have.text", "Picker");
      });
    });

    describe("Second child (Dot)", () => {
      it("should exists", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
          .find("button > div")
          .should("exist");
      });

      it("should have the correct tag", () => {
        cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
          .find("button > div")
          .should("have.prop", "tagName", "DIV");
      });
    });
  });
});
