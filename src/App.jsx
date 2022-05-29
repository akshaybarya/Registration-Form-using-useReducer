import React, { useReducer } from 'react';

const initialState = { 
  name: '',
  email: '',
  password: '', 
  tnc: false
};

const reducer = (state, action) => {
    
  switch(action.type) {
      case 'HANDLE INPUT TEXT': 
        return { 
          ...state,
          [ action.field ] : action.payload
        }; 
      case 'TOGGLE TNC': 
        return { 
          ...state,
          tnc: !state.tnc
        }; 
      default: 
        return state;
  }
}

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const handleTextChange = (e) => {
      dispatch({
         type : 'HANDLE INPUT TEXT',
         field : e.target.name,
         payload : e.target.value 
      });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  }

  return (
      <form onSubmit={onSubmit}>
         <label>
            Enter Name:

            <input type='text'
             name='name'
             placeholder='Enter Name' 
             value={state.name} 
             onChange={handleTextChange} 
            />
         </label>
       
         <label>
            Enter Email:

            <input type='email'
             name='email' 
             placeholder='Enter Email'
             value={state.email} 
             onChange={handleTextChange} 
            />
         </label> 
       
         <label>
            Enter Password:

            <input type='password'
             name='password'
             placeholder='Enter Password' 
             value={state.password} 
             onChange={handleTextChange} 
            />
         </label>
       
         <label>
             Terms & Conditions:

             <input type='checkbox'
             name='tnc' 
             aria-label='Terms & Condition'
             checked={state.tnc}
             onChange={() => dispatch({ type: 'TOGGLE TNC' })}
             />
         </label>

         <input type="submit" value="Submit" aria-label='submit'></input>
      </form>       
  ) 
}

export default App;