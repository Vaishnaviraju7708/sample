import React from 'react'
import './Four.css';
import Strawberry from '../src/Image/strawberry.png'
import Freshline from '../src/Image/lime.png'
import Minipapers from '../src/Image/MiniPeppers.png'
import { IoMdEye } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";

function Four() {
  return (
          <div>
                    <div className='full' >
                         <div>
                            <div className='pt-2'>
                              <div className='box mx-2  bg-danger'>7% off</div>
                                 <div className='ms-auto'>
                                    <div className='hove'><IoMdEye className='eye '/></div><div className='hove'><FaRegHeart className='eye ' /></div>  </div>
                              </div>
                            <div><img className='lime' src={Freshline} alt='orange'/></div>
                             <div className='d-flex'>
                                 <div className=' mx-2'>
                                      <p className='code2'></p>
                                      <p className='code1'>300ml</p>
                                      <p className='code'><span>dfl</span> <span className='cd'>
                                      <del>djfk</del></span></p>
                                 </div>
                                <div className='plus1 ms-auto'>
                                     <button className='plus'>-</button>
                                 <p className='text-center'>4</p>
                                    <button className='plus'>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
  )
}

export default Four