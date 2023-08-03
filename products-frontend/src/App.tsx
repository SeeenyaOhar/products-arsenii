import React from 'react';
import { Container } from 'react-bootstrap';
import ProductsList from 'src/components/ProductsList';
import { useGetProductsQuery } from 'src/redux/ProductsService';
import AddProductButton from './components/AddProductButton';
import SortButton from './components/SortButton';

function App() {
  const { data, error, isLoading } = useGetProductsQuery();

  if (error) {
    console.log(error);
  }

  if (isLoading) return null;

  return (
    <Container className={'p-2'}>
      <div className='d-flex flex-row justify-content-lg-end justify-content-center m-2 gap-2'>
        <AddProductButton />
        <SortButton />
      </div>
      <ProductsList products={data} />
    </Container>
  );
}

export default App;
