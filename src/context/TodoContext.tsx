import * as React from "react";
import {TodoContextType, Itodo} from "../models/Itodo";
import {useEffect} from "react";

export const TodoContext = React.createContext<TodoContextType | null>( null);

interface Props {
    children: React.ReactNode
}
const TodoProvider : React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = React.useState<Itodo[] | any>()

    useEffect(() => {
        setTodos([{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },])
    },[])
    const  saveTodo = (todo:Itodo) => {

    };
      const updateTodo = (id:number) => {

    }

    return <TodoContext.Provider value={{todos,saveTodo,updateTodo}}>{children}</TodoContext.Provider>
}

export default TodoProvider;