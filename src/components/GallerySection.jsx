import { use, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";




const GallerySection = () => {
  const images = [
    "https://res.cloudinary.com/div7mzklt/image/upload/v1757765657/Rainbow_Day_1_xrwl6s.webp",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1757765659/Rainbow_Day_klyooo.webp",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1757765658/%E0%B4%AC%E0%B4%B7%E0%B5%80%E0%B5%BC_%E0%B4%A6%E0%B4%BF%E0%B4%A8%E0%B4%BE%E0%B4%98%E0%B5%8B%E0%B4%B7%E0%B4%82_6_std%E0%B4%AC%E0%B4%BE%E0%B4%B2%E0%B4%95%E0%B4%BE%E0%B4%B2%E0%B5%8D%E0%B4%AF%E0%B4%B8%E0%B4%96%E0%B4%BF_%E0%B4%AE%E0%B4%9C%E0%B5%80%E0%B4%A6%E0%B5%8D_%E0%B4%B8%E0%B5%81%E0%B4%B9%E0%B4%B1_nbwcuk.webp",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1757765656/%E0%B4%AC%E0%B4%B7%E0%B5%80%E0%B5%BC_%E0%B4%A6%E0%B4%BF%E0%B4%A8%E0%B4%98%E0%B5%8B%E0%B4%B7%E0%B4%82_5_std%E0%B4%AE%E0%B4%A4%E0%B4%BF%E0%B4%B2%E0%B5%81%E0%B4%95%E0%B5%BE_%E0%B4%AC%E0%B4%B7%E0%B5%80%E0%B5%BC_%E0%B4%A8%E0%B4%BE%E0%B4%B0%E0%B4%BE%E0%B4%AF%E0%B4%A3%E0%B4%BF_1_gyfj0m.webp",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1757765656/%E0%B4%AC%E0%B4%B7%E0%B5%80%E0%B5%BC_%E0%B4%A6%E0%B4%BF%E0%B4%A8%E0%B4%98%E0%B5%8B%E0%B4%B7%E0%B4%82_5_std%E0%B4%AE%E0%B4%A4%E0%B4%BF%E0%B4%B2%E0%B5%81%E0%B4%95%E0%B5%BE_%E0%B4%AC%E0%B4%B7%E0%B5%80%E0%B5%BC_%E0%B4%A8%E0%B4%BE%E0%B4%B0%E0%B4%BE%E0%B4%AF%E0%B4%A3%E0%B4%BF_njxqpn.webp",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1757765654/%E0%B4%AC%E0%B4%B7%E0%B5%80%E0%B5%BC_%E0%B4%A6%E0%B4%BF%E0%B4%A8%E0%B4%BE%E0%B4%98%E0%B5%8B%E0%B4%B7%E0%B4%823_std_%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%81%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B5%81%E0%B4%AA%E0%B5%8D%E0%B4%AA%E0%B4%BE_%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%8A%E0%B4%B0%E0%B4%BE%E0%B4%A8%E0%B5%87%E0%B4%A3%E0%B5%8D%E0%B4%9F%E0%B4%BE%E0%B5%BC_%E0%B4%A8%E0%B5%8D%E0%B4%A8%E0%B5%8D_%E0%B4%95%E0%B5%81%E0%B4%9E%E0%B5%8D%E0%B4%9E%E0%B4%BF%E0%B4%AA%E0%B4%BE%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%81%E0%B4%AE%E0%B5%8D%E0%B4%AE_%E0%B4%A8%E0%B4%BF%E0%B4%B8%E0%B4%BE%E0%B5%BC_%E0%B4%85%E0%B4%B9%E0%B4%AE%E0%B5%8D%E0%B4%AE%E0%B4%A6%E0%B5%8D_wggb8a.webp",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1757765655/%E0%B4%AC%E0%B4%B7%E0%B5%80%E0%B5%BC_%E0%B4%A6%E0%B4%BF%E0%B4%A8%E0%B4%BE%E0%B4%98%E0%B5%8B%E0%B4%B7%E0%B4%82_2_std%E0%B4%AE%E0%B5%81%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B5%80%E0%B4%9F%E0%B5%8D%E0%B4%9F%E0%B5%81%E0%B4%95%E0%B4%B3%E0%B4%BF%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B4%A8%E0%B5%8D%E0%B4%B1%E0%B5%86_%E0%B4%AE%E0%B4%95%E0%B5%BE_-%E0%B4%B8%E0%B5%88%E0%B4%A8%E0%B4%AC_%E0%B4%92%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B4%A3%E0%B5%8D%E0%B4%A3%E0%B5%BB_%E0%B4%AA%E0%B5%8B%E0%B4%95%E0%B5%8D%E0%B4%95%E0%B5%BC_dx1aos.webp",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1757765649/Basheer_day_celebration_1_std_-_%E0%B4%AA%E0%B4%BE%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%81%E0%B4%AE%E0%B5%8D%E0%B4%AE%E0%B4%AF%E0%B5%81%E0%B4%9F%E0%B5%86_%E0%B4%86%E0%B4%9F%E0%B5%8D%E0%B4%95%E0%B4%A5%E0%B4%BE%E0%B4%AA%E0%B4%BE%E0%B4%A4%E0%B5%8D%E0%B4%B0%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B5%BE_%E0%B4%AA%E0%B4%BE%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%81%E0%B4%AE%E0%B5%8D%E0%B4%AE_%E0%B4%AC%E0%B4%B7%E0%B5%80%E0%B5%BC_hkhyv5.webp",

];


  const [numbersToShow, setNumbersToShow] = useState(3)

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/gallery"){
      setNumbersToShow(images.length)
    }
  },[location.pathname])

  return (
    <>
      <div className="md:py-40 py-20 md:px-40 bg-white">
        <h2 className="text-3xl font-bold mb-10 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center px-3">
          {images.slice(0,numbersToShow).map((img, i) => (
            <img key={i} src={img} alt="Gallery" className="rounded-lg shadow w-100 h-full" />
          ))}
        </div>
        <div className="text-center mt-10 ">
           {
            location.pathname !== "/gallery" && <Link to="/gallery" ><button className="px-4 py-2  text-white rounded hover:bg-blue-900 cursor-pointer"  style={{ backgroundColor: '#273359' }}>
           View More
          </button></Link>
           }
        </div>
      </div>
    </>
  );
};

export default GallerySection;
