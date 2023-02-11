<script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

    import { Swiper, SwiperSlide } from 'swiper/svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
</script>

<section>
    <Swiper
        grabCursor={true}
        spaceBetween={0}
        centeredSlides={true}
        pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
        <SwiperSlide class="w-full">
            <div
                class="max-md:bg-[url('src/lib/assets/Image/imgBannerMobile1.png')] md:bg-[url('src/lib/assets/Image/Mask_groupBanner1.png')] h-[560px] bg-no-repeat w-full bg-center max-md:bg-cover"
            >
                <div class="h-full flex flex-col items-center justify-center max-md:p-6">
                    <div class=" items-center flex flex-col text-center">
                        <h2 class="max-md:text-2xl text-4xl font-bold text-yellow-400 ">Giải pháp thúc đẩy Doanh số</h2>
                        <h3 class="text-white font-bold max-md:text-xl text-4.5xl leading-none">
                            Qua việc quản lí cửa hàng dễ dàng
                        </h3>
                    </div>
                    <h3 class="max-md:text-sm text-lg text-white font-bold mt-7 leading-5 text-center">
                        Phần mềm quản lí cửa hàng - Dễ dàng sử dụng - Quản lí nhiều địa điểm
                    </h3>
                    <button class="btn-prymary px-[28px] py-[10px] mt-7 uppercase text-xl">Đăng ký ngay</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <div
                class="max-md:bg-[url('src/lib/assets/Image/imgBannerMobile2.png')] md:bg-[url('src/lib/assets/Image/Mask_groupBanner2.png')] h-[560px] bg-no-repeat w-full bg-center max-md:bg-cover"
            >
                <div
                    class="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full max-md:justify-start max-md:text-center"
                >
                    <div class="flex items-center max-md:justify-start max-md:text-center max-md:w-full">
                        <div
                            class="text-[55px] text-primary font-bold bottom-0 flex items-center relative max-md:text-center max-md:flex max-md:justify-center max-md:items-center max-md:w-full"
                        >
                            <h1 class="h-full md:before:content-imgGift md:before:absolute pl-[60px] md:before:left-0">
                                Miễn phí
                            </h1>
                        </div>
                    </div>
                    <h2 class="font-bold text-3xl text-yellow-650">01 Landing page Booking website</h2>
                    <h4 class="font-bold text-3xl text-blue-900">cho Spa của bạn</h4>
                    <div class="max-md:w-full max-md:flex max-md:justify-center max-md:text-center ">
                        <button
                            class="left-0 btn px-[28px] py-[10px] text-left mt-7 uppercase w-fit bg-yellow-500 animate-scale "
                        >
                            Đăng ký ngay
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide class="w-full">
            <div
                class="max-md:bg-[url('src/lib/assets/Image/imgBannerMobile3.png')] md:bg-[url('src/lib/assets/Image/Mask_groupBanner3.png')] h-[560px] bg-no-repeat w-full bg-center max-md:bg-cover"
            >
                <div
                    class="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full max-md:justify-end max-md:pb-8"
                >
                    <div class="relative flex items-center">
                        <div
                            class="font-bold max-md:text-base text-lg flex items-center justify-center p-2 w-fit bg-green-500 text-white rounded-full absolute left-0 top-0 "
                        >
                            <i class="fa-solid fa-check" />
                        </div>
                        <div class="ml-11 max-md:text-2xl text-3xl font-bold">
                            Hoàn tiền<span class="text-primary">100%</span> nếu <br />
                            không hài lòng trong <br />
                            <span class="text-yellow-500">1 tháng</span> sử dụng
                        </div>
                    </div>
                    <div class="relative flex items-center mt-7">
                        <div
                            class="font-bold max-md:text-base text-lg flex items-center justify-center p-2 w-fit bg-green-500 text-white rounded-full absolute left-0 top-0 "
                        >
                            <i class="fa-solid fa-check" />
                        </div>
                        <div class="ml-11 max-md:text-2xl text-3xl font-bold ">
                            <span class="text-primary">Miễn phí</span> hỗ trợ cài đặt
                            <br /> máy in nhiệt
                        </div>
                    </div>

                    <button
                        class="left-0 btn bg-yellow-500 animate-scale px-[28px] py-[10px] text-left mt-7 uppercase w-fit"
                    >
                        Đăng ký ngay
                    </button>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</section>
