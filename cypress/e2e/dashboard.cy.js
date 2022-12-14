import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ClientsPage from "../pages/ClientsPage";
import ProcessPage from "../pages/ProcessPage";
import TeamPage from "../pages/TeamPage";

require("cypress-wait-until")

describe('Dashboard UAT Test Suite', () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });

  before(() => {
    //cy.viewport(1440,900)
  });

  beforeEach(() => {
    cy.log("Executing login as before hook.")
    cy.resetLocalStorage()
    cy.visit(Cypress.env('login_url'))
    cy.url().should('include', 'auth/login')
    LoginPage.userLogin('iamsamantha.millares@gmail.com', '!Canada123')
    LoginPage.verifyElementsAfterLogin()
  });

  it('Dashboard - Able to view language options', ()=> {
    DashboardPage.openLanguageOption()
    DashboardPage.elements.selectEnglish().should('be.visible')
    DashboardPage.elements.selectFrench().should('be.visible')
  })

  it('Dashboard - Select French as preferred language', ()=> {
    DashboardPage.openLanguageOption()
    DashboardPage.selectFrench()
  })

  it('Dashboard - Select English as preferred language', ()=> {
    DashboardPage.openLanguageOption()
    DashboardPage.selectEnglish()
  })

  it('Dashboard - Able to View number of Clients', ()=> {
    ClientsPage.checkClientCard()
  })

  it('Dashboard - Able to View number of Processes', ()=> {
    ProcessPage.checkProcessCard()
  })

  it('Dashboard - Able to View number of Teams', ()=> {
    TeamPage.checkTeamCard()
  })



})