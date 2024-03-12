import { useState } from 'react'
import PropTypes from 'prop-types';
const Lista = () => {

    const divStyle = {
        width: "500px"
    };

    const [tareas, setTareas] = useState([]);
    const [newTarea, setNewTarea] = useState('');
    const [tareasMarcadas, setTareasMarcadas] = useState([]);

    const handleTareaChange = (event) => {
        setNewTarea(event.target.value);
    };

    const handleAddTarea = () => {
        if (newTarea.trim().length < 1) {
          alert("Ingrese un valor");
        } else {
          setTareas([...tareas, newTarea.trim()]);
          setNewTarea('');
        }
      };

    const toggleTareaMarcada = (index) => {
        const nuevasTareasMarcadas = [...tareasMarcadas];
        nuevasTareasMarcadas[index] = !nuevasTareasMarcadas[index];
        setTareasMarcadas(nuevasTareasMarcadas);
    };

    const handleDeleteTarea = () => {
        setTareas(tareas.filter((_, index) => !tareasMarcadas[index]));
    }
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='contenedor d-flex align-items-center justify-content-center mx-auto mt-3' style={divStyle}>
                    <input
                        type="text"
                        className="form-control"
                        value={newTarea}
                        onChange={handleTareaChange}
                    />
                    <input
                        type="submit"
                        value="Add"
                        className="btn btn-primary m-2"
                        onClick={handleAddTarea}
                    />
                </div>
            </form>
            <div className='mx-auto' style={{ display: 'flex', flexWrap: 'wrap', marginTop: '5px', width: '700px' }}>
                {tareas.map((tarea, index) => (
                    <div className='container d-flex align-items-center justify-content-between' key={index} style={{ marginBottom: '5px' }}>
                        <label style={{ textDecoration: tareasMarcadas[index] ? 'line-through' : 'none' }}>
                        <h2>{tarea}</h2>
                        </label>
                        <div className='d-flex'>
                            <input className='d-flex' type="checkbox" style={{ width: '24px', marginRight: '70px' }} checked={tareasMarcadas[index]} onChange={() => toggleTareaMarcada(index)} />
                            <button  onClick={handleDeleteTarea} className='btn btn-primary'>Eliminar</button>
                        </div>
                        
                    </div>
                ))}
            </div>

        </div>
    )
};

Lista.propTypes = {
    tareas: PropTypes.string,
    nuevaTarea: PropTypes.string,
    tareasMarcadas: PropTypes.bool
  };
  
export default Lista