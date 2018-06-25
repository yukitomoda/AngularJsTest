var app = angular.module("myApp", []);

app.controller("myController", [function() {

    this.todoList = [];

    this.addTodo = function(text) {
        this.todoList.push({
            text: text,
            done: false
        });
    }

    this.clearDoneItems = function() {
        //todo.doneがfalseのものだけフィルターする
        this.todoList = this.todoList.filter(function(todo) { return !todo.done; });
    }

}]);
