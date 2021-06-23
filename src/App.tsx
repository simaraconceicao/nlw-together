import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room'

import {AuthContextProvider } from './hooks/AuthContext'


function App() {
  return (
   <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/new' component={NewRoom} />
        <Route path='/rooms/:id' component={Room} />
      </Switch>  
    </AuthContextProvider>
       
   </BrowserRouter>
  );
}

export default App;
