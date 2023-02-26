import './card.css'
import { useState, useEffect }from 'react'
import Heart from './Heart'
import {COLORS} from '../constants'
interface IPlace {
    id: number;
    name : string,
    image: string,
    country : string
}
interface ICard {
    place: IPlace
}
const Card =({place}: ICard)=>{
    const [color , setColor] = useState(COLORS.white)
    const [wishlist, setWishlist] = useState<IPlace[]>()
    const { id , name , image, country} = place

    useEffect(()=>{
      const wishlistItems = localStorage.getItem('favorites')
      if(wishlistItems){
        const parsedWishlist = JSON.parse(wishlistItems)
        setWishlist(parsedWishlist)
        const foundPlace = parsedWishlist.find((item : any)=>item.id === place.id)
        if (foundPlace) setColor(COLORS.red)
      }
    },[])
    const handleFav=()=>{
        console.log(wishlist)
        if(!wishlist){// if wishlist is empty add the first place 
          const favoritePlaces = [place]
          localStorage.setItem('favorites', JSON.stringify(favoritePlaces))
          setWishlist(favoritePlaces)
          setColor(COLORS.red)

        }else{
            if(wishlist.find((storedFavorite : any) => storedFavorite.id === place.id )){//if the wishlist have items add to them
                console.log('this place already exist in the wish list')
            }else{
                console.log(wishlist)
                localStorage.setItem('favorites', JSON.stringify([...wishlist , place]))
                setWishlist([...wishlist , place])
                setColor(COLORS.red)
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