import React from 'react';
import styled from 'styled-components';
import { IoClose } from "react-icons/io5";

const DoubleCard = ({productData, SetshowProduct}) => {
  return (
    <StyledWrapper>  
      <div  className='h-screen inset-0 flex justify-center items-center absolute z-100 w-full'>    
        <div className="card-container">
            <IoClose onClick={()=>{SetshowProduct(false)}} className='cursor-pointer absolute inset-0 text-white -left-1 z-30 text-3xl'/>  
            <div className="card">
            <div className="front-content">
                <img className='w-full h-full' src={productData.message.image} alt="image" />
            </div>
            <div className="content">
                <p className="heading">{productData.message.name}</p>
                <p className=''><span className='font-bold text-3xl text-orange-600'>Price: </span>{productData.message.price}$</p>
            </div>
            </div>
        </div>
      </div> 
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card-container {
    width: 600px;
    height: 400px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(129, 140, 248, 0.2);
    overflow: hidden;
    background: rgba(129, 140, 248, 0.1);
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .front-content p {
    font-size: 32px;
    font-weight: 700;
    opacity: 1;
    background: linear-gradient(-45deg, #818cf8 0%, #4f46e5 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background: linear-gradient(-45deg, #6366f1 0%, #4338ca 100%);
    color: #e0e7ff;
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    pointer-events: none;
    transform: translateX(-96%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
    color: #ffffff;
  }

  .card:hover .content {
    transform: translateY(0);
  }

  .card:hover .front-content {
    transform: translateX(-30%);
  }

  .card:hover .front-content p {
    opacity: 0;
  }

  .card .content p {
    color: #e0e7ff;
    font-size: 28px;
  }
`;

export default DoubleCard;
