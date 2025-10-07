describe('Header tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should check social icons exist', () => {
    cy.get('.socials_icon').should('exist')
  })

  it('Should check contacts links exist', () => {
    cy.get('.contacts_link').should('exist')
  })
})