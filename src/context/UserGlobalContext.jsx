import React from "react";

export const UserGlobalContext = React.createContext()

export const UserContext = ({children}) => {
  const [auth, setAuth] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const usuario = JSON.parse(window.localStorage.getItem('user'))
    if (usuario) {
      setUser(usuario)
      setAuth(true)
    }
  }, [])

  React.useEffect(() => {
    if (user) {
      window.localStorage.setItem('user', JSON.stringify(user))
    } else {
      window.localStorage.removeItem('user')
    }
  }, [user])


  function entrar (user) {
    setAuth(true)
    setUser(user)
  }

  function sair () {
    setAuth(false)
    setUser(null)
  }

  return (
    <UserGlobalContext.Provider value={{auth, setAuth, user, setUser, entrar, sair}}>
      {children}
    </UserGlobalContext.Provider>
  )
}
