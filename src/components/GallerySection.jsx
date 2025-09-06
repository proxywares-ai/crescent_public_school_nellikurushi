import { use, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";




const GallerySection = () => {
  const images = [
    "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg", "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg", "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg",
    "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg", "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg", "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg",
    "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg", "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg", "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg",
    "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg", "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg", "https://as1.ftcdn.net/v2/jpg/03/47/61/34/1000_F_347613462_9QbJFRzzchgidw8QSFs2zbPggVa9MMEL.jpg",
  ];


  const [numbersToShow, setNumbersToShow] = useState(9)

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 place-items-center">
          {images.slice(0,numbersToShow).map((img, i) => (
            <img key={i} src={img} alt="Gallery" className="rounded-lg shadow w-100 h-full" />
          ))}
        </div>
        <div className="text-center mt-10">
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
