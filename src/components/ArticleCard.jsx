export default function ArticleCard({ article }) {
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="text-black flex flex-col justify-center items-center p-3 shadow-[0_0_5px_rgba(0,0,0,.6)] bg-white rounded-[15px] w-full transition">
      <img
        src={`data:${article.image.contentType};base64,${article.image.data}`}
        alt={article.title}
        className="w-full max-h-36 md:max-h-48 lg:max-h-60 object-cover rounded-t-[15px]"
      />
      <div className="flex justify-center items-center gap-5 mt-[20px]">
        <div className="bg-green-500 text-black font-poppins text-[18px] xsm:text-[15px] px-8 md:px-12 py-2 rounded-full">
          <span>{article.writer}</span>
        </div>
        <div className="text-[18px] xsm:text-[12px] font-semibold">
          {formatDate(article.createdAt)}
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-[10px] md:mt-[20px] text-center">
        <h1 className="text-[24px] xsm:text-[20px] font-bold px-[5%]">
          {article.title}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-5 mt-[10px]">
        <p className="text-[16px] xsm:text-[12px] w-[90%] text-justify">
          {article.content}
        </p>
      </div>
    </div>
  );
}
