describe('Consola del navegador', () => {
  it('carga e interactúa sin errores de consola', () => {
    const errors = [];
    cy.visit('/?lng=es', { onBeforeLoad(win) {
      const original = win.console.error.bind(win.console);
      win.console.error = (...args) => { errors.push(args.join(' ')); original(...args); };
    }});
    cy.get('#research').should('exist');
    cy.contains('.project-filters button', 'IA generativa').click();
    cy.get('button[aria-label="Switch to English"]').click();
    cy.then(() => expect(errors, 'console.error').to.deep.equal([]));
  });
});
