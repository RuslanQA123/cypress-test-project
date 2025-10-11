Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');
    cy.contains('Sign In').click();
    cy.get('input[name=email]').type(email),
    cy.get('input[name=password]').type(password, { sensitive: true }),
    cy.get('.form-check-input.ng-untouched.ng-pristine.ng-valid').click();
    cy.get('button.btn-primary').last().click();
  });

  Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })