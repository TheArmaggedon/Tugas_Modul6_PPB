import { useLocation } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
  
  const { state } = useLocation();
  const itemData = state && state.itemData;

  
  
  if (!itemData) {
    return <div>Data not found</div>;
  }

  return (
    <div className="detail-container"> 
      <h1 className="detail-title">{itemData.l}</h1> 
      <p className="detail-description">{itemData.q}</p> 
      <p className="detail-description">{itemData.s}</p>
      <p className="detail-description">{itemData.y}</p>
      <img className="detail-image" src={itemData.i.imageUrl} alt={itemData.title} /> 
    </div> 
  );
}