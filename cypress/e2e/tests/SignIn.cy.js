import { homePagelocators } from "../pageLocators/homePageLocators";
import { signInPageLocators } from "../pageLocators/signInPageLocators";
import HomePage from "../pageObjects/HomePage"
import SignIn from "../pageObjects/SignInPage"

const home = new HomePage();
const signin = new SignIn();
describe.only('Sign in', () => {
  beforeEach(()=>{
    cy.visit('/')
    home.clickSignInButton();
  })
  it('Sign up with wrongly formatted email', () => {
    
    //fill in wrong email
    signin.fillInEmail('linh');
    signin.getErrorMessage().then(($message)=>{
      cy.wrap($message).should('be.visible')
      // expect($message).to.have.attr('style','display:none')
    })
    
  
  })
  it('Sign up with correct email', () => {
   
    //fill in wrong email
    signin.fillInEmail('linhnt2@gmail.com');
    cy.wait(6000)
    signin.getHeading().then(($el)=>{
      
      cy.wrap($el.text()).should('be.eq','Create an account')

    })
    signin.fillInPersonalInformation();
    cy.wait(6000)
    signin.getHeading().then(($el)=>{
      
      cy.wrap($el.text()).should('be.eq','My account')

    })
  })
  it('Sign in with wrong email and password', () => {
   
    //fill in wrong email
    signin.signIn('linhnguyen.912@gmail.com', '12345')
    signin.getErrorMessage2().then(($message)=>{
      cy.wrap($message).should('be.visible').and('contain','Authentication failed.')
      
    })
  })
  // it('Sign in with correct email and password', () => {
   
  //   //fill in wrong email
  //   signin.signIn('linhnt2.lqa@gmail.com', 'Kimthu10@')
  //   signin.getErrorMessage2().then(($message)=>{
  //     cy.wrap($message).should('be.visible').and('contain','Authentication failed.')
      
  //   })
  // })
})