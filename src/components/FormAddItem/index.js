import React from 'react';
import { useDispatch } from 'react-redux';
import { postItems } from '../../redux/actions/items';

const FormToAddItem = () => {
  const dispatch = useDispatch();

  async function handleSubmit(event) {
    try {
      const auxItem = {
        nome: event.target.name.value,
        quantidade: event.target.quantidade.value
      }
      dispatch(postItems(auxItem));
      alert('Elemento adicionado com sucesso!');
    }catch(err){
      alert('Erro ao cadastrar item!!');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input className="largeInput" name="name" />
          <label>Quantidade</label>
          <input name="quantidade" type="number" />
          <div>
            <button type="submit"> Adicionar </button>
          </div>
        </div>
        </form>
    </div>
  )
}

export default FormToAddItem;
