import './App.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import CardSkeleton from './components/CardSkeleton';
import { useProductData } from './hooks/useProductData';
import React, { useContext } from 'react';
import { SelectedItemContext } from './Context/SelectedItemContext';

function App() {
  const {data, isLoading, isError} = useProductData();
  const {selectItems, setSelectItems} = useContext(SelectedItemContext);

  const addItem = (item) => {
    setSelectItems(prevState => [...prevState, item])
  }

  return (
    <div className="App">
      <Header
        selectItems={selectItems}
      />
      <div className="container-products">
        {!isLoading ? 
        <>
            {data.map(data=>(
            <Card
              key={data.id}
              item={data}
              addItem={addItem}
            />
          ))}
        </>
        :
          <>
            {[...Array(8)].map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </>
        }
        {isLoading && <CardSkeleton/>}
        {isError && <p>Houve Um Erro!</p>}
      </div> 
      <Footer/>
    </div>  
  )
}

export default App;
