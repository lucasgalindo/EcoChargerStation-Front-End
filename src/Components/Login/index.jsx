import Logo from "../Logo";
import "./Login.css";

export default function Login (){
    return (
        <>
        <section className="containerLogin">
            <Logo />
            <div className="formularioLogin">
                <h1>Bem-vindo ao <br/>
                <span className="tituloGradient">EcoChargerStation</span></h1>

                <input type="Email" placeholder="Insira seu E-mail"/>
                <input type="Password" placeholder="Insira sua Senha"/>
                <h3>ESQUECI MINHA SENHA!</h3>
            </div>

            <button className="botaoEntrar"> Entrar </button>
            <span className="entrarCom"> Entrar com </span>

            <div className="botoes">
            <button className="botaoEntrarCom"><img src="" alt="Insta" /></button>
            <button className="botaoEntrarCom"><img src="" alt="Google" /></button>
            <button className="botaoEntrarCom"><img src="" alt="Facebook" /></button>
            </div>

            <h4>Ainda não possue uma conta? <span style={{color: "#0047FF"}}>Registrar</span> </h4>

        </section>
        </>
    )
}