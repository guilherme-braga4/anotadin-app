import React, {useState, createContext} from 'react'

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const authenticatedId = localStorage.getItem("@AnotadinApp User_Id")
  const authenticatedNome = localStorage.getItem("@AnotadinApp User_Nome")
  const authenticatedEmail = localStorage.getItem("@AnotadinApp User_Email")
  const authenticatedTelefone= localStorage.getItem("@AnotadinApp User_Telefone")

  const [data, setData] = useState({
    id: authenticatedId, 
    nome: authenticatedNome, 
    email: authenticatedEmail, 
    telefone: authenticatedTelefone
  })
  
  console.log("data AuthContext", data)
  const [auth, setAuth] = useState(false)
  const [rendimentos, setRendimentos] = useState(false)

  
  return ( 
    <AuthContext.Provider value={{auth, setAuth, data, setData, rendimentos, setRendimentos}}>
      {children}
    </AuthContext.Provider>
   );
}
 
export default AuthProvider;