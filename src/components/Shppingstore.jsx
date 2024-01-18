import Common from "./Common";
import Common2 from "./Common2";
import map1 from '../assets/images/product1.webp'
import map2 from '../assets/images/product2.webp'
import map3 from '../assets/images/product3.webp'
import map4 from '../assets/images/product4.webp'
import map5 from '../assets/images/product5.webp'
import map6 from '../assets/images/product6.webp'
import { Star } from "./icon";

const Shppingstore = () => {
    const products = [
        {img: map1, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />)},
        {img: map2, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />)},
        {img: map3, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />)},
        {img: map4, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />)},
        {img: map5, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />)},
        {img: map6, singlesofa: "Single Sofa", lorempara: "Lorem ipsum dolor", review: (<Star />), amount: "₹ 1200.00", mapbtn: (<Common2 text="ADD TO CART" />)},
    ]
  return (
    <>
 <div className=' mx-auto container  max-w-[1320px] mt-[80px] sm:mt-[135px] px-3 '>
 <div className="flex items-center gap-[7px]" >
        <div className="w-[95px] h-[0px] border border-black" ></div>
            <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine' >Shopping Store</p>
            </div>
            <div className='flex w-full flex-col gap-4 sm:flex-row  sm:justify-between items-start sm:items-center mt-4' >
                <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] '>Our Products</h2>
                <Common text="VIEW ALL PRODUCT" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full lg:gap-5 xl:gap-[27px] my-8 sm:my-10 md:my-16 lg:my-[90px]' >
                {products.map((items, index) => (
                    <div key={index} className='w-full bg-white duration-300 shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] mb-4'>
                        <div className='px-[23px] py-[18px]'>
                            <img className='w-full' src={items.img} alt={items.singlesofa} />
                            <div className='flex items-center justify-between mt-5'>
                                <p className='text-black font-Poppins font-medium text-lg sm:text-xl leading-normal'>{items.singlesofa}</p>
                                <span>{items.review}</span>
                            </div>
                            <p className='text-[#4D4D4D] text-base sm:text-lg font-Poppins font-normal mt-4 leadinxg-normal'>{items.lorempara}</p>
                            <div className='flex w-full items-center justify-between mt-4 pb-[35px]'>
                                <p className='text-black text-xl sm:text-2xl lg:text-[28px] font-Poppins font-semibold leading-normal'>{items.amount}</p>
                                {items.mapbtn}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </>
  )
}

export default Shppingstore