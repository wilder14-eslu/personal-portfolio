import data from '../../src/constants/data';

const { aboutMe, socialMedia } = data.es;

describe('Pie de página (Contacto)', () => {
  beforeEach(() => {
    cy.waitForApp();
    cy.get('#contactMe', { timeout: 8000 }).scrollIntoView();
  });

  it('muestra el nombre y el titular', () => {
    cy.get('#contactMe').contains('h2', aboutMe.name).should('be.visible');
    cy.get('#contactMe').contains(aboutMe.tagLine).should('be.visible');
  });

  it('muestra la foto de perfil', () => {
    cy.get('#contactMe').find(`img[alt="${aboutMe.name}"]`).should('be.visible');
  });

  it('muestra todas las redes y el teléfono', () => {
    socialMedia.forEach((s) => {
      cy.get('#contactMe').find(`a[href="${s.link}"]`).should('exist');
    });
    cy.get('#contactMe').find('a[href^="tel:"]').should('contain', aboutMe.phone);
  });

  it('no publica el CV en la página', () => {
    cy.get('#contactMe').should('not.contain', 'Currículum');
    cy.get('body').find('a[href*="CV_"]').should('not.exist');
  });

  describe('Responsive', () => {
    it('escritorio: datos y foto lado a lado', () => {
      cy.viewportPreset('desktop');
      cy.get('#contactMe [class*="flex-col-reverse"]').first().invoke('css', 'flex-direction').should('equal', 'row');
    });

    it('celular: apilado', () => {
      cy.viewportPreset('mobile');
      cy.get('#contactMe [class*="flex-col-reverse"]').first().invoke('css', 'flex-direction').should('equal', 'column-reverse');
    });
  });
});
