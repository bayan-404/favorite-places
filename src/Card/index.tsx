import './card.css'
import { useState, useEffect }from 'react'
import Heart from './Heart'
import {COLORS} from '../constants'
import {IPlace} from '../types'
import {ICard} from '../types'
const Card =({place, wishlist, setWishlist}: ICard)=>{
    const [color , setColor] = useState(COLORS.white)
    const { id , name , image, country} = place

    useEffect(()=>{
      if(wishlist.length){
        const foundPlace = wishlist.find((item : IPlace)=>item.id === id)
        if (foundPlace) setColor(COLORS.red)
      }
    },[wishlist])
    const handleFav=()=>{
        if(!wishlist.length){// if wishlist is empty add the first place 
          setWishlist([place])
          localStorage.setItem('favorites', JSON.stringify([place]))
        }else{
            if(wishlist.find((storedFavorite : IPlace) => storedFavorite.id === id )){//if the wishlist have items add to them
                console.log('this place already exist in the wish list')
            }else{
                localStorage.setItem('favorites', JSON.stringify([...wishlist , place]))
                setWishlist([...wishlist , place])
            }
           
        }
        
    }

    return (
        <>
            <div className= "box" onDoubleClick = {handleFav}>
                <Heart color = {color}/>
                <img  className='place-img' src={image} alt={name} />
                <div className = 'info'>
                <h4>{name}</h4>
                <p>{country}</p>
                </div>
            </div>
        </>
    )
}

export default Card