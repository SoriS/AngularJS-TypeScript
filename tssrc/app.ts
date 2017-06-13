import { module } from 'angular';
import { TodoController } from "./controller"

export let todomvs = module('todomvs', [])
    .controller('todoController', TodoController)
    
