// Budget Controller
var budgetController = (function (){

    var Expense = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    };

    var Income = function(id, description, value){
        this.id = id,
        this.description = description,
        this.value = value
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0,
        }
    };
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
    var setupEventListener = function(){
        var DOM = UICtrl.getDOMStrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', addItemCtrl);
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13){
                addItemCtrl();
            }
        });

    };
    
    
    var addItemCtrl = function(){
        // To-do 

        // 1. Get input field data
        var input = UICtrl.getInput();
        console.log(input);
        // 2. Add items to Budget Controller
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget
        
    };
    return {
        init: function(){
            console.log('App has started');
            setupEventListener();
        }
    }
    
})(budgetController, UIController);

dataController.init();