

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    cy.contains('Pacuco')
  })
})