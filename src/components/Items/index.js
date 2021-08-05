import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from '../../redux/actions/items';
import Card from '../Card';

const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items);
  const loading = useSelector(state => state.items.loading);
  const error = useSelector(state => state.items.error);

  useEffect(() => {
    dispatch(getItems());
  },[dispatch])

  return (
    <>
      {loading && <p> Loading...</p>}
      {items && items.map(item => (
        <Card 
          key={item.id}
          item={item}
        />
      ))}
      {!items && !loading && <p> Vazio bro </p>}
    </>
  );
}

export default Items;
