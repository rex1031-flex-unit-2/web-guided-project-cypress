// write tests here
describe("Quotes app", () => {
  // here go our tests
  beforeEach(() => {
    // arbitrary code you want running before tests start
    cy.visit("http://localhost:1234");
  });
  // here go our tests
  it("sanity test to make sure tests work", () => {
    // false positive
    expect(1 + 2).to.equal(3);
    expect(2 + 2).to.equal(5);
  });
});
