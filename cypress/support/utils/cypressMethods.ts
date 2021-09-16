class CypressMethods {

    public access(url: string) {
       return cy.visit(url)
    }
 
    public getElement(element: string) {
       return cy.get(element)
    }
 
    public setTextElement(element: string, value: string) {
       cy.get(element).type(value)
    }
 
    public clickfirstElementButton(element: string) {
       cy.get(element).first().click()
    }
 
    public haveText(element: string, text: string) {
       cy.get(element).should('have.text', text)
    }

 
    public enter(element: string) {
       cy.get(element).type('{enter}')
    }
 }
 const cypressMethods = new CypressMethods()
 export default cypressMethods
 
