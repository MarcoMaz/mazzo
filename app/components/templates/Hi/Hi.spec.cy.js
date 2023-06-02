import Hi from "./Hi";

const HI_HEADING_SELECTOR = "[data-cy='hi-heading']";
const HI_IMAGE_SELECTOR = "[data-cy='hi-image']";
const HI_PARAGRAPH_GROUP_SELECTOR = '[data-cy="hi-paragraph-group"]';

describe("Headline", () => {
  beforeEach(() => {
    cy.mount(<Hi />);
  });

  it("should exists", () => {
    cy.get(HI_HEADING_SELECTOR).should("exist");
  });

  it("should have the correct label", () => {
    cy.get(HI_HEADING_SELECTOR).should("have.text", "Hi!");
  });
});

describe("Image", () => {
  beforeEach(() => {
    cy.mount(<Hi />);
  });

  it("should exists", () => {
    cy.get(HI_IMAGE_SELECTOR).should("exist");
  });

  it("should have the correct alt text", () => {
    cy.get(HI_IMAGE_SELECTOR).should(
      "have.attr",
      "alt",
      "Picture of Marco Mazzai"
    );
  });
});

describe("Paragraph Group", () => {
  beforeEach(() => {
    cy.mount(<Hi />);
  });

  it("should exists", () => {
    cy.get(HI_PARAGRAPH_GROUP_SELECTOR).should("exist");
  });

  it("should contain two children", () => {
    cy.get(HI_PARAGRAPH_GROUP_SELECTOR).children("p").should("have.length", 2);
  });

  describe("First paragraph", () => {
    it("should have the correct text", () => {
      cy.get(HI_PARAGRAPH_GROUP_SELECTOR)
        .find("p:first-child")
        .should(
          "contain",
          "I'm Marco, a certified Accessibility and Front End Developer."
        );
      cy.get(HI_PARAGRAPH_GROUP_SELECTOR)
        .find("p:first-child")
        .within(() => {
          cy.get("span").each((span) => {
            cy.wrap(span).invoke("removeAttr", "data-cy");
            cy.wrap(span).invoke("text", "");
          });
        });
      cy.get(HI_PARAGRAPH_GROUP_SELECTOR)
        .find("p:first-child")
        .should("contain", "I'm Marco, a  and .");
    });
  });

  describe("Second paragraph", () => {
    it("should have the correct text", () => {
      cy.get(HI_PARAGRAPH_GROUP_SELECTOR)
        .find("p")
        .eq(1)
        .should(
          "contain",
          "I specialize in creating beautiful accessible web products and system designs for clients worldwide."
        );

      cy.get(HI_PARAGRAPH_GROUP_SELECTOR)
        .find("p")
        .eq(1)
        .within(() => {
          cy.get("span").each((span) => {
            cy.wrap(span).invoke("removeAttr", "data-cy");
            cy.wrap(span).invoke("text", "");
          });
        });

      cy.get(HI_PARAGRAPH_GROUP_SELECTOR)
        .find("p")
        .eq(1)
        .should(
          "contain",
          "I specialize in creating  and  for clients worldwide."
        );
    });
  });
});
