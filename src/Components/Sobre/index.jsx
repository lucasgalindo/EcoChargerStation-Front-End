import Logo from '../Logo';
import './Sobre.css';

export default function Sobre(){
    return (
        
        <section className='containerSobre'>
            <Logo />
            <div className='textosSobreNós'>
                <h1> Sobre o <span className='gradientBlue'>EcoChargerStation</span> </h1>
                <span className='textos'>
                    O EcoChargerStation é uma plataforma inovadora dedicada a facilitar a transição para veículos elétricos, 
                promovendo a mobilidade sustentável e consciente. Nosso sistema oferece uma solução abrangente para localizar, 
                acessar e pagar por pontos de recarga de carros elétricos, conectando proprietários de veículos, 
                fornecedores de serviços e estações de recarga em uma rede unificada.
                <br/>
                <br/>
                    Com um foco na praticidade, segurança e eficiência, o EcoChargerStation simplifica o processo de recarga, 
                permitindo que os usuários encontrem facilmente estações próximas, realizem pagamentos seguros e monitorem suas recargas em tempo real. 
                Além disso, nossa plataforma promove a colaboração entre fornecedores e usuários, incentivando a expansão da infraestrutura de recarga e 
                contribuindo para um futuro mais sustentável e ecologicamente correto.
                <br/>
                <br/>
                    <span className='bold'>
                        Junte-se a nós nesta jornada rumo a um mundo com menos emissões e mais energia limpa. O EcoChargerStation está aqui para tornar a 
                transição para a mobilidade elétrica mais acessível, conveniente e amigável ao meio ambiente.
                </span>
                </span>
            </div>
        </section>
        
    )
}