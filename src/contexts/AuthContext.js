import React, {useState, createContext} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const authenticatedId = localStorage.getItem("@AnotadinApp User_Id")

  const [data, setData] = useState({id: authenticatedId})
  const [auth, setAuth] = useState(false)
  const [rendimentos, setRendimentos] = useState(false)

  
  return ( 
    <AuthContext.Provider value={{auth, setAuth, data, setData, rendimentos, setRendimentos}}>
      {children}
    </AuthContext.Provider>
   );
}
 
export default AuthProvider;