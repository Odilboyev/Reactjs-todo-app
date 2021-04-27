import React, { useState } from 'react';
import PropTypes, { func } from "prop-types";

function useInputValue(defaultvalue = ''){
    const [value, setValue] = useState(defaultvalue);

    return {
        bind:{
        value,
        onChange: e => setValue(e.target.value)
        },
        clear: () => setValue(' '),
        value: () => value
    }
}
function AddTodo({onCreate}) {
  const input = useInputValue('')

  function submitHandler(e) {
      e.preventDefault()

      if(input.value().trim()){
        onCreate(input.value())
        // setValue('')
        input.clear()
      }
  }
    return (
        <form onSubmit={submitHandler}>
                <input type="text" {...input.bind} />
                <button>Add A Todo</button>
            </form>
    );

}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}
export default AddTodo;