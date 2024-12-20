export default function ArticleCardPilihan({
  writer,
  date,
  title,
  content,
  onClick,
}) {
  return (
    <div
      className="text-black flex flex-col justify-center items-center p-3 shadow-[0_0_5px_rgba(0,0,0,.6)] bg-white rounded-[15px] w-full transition hover:cursor-pointer"
      onClick={onClick}
    >
      <div
        data-aos-delay="200"
        className="w-full aspect-[620/325] bg-gradient-to-br from-[#308681] from-20% to-[#FAFF04] max-h-36 md:max-h-48 lg:max-h-60 rounded-[15px] flex justify-center items-center text-white text-[24px] md:text-[30px] font-semibold text-shadow-1"
      >
        Klik untuk Lebih Lengkap
      </div>
      <div className="flex justify-center items-center gap-5 mt-[20px]">
        <div className="bg-green-500 text-black font-poppins text-[18px] xsm:text-[15px] px-8 md:px-12 py-2 rounded-full">
          <span>{writer}</span>
        </div>
        <div className="text-[18px] xsm:text-[12px] font-semibold">{date}</div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-[10px] md:mt-[20px] text-center">
        <h1 className="text-[24px] xsm:text-[20px] font-bold">{title}</h1>
      </div>
      <div className="flex justify-center items-center gap-5 mt-[10px]">
        <p className="text-[16px] xsm:text-[12px] w-[90%] text-center">
          {content}
        </p>
      </div>
    </div>
  );
}
