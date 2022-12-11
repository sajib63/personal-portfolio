import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const CustomerSlide = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Sunday
                    </Link>{" "}
                    <span className="text-white">— 1 Feb 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahady Hasan
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/274498694_666847504459704_1359301567678836362_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEkry2HndI5Mfmc5CmAHBDisBXraafYkTiwFetpp9iROHkk8dEwuzJ2nYQy0TLuU2BMx3f8-CW2NyPSqeWpgukP&_nc_ohc=wkgL9MAsIvUAX_rnjZA&_nc_ht=scontent.fdac151-1.fna&oh=00_AfBLlNOoojIQkxV5fKbp4yVvntp7BBRwBwSNmeJdI6Aosg&oe=639B0665"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahady Hasan
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Friday
                    </Link>{" "}
                    <span className="text-white">— 15 Nov 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Happy new Year"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Masud Rana
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-1/310527720_1325551018273284_5652379696558151827_n.jpg?stp=dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeHjm1a3oqiBgdXFBtfbAmfIHRlUoW8XUtAdGVShbxdS0AVvHnNeLg7g91DunzzbIL1i1Z6hfiCYU1uC39oyTqqR&_nc_ohc=eyRn1DBAwRYAX9DWtTl&_nc_ht=scontent.fdac151-1.fna&oh=00_AfCvaC2vd1ifbS2zqKKI1yHZ5diFwUkitM8zpeAgFpGplw&oe=639A9A39"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Masud Rana
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-zinc-700 border rounded shadow-sm">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <Link
                      to=""
                      className="transition-colors duration-200 text-white hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      Monday
                    </Link>{" "}
                    <span className="text-white">— 28 Dec 2020</span>
                  </p>
                  <Link
                    to=""
                    aria-label="Article"
                    title="Why i love C++"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-white transition-colors duration-200 hover:text-white"
                  >
                    Mahbuba Akhter
                  </Link>
                  <p className="mb-5 text-white">
                    Very Impressive And I'm Very Happy With Done my Project By
                    Him
                  </p>
                  <div className="flex items-center">
                    <Link
                      to=""
                      aria-label="Author"
                      title="Author"
                      className="mr-3"
                    >
                      <img
                        src="https://i.ibb.co/pjjJX8P/img-2-removebg-preview-1.png"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                      />
                    </Link>
                    <div>
                      <Link
                        to=""
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-white transition-colors duration-200 hover:text-white"
                      >
                        Mahbuba Akhter
                      </Link>
                      <p className="text-sm font-medium leading-4 text-white">
                        Author
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </>
    </div>
  );
};

export default CustomerSlide;
