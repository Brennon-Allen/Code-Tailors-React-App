import downArrow from '../assets/down-arrow.png';

export default function ScrollText({text}) {

  return (
    <>
      <div className="full-width flex-center-column scroll-text-box">
        <h1 className='scroll-text-title'>{text}</h1>
        <img src={downArrow} className=' down-arrow'/>
      </div>  
    </>
  );
}
