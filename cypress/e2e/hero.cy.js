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

  it('tiene la animación de la red neuronal (canvas)', () => {
    cy.get('#home canvas').should('exist');
  });

  describe('Responsive', () => {
    it('escritorio: texto y animación lado a lado', () => {
      cy.viewportPreset('desktop');
      cy.get('#home').invoke('css', 'flex-direction').should('equal', 'row');
    });

    it('celular: elementos apilados', () => {
      cy.viewportPreset('mobile');
      cy.get('#home').invoke('css', 'flex-direction').should('equal', 'column');
    });
  });
});
