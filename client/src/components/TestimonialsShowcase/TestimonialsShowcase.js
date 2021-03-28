import './TestimonialsShowcase.css';

import { Link } from 'react-router-dom';

import arrowLeft from './assets/icons/arrow-black_left.svg';
import arrowRight from './assets/icons/arrow-black_right.svg';
import arrowReview from './assets/icons/star-yellow_filled.svg';

const TestimonialsShowcase = () => {
    return (
        <div className='testimonialsContainer'>
            <div className='testimonialsCard'>
                <h2>Мнения от клиенти на ShopSector.com</h2>
                <div className='testimonialsInfo'>
                    <h3>Петър Стоянов</h3>
                    <p>25.03.2021 19:34:38</p>
                    <p>Бързи и точни</p>
                    <p>
                        <img className='starReview' src={arrowReview} alt='star review' />
                        <img className='starReview' src={arrowReview} alt='star review' />
                        <img className='starReview' src={arrowReview} alt='star review' />
                        <img className='starReview' src={arrowReview} alt='star review' />
                        <img className='starReview' src={arrowReview} alt='star review' />
                        ( Оценка: 5 от 5 )
                    </p>
                </div>
                <Link to='/url' className='testimonialsBigLink'>НАПИШИ КОМЕНТАР</Link>
                <Link to='/url' className='testimonialsSmallLink'>Виж всички</Link>
            </div>

            <div className='testimonialsArrowContainer testimonialsArrowLeft'>
                <div className='testimonialsArrow'>
                    <img src={arrowLeft} alt='arrow left' />
                </div>
            </div>
            <div className='testimonialsArrowContainer testimonialsArrowRight'>
                <div className='testimonialsArrow'>
                    <img src={arrowRight} alt='arrow right' />
                </div>
            </div>
        </div>
    );
};

export default TestimonialsShowcase;