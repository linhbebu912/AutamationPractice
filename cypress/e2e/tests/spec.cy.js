import { homePagelocators } from "../pageLocators/homePageLocators";
import HomePage from "../pageObjects/HomePage"
import ItemDetailPage from "../pageObjects/ItemDetailPage"

const home = new HomePage();
const itemdetail = new ItemDetailPage();

xdescribe('empty spec', () => {
  
  it('Add multiple products', () => {
    cy.visit('/')
    let i = 0;
    function clickCategory(){
      cy.xpath(homePagelocators.category).then( ()=>{
        home.clickRandomCategory();
        console.log(home.clickRandomProduct());
        //how to get text that is returned in test file
        itemdetail.clickAddToCartButton();
        i++
        if(i<3){
          clickCategory();
        }
        })

        }
      
    
    clickCategory();
    
    // home.clickRandomCategory();
    // home.clickRandomProduct();
    // itemdetail.clickAddToCartButton();
  })
})