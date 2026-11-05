describe('Contacto y currículum', () => {
  beforeEach(() => cy.waitForApp());

  it('ofrece contacto y perfiles profesionales válidos', () => {
    cy.get('#contactMe a[href="mailto:esluwilder@gmail.com"]').should('have.length', 2);
    cy.get('#contactMe a[href="tel:+51910049106"]').should('contain', '+51 910 049 106');
    cy.get('.social-links a').should('have.length', 4);
    cy.get('.social-links a[href="https://www.linkedin.com/in/wilder-eslu/"]').should('contain', 'LinkedIn');
  });

  it('sirve el CV en PDF y comunica su idioma en ambas versiones', () => {
    cy.get('a[download]').should('have.attr', 'href', '/CV_Wilder_Espinoza_ES.pdf').and('have.attr', 'aria-label', 'Descargar CV (PDF · Español)');
    cy.request({ url: '/CV_Wilder_Espinoza_ES.pdf', encoding: 'binary' }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.headers['content-type']).to.include('application/pdf');
      expect(response.body.slice(0, 5)).to.equal('%PDF-');
    });
    cy.get('button[aria-label="Switch to English"]').click();
    cy.get('a[download]').should('have.attr', 'aria-label', 'Download CV (PDF · Spanish)').and('have.attr', 'href', '/CV_Wilder_Espinoza_ES.pdf');
  });
});
