describe('Presentación y diseño adaptable', () => {
  beforeEach(() => cy.waitForApp());

  it('presenta el perfil y los enlaces profesionales', () => {
    cy.get('h1').should('have.length', 1).and('contain', 'Wilder Gilmer Espinoza Luna');
    cy.get('#home').should('contain', 'Estudiante de Estadística');
    cy.get('#home a[download]').should('have.attr', 'href').and('include', '.pdf');
    cy.get('#home a').contains('GitHub').should('have.attr', 'href').and('include', 'github.com');
    cy.get('#home a').contains('LinkedIn').should('have.attr', 'href').and('include', 'linkedin.com');
    cy.get('#publications').should('contain', 'no es una publicación revisada por pares');
  });

  [320, 375, 768, 1024, 1440].forEach((width) => {
    it(`no desborda horizontalmente a ${width}px`, () => {
      cy.viewport(width, 900);
      cy.document().should((doc) => {
        expect(doc.documentElement.scrollWidth).to.be.at.most(width);
      });
      cy.get('h1').should('be.visible');
      cy.get('button[aria-label="Switch to English"]').click();
      cy.document().should((doc) => expect(doc.documentElement.scrollWidth).to.be.at.most(width));
    });
  });

  it('captura escritorio y móvil para revisión visual', () => {
    // Capture the final position instead of an intermediate smooth-scroll frame.
    cy.document().then((doc) => { doc.documentElement.style.scrollBehavior = 'auto'; });
    cy.viewport(1440, 1000);
    cy.screenshot('portfolio-desktop', { capture: 'viewport', overwrite: true });
    cy.get('#projects').then(($section) => $section[0].scrollIntoView({ block: 'start' }));
    cy.screenshot('portfolio-projects', { capture: 'viewport', overwrite: true });
    cy.viewport(375, 900);
    cy.scrollTo('top');
    cy.window().its('scrollY').should('equal', 0);
    cy.screenshot('portfolio-mobile', { capture: 'viewport', overwrite: true });
    cy.screenshot('portfolio-mobile-full', { capture: 'fullPage', overwrite: true });
  });
});
