describe('Registration tests', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Registration Tests', () => {
      cy.contains('Sign up').click()
      cy.get('#signupName').clear().blur();
      cy.contains('Name required').should('be.visible', 'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupName').type('A').blur();
      cy.contains('Name has to be from 2 to 20 characters long').should('be.visible', 'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupName').clear().type('Lorem Ipsum is simply').blur();
      cy.contains('Name has to be from 2 to 20 characters long').should('be.visible', 'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupName').clear().type('Ruslan123').blur();
      cy.contains('Name is invalid').should('be.visible', 'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupName').clear().type('Ruslan').blur();

      cy.get('#signupLastName').clear().blur();
      cy.contains('Last name required').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupLastName').type('K').blur();
      cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible', 'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupLastName').clear().type('Lorem Ipsum is simply').blur();
      cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupLastName').clear().type('Kor123').blur();
      cy.contains('Last name is invalid').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupLastName').clear().type('Kornienko').blur();

      cy.get('#signupEmail').type('invalidEmail').blur();
      cy.contains('Email is incorrect').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupEmail').clear().blur();
      cy.contains('Email required').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupEmail').clear().type('ruslan.kornienko.2013@gmail.com').blur();

      cy.get('#signupPassword').type('123', { sensitive: true }).blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupPassword').clear().blur();
      cy.contains('Password required').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupPassword').type('Qwertypass', { sensitive: true }).blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupPassword').clear().type('Qwerty1', { sensitive: true }).blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupPassword').clear().type('LongPassword1234', { sensitive: true }).blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupPassword').clear().type('QWERTY123', { sensitive: true }).blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupPassword').clear().type('Qwerty123', { sensitive: true });
      cy.get('#signupRepeatPassword').type('Wrong123', { sensitive: true }).blur();
      cy.contains('Passwords do not match').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupRepeatPassword').clear().blur();
      cy.contains('Re-enter password required').should('be.visible',  'have.css', 'border-color', 'rgb(255, 0, 0)');

      cy.get('#signupRepeatPassword').type('Qwerty1', { sensitive: true }).blur();
      cy.get('button.btn-primary').should('be.disabled');

      cy.get('#signupName').should('have.value', 'Ruslan');
      cy.get('#signupLastName').should('have.value', 'Kornienko');
      cy.get('#signupEmail').should('have.value', 'ruslan.kornienko.2013@gmail.com');
      cy.get('#signupPassword').should('have.value', 'Qwerty123', { sensitive: true });
      cy.get('#signupRepeatPassword').should('have.value', 'Qwerty1', { sensitive: true });

      cy.get('#signupRepeatPassword').clear().type('Qwerty123', { sensitive: true }).blur();
      cy.get('#signupRepeatPassword').should('have.value', 'Qwerty123', { sensitive: true });

      cy.get('button.btn-primary').last().should('not.be.disabled').click();

    });

    it('Logs in with valid credentials', () => {
      cy.login('ruslan.kornienko.2013@gmail.com', 'Qwerty123');
    });
  });