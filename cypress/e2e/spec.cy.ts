describe('Visit WannaGo page', () => {
  it('Opens WannaGo page', () => {
    cy.visit('http://localhost:3004/')
  })
})

describe('My first test', () => {
  it('Find content "Plan it!"', () => {
    cy.contains('Plan')
  })
})
