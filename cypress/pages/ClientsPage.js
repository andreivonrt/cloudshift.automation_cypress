class ClientsPage {
    //element call section
    elements = {
        clientCard: () => cy.get('div:nth-of-type(1) > .mantine-Paper-root.mantine-v03pca'),
        clientCardCount: () => cy.get(':nth-child(1) > .mantine-Paper-root > .mantine-Title-root'),
        clientPageCount: () => cy.get('.mantine-ic2q2b')

    }

    checkClientCard = () => {
        
        this.elements.clientCard().should('be.visible')
        cy.waitUntil(()=> {return this.elements.clientCardCount().should('not.be.empty')})

        let count1;
        this.elements.clientCardCount().invoke('text').then((value) => {
            cy.log("Client Count: ", value). then(()=> {
                count1 = value;
                return count1;  
            }) 
        }).as("count1")


        this.elements.clientCard().click()
        cy.url().should('include', '/client')
        cy.wait(2000)
        let count2;
        this.elements.clientPageCount().invoke('text').then((value) => {
            cy.log("Client Count: ", value). then(()=> {
                count2 = value;
                return count2.substring(7);  
            }) 
        }).as("count2")
        cy.get('@count1').then((count1) => {
            cy.get('@count2').then((count2) =>{
                expect(count2).to.equal(count1)
            })
        })           
        
    }
    
}

module.exports = new ClientsPage();