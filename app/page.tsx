import Product from "././components/product";
import Header from './components/header'

export default function Home() {
  return (
    <div className="dark">
      <Header />
     
      <div className="h-full w-full dark:bg-gray-950 bg-gray-950">
      
        <Product />
      </div>
    </div>
  );
}
