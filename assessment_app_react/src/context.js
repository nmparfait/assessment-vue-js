import React from 'react'

const TodosContext = React.createContext({
    todos: [
        {
            id:1, text: "tomar cafe da manha", complete: false
        },
        {
            id:2, text: "lavar a louça", complete: false
        },
        {
            id:3, text: "escovar dentes", complete: true
        },
        {
            id:4, text: "cozinhar o frango", complete: false
        },
        {
            id:5, text: "estudar vues js", complete: false
        },
        {
            id:6, text: "assistir o jogo", complete: true
        },
        {
            id:7, text: "cortar o cabel", complete: false
        },
        {
            id:8, text: "lavar o carro", complete: true
        },
    ],
    currentTodo: {}
})

export default TodosContext
