import React, { useContext, useState } from 'react'
import { ItemContext } from '../contexts/ItemContext';

function AddItemFormComponent() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { dispatch } = useContext(ItemContext);
    const [currentId, setCurrentId] = useState(1);

    const incrementId = () => {
      setCurrentId((prevId) => prevId + 1);
    };

    const addItem = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: { id: currentId, name, description}
        });
        setName('');
        setDescription('');
        incrementId();
    }
  return (
    <div className='mb-4'>
        <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Item Name' className='border p-2 mr-2'></input>
        <input type='text' value={description} onChange={e => setDescription(e.target.value)} placeholder='Item Description' className='border p-2 mr-2'></input>
        <button onClick={addItem} className='bg-blue-500 text-white px-4 py-2 border rounded'>Add Item</button>
    </div>
  )
}

export default AddItemFormComponent