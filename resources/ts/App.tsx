import React from "react";
import TodoList from './components/templates/TodoList';

const App: React.FC = () => {
    return (
        <div style={{ margin: "2em"}}>
            <TodoList />
        </div>
    )
};

export default App;
