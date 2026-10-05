// ***********************************************
// Comandos personalizados para las pruebas E2E
// ***********************************************

/**
 * Abre la página en español (idioma por defecto) y espera a que termine
 * la pantalla de carga (1200 ms): el navbar debe ser visible.
 */
Cypress.Commands.add('waitForApp', (lng = 'es') => {
  cy.visit(`/?lng=${lng}`);
  cy.get('nav', { timeout: 15000 }).should('be.visible');
});

/**
 * Verifica que el elemento esté dentro del viewport.
 */
Cypress.Commands.add('isInViewport', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).should(($el) => {
    const rect = $el[0].getBoundingClientRect();
    const vw = Cypress.config('viewportWidth');
    const vh = Cypress.config('viewportHeight');
    expect(rect.top).to.be.within(-rect.height, vh + 1);
    expect(rect.bottom).to.be.within(-1, vh + rect.height + 1);
    expect(rect.left).to.be.within(-rect.width, vw + 1);
    expect(rect.right).to.be.within(-1, vw + rect.width + 1);
  });
});

/**
 * Tamaños de pantalla para pruebas responsive.
 * Uso: cy.viewportPreset('mobile')
 */
const VIEWPORT_PRESETS = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 720 },
};

Cypress.Commands.add('viewportPreset', (name) => {
  const preset = VIEWPORT_PRESETS[name];
  if (preset) {
    cy.viewport(preset.width, preset.height);
  }
});
