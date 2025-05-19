import { Controller,Get } from '@nestjs/common';

@Controller('todolist')
export class TodoController {
    @Get("/query")
    getTodoList() {
        return 'This is the todo list';
    }
}
