import React, {useState, createContext} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [data, setData] = useState([])
  const [auth, setAuth] = useState(false)

  return ( 
    <AuthContext.Provider value={{auth, setAuth, data, setData}}>
      {children}
    </AuthContext.Provider>
   );
}
 
export default AuthProvider;