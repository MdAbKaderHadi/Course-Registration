import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Card = ({ cardData, handleClick }) => {
    return (
        <div>
            <div className="card w-[312px] h-[402px] bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={cardData.image_link} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="p-5 items-center">
                    <h2 className="card-title text-lg mb-3">{cardData.course_name}</h2>
                    <p className='text-sm text-[#1C1B1B99] mb-4'>{cardData.course_details}</p>
                    <div className='flex items-center justify-between mb-7'>
                        <p className='flex items-center text-base text-[#1C1B1B99] font-[500]'><FaDollarSign className='mr-3'></FaDollarSign> Price: {cardData.price}</p>
                        <p className='flex items-center text-base text-[#1C1B1B99] font-[500]'><FaBookOpen className='mr-3'></FaBookOpen>Credit: {cardData.hours}</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleClick(cardData, this)} className="btn btn-primary w-full h-[40px]">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardData: PropTypes.object,
    handleClick: PropTypes.object
};

export default Card;