import React from "react";
import Botao from '../botao';
import Botao2 from '../botao2';
import './style.scss';

class Formulario extends React.Component{

    render(){
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa"> 
                        Título:
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Nome do filme"
                        required
                    />
                </div>
                <div className="inputContainer2">
                    <label htmlFor="tarefa"> 
                        Sinopse:
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Lorem ipsum dolor sit amet."
                        required
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="tarefa"> 
                        Diretor:
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Nome do diretor"
                        required
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Gênero:
                    </label>
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        required
                    />
                </div>
                <Botao2 />
                <Botao />
            </form>
        )
    }


}

export default Formulario;