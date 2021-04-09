import './HeaderInfo.css';

import view from './assets/icons/view-gray.svg';
import check from './assets/icons/check-gray.svg';
import delivery from './assets/icons/delivery-gray.svg';
import returnProduct from './assets/icons/return-gray.svg';

const HeaderInfo = () => {
    return (
        <div className='headerInfoContainer'>
            <div className='headerInfoItem'>
                <img src={view} alt='header info icon' />
                Тест и преглед преди плащане
            </div>

            <div className='headerInfoItem'>
                <img src={check} alt='header info icon' />
                Всички стоки са налични
            </div>

            <div className='headerInfoItem'>
                <img src={delivery} alt='header info icon' />
                Безплатна доставка над 100лв.
            </div>

            <div className='headerInfoItem'>
                <img src={returnProduct} alt='header info icon' />
                30 дни безплатно връщане
            </div>
        </div>
    );
};

export default HeaderInfo;