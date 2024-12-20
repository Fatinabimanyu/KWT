import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Slider from "react-slick";
import ArticleCard from "../ArticleCard";
import ArticleCardSkeleton from "../ArticleCardSkeleton"; // Import komponen Skeleton

export default function Artikel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles`,
        {
          params: {
            page: 1,
            limit: 5,
          },
        }
      );
      setArticles(response.data.articles);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  var settings = {
    centerMode: true,
    dots: true,
    arrows: true,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: false,
    pauseOnHover: false,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <div className="bg-[#E7D4B5] items-center pb-16 pt-2 xl:pt-10 px-8 xl:px-24">
      <div className="">
        <div
          className="relative items-center text-white text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-[#545B77] font-Satisfy text-2xl xl:text-4xl font-bold mb-1 text-center">
                Kegiatan terabru
              </div>
            </div>
          </div>
          <div className="text-[#545B77] sm:text-base xl:text-xl text-center mb-10">
            KWT Good Farm+
          </div>
          <Slider {...settings} className="gap-4">
            {loading
              ? [1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="px-4">
                    <ArticleCardSkeleton />
                  </div>
                ))
              : articles.map((article) => (
                  <div key={article._id} className="px-4">
                    <ArticleCard key={article.id} article={article} />
                  </div>
                ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
