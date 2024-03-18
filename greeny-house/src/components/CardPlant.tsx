import React from 'react';


function CardPlant({cover, name, price}) {
    return (
        <div className='border border-gray-200 w-auto h-auto rounded-lg shadow-md hover:scale-105 transition-all'>
        <img className='h-60 w-full rounded-xl object-cover p-2' src={cover} alt="" />
        <div className=' space-y-3'>
            <div className='ml-4'>
            <h3 className='capitalize font-semibold'>{name}</h3>
            <p className='text-lg'>{price}€</p>
            </div>
            <div className='flex justify-center'>
            <button className='bg-green-700 justify-center font-medium flex p-2 px-4 w-48 text-white text-sm rounded-md mb-2'> <svg className='w-5 h-5 mr-2' xmlns="http://www.w3.org/2000/svg" fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M19.029 13h2.971l-.266 1h-2.992l.287-1zm.863-3h2.812l.296-1h-2.821l-.287 1zm-.576 2h4.387l.297-1h-4.396l-.288 1zm2.684-9l-.743 2h-1.929l-3.474 12h-11.239l-4.615-11h14.812l-.564 2h-11.24l2.938 7h8.428l3.432-12h4.194zm-14.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm5.9-7-.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg>Ajouter au panier</button></div>
            </div>
        </div>
    );
}

export default CardPlant;