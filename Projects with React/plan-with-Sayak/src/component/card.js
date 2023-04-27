import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    const[readmore,setReadmore] = useState(false);
    
    const description = readmore ? info :`${info.substring(0,200)}....`;

    return (
        
        <div className="w-[400px] h-max m-[1rem] p-[1rem] flex flex-col rounded-[10px] items-center shadow-md">

            <img src={image} alt="" className="w-[380px] aspect-square object-cover"></img>

            <div className="my-[20px] mx-[5px]">
                <div className="tour-details">
                    <h4 className="text-[#1faa59] text-[1.3rem]">₹ {price}</h4>
                    <h4 className="text-[1.5rem]">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="text-[#12b0e8] cursor-pointer" onClick={() => setReadmore(!readmore)}>
                        {readmore ? `Show Less`: `Read More`}
                    </span>
                </div>
            </div>

            <button className="my-[18px] py-[10px] px-[80px] border-[1px] border-solid 
            border-[#b4161b] text-[18px] font-bold bg-[#b4161b21] rounded-lg
             hover:bg-[#FF0000] hover:text-white hover:transition-all" 
             onClick={() => removeTour(id)}>Not Interested</button>
        </div>
        
    );
}

export default Card;