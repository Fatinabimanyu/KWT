import AOS from "aos";
import "aos/dist/aos.css";
import ArticleCard from "../ArticleCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ArticleCardSkeleton from "../ArticleCardSkeleton";

export default function ArtikelInformasi() {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchArticles();
  }, [page]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/articles`,
        {
          params: {
            page: page,
            limit: 5,
          },
        }
      );
      setArticles(response.data.articles);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      toast.error("Error fetching articles: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div
      className="bg-basic bg-cover min-h-screen py-8 xl:py-24 pb-8 px-8 xl:px-24"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="font-black pointer-events-none">
        <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
          <div className="text-[#545B77] font-Satisfy text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
            Artikel Terbaru Bimorejo
            <div className="text-[#545B77] sm:text-base text-center mr-10 text">
              Telusuri informasi terbaru tentang Bimorejo
            </div>
          </div>
        </div>
      </div>
      <div className="borderflex flex-col items-center px-6">
        <div className="grid grid-cols-1 gap-6 w-full max-w-screen">
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
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          className={`rounded-lg p-2 ${
            page === 1 ? "bg-gray-200" : "bg-green-500"
          }`}
          onClick={() => handleChangePage(null, page - 1)}
          disabled={page === 1}
        >
          Sebelumnya
        </button>
        <span>
          Halaman {page} dari {totalPages}
        </span>
        <button
          className={`rounded-lg p-2 ${
            page >= totalPages ? "bg-gray-200" : "bg-green-500"
          }`}
          onClick={() => handleChangePage(null, page + 1)}
          disabled={page >= totalPages}
        >
          Selanjutnya
        </button>
      </div>
    </div>
  );
}
