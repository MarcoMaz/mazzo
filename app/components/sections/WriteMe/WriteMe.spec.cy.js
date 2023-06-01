import WriteMe from "./WriteMe";

const WRITE_ME_HEADING_SELECTOR =  "[data-cy='write-me-heading']";
const WRITE_ME_DIV_SELECTOR =  "[data-cy='write-me-div']";

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

describe("Div", () => {
  beforeEach(() => {
    cy.mount(<WriteMe />);
  });

  it("should exists", () => {
    cy.get(WRITE_ME_DIV_SELECTOR).should("exist");
  });

  it("should have the correct label", () => {
    cy.get(WRITE_ME_DIV_SELECTOR).should("have.text", "here");
  });
});
