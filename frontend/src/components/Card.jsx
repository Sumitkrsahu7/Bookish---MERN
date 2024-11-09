import React from 'react'

function Card({ item }) {
    return (
        <div className='mt-4 p-3'>
            <div className="card bg-base-100 shadow-xl max-w-xs hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border dark:p-1">
                <figure>
                    <img className='rounded-xl w-full'
                        src={item.image}
                        alt={item.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex items-center justify-between">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p className=''>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline py-3 px-3">${item.price}</div>
                        <div className="hover:bg-green-600 cursor-pointer hover:text-black hover:font-bold py-1 px-2 text-sm rounded-full border-2">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card