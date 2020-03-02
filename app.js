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
            

        }
    };
})();

// UI Controller
var UIController = (function(){
    
    var DOMStrings = {
        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }

    return {
        getInput: function(){
            return{
                type: document.querySelector(DOMStrings.inputType).value, // inc or exp
                description: document.querySelector(DOMStrings.inputDesc).value, // inc/exp description
                value: document.querySelector(DOMStrings.inputValue).value // amount earned/spent
            };
        }, 

        addListItem: function(obj, type){
            var html, newhtml, element;

            // Create HTML tags 
            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }else if(type === 'exp'){
                element = DOMStrings.expensesContainer; 
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            //Replace the placeholders with actual values
            newhtml = html.replace('%id%',obj.id);
            newhtml = newhtml.replace('%description%', obj.description);
            newhtml = newhtml.replace('%value%', obj.value);

            //Insert HTML in DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newhtml); 


        },

        clearFields: function(){
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDesc + ', ' + DOMStrings.inputValue);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, aray){
                current.value = '';
            });
            fieldsArr[0].focus();
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
        // console.log(input);

        // 2. Add items to Budget Controller
        newItem =  budgetCtrl.addItem(input.type, input.description, input.value);
        
        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type); 

        // 4. Clear Input Fields
        UICtrl.clearFields();


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