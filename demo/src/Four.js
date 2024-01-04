import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Four.css';
import Strawberry from '../src/Image/strawberry.png'
import Freshline from '../src/Image/lime.png'
import Minipapers from '../src/Image/MiniPeppers.png'
import { IoMdEye } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";

function Four(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div>
    <div className='carosel'>
         
        <Slider {...settings}>
          <div className='boxi'>
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
                                      <p className='code'><span>{props.us}</span> <span className='cd'>
                                      <del>{props.id}</del></span></p>
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
          </div>
          <div className='boxi'>
          <div className='boxi'>
          <div>
                    <div className='full' >
                         <div>
                            <div className='pt-2'>
                              <div className='box mx-2  bg-danger'>9% off</div>
                                 <div className='ms-auto'>
                                    <div className='hove'><IoMdEye className='eye '/></div><div className='hove'><FaRegHeart className='eye ' /></div>  </div>
                              </div>
                            <div><img className='lime' src={Minipapers} alt='orange'/></div>
                             <div className='d-flex'>
                                 <div className=' mx-2'>
                                      <p className='code2'>Fresh Line</p>
                                      <p className='code1'>300ml</p>
                                      <p className='code'><span>US$135.78</span> <span className='cd'>
                                      <del>US$7.00</del></span></p>
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
          </div>

          </div>
          <div className='boxi'>
          <div className='boxi'>
          <div>
                    <div className='full' >
                         <div>
                            <div className='pt-2'>
                              <div className='box mx-2  bg-danger'>6% off</div>
                                 <div className='ms-auto'>
                                    <div className='hove'><IoMdEye className='eye '/></div><div className='hove'><FaRegHeart className='eye ' /></div>  </div>
                              </div>
                            <div><img className='lime' src={Strawberry} alt='orange'/></div>
                             <div className='d-flex'>
                                 <div className=' mx-2'>
                                      <p className='code2'>{props.head}</p>
                                      <p className='code1'>300ml</p>
                                      <p className='code'><span>{props.us}</span> <span className='cd'>
                                      <del>{props.id}</del></span></p>
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
          </div>
          </div>
          <div className='boxi'>
          <div className='boxi'>
          <div>
                    <div className='full' >
                         <div>
                            <div className='pt-2'>
                              <div className='box mx-2  bg-danger'>6% off</div>
                                 <div className='ms-auto'>
                                    <div className='hove'><IoMdEye className='eye '/></div><div className='hove'><FaRegHeart className='eye ' /></div>  </div>
                              </div>
                            <div><img className='lime' src={Strawberry} alt='orange'/></div>
                             <div className='d-flex'>
                                 <div className=' mx-2'>
                                      <p className='code2'>{props.head}</p>
                                      <p className='code1'>300ml</p>
                                      <p className='code'><span>{props.us}</span> <span className='cd'>
                                      <del>{props.id}</del></span></p>
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
          </div>
          </div>
          <div className='boxi'>
          <div className='boxi'>
          <div>
                    <div className='full' >
                         <div>
                            <div className='pt-2'>
                              <div className='box mx-2  bg-danger'>7% off</div>
                                 <div className='ms-auto'>
                                    <div className='hove'><IoMdEye className='eye '/></div><div className='hove'><FaRegHeart className='eye ' /></div>  </div>
                              </div>
                            <div><img className='lime' src={Strawberry} alt='orange'/></div>
                             <div className='d-flex'>
                                 <div className=' mx-2'>
                                      <p className='code2'>{props.head}</p>
                                      <p className='code1'>300ml</p>
                                      <p className='code'><span>{props.us}</span> <span className='cd'>
                                      <del>{props.id}</del></span></p>
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
          </div>
          </div>
          <div className='boxi'>
          <div className='boxi'>
          <div>
                    <div className='full' >
                         <div>
                            <div className='pt-2'>
                              <div className='box mx-2  bg-danger'>11% off</div>
                                 <div className='ms-auto'>
                                    <div className='hove'><IoMdEye className='eye '/></div><div className='hove'><FaRegHeart className='eye ' /></div>  </div>
                              </div>
                            <div><img className='lime' src={Strawberry} alt='orange'/></div>
                             <div className='d-flex'>
                                 <div className=' mx-2'>
                                      <p className='code2'>{props.head}</p>
                                      <p className='code1'>300ml</p>
                                      <p className='code'><span>{props.us}</span> <span className='cd'>
                                      <del>{props.id}</del></span></p>
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
          </div>
          </div>
        </Slider> 
      </div>
    </div>
  )
}

export default Four