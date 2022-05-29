import React, {useState, createContext} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [data, setData] = useState(false)

  return ( 
    <AuthContext.Provider value={{ data, setData}}>
      {children}
    </AuthContext.Provider>
   );
}
 
export default AuthProvider;