class TeamPage {
    //element call section
    elements = {
        teamCard: () => cy.get('div:nth-of-type(3) > .mantine-Paper-root.mantine-v03pca'),
        teamCardCount: () => cy.get('div:nth-of-type(3) > .mantine-Paper-root.mantine-v03pca > .mantine-1krktmh.mantine-Title-root'),
        teamPageCount: () => cy.get('.mantine-ic2q2b')

    }

    checkTeamCard = () => {
        
        this.elements.teamCard().should('be.visible')
        cy.waitUntil(()=> {return this.elements.teamCardCount().should('not.be.empty')})

        let count1;
        this.elements.teamCardCount().invoke('text').then((value) => {
            cy.log("Client Count: ", value). then(()=> {
                count1 = value;
                return count1;  
            }) 
        }).as("count1")
        
        this.elements.teamCard().click()
        cy.url().should('include', '/team')
        cy.wait(2000)
        let count2;
        this.elements.teamPageCount().invoke('text').then((value) => {
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

module.exports = new TeamPage();