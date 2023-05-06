import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Saludo(){
    return <div>
        
        <h1>este es un componente</h1>
        <p>Lorem 123</p>
    </div>
}

root.render(<div>
    <Saludo/>
    <Saludo/>
    <Saludo/>
    <Saludo/>
</div>)


