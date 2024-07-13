import styles from './CriarForm.module.css'
import Input from '../FormC/Input'
import Select from '../FormC/Select'
import Submit from '../FormC/Submit'

function CriarForm() {
    return (
        <form className={styles.form}>
            <div>
<Input type="text" text="Seu nome" name="name" placeholder="Insira o seu nome" />
            </div>
            <div>
<Input type="email" text="Seu email" name="email" placeholder="Insira seu email" />
            </div>
            <div>
<Input type="text" text="Seu espaço" name="name" placeholder="Insira o nome do seu espaço" />

            </div>
            <div>
           <Select name="category_id" text="Selecione a categoria" />
            </div>
            <div>
                <Submit text="Criar Conta" />
            </div>
        </form>
    )
}

export default CriarForm