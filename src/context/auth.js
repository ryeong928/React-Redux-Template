import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null)

// 공유할 데이터(context)를 AuthContext.Provider 컴포넌트의 value props로 전달
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const login = user => {setUser(user)}
  const logout = () => {setUser(null)}

  return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>
}

// useContext를 통해 사용할 context를 지명하여 AuthContext.Provider가 제공하는 context에 접근
export const useAuth = () => {
  return useContext(AuthContext)
}