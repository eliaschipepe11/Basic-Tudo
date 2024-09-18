import styled from 'styled-components'

export const InputArea = styled.form` 
    padding: 3px 5px ;
    display: flex;
    gap: 7px;
`;

export const Input = styled.input`
    padding: 10px;
    padding-left:20px;
    border: none;
    outline:none;
    background-color: #bfc1c2ab;
    border-radius:3px;
    flex:1;
`;

export const Button = styled.button`
    border:none;
    background-color: #1470dac9;
    padding:5px 8px;
    border-radius:4px;
    color: #ccc;
    cursor: pointer;
`;

export const Tarefas = styled.div`
    width: 100%;
    padding: 20px 12px 15px;
    display: flex;
    flex-direction: column;
    gap:12px;
    border-top:2px solid rgba(58,58,58,.6);
    margin-top:10px;
    max-height:325px;
    overflow-y:auto;
    overflow-x:hidden;

`;

export const Tarefa = styled.div`
    width:100%;
    padding:10px;
    display: flex;
    color:#fff;
    background:#111112d6;

    border-radius:5px;
    cursor:pointer;
    &:hover{
           transform: translate(-7px);
    }
`;
export const TarefaDescrition = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    gap:20px
    `;
    export const TarefaControls = styled.div`
    font-size:12px;
    gap:3px;
    display:flex;
`;
