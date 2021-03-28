import './LastNews.css';

import { Link } from 'react-router-dom';

import imageOne from './assets/images/imageOne.jpg';
import imageTwo from './assets/images/imageTwo.jpg';
import imageThree from './assets/images/imageThree.jpg';

const LastNews = () => {
    return (
        <div className='newsContainer'>
            <div className='newsCards'>
                <h2>Последни новини</h2>
                <div className='newsCardsRow'>
                    <Link to='/url' className='newsCard'>
                        <img className='starReview' src={imageTwo} alt='star review' />
                        <h3>Какво е Nike Air технологията?</h3>
                        <p>16.03.2021</p>
                    </Link>

                    <Link to='/url' className='newsCard'>
                        <img className='starReview' src={imageOne} alt='star review' />
                        <h3>Какво е Nike Air технологията?</h3>
                        <p>16.03.2021</p>
                    </Link>

                    <Link to='/url' className='newsCard'>
                        <img className='starReview' src={imageThree} alt='star review' />
                        <h3>Какво е Nike Air технологията?</h3>
                        <p>16.03.2021</p>
                    </Link>
                </div>
                <Link to='/url' className='newsBigLink'>Виж всички</Link>
            </div>
        </div>
    );
};

export default LastNews;