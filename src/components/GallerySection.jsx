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
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551536/WhatsApp_Image_2025-10-06_at_16.29.46_c3b1d41b_cfnyw9.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551537/WhatsApp_Image_2025-10-06_at_16.29.43_91c2e02c_potj2h.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551534/WhatsApp_Image_2025-10-06_at_16.29.44_e2847720_t45l25.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551532/WhatsApp_Image_2025-10-06_at_16.29.49_acb84a69_slhlhy.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551531/WhatsApp_Image_2025-10-08_at_11.51.34_fd19e113_abqthu.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551530/WhatsApp_Image_2025-10-08_at_11.51.33_d779dab9_wz2ynn.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551528/WhatsApp_Image_2025-10-08_at_11.51.36_a3debd32_djodea.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551528/WhatsApp_Image_2025-10-08_at_11.51.33_89747e58_snutas.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551515/WhatsApp_Image_2025-10-08_at_11.51.36_64c7d029_zarh9t.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551521/WhatsApp_Image_2025-10-08_at_11.51.36_9e986520_ywqkxj.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551525/WhatsApp_Image_2025-10-08_at_11.51.32_82de3b7c_xrf9lt.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551525/WhatsApp_Image_2025-10-06_at_16.29.07_592440d1_xf8hin.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551520/WhatsApp_Image_2025-10-08_at_11.51.37_c1af35fa_bs1adi.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551523/WhatsApp_Image_2025-10-08_at_11.51.39_2625cf7b_lz9cio.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551515/WhatsApp_Image_2025-10-08_at_11.51.38_aee6b95f_uue33r.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551513/WhatsApp_Image_2025-10-08_at_11.51.38_80f04799_dpltr0.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551509/WhatsApp_Image_2025-10-08_at_11.51.41_eff6ecf9_gafljd.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551512/WhatsApp_Image_2025-10-08_at_11.51.37_4f513b55_ccfxow.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551509/WhatsApp_Image_2025-10-08_at_11.51.41_e39ab9d2_toxr9s.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551509/WhatsApp_Image_2025-10-08_at_11.51.34_d29fd8a9_oynhpr.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551508/WhatsApp_Image_2025-10-08_at_11.51.47_b6f3f831_qgxm2q.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551508/WhatsApp_Image_2025-10-08_at_11.51.35_162eec92_yhdmey.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551507/WhatsApp_Image_2025-10-08_at_11.51.40_a8094d2e_ksgxz3.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551499/WhatsApp_Image_2025-10-08_at_11.51.55_f54c0a81_u7fdxx.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551503/WhatsApp_Image_2025-10-08_at_11.51.46_a6d39619_dipunn.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551499/WhatsApp_Image_2025-10-08_at_11.51.41_f7ccb57f_bhtbuq.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551497/WhatsApp_Image_2025-10-08_at_11.52.06_5767adb3_mmpt5b.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551497/WhatsApp_Image_2025-10-08_at_11.51.43_21798f73_cfzf0l.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551496/WhatsApp_Image_2025-10-08_at_11.51.50_8b613bf4_abtygb.jpg",
    "https://res.cloudinary.com/div7mzklt/image/upload/v1760551494/WhatsApp_Image_2025-10-08_at_11.52.11_1837ec0f_ruavjm.jpg",

  ];


  const [numbersToShow, setNumbersToShow] = useState(3)

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/gallery") {
      setNumbersToShow(images.length)
    }
  }, [location.pathname])

  return (
    <>
      <div className="md:py-40 py-20 md:px-40 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-10 text-center" data-aos="fade-up" data-aos-duration="2000">Gallery</h2>
        <div className="columns-1 md:columns-3  gap-4 place-items-center px-3 " >
          {images.slice(0, numbersToShow).map((img, i) => (
            <div key={i} className="w-full h-auto  " data-aos="fade-up" data-aos-duration="1000">
              <img src={img} alt="Gallery" className="rounded-lg shadow w-full h-auto  overflow-hidden transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl  mb-4" />

            </div>))}
        </div>
        <div className="text-center mt-10 ">
          {
            location.pathname !== "/gallery" && <Link to="/gallery" ><button className="px-4 py-2  text-white bg-[#273359]  border-2  rounded-lg hover:text-[#273359] hover:bg-white hover:border-2 hover:cursor-pointer"  data-aos="fade-up" data-aos-duration="1000">
              View More
            </button></Link>
          }
        </div>
      </div>
    </>
  );
};

export default GallerySection;
