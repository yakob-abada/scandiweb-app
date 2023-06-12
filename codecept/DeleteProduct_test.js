Feature('Delete all Products');

Scenario('Check all the Products checkboxes and delete products', ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.delete-checkbox');
    I.executeScript(function(){
        checkboxes = document.getElementsByClassName('delete-checkbox');
        for (let i=0; i<checkboxes.length;i++){
            checkboxes[i].click();
        }
    });
    I.click("MASS DELETE");
    I.wait(2);
});

Scenario('Check any existing products', ({ I }) => {
    I.amOnPage('/');
    I.waitForInvisible('.delete-checkbox');
});
