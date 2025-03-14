import React from 'react'
import './Section.css';

const Section = () => {
  return (
    <div>
    <div className='sec-container'>
    <div className='blur-container'>
        <div className='blur-1'></div>
        <div className='blur-2'></div>
        <div className='blur-3'></div>
        </div>  
        <div className='text-container'> 
       <p>Você sente um fascínio por crimes não resolvidos?<br />
Gosta de testar sua inteligência e capacidade de raciocínio lógico?
Já se imaginou no lugar de um investigador, analisando provas e conectando os pontos?
<br />
Então este jogo foi feito para você.
<br />
Código Morto te coloca no centro da cena do crime, desafiando você a resolver casos intrigantes, explorar pistas ocultas e interrogar suspeitos.</p> 
</div> 
<button><a href="#">Garanta Já</a></button>
</div>

<div className='sec2-container'>
    <h2>O Que Você Vai Encontrar no Código Morto?</h2>
    <ul>
        <li>Casos baseados em investigações reais</li>
        <li> Narrativas imersivas e cheias de reviravoltas</li>
        <li>Múltiplas escolhas que moldam o destino da investigação</li>
        <li>Desafios que testam sua inteligência e habilidades dedutivas</li>
    </ul>
    <p>Sua missão: Encontrar a verdade. Mas cuidado… as aparências enganam &#x2620;</p>
</div>
<div className='sec3-container'>
    <h2>Depoimentos e Prova Social</h2>
    <div className="depoiment-container">
        <div className="dep">
            <p>“Me senti como um verdadeiro detetive! O jogo prende do início ao fim.”</p>
            <span>João M.</span>
            <div className="star">★★★★★</div>
        </div>
        <div className="dep">
            <p> “Cada detalhe é importante, e isso torna a experiência viciante!”</p>
            <span>Larissa T.</span>
            <div className="star">★★★★★</div>
        </div>
        <div className="dep">
            <p>“Se você ama True Crime e investigação, esse jogo é obrigatório.”</p>
            <span>Marcos C.</span>
            <div className="star">★★★★★</div>
        </div>
    </div>
</div>
<div className="footer">
    <h2>Está pronto para o desafio?</h2>
    <p>Junte-se à elite dos investigadores e resolva o seu primeiro caso.</p>
    <p>Garanta seu acesso agora!</p>
    <button><a href="#">Garanta já</a></button>
    <p className='copy'> {"\u00A9"} {new Date().getFullYear()} Bruno Pacheco. Todos os direitos reservados.</p>
</div>
</div>
  )
}

export default Section