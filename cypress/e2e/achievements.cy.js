describe('Certificaciones y logros', () => {
  beforeEach(() => cy.waitForApp());

  it('muestra las tres certificaciones indicadas en el CV', () => {
    cy.get('.certification-card').should('have.length', 3);
    cy.get('#achievements').should('contain', 'Databricks').and('contain', 'MLOps Specialization').and('contain', 'Stanford');
    cy.get('.language-note').should('contain', 'Español nativo').and('contain', 'Advanced English');
  });

  it('muestra la puntuación actualizada y el reconocimiento por separado', () => {
    cy.get('.award-banner').should('contain', 'Top 54').and('contain', '72.1/100').and('contain', '60,000');
    cy.get('.award-banner').should('not.contain', '71.5');
    cy.get('button[aria-label="Switch to English"]').click();
    cy.get('.award-banner').should('contain', 'Bronze medal').and('contain', '72.1/100');
  });
});
