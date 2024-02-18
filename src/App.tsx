import './App.css'
import Login from './componenets/login'
import Side from './componenets/side'
function App() {
 

  return (
    <>
    <div className="continer ">
      <div className="row">
        <div className="col-lg-6 ">
          <Side/>
        </div>
        <div className="col-lg-6">
        <Login/>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
