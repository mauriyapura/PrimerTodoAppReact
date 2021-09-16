import React from 'react';
import useForm from '../../hooks/useForm'; 

const TodoAdd = ({ handleAddTodo,  }) => {

    const [{description}, handleInputChange, reset] = useForm({
        description:"",
    }); 

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(description.trim().length <=1){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form className="d-grid gap-2" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="description"
                    className="from-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={description}
                    onChange={ handleInputChange }
                />                        
                <button 
                    className="btn btn-outline-primary mt-1" 
                    type="submit"
                >                            
                    Agregar
                </button>                        
            </form>
        </>
    )
}

export default TodoAdd
