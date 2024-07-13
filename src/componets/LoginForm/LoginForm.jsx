import {useState, useEffect} from 'react'

import styles from '../CriarForm/CriarForm.module.css'
import InputL from '../FormL/Input'
import Submit from '../FormC/Submit'

function LoginForm() {
const [login, criar] = useState ([])
       
useState (() => {
        fetch("http://localhost:5000/login",{
                method: "GET",
                headers: {
                    'content-Type':'aplication/json'
                },
            }
            )
        
        
            .then((resp) => resp.json())
            .then((data) => {
                login(data)
            })
            .catch((err) => console.log(err))
        
    
}, [])

 return(
    <form className={styles.form} >
        <div>
<InputL type="email" text="Seu email" name="email" placeholder="insira seu email" />
        </div>
        <div>
<InputL type="password" text="Sua senha" name="password" placeholder="insira sua senha" 
options = {categories}
/>  
        </div>
        <div>
        <Submit text="Fazer login" />
        </div>
    </form>
 )
}

export default LoginForm