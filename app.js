// Budget Controller
var budgetController = (function (){

})();

// UI Controller
var UIController = (function(){
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function(){
            return{
                type: document.querySelector(DOMStrings.inputType).value, // inc or exp
                description: document.querySelector(DOMStrings.inputDesc).value, // inc/exp description
                value: document.querySelector(DOMStrings.inputValue).value // amount earned/spent
            };
        }, 
        getDOMStrings: function(){
            return DOMStrings;
        }
    };
})();

// App Controller
var dataController = (function(budgetCtrl, UICtrl){
    
    var DOM = UICtrl.getDOMStrings();
    
    function addItemCtrl(){
        // To-do 

        // 1. Get input field data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add items to Budget Controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget
        
    }
    document.querySelector(DOM.inputBtn).addEventListener('click', addItemCtrl);
    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13 || event.which === 13){
            addItemCtrl();
        }
    });
})(budgetController, UIController);