"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models/models");
var TodoController = (function () {
    function TodoController() {
        this.text = "";
        this.todos = [];
    }
    TodoController.prototype.addTask = function () {
        var newTodo = this.text.trim();
        if (!newTodo.length) {
            return;
        }
        this.todos.push(new models_1.TodoItem(newTodo, false));
        this.text = '';
    };
    return TodoController;
}());
exports.TodoController = TodoController;
//# sourceMappingURL=controller.js.map