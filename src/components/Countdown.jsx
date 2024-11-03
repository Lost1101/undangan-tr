import PropTypes from 'prop-types';
import Countdown from 'react-countdown';

export default function Cdown({ targetDate }){
    const renderer = ({ days, hours, minutes, seconds }) => {
        const padNumber = (num) => String(num).padStart(2, '0');
        
        return (
            <div className="countdown-timer text-center flex justify-evenly">
                <div>
                    <span className='block laptop:text-4xl'>{padNumber(days)}</span>
                    <span className='block text-xs laptop:text-base'>Hari</span>
                </div>
                <div>
                    <span className='block laptop:text-4xl'>{padNumber(hours)}</span>
                    <span className='block text-xs laptop:text-base'>Jam</span>
                </div>
                <div>
                    <span className='block laptop:text-4xl'>{padNumber(minutes)}</span>
                    <span className='block text-xs laptop:text-base'>Menit</span>
                </div>
                <div>
                    <span className='block laptop:text-4xl'>{padNumber(seconds)}</span>
                    <span className='block text-xs laptop:text-base'>Detik</span>
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