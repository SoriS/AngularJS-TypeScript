import { TodoItem } from "./models/models";

export class TodoController {


    text: string = ""
    todos: TodoItem[] = [];


    addTask(): void {
      
        var newTodo: string = this.text.trim()
        if (!newTodo.length) {
            return;
        }

        this.todos.push(new TodoItem(newTodo, false))
        this.text = '';

    }


}


