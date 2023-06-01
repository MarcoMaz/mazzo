import SelectedWorks from "./SelectedWorks";

const SELECTED_WORKS_HEADING_SELECTOR = "[data-cy='selected-works-heading']";

describe("Headline", () => {
  beforeEach(() => {
    cy.mount(<SelectedWorks />);
  });

  it("should exists", () => {
    cy.get(SELECTED_WORKS_HEADING_SELECTOR).should("exist");
  });

  it("should have the correct label", () => {
    cy.get(SELECTED_WORKS_HEADING_SELECTOR).should("have.text", "Selected works");
  });
});
