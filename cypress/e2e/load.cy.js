import LoginPage from "../pages/LoginPage";

describe('empty spec', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });
  before(() => {
    //cy.viewport(1440,900)
  });

  beforeEach(() => {
    cy.resetLocalStorage()
    cy.visit(Cypress.env('login_url'))
    cy.url().should('include', 'auth/login')
  });

  it('Login only', ()=> {
    
    LoginPage.userLogin('iamsamantha.millares@gmail.com', '!Canada123')
    LoginPage.verifyElementsAfterLogin()
    //Logoutpage.userLogout()
    //LogoutPage.verifyElementsAfterLogout()

  })



})