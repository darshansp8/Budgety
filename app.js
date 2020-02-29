// Budget Controller
var budgetController = (function (){

})();

// UI Controller
var UIController = (function(){

})();

// App Controller
var dataController = (function(budgetCtrl, UICtrl){
    function addItemCtrl(){
        // To-do 
        /*
            1. Get input field data
            2. Add items to Budget Controller
            3. Add the item to the UI
            4. Calculate the budget
            5. Display the budget
        
        */

        console.log('Hello');
    }
    document.querySelector('.add__btn').addEventListener('click', addItemCtrl);
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            // addItemCtrl();
            console.log('Enter was pressed');
        }
    });
})(budgetController, UIController);