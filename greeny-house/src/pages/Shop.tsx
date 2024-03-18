import React, { useState } from 'react';
import CardPlant from '../components/CardPlant';
import Header from '../components/Header';
import { plantList } from '../datas/plantList';


function Shop() {

    const [subCategoriesSort, setSubCategoriesSort] = useState(false)
    const [subCategoriesCatégories, setSubCategoriesCatégories] = useState(false);


    return (


        <div className=''>
               <Header />
           



<div className='flex flex-col md:flex-row justify-center items-center gap-10 my-12'>
{/* filters */}
<div className='flex'>
    <div className='flex flex-col'>
<div className='border border-gray-800 w-auto p-2 flex items-center ml-6 hover:border-2' onClick={() => setSubCategoriesSort(!subCategoriesSort)}>
    <span className='mr-2 font-semibold'>Trier</span>

    <svg className={`h-4 ${subCategoriesSort ? 'rotate-0' : 'rotate-180'} flex align-center transition-transform duration-300`} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>
</div>

<div className='flex flex-col'>
{subCategoriesSort && (
                <div className='ml-6'>
                    <div className='border border-gray-800 p-2'>Prix croissant</div>
                    <div className='border border-gray-800 p-2'>Prix décroissant</div>
                    <div className='border border-gray-800 p-2'>Produits préférés</div>
                </div>
)}
</div>
</div>

<div className='flex flex-col'>
<div className='border border-gray-800 w-auto p-2 flex items-center ml-6 hover:border-2' onClick={() => setSubCategoriesCatégories(!subCategoriesCatégories)}>
    <span className='mr-2 font-semibold'>Catégories</span>

    <svg className={`h-4 ${subCategoriesCatégories ? 'rotate-0' : 'rotate-180'} flex align-center transition-transform duration-300`} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>

</div>
{subCategoriesCatégories && (
                <div className='ml-6'>
                    <div className='border border-gray-800 p-2'>Plantes classiques</div>
                    <div className='border border-gray-800 p-2'>Plantes d'extérieur</div>
                    <div className='border border-gray-800 p-2'>Plantes grasses</div>
                </div>
                
)}
</div>
</div>


         
{/* search bar */}
<form className=" ">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Recherche</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500  dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Rechercher une plante" required />
        <button type="submit" className=" absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Recherche</button>
    </div>
</form>

</div>


<div className='grid grid-cols-4 gap-4 mx-28 my-14'>
            {plantList.map(({cover, name, price}) => (
            <CardPlant 
            key={name}
            cover={cover}
            name={name}
            price={price}
            
            />
            ))}
            </div>
            </div>
    
    );
}

export default Shop;