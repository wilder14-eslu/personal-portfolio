import data from '../../src/constants/data';

const { projects } = data.es;

describe('Proyectos', () => {
  beforeEach(() => {
    cy.waitForApp();
    cy.get('#projects', { timeout: 8000 }).scrollIntoView();
  });

  it('muestra el título de la sección', () => {
    cy.get('#projects').contains('h1', 'Proyectos').should('be.visible');
  });

  it('muestra una tarjeta por proyecto', () => {
    cy.get('#projects .project-card').should('have.length', projects.length);
  });

  it('cada tarjeta muestra título, tecnologías, descripción y enlace', () => {
    cy.get('#projects .project-card').each(($card, index) => {
      const project = projects[index];
      cy.wrap($card).contains('h1', project.title).should('exist');
      cy.wrap($card).contains('Tecnologías').should('exist');
      cy.wrap($card).contains(project.content).should('exist');
      if (project.github) {
        cy.wrap($card).find(`a[href="${project.github}"]`).should('exist');
      }
      if (project.devpost) {
        cy.wrap($card).find(`a[href="${project.devpost}"]`).should('exist');
      }
    });
  });

  it('no muestra enlaces a demos', () => {
    cy.get('#projects').find('a[href*="streamlit.app"], a[href*="run.app"]').should('not.exist');
  });

  it('el carrusel avanza con el botón siguiente', () => {
    cy.viewportPreset('desktop');
    cy.get('#projects .overflow-x-auto').invoke('scrollLeft').should('equal', 0);
    cy.get('#projects button[aria-label="Proyecto siguiente"]').click({ force: true });
    cy.get('#projects .overflow-x-auto').invoke('scrollLeft').should('be.greaterThan', 0);
  });

  describe('Responsive', () => {
    it('celular: tarjetas angostas', () => {
      cy.viewportPreset('mobile');
      cy.get('#projects .project-card').first().invoke('outerWidth').should('be.lessThan', 400);
    });

    it('escritorio: tarjetas anchas', () => {
      cy.viewportPreset('desktop');
      cy.get('#projects .project-card').first().invoke('outerWidth').should('be.greaterThan', 400);
    });
  });
});
