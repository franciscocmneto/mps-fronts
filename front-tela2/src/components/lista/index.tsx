import React from "react";
import './style.scss';
import Botao3 from "../botao3";
import Botao4 from "../botao4";

function Lista(){
    const tarefas = [{
        tarefa: 'Cópias: ',
        numeroCopias: '01'
    }]
    return (
        <aside className="listaTarefas">
            <h2>  </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className="item"> 
                        <h3>
                            {item.tarefa}
                            <span>
                                {item.numeroCopias}
                            </span>
                        </h3>
                        
                    </li>
                ))}
            </ul>
            <ul>
                    <li className="item"> 
                        <h3>
                            Adicionar cópia:  
                            <span>
                                 <Botao3/>    
                            </span>
                        </h3>
                        <h3>
                            Remover cópia: 
                            <span>
                                 <Botao4/>    
                            </span>
                        </h3>
                            
                    </li>

            </ul>
        </aside>
    )
}

export default Lista;