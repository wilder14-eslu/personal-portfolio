describe('Exploración de proyectos', () => {
  beforeEach(() => cy.waitForApp());

  it('muestra los siete proyectos y filtra por temática', () => {
    cy.get('.project-card').should('have.length', 7);
    cy.contains('.project-filters button', 'IA generativa').click();
    cy.get('.project-card').should('have.length', 3);
    cy.get('.project-card').each(($card) => expect($card.attr('data-category')).to.equal('ai'));
    cy.get('[role="status"]').should('contain', '3 proyectos');
    cy.contains('.project-filters button', 'Analítica espacial').click();
    cy.get('.project-card').should('have.length', 1).and('contain', 'GeoBanca');
    cy.contains('.project-filters button', 'Riesgo y ML').click();
    cy.get('.project-card').should('have.length', 3);
    cy.contains('.project-filters button', 'Todos').click();
    cy.get('.project-card').should('have.length', 7);
  });

  it('muestra el método y las limitaciones al abrir los detalles', () => {
    cy.get('#project-riskrag summary').click();
    cy.get('#project-riskrag details').should('have.attr', 'open');
    cy.get('#project-riskrag details').should('contain', 'aún no desplegada');
    cy.get('#project-credit-risk summary').click();
    cy.get('#project-credit-risk details').should('contain', 'p = 0.61');
    cy.get('#project-orchestrate summary').click();
    cy.get('#project-orchestrate details').should('contain', '72.1/100');
  });

  it('el acceso desde el inicio recupera el proyecto aunque esté filtrado', () => {
    cy.contains('.project-filters button', 'IA generativa').click();
    cy.get('#project-credit-risk').should('not.exist');
    cy.get('.case-link').click();
    cy.get('#project-credit-risk').should('exist');
    cy.location('hash').should('equal', '#project-credit-risk');
  });

  it('ofrece demos y repositorios del CV con nombres accesibles', () => {
    cy.get('#project-credit-risk a[href*="streamlit.app"]').should('have.attr', 'aria-label', 'Ver demo: Credit Risk Platform');
    cy.get('#project-geobanca a[href*="github.io"]').should('have.attr', 'aria-label', 'Ver póster: GeoBanca Norte Perú');
    cy.get('a[target="_blank"]').each(($a) => {
      expect($a.attr('rel')).to.include('noopener');
      expect($a.text().trim()).not.to.equal('');
    });
  });
});
