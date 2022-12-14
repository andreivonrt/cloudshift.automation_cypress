class ProcessPage {
    //element call section
    elements = {
        processCard: () => cy.get('div:nth-of-type(2) > .mantine-Paper-root.mantine-v03pca'),
        processCardCount: () => cy.get('div:nth-of-type(2) > .mantine-Paper-root.mantine-v03pca > .mantine-1krktmh.mantine-Title-root'),
        processPageCount: () => cy.get('.mantine-ic2q2b')

    }

    checkProcessCard = () => {
        this.elements.processCard().should('be.visible')
        cy.waitUntil(()=> {return this.elements.processCardCount().should('not.be.empty')})
          
        let count1;
        this.elements.processCardCount().invoke('text').then((value) => {
            cy.log("Client Count: ", value). then(()=> {
                count1 = value;
                return count1;  
            }) 
        }).as("count1")
        
        this.elements.processCard().click()
        cy.url().should('include', '/process')
        
        cy.intercept('https://django-cloudrun-m4loxicpgq-pd.a.run.app/process/index/?page=1').as('process')
            .wait('@process')
        let count2;
        this.elements.processPageCount().invoke('text').then((value) => {
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

module.exports = new ProcessPage();