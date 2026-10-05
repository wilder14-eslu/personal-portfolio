import data from '../../src/constants/data';

const { navLinks } = data.es;

describe('Navegación', () => {
  beforeEach(() => {
    cy.waitForApp();
  });

  describe('Escritorio', () => {
    beforeEach(() => {
      cy.viewportPreset('desktop');
    });

    it('muestra todos los enlaces del navbar en español', () => {
      navLinks.forEach((nav) => {
        cy.get('nav').contains(nav.title).should('be.visible');
      });
    });

    it('cada enlace lleva a su sección', () => {
      navLinks.forEach((nav) => {
        cy.scrollTo(0, 0);
        cy.get('nav').contains(nav.title).click({ force: true });
        cy.get(`#${nav.id}`, { timeout: 5000 }).should('exist');
        cy.get(`#${nav.id}`).scrollIntoView();
        cy.get(`#${nav.id}`).isInViewport();
      });
    });

    it('el logo lleva a #home', () => {
      cy.get('nav a[href="#home"]').click();
      cy.get('#home').find('h1').first().isInViewport();
    });

    it('el botón de idioma cambia la página a inglés', () => {
      cy.get('nav').contains('button', 'EN').click();
      cy.get('nav').contains('Projects').should('be.visible');
      cy.get('#projects').contains('h1', 'Projects').should('exist');
    });
  });

  describe('Celular', () => {
    beforeEach(() => {
      cy.viewportPreset('mobile');
    });

    it('oculta los enlaces y muestra el menú hamburguesa', () => {
      cy.get('nav ul.list-none').first().should('not.be.visible');
      cy.get('img[alt="menu"]').should('be.visible');
    });

    it('el menú hamburguesa muestra los enlaces', () => {
      cy.get('img[alt="menu"]').click();
      cy.get('.sidebar').should('be.visible');
      navLinks.forEach((nav) => {
        cy.get('.sidebar').contains('a', nav.title).should('be.visible');
      });
    });

    it('un enlace del menú lleva a Proyectos', () => {
      cy.get('img[alt="menu"]').click();
      cy.get('.sidebar').contains('a', 'Proyectos').click();
      cy.get('#projects', { timeout: 3000 }).should('be.visible');
    });
  });
});
