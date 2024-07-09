<!-- steps to implement context -->

1. Create context component (context/TaskContext.jsx)

2. Wrap the <App /> in main.jsx with TaskContext

3. in TaskContext.jsx we will get props.children, return the props.children from TaskContext.jsx

4. in order to create context use
   export const taskcontext(contextname) = createContext(null). out of the function

5. Wrap the props.children with taskcontext.Provider and provide the value attribute, value={yourvalue}
   <taskcontext.Provider value={[x,usex]}>
   {props.children}
   </taskcontext.Provider>

6.In order to use the context value in any component
import useContext and taskcontext(exported context) and save in the varibale to use it
const [x,usex] = useContext(taskcontext)
