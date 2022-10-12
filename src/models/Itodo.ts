export interface Itodo {
    id:number,
    userId:number,
    title:string,
    completed:boolean
}

export type TodoContextType = {
    todos : Itodo[];
    saveTodo: (todo:Itodo) => void
    updateTodo: (id:number) => void
}