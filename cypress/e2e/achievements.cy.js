import data from '../../src/constants/data';

const { achievements } = data.es;

describe('Certificaciones', () => {
  beforeEach(() => {
    cy.waitForApp();
    cy.get('#achievements', { timeout: 8000 }).scrollIntoView();
  });

  it('muestra el título de la sección', () => {
    cy.get('#achievements').contains('h1', 'Certificaciones').should('exist');
  });

  it('muestra una tarjeta por cada certificación del CV', () => {
    cy.get('#achievements .grid').children().should('have.length', achievements.length);
  });

  it('cada tarjeta muestra nombre, institución y lo que aprendí', () => {
    cy.get('#achievements .grid').children().each(($card, index) => {
      const item = achievements[index];
      cy.wrap($card).contains(item.event).should('exist');
      cy.wrap($card).contains(item.position).should('exist');
      cy.wrap($card).contains(item.content1).should('exist');
    });
  });

  it('no muestra certificaciones que no están en el CV', () => {
    cy.get('#achievements').should('not.contain', 'Marketing Digital');
    cy.get('#achievements').should('not.contain', 'Certificado UNMSM');
  });

  it('las certificaciones con enlace muestran el link al certificado', () => {
    const conLink = achievements.filter((a) => a.project);
    cy.get('#achievements a[href*="drive.google.com"]').should('have.length', conLink.length);
  });

  describe('Responsive', () => {
    it('celular: una columna', () => {
      cy.viewportPreset('mobile');
      cy.get('#achievements .grid').invoke('css', 'grid-template-columns').then((cols) => {
        expect(cols.split(' ').length).to.equal(1);
      });
    });

    it('escritorio: varias columnas', () => {
      cy.viewportPreset('desktop');
      cy.get('#achievements .grid').invoke('css', 'grid-template-columns').then((cols) => {
        expect(cols.split(' ').length).to.be.at.least(2);
      });
    });
  });
});
