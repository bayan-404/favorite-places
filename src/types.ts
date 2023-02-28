export interface IPlace {
    id: number;
    name : string,
    image: string,
    country : string
}
export interface ICard {
    wishlist : IPlace[]
    setWishlist : React.Dispatch<React.SetStateAction<IPlace[]>>
    place: IPlace
}