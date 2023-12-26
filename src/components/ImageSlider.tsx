import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";
import Image1 from '../images/house/IMG-20230724-WA0001.jpg';
import Image2 from '../images/house/IMG-20230724-WA0002.jpg';
import Image3 from '../images/house/IMG-20230724-WA0003.jpg';
import Image4 from '../images/house/IMG-20230724-WA0004.jpg';
import Image5 from '../images/house/IMG-20230724-WA0005.jpg';

export default () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' !bg-white !h-5 !w-5"></span>';
        },
    };



    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            className={"rounded-2xl"}
            autoplay={true}
            modules={[Pagination]}
            pagination={pagination}
        >
            <SwiperSlide>
                <img src={Image1.src} className={"w-full object-cover select-none"} style={{ height: 'calc(90svh - 125px)' }} alt={"Image"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image2.src} className={"w-full h-[84svh] object-cover select-none"} style={{ height: 'calc(90svh - 125px)' }} alt={"Image"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image3.src} className={"w-full h-[84svh] object-cover select-none"} style={{ height: 'calc(90svh - 125px)' }} alt={"Image"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image4.src} className={"w-full h-[84svh] object-cover select-none"} style={{ height: 'calc(90svh - 125px)' }} alt={"Image"}/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image5.src} className={"w-full h-[84svh] object-cover select-none"} style={{ height: 'calc(90svh - 125px)' }} alt={"Image"}/>
            </SwiperSlide>
        </Swiper>
    );
};