import data from '../../src/constants/data';

const { skills, experiences } = data.es;

describe('Habilidades y Experiencia', () => {
  beforeEach(() => {
    cy.waitForApp();
    cy.get('#skills', { timeout: 8000 }).scrollIntoView();
  });

  it('muestra el título de la sección', () => {
    cy.get('#skills').contains('h1', 'Habilidades y Experiencia').should('be.visible');
  });

  it('muestra todas las categorías de habilidades', () => {
    skills.forEach((skill) => {
      cy.get('#skills').contains('h4', skill.title).should('exist');
    });
  });

  it('muestra todas las habilidades de cada categoría', () => {
    skills.forEach((skill) => {
      skill.items.forEach((item) => {
        cy.get('#skills').contains('p', item.name).should('exist');
      });
    });
  });

  it('muestra cada experiencia con su cargo, fecha y logros', () => {
    experiences.forEach((exp) => {
      cy.get('#skills').contains('h4', exp.organisation).should('exist');
      exp.positions.forEach((pos) => {
        cy.get('#skills').contains('h3', pos.title).should('exist');
        cy.get('#skills').contains('time', pos.duration).should('exist');
        cy.get('#skills').contains(pos.content[0].text).should('exist');
      });
    });
  });

  it('ya no muestra el cargo de Fundador y CEO', () => {
    cy.get('#skills').should('not.contain', 'Fundador y CEO');
    cy.get('#skills').should('not.contain', 'RealML');
  });

  describe('Responsive', () => {
    it('escritorio: habilidades y experiencia lado a lado', () => {
      cy.viewportPreset('desktop');
      cy.get('#skills > div').first().invoke('css', 'flex-direction').should('equal', 'row');
    });

    it('celular: apilado', () => {
      cy.viewportPreset('mobile');
      cy.get('#skills > div').first().invoke('css', 'flex-direction').should('equal', 'column');
    });
  });
});
