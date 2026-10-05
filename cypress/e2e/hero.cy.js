import data from '../../src/constants/data';

const { aboutMe } = data.es;

describe('Sección principal (Hero)', () => {
  beforeEach(() => {
    cy.waitForApp();
  });

  it('muestra el saludo en español', () => {
    cy.get('#home').within(() => {
      cy.contains('¡Hola!').should('be.visible');
      cy.contains('Soy').should('be.visible');
    });
  });

  it('muestra el nombre y la presentación', () => {
    cy.get('#home').contains(aboutMe.name).should('be.visible');
    cy.get('#home').contains(aboutMe.intro).should('be.visible');
  });

  it('ya no muestra la animación de la esfera', () => {
    cy.get('#home canvas').should('not.exist');
  });

  describe('Responsive', () => {
    it('escritorio: la presentación usa el ancho disponible', () => {
      cy.viewportPreset('desktop');
      cy.get('#home p').first().invoke('outerWidth').should('be.greaterThan', 700);
    });

    it('celular: la presentación se ve completa', () => {
      cy.viewportPreset('mobile');
      cy.get('#home p').first().should('be.visible');
    });
  });
});
