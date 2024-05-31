import './CadastroEstabelecimento.css';
import './../../Components/Login/Login.css';

export default function CadastroEstabelecimento () {
    return (
        <section className='containerGeral'> 
        <img src="./images/IconEstabelecimento.png" alt="" />
        <p>Cadastro de <span style={{color: "#0154FA"}}> Estabelecimento </span> </p>
        <div className='formulario'>
            <input type="text" placeholder='Nome do Estabelecimento'/>
            <input type="text" placeholder='Endereço do Estabelecimento'/>
            <input type="text" placeholder='Valor do KW/h'/>
            <input type="text" placeholder='Descrição do seu Estabelecimento' className='descricaoEstabelecimento' />
        </div>
        <button className='botaoGenerico'>CONFIRMAR</button>

        </section>
    )
}

