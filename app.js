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

    return {
        addItem: function(type, desc, val){
            var newItem, ID;
            
            // Create new ID
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp'
            if(type === 'exp'){
                newItem = new Expense(ID, desc, val);
            }else if(type === 'inc'){
                newItem = new Income(ID, desc, val);
            }

            // Add the newItem to data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
            

        },
        testing: function(){
            console.log(data);
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
        var input, newItem;
        // To-do 
        // 1. Get input field data
        input = UICtrl.getInput();
        console.log(input);
        // 2. Add items to Budget Controller
        newItem =  budgetCtrl.addItem(input.type, input.description, input.value);
        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5. Display the budget
        
    };
    return {
        init: function(){
            setupEventListener();
        }
    }
    
})(budgetController, UIController);

dataController.init();