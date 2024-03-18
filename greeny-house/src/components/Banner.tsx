import React from 'react';
import plant from "../assets/plant-green-banner.png"

function Banner(props) {
    return (
        <div className='flex items-center justify-center mx-20 '>
            <div className='space-y-7 pr-48'>
            <h2 className='text-4xl font-bold'>Éveillez Votre Intérieur Avec Une Touche de <span className='text-green-500'>Nature</span></h2>
            <p className='text-xl'>Découvrez notre sélection exclusive de plantes vertes pour créer un espace de vie revitalisant et apaisant.</p>
            <button className='w-30 bg-green-400 text-white py-1 px-6 rounded-md'>Boutique</button>
            </div>
            <img className="w-1/4 drop-shadow-xl" src={plant} alt="" />
        </div>
    );
}

export default Banner;