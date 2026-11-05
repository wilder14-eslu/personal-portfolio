describe('Formación', () => {
  beforeEach(() => cy.waitForApp());

  it('presenta estudios en curso, la beca y el programa internacional', () => {
    cy.get('.education-card').should('have.length', 2);
    cy.get('#education').should('contain', 'Estudios de Estadística').and('contain', 'En curso').and('contain', 'PRONABEC').and('contain', 'GCI World 2026');
    cy.get('#education').should('not.contain', 'Licenciatura');
    cy.get('button[aria-label="Switch to English"]').click();
    cy.get('#education').should('contain', 'Statistics studies').and('contain', 'In progress');
  });

  it('carga las imágenes locales de instituciones y perfil', () => {
    cy.get('img').each(($img) => {
      cy.wrap($img).scrollIntoView().should(($image) => {
        expect($image[0].naturalWidth, $image[0].src).to.be.greaterThan(0);
      });
    });
  });
});
