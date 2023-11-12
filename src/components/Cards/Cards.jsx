import { useEffect, useState } from 'react';
import Card from './Card';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
    const [cardsData, setCardsData] = useState([]);
    const [totalCreditHour, setTotalCreditHour] = useState(0);
    const [remainingCreditHour, setRemainingCreditHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [coursesName, setCoursesName] = useState([]);
    const [clickCounts, setClickCounts] = useState({});

    const notify = () =>{
        toast.error(`You don't have enough credit hours.`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    function handleClick(cardData) {
        if ((totalCreditHour + cardData.hours) > 20) {
            notify();
        }
        else {
            const currentClickCount = clickCounts[cardData.course_name] || 0;

            if (currentClickCount > 0) {
                console.warn(`Button ${cardData.course_name} clicked multiple times!`);
            }
            else {
                handleTotalCreditHour(cardData);
                totalPriceCalculate(cardData);
                handleCartCourseNames(cardData);
            }
            setClickCounts({
                ...clickCounts, [cardData.course_name]: currentClickCount + 1,
            })
        }
    }


    function handleTotalCreditHour(creditHour) {
        const getCreditHour = creditHour.hours;
        const totalCreditHours = totalCreditHour + getCreditHour;
        setTotalCreditHour(totalCreditHours);
        handleRemainingCreditHour(totalCreditHours);
    }


    function handleRemainingCreditHour(totalCreditHours) {
        setRemainingCreditHour(20 - totalCreditHours);
    }


    function totalPriceCalculate(price) {
        setTotalPrice(totalPrice + price.price);
    }


    function handleCartCourseNames(name) {
        const updatedArray = [...coursesName, name.course_name];
        setCoursesName(updatedArray);
    }

    useEffect(() => {
        fetch(`../../../courses.json`)
            .then(res => res.json())
            .then(data => setCardsData(data))
    }, [])

    return (
        <div className='flex'>
            <div className='grid grid-cols-3 w-3/4 gap-6'>
                {
                    cardsData.map((cardData, idx) => <Card key={idx} cardData={cardData} handleClick={handleClick}></Card>)
                }
            </div>
            <div>
                <Cart totalCreditHour={totalCreditHour} remainingCreditHour={remainingCreditHour} totalPrice={totalPrice} coursesName={coursesName}></Cart>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Cards;