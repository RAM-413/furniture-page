import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import { Controller, EffectFade, Thumbs } from 'swiper/modules';
import LastSlider1 from '../assets/images/swipper1.webp'
import LastSlider2 from '../assets/images/swipper2.webp'
import LastSlider3 from '../assets/images/swipper3.webp'
import LastSlider4 from '../assets/images/swipper4.webp'
import LastSlider5 from '../assets/images/swipper5.webp'
import LastSlider6 from '../assets/images/swipper6.webp'
import LastSlider7 from '../assets/images/swipper7.webp'

const Testimonials = () => {
 
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const TestimonialData = [
        {
            img: LastSlider1,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider2,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider3,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider4,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider5,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider6,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider7,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider1,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider2,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider3,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider4,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider5,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider6,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider7,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider1,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider2,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider3,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider4,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider2,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider5,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider6,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider7,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider1,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
        {
            img: LastSlider2,
            name: "Treepi Shoty",
            Profession: "Teacher",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien."
        },
    ]
    return (
        <div className='mx-auto px-3 max-w-[1320px] md:pt-[30px]'>
         <div className='flex items-center gap-[7px]'>
                <div className="w-[95px] h-[0px] border border-black"></div>
                <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine'>Customer Says</p>
              </div>
          
            <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 leading-normal'>Testimonial</h2>
            <div className='mt-[51px] mb-12 sm:mb-16 md:mb-20 lg:mb-[109px]'>
                <div>
                    <Swiper  spaceBetween={15} breakpoints={{ 450: { slidesPerView: 3, }, 700: { slidesPerView: 5, }, 1024: { slidesPerView: 7, }, }} centeredSlides={false} slidesPerView={1} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[Controller, Thumbs]} className="mySwiper2 ">
                        {
                            TestimonialData.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <img className='sm:w-full w-1/2' src={items.img} alt="img" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='mt-5'>
                    <Swiper onSwiper={setThumbsSwiper} centeredSlides={false}  slidesPerView={1} watchSlidesProgress={true} effect={'flip'} modules={[EffectFade, Thumbs]} autoplay={false} className="mySwiper flex justify-center items-center duration-300" >
                        {
                            TestimonialData.map((items, index) => (
                                <SwiperSlide key={index}>
                                    <h2 className='text-black text-lg font-Poppins font-semibold pt-2 leading-normal text-center'>{items.name}</h2>
                                    <p className='text-[#4D4D4D] text-xs font-Poppins pt-1 font-light leading-normal text-center'>{items.Profession}</p>
                                    <p className='text-black font-Poppins font-light leading-normal text-sm mt-3 max-w-[350px] mx-auto text-center'>{items.bio}</p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials