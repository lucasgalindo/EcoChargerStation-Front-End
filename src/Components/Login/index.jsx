import { useReducer } from "react";
import Logo from "../Logo";
import "./Login.css";
import LoginController from "../../reducer/login";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login (){
    const navigation = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""})
    const [state, dispatch] = useReducer(LoginController);
    const [loading, setLoading] = useState(false);
    function VerificarCredenciais(){
        dispatch({type: "login", payload:{
            email: credentials.email,
            password: credentials.password}});    
        setLoading(true)
    }
    useEffect(()=>{
        if(state){
            navigation("/Sobre")
        }
    }, [loading])

    return (
        <>
        <section className="containerGeral">
            <Logo />
            <div className="formulario">
                <h1>Bem-vindo ao <br/>
                <span className="tituloGradient">EcoChargerStation</span></h1>

                <input onChange={({target})=>{setCredentials({...credentials, email: target.value})}} type="Email" placeholder="Insira seu E-mail"/>
                <input onChange={({target})=>{setCredentials({...credentials, password: target.value})}} type="Password" placeholder="Insira sua Senha"/>
                <h3>ESQUECI MINHA SENHA!</h3>
            </div>

            <button className="botaoGenerico" onClick={VerificarCredenciais}> Entrar </button>
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