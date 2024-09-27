import PropTypes from 'prop-types';
import Countdown from 'react-countdown';

export default function Cdown({ targetDate }){
    const renderer = ({ days, hours, minutes, seconds }) => {
        const padNumber = (num) => String(num).padStart(2, '0');
        
        return (
            <div className="countdown-timer text-center flex justify-evenly">
                <div>
                    <span className='block'>{padNumber(days)}</span>
                    <span className='block text-xs'>Hari</span>
                </div>
                <div>
                    <span className='block'>{padNumber(hours)}</span>
                    <span className='block text-xs'>Jam</span>
                </div>
                <div>
                    <span className='block'>{padNumber(minutes)}</span>
                    <span className='block text-xs'>Menit</span>
                </div>
                <div>
                    <span className='block'>{padNumber(seconds)}</span>
                    <span className='block text-xs'>Detik</span>
                </div>
            </div>
        );
    };

    return(
        <Countdown date={targetDate} renderer={renderer} />
    )
}

Cdown.propTypes = {
    targetDate: PropTypes.any,
  };