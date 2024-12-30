

import { Link } from 'react-router-dom';

// Define the type for the card object
interface cardtype {
    title: string;
    discription: string;
    user: number;
    message: number;
    image: string;
    price: number;
    path:string;
}

const Card = ({ card }: { card: cardtype }) => {
    const { title, discription, image,path } = card;

    return (
        <div>
            <div className="bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title text-xl font-bold">
                     <Link to={`/${path}`}>{title}</Link>
                        
                    </h2>
                    {/* Tailwind class to limit text to two lines with ellipsis */}
                    <p className="text-gray-700 line-clamp-2">
                        {discription}
                    </p>
                    <div className="card-actions  w-full mt-4">
                        <div className='flex justify-between w-full'>
                        
                        
                        </div>
                    
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
