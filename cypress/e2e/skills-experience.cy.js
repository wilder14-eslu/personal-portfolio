describe('Experiencia y competencias fieles al CV', () => {
  beforeEach(() => cy.waitForApp());

  it('usa el cargo visible del PDF y los resultados de operaciones', () => {
    cy.get('.experience-card').should('contain', 'Encargado de Almacén').and('contain', 'Mebol');
    cy.get('.experience-results').should('contain', '28%').and('contain', '450').and('contain', '5 horas');
    cy.get('.experience-card').should('not.contain', 'Data Analytics and Business Intelligence');
  });

  it('diferencia experiencia práctica de conocimientos de nube', () => {
    cy.get('.skill-group').should('have.length', 6);
    cy.get('.skill-note').should('contain', 'Databricks: uso práctico').and('contain', 'nociones básicas');
    cy.get('#skills').should('contain', 'Scorecards WoE/IV').and('contain', 'Champion / challenger');
    cy.get('button[aria-label="Switch to English"]').click();
    cy.get('.experience-card').should('contain', 'Warehouse Supervisor');
    cy.get('.skill-note').should('contain', 'Foundational knowledge');
  });
});
