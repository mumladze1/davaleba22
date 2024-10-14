import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../features/crudSlice';

const ItemList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.crud);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Item List</h1>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
