
import LoginForm from "./LoginForm"

function HomePage() {


    return (
      <>
       
       <div className="container">
            <div className="left-content">
                <img src="../public/X-Logo.png" alt="X" />
            </div>
            <div className="right-content">
                <h1>Lo que está 
                 <br />   pasando ahora</h1>
                <p>Únete Hoy</p>
                <LoginForm />
            </div>
        </div>
      </>
    )
  }
  
  export default HomePage
  