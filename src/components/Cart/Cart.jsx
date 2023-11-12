import PropTypes from 'prop-types';

const Cart = ({totalCreditHour, remainingCreditHour, totalPrice, coursesName}) => {
    return (
        <div className='bg-white w-full p-6 rounded-xl'>
            <p className='font-[700] text-lg text-[#570DF8] mb-4'>Credit Hour Remaining {remainingCreditHour} hr</p>
            <hr />
            <p className='mt-4 mb-6 font-[700] text-xl'>Course Name</p>
            <div>
                <ol className='text-[#1C1B1B99] text-base leading-8 list-decimal ml-4'>
                    {
                        coursesName.map((courseName, idx) => <li key={idx}>{courseName}</li>)
                    }
                </ol>
            </div>
            <hr className='mt-6 mb-4'/>
            <p className='text-[#1C1B1BCC] text-base font-[500]'>Total Credit Hour : {totalCreditHour}</p>
            <hr className='my-4'/>
            <p className='text-[#1C1B1BCC] text-base font-[600]'>Total Price : {totalPrice} USD</p>

        </div>
    );
};

Cart.propTypes = {
    totalCreditHour: PropTypes.object,
    remainingCreditHour: PropTypes.object,
    totalPrice: PropTypes.object,
    coursesName: PropTypes.object
};

export default Cart;