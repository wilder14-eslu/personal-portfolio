describe('Navegación accesible', () => {
  beforeEach(() => cy.waitForApp());

  it('navega con enlaces reales y vuelve al inicio', () => {
    ['projects', 'skills', 'education', 'contactMe'].forEach((id) => {
      cy.get(`nav a[href="#${id}"]`).click();
      cy.location('hash').should('equal', `#${id}`);
      cy.get(`#${id}`).should(($section) => {
        const section = $section[0];
        const doc = section.ownerDocument;
        const win = doc.defaultView;
        const rect = section.getBoundingClientRect();
        const scrollPadding = parseFloat(win.getComputedStyle(doc.documentElement).scrollPaddingTop);
        // A short footer reaches the end of the document before it can align at the top.
        const maxScroll = doc.documentElement.scrollHeight - win.innerHeight;
        const targetScroll = Math.min(maxScroll, Math.max(0, rect.top + win.scrollY - scrollPadding));
        expect(win.scrollY, `scroll to ${id}`).to.be.closeTo(targetScroll, 2);
        expect(rect.top, `${id} below the sticky header`).to.be.at.least(doc.querySelector('header').getBoundingClientRect().bottom - 1);
        expect(rect.top, `${id} in view`).to.be.lessThan(win.innerHeight);
      });
    });
    cy.get('nav a[href="#home"]').click();
    cy.get('h1').isInViewport();
  });

  it('cambia el idioma, actualiza metadatos y recuerda la elección', () => {
    cy.get('button[aria-label="Switch to English"]').click();
    cy.get('html').should('have.attr', 'lang', 'en');
    cy.get('h1').should('contain', 'better decisions');
    cy.title().should('contain', 'Credit Risk');
    cy.reload();
    cy.get('html').should('have.attr', 'lang', 'en');
    cy.visit('/');
    cy.get('html').should('have.attr', 'lang', 'en');
    cy.get('button[aria-label="Cambiar a español"]').click();
    cy.get('html').should('have.attr', 'lang', 'es');
    cy.get('h1').should('contain', 'mejores decisiones');
  });

  it('abre y cierra el menú móvil con Escape y al navegar', () => {
    cy.viewportPreset('mobile');
    cy.get('#navigation-links').should('not.be.visible');
    cy.get('button[aria-label="Abrir menú"]').click().should('have.attr', 'aria-expanded', 'true');
    cy.get('#navigation-links').should('be.visible');
    cy.get('button[aria-label="Cerrar menú"]').trigger('keydown', { key: 'Escape' });
    cy.get('button[aria-label="Abrir menú"]').should('be.focused');
    cy.get('#navigation-links').should('not.be.visible');
    cy.get('button[aria-label="Abrir menú"]').click();
    cy.get('#navigation-links a[href="#projects"]').click();
    cy.get('#navigation-links').should('not.be.visible');
    cy.location('hash').should('equal', '#projects');
  });

  it('ofrece un acceso directo al contenido para teclado', () => {
    cy.get('.skip-link').focus().should('be.visible').click();
    cy.get('main').should('be.focused');
  });
});
