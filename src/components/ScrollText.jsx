import downArrow from '../assets/down-arrow.png';

export default function ScrollText({text}) {

  return (
    <>
      <div className="flex-center-column scroll-text-box">
        <img src={downArrow} className=' down-arrow'/>
      </div>  
    </>
  );
}
