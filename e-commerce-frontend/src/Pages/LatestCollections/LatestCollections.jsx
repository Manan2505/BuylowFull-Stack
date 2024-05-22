import React,{useContext} from 'react'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png';

import Item from '../../Components/Item/Item';
import all_product from '../../Components/Assets/all_product';
import { ShopContext} from '../../Context/ShopContext';
// import './CSS/ShopCategory.css';
import '../CSS/ShopCategory.css';

const LatestCollections = () => {
    const {all_product}=useContext(ShopContext);
    
  return (
    <div>
       
    <div className="shopcategory-products">
      {all_product.map((item,i)=>{
          
        return <Item  id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
         
        })}
    </div>
    </div>
  )
}

export default LatestCollections;
