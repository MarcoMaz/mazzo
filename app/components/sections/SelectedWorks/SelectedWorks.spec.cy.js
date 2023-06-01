import SelectedWorks from "./SelectedWorks";

const SELECTED_WORKS_HEADING_SELECTOR = "[data-cy='selected-works-heading']";
const SELECTED_WORKS_CARDS_SELECTOR = "[data-cy='selected-works-cards']";

const SELECTED_WORKS_CARD_1_SELECTOR = "[data-cy='RenatoDoList']";
const SELECTED_WORKS_CARD_2_SELECTOR = "[data-cy='Metronome']";
const SELECTED_WORKS_CARD_3_SELECTOR = "[data-cy='Picker']";

const SELECTED_WORKS_NDA_HEADING_SELECTOR =
  "[data-cy='selected-works-nda-heading']";
const SELECTED_WORKS_NDA_IMAGES_SELECTOR =
  "[data-cy='selected-works-nda-images']";
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

describe("Cards", () => {
  beforeEach(() => {
    cy.mount(<SelectedWorks />);
  });

  it("should exists", () => {
    cy.get(SELECTED_WORKS_CARDS_SELECTOR).should("exist");
  });

  it("should have 3 div cards", () => {
    cy.get(SELECTED_WORKS_CARDS_SELECTOR)
      .children("div")
      .should("have.length", 3);
  });

  describe("First Card", () => {
    it("should have the correct headline", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find(":first-child")
        .should("have.text", "RenatoDoList");
    });

    it("should have the correct subheadline", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find(":nth-child(2)")
        .should("have.text", "PWA");
    });

    it("should have the correct description", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find(":nth-child(3)")
        .should(
          "have.text",
          "Basic metronome with tempo and time signature customisation."
        );
    });

    it("should have the correct first chip", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find(":nth-child(4)")
        .should("have.text", "JS");
    });

    it("should have the correct second chip", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find(":nth-child(5)")
        .should("have.text", "React");
    });

    it("should have the correct third chip", () => {
      cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
        .find(":nth-child(6)")
        .should("have.text", "HTML");
    });

    describe("CTA", () => {
      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
          .find(":nth-child(7)")
          .should("have.text", "Check it out");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_CARD_1_SELECTOR)
          .find(":nth-child(7)")
          .should("have.attr", "href", "#");
      });
    });
  });

  describe("Second Card", () => {
    it("should have the correct headline", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find(":first-child")
        .should("have.text", "Metronome");
    });

    it("should have the correct subheadline", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find(":nth-child(2)")
        .should("have.text", "WebApp");
    });

    it("should have the correct description", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find(":nth-child(3)")
        .should("have.text", "Something somtehing...");
    });

    it("should have the correct first chip", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find(":nth-child(4)")
        .should("have.text", "JS");
    });

    it("should have the correct second chip", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find(":nth-child(5)")
        .should("have.text", "React");
    });

    it("should have the correct third chip", () => {
      cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
        .find(":nth-child(6)")
        .should("have.text", "HTML");
    });

    describe("CTA", () => {
      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
          .find(":nth-child(7)")
          .should("have.text", "Check it out");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_CARD_2_SELECTOR)
          .find(":nth-child(7)")
          .should("have.attr", "href", "#");
      });
    });
  });

  describe("Third Card", () => {
    it("should have the correct headline", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find(":first-child")
        .should("have.text", "Picker");
    });

    it("should have the correct subheadline", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find(":nth-child(2)")
        .should("have.text", "Web Component");
    });

    it("should have the correct description", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find(":nth-child(3)")
        .should("have.text", "LALALALLALALALAalllala.");
    });

    it("should have the correct first chip", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find(":nth-child(4)")
        .should("have.text", "JS");
    });

    it("should have the correct second chip", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find(":nth-child(5)")
        .should("have.text", "React");
    });

    it("should have the correct third chip", () => {
      cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
        .find(":nth-child(6)")
        .should("have.text", "HTML");
    });

    describe("CTA", () => {
      it("should have the correct label", () => {
        cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
          .find(":nth-child(7)")
          .should("have.text", "Check it out");
      });

      it("should have the correct url", () => {
        cy.get(SELECTED_WORKS_CARD_3_SELECTOR)
          .find(":nth-child(7)")
          .should("have.attr", "href", "#");
      });
    });
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
