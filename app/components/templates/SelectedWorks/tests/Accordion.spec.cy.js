import SelectedWorks from "../SelectedWorks";

const SELECTED_WORKS_ACCORDION_SELECTOR =
  "[data-cy='selected-works-accordion']";
const SELECTED_WORKS_ACCORDION_HEADER_1_SELECTOR =
  "[data-cy='selected-works-accordion-group-RenatoDoList']";
const SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR =
  "[data-cy='selected-works-accordion-group-Metronome']";
const SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR =
  "[data-cy='selected-works-accordion-group-Picker']";
const SELECTED_WORKS_ACCORDION_PANEL_1_SELECTOR =
  "[data-cy='selected-works-accordion-panel-RenatoDoList']";
const SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR =
  "[data-cy='selected-works-accordion-panel-Metronome']";
const SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR =
  "[data-cy='selected-works-accordion-panel-Picker']";

describe("Accordion", () => {
  beforeEach(() => {
    cy.viewport(1280, 800);
    cy.mount(<SelectedWorks />);
  });

  it("Should display the component for desktop viewport", () => {
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR).should("be.visible");
  });

  it("Should not display the component for mobile viewport", () => {
    cy.viewport("iphone-6");
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR).should("not.be.visible");
  });

  it("should exists", () => {
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR).should("exist");
  });

  it("should have 6 children", () => {
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR)
      .children()
      .should("have.length", 6);
  });

  it("should have 3 accordion headers", () => {
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR)
      .children("h3")
      .should("have.length", 3);
  });

  describe("First accordion header", () => {
    it("should have a child button", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_1_SELECTOR)
        .find("button")
        .should("exist");
    });

    it("should have a grandchild span", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_1_SELECTOR)
        .find("button > span")
        .should("exist");
    });

    it("should have the correct label", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_1_SELECTOR)
        .find("button > span")
        .should("have.text", "RenatoDoList");
    });
  });

  describe("Second accordion header", () => {
    it("should have a child button", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
        .find("button")
        .should("exist");
    });

    it("should have a grandchild span", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
        .find("button > span")
        .should("exist");
    });

    it("should have the correct label", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_2_SELECTOR)
        .find("button > span")
        .should("have.text", "Metronome");
    });
  });

  describe("Third accordion header", () => {
    it("should have a child button", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
        .find("button")
        .should("exist");
    });

    it("should have a grandchild span", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
        .find("button > span")
        .should("exist");
    });

    it("should have the correct label", () => {
      cy.get(SELECTED_WORKS_ACCORDION_HEADER_3_SELECTOR)
        .find("button > span")
        .should("have.text", "Picker");
    });
  });

  it("should have 3 accordion panels", () => {
    cy.get(SELECTED_WORKS_ACCORDION_SELECTOR)
      .children("div")
      .should("have.length", 3);
  });

  describe("First accordion panel", () => {
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

  describe("Second accordion panel", () => {
    it("should have the correct headline", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR)
        .find("h4")
        .should("have.text", "Metronome");
    });

    it("should have the correct subheadline", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR)
        .find("h5")
        .should("have.text", "WebApp");
    });

    it("should have the correct description", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR)
        .find("p")
        .should("have.text", "Something somtehing...");
    });

    it("should have the correct first chip", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR)
        .find("span:nth-child(1)")
        .should("have.text", "JS");
    });

    it("should have the correct second chip", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR)
        .find("span:nth-child(2)")
        .should("have.text", "React");
    });

    it("should have the correct third chip", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR)
        .find("span:nth-child(3)")
        .should("have.text", "HTML");
    });

    describe("CTA", () => {
      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR)
          .find("a")
          .should("have.text", "Check it out");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_2_SELECTOR)
          .find("a")
          .should("have.attr", "href", "#");
      });
    });
  });

  describe("Third accordion panel", () => {
    it("should have the correct headline", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR)
        .find("h4")
        .should("have.text", "Picker");
    });

    it("should have the correct subheadline", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR)
        .find("h5")
        .should("have.text", "Web Component");
    });

    it("should have the correct description", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR)
        .find("p")
        .should("have.text", "LALALALLALALALAalllala.");
    });

    it("should have the correct first chip", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR)
        .find("span:nth-child(1)")
        .should("have.text", "JS");
    });

    it("should have the correct second chip", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR)
        .find("span:nth-child(2)")
        .should("have.text", "React");
    });

    it("should have the correct third chip", () => {
      cy.get(SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR)
        .find("span:nth-child(3)")
        .should("have.text", "HTML");
    });

    describe("CTA", () => {
      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR)
          .find("a")
          .should("have.text", "Check it out");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_ACCORDION_PANEL_3_SELECTOR)
          .find("a")
          .should("have.attr", "href", "#");
      });
    });
  });
});
