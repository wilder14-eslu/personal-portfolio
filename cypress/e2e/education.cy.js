import data from '../../src/constants/data';

const { educationList } = data.es;

describe('Educación', () => {
  beforeEach(() => {
    cy.waitForApp();
    cy.get('#education', { timeout: 8000 }).scrollIntoView();
  });

  it('muestra el título de la sección', () => {
    cy.get('#education').contains('h2', 'Educación').should('be.visible');
  });

  it('muestra universidad, grado, fechas y logros', () => {
    educationList.forEach((edu) => {
      cy.get('#education').contains('h4', edu.title).should('exist');
      cy.get('#education').contains(edu.degree).should('exist');
      cy.get('#education').contains(edu.duration).should('exist');
      cy.get('#education').contains(edu.content1).should('exist');
      cy.get('#education').contains(edu.content2).should('exist');
    });
  });

  it('muestra la animación del ciclo de ML con sus 6 etapas', () => {
    cy.get('#education').contains('Cómo construyo sistemas de ML').scrollIntoView().should('be.visible');
    ['Datos', 'Entrenamiento', 'Validación', 'Registro', 'Despliegue', 'Monitoreo'].forEach((etapa) => {
      cy.get('#education ol').contains(etapa).should('exist');
    });
    cy.get('#education').contains('El drift dispara el reentrenamiento').should('exist');
  });

  describe('Responsive', () => {
    it('escritorio: animación y tarjeta lado a lado', () => {
      cy.viewportPreset('desktop');
      cy.get('#education [class*="flex-col-reverse"]').first().invoke('css', 'flex-direction').should('equal', 'row');
    });

    it('celular: tarjeta arriba y animación abajo', () => {
      cy.viewportPreset('mobile');
      cy.get('#education [class*="flex-col-reverse"]').first().invoke('css', 'flex-direction').should('equal', 'column-reverse');
    });
  });
});
