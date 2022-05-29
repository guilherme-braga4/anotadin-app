import React, {useState, createContext} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(false)
  const [data, setData] = useState(false)

  console.log("auth AuthContext", auth)

  return ( 
    <AuthContext.Provider value={{auth, setAuth, data, setData}}>
      {children}
    </AuthContext.Provider>
   );
}
 
export default AuthProvider;