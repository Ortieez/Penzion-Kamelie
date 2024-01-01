import Image1 from "../images/house/IMG-20230724-WA0001.jpg";
import Image2 from "../images/house/IMG-20230724-WA0002.jpg";
import Image3 from "../images/house/IMG-20230724-WA0003.jpg";
import Image4 from "../images/house/IMG-20230724-WA0004.jpg";
import Image5 from "../images/house/IMG-20230724-WA0005.jpg";
import Image6 from "../images/house/IMG-20230724-WA0006.jpg";
import Image7 from "../images/house/IMG-20230724-WA0007.jpg";
import Image8 from "../images/house/IMG-20230724-WA0008.jpg";
import Image9 from "../images/house/IMG-20230724-WA0009.jpg";
import Image10 from "../images/house/IMG-20230724-WA0010.jpg";
import Image11 from "../images/house/IMG-20230724-WA0011.jpg";
import Image12 from "../images/house/IMG-20230724-WA0012.jpg";
import Image13 from "../images/house/IMG-20230724-WA0013.jpg";
import Image14 from "../images/house/IMG-20230724-WA0014.jpg";
import Image15 from "../images/house/IMG-20230724-WA0015.jpg";
import Image16 from "../images/house/IMG-20230724-WA0016.jpg";
import Image17 from "../images/house/IMG-20230724-WA0017.jpg";
import Image18 from "../images/house/IMG-20230724-WA0018.jpg";
import Image19 from "../images/house/IMG-20230724-WA0019.jpg";
import Image20 from "../images/house/IMG-20230724-WA0020.jpg";
import Image21 from "../images/house/IMG-20230724-WA0021.jpg";
import Image22 from "../images/house/IMG-20230724-WA0022.jpg";
import Image23 from "../images/house/IMG-20230724-WA0023.jpg";
import Image24 from "../images/house/IMG-20230724-WA0024.jpg";
import Image25 from "../images/house/IMG-20230724-WA0025.jpg";
import Image26 from "../images/house/IMG-20230724-WA0026.jpg";
import Image27 from "../images/house/IMG-20230724-WA0027.jpg";
const allImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
    Image26,
    Image27
]
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import {useEffect} from "react";

export const ImageGallery = () => {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#photogallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();
    }, []);

    return (
        <>
            <div className="mt-10 flex flex-wrap justify-center gap-5" id="photogallery">
                {allImages.map((image, index) => {
                    return (
                        <a href={image.src}
                       data-pswp-width={image.width}
                       data-pswp-height={image.height}
                           key={index}
                       target="_blank">
                        <img src={image.src} className={"max-sm:w-full w-60 select-none"} width="240" height="180" alt=""/>
                    </a>
                )
                })}
            </div>
        </>
    );
};