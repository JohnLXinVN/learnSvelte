<script>
    import Footer from './../lib/component/Footer.svelte';
    import Header from './../lib/component/Header.svelte';
    import * as Yup from 'yup';
    import { Form, Message, isInvalid } from 'svelte-yup';

    import { enhance } from '$app/forms';

    // import Swiper core and required modules
    import { Navigation, Pagination, Autoplay } from 'swiper';

    import { Swiper, SwiperSlide } from 'swiper/svelte';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    import iconIntroduce1 from '$lib/assets/Image/15721992_1Introduce1.png';
    import iconIntroduce2 from '$lib/assets/Image/23491232_1Introduce2.png';
    import iconIntroduce3 from '$lib/assets/Image/1835955_1Introduce3.png';
    import imgService1 from '$lib/assets/Image/Rectangle_107service1.png';
    import imgService2 from '$lib/assets/Image/Rectangle_107service2.png';
    import imgService3 from '$lib/assets/Image/Rectangle_107service3.png';
    import imgService4 from '$lib/assets/Image/Rectangle_107service4.png';
    import imgService5 from '$lib/assets/Image/Rectangle_107service5.png';
    import imgService6 from '$lib/assets/Image/Rectangle_107service6.png';
    import imgService7 from '$lib/assets/Image/Rectangle_107service7.png';
    import imgService8 from '$lib/assets/Image/Rectangle_107service8.png';
    import imgFeature from '$lib/assets/Image/Group121imgfeature.png';
    import imgEstablish from '$lib/assets/Image/Group47389establish.png';
    import WhyUsIcon1 from '$lib/assets/Image/3281142Whyusicon1.png';
    import WhyUsIcon2 from '$lib/assets/Image/3094806Whyusicon2.png';
    import WhyUsIcon3 from '$lib/assets/Image/4252491Whyusicon3.png';
    import WhyUsIcon4 from '$lib/assets/Image/4230869Whyusicon4.png';
    import imgBlog1 from '$lib/assets/Image/Rectangle88blog1.png';
    import imgBlog2 from '$lib/assets/Image/Rectangle94blog2.png';
    import imgBlog3 from '$lib/assets/Image/Rectangle95blog3.png';
    import iconClient1 from '$lib/assets/Image/image0clitent1.png';
    import iconClient2 from '$lib/assets/Image/6clitent2.png';
    import iconClient3 from '$lib/assets/Image/2clitent3.png';
    import iconClient4 from '$lib/assets/Image/15clitent4.png';
    import iconClient5 from '$lib/assets/Image/14clitent5.png';
    import iconClient6 from '$lib/assets/Image/11clitent6.png';
    import imgResisters from '$lib/assets/Image/47354imgResrister.png';
    import featureIcon1 from '$lib/assets/Image/featureicon1.png';
    import featureIcon2 from '$lib/assets/Image/featureicon2.png';
    import featureIcon3 from '$lib/assets/Image/featureicon3.png';
    import featureIcon4 from '$lib/assets/Image/featureicon4.png';
    import featureIcon5 from '$lib/assets/Image/featureicon5.png';
    import featureIcon6 from '$lib/assets/Image/featureicon6.png';
    import featureIcon7 from '$lib/assets/Image/featureicon7.png';
    import featureIcon8 from '$lib/assets/Image/featureicon8.png';
    import featureIcon9 from '$lib/assets/Image/featureicon9.png';
    import featureIcon10 from '$lib/assets/Image/featureicon10.png';
    import featureIcon11 from '$lib/assets/Image/featureicon11.png';
    import featureIcon12 from '$lib/assets/Image/featureicon12.png';
    import featureMobile1 from '$lib/assets/Image/featuremobile1.png';
    import featureMobile2 from '$lib/assets/Image/featuremobile2.png';
    import featureMobile3 from '$lib/assets/Image/featuremobile3.png';
    import featureMobile4 from '$lib/assets/Image/featuremobile4.png';
    import featureMobile5 from '$lib/assets/Image/featuremobile5.png';
    import featureMobile6 from '$lib/assets/Image/featuremobile6.png';
    import featureMobile7 from '$lib/assets/Image/featuremobile7.png';
    import featureMobile8 from '$lib/assets/Image/featuremobile8.png';
    import featureMobile9 from '$lib/assets/Image/featuremobile9.png';
    import featureMobile10 from '$lib/assets/Image/featuremobile10.png';
    import featureMobile11 from '$lib/assets/Image/featuremobile11.png';
    import featureMobile12 from '$lib/assets/Image/featuremobile12.png';
    import { activeFeature, activeModalNav } from '../store/store';

    let activeFeatureOn;
    activeFeature.subscribe((value) => {
        activeFeatureOn = value;
    });

    const handleSetModal = () => {
        activeModalNav.update((value) => {
            return !value;
        });
    };
    let handleModalOn;

    activeModalNav.subscribe((value) => {
        handleModalOn = value;
    });

    export let form;
    $: console.log('form', form);
</script>

<section class="relative">
    <Header />
    <div class="mt-header">
        <!--Begin banner-->
        <div>
            <Swiper
                grabCursor={true}
                spaceBetween={0}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide class="w-full">
                    <div
                        class="max-md:bg-[url('$lib/assets/Image/imgBannerMobile1.png')] md:bg-[url('$lib/assets/Image/Mask_groupBanner1.png')] h-[560px] bg-no-repeat w-full bg-center max-md:bg-cover"
                    >
                        <div class="h-full flex flex-col items-center justify-center max-md:p-6">
                            <div class=" items-center flex flex-col text-center">
                                <h2 class="max-md:text-2xl text-4xl font-bold text-yellow-400 ">
                                    Giải pháp thúc đẩy Doanh số
                                </h2>
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
                        class="max-md:bg-[url('$lib/assets/Image/imgBannerMobile2.png')] md:bg-[url('$lib/assets/Image/Mask_groupBanner2.png')] h-[560px] bg-no-repeat w-full bg-center max-md:bg-cover"
                    >
                        <div
                            class="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full max-md:justify-start max-md:text-center"
                        >
                            <div class="flex items-center max-md:justify-start max-md:text-center max-md:w-full">
                                <div
                                    class="text-[55px] text-primary font-bold bottom-0 flex items-center relative max-md:text-center max-md:flex max-md:justify-center max-md:items-center max-md:w-full"
                                >
                                    <h1
                                        class="h-full md:before:content-imgGift md:before:absolute max-md:pl-0 pl-[60px] md:before:left-0"
                                    >
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
                        class="max-md:bg-[url('$lib/assets/Image/imgBannerMobile3.png')] md:bg-[url('$lib/assets/Image/Mask_groupBanner3.png')] h-[560px] bg-no-repeat w-full bg-center max-md:bg-cover"
                    >
                        <div
                            class="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full max-md:justify-end max-md:pb-8"
                        >
                            <div class="relative flex items-center">
                                <div
                                    class="font-bold max-md:text-base text-lg flex items-center justify-center p-2 w-fit bg-green-500 text-white rounded-full absolute left-0 top-0 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        />
                                    </svg>
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
        </div>
        <!--End Banner-->
        <!-- Begin introduce  -->
        <div class="max-w-screen-lg mx-auto px-4 mt-14">
            <h1 class="mb-7 font-bold text-3xl">Giới thiệu</h1>
            <p class="font-semibold text-sm w-[60%] text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus quo quaerat necessitatibus
                magni excepturi modi accusantium, nulla odit sint eos! Ipsam magni doloremque dolorem animi, facere hic
                libero deserunt.
            </p>
            <div class="mt-7 sm:flex max-sm:flex-col justify-center items-center ">
                <div class="flex flex-col justify-center ] items-center px-5 text-center max-md:py-4">
                    <img src={iconIntroduce1} alt="" class="mb-9" />
                    <p class="font-bold text-lg">Pần mềm Xspa Quản lý đặt lịch Phát triển doanh số</p>
                </div>
                <div
                    class=" flex flex-col justify-center  items-center px-5 text-center max-md:py-4 max-md:border-y-1 max-md:border-y-[1px] max-md:border-gray-300 md:border-x-1 md:border-x-[1px] md:border-gray-300 "
                >
                    <img src={iconIntroduce2} alt="" class="mb-9" />
                    <p class="font-bold text-lg">Quản lý nhiều cơ sở trên cùng một phần mềm</p>
                </div>
                <div class="flex flex-col justify-center  items-center px-5 text-center max-md:py-4">
                    <img src={iconIntroduce3} alt="" class="mb-9" />
                    <p class="font-bold text-lg">Có thể tuỳ biến 100% và chạy tên miền riêng theo thương hiệu</p>
                </div>
            </div>
        </div>
        <!-- End Introduce -->

        <!-- Begin service -->
        <div class="max-w-screen-lg mx-auto px-4 mt-14" id="service">
            <h1 class="mb-7 font-bold text-3xl">Dịch vụ</h1>
            <p class="font-semibold text-sm w-[60%] text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus quo quaerat necessitatibus
                magni excepturi modi accusantium, nulla odit sint eos! Ipsam magni doloremque dolorem animi, facere hic
                libero deserunt.
            </p>
            <div class="grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 gap-5 mt-11">
                <div class="relative">
                    <img src={imgService1} alt="" />
                    <div class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md">
                        <p class="font-bold text-sm text-center">Thẩm mỹ viện</p>
                    </div>
                </div>
                <div class="relative">
                    <img src={imgService2} alt="" />
                    <div class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md">
                        <p class="font-bold text-sm text-center">Spa</p>
                    </div>
                </div>
                <div class="relative">
                    <img src={imgService3} alt="" />
                    <div class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md">
                        <p class="font-bold text-sm text-center">Salon Tóc</p>
                    </div>
                </div>
                <div class="relative">
                    <img src={imgService4} alt="" />
                    <div class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md">
                        <p class="font-bold text-sm text-center">Nail</p>
                    </div>
                </div>
                <div class="relative">
                    <img src={imgService5} alt="" />
                    <div class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md">
                        <p class="font-bold text-sm text-center">Massage</p>
                    </div>
                </div>
                <div class="relative">
                    <img src={imgService6} alt="" />
                    <div class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md">
                        <p class="font-bold text-sm text-center">Makeup</p>
                    </div>
                </div>
                <div class="relative">
                    <img src={imgService7} alt="" />
                    <div class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md">
                        <p class="font-bold text-sm text-center">Tatoo</p>
                    </div>
                </div>
                <div class="relative">
                    <img src={imgService8} alt="" />
                    <div class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md">
                        <p class="font-bold text-sm text-center">Châm cứu</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- End service -->

        <!-- Begin feature -->
        <div class="mt-14 select-feature max-lg:hidden" id="feature">
            <div class="max-w-screen-lg mx-auto px-4 pb-12 ">
                <div class="py-12 font-bold text-3xl">Tính năng</div>
                <div class="flex ">
                    <div class="text-left max-lg:w-[45%] lg:w-[40%]">
                        <button
                            class={activeFeatureOn == 'booking'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'booking';
                                    return value;
                                })}
                        >
                            <img src={featureIcon1} alt="" />

                            <h1 class="ml-4 text-white">Booking</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'quanligiuong'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'quanligiuong';
                                    return value;
                                })}
                        >
                            <img src={featureIcon2} alt="" />

                            <h1 class="ml-4 text-white">Quản lí giường</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'quanlihoadon'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'quanlihoadon';
                                    return value;
                                })}
                        >
                            <img src={featureIcon3} alt="" />
                            <h1 class="ml-4 text-white">Quản lí hoá đơn</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'quanlikhachhang'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'quanlikhachhang';
                                    return value;
                                })}
                        >
                            <img src={featureIcon4} alt="" />
                            <h1 class="ml-4 text-white">Quản lí khách hàng</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'thenap'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'thenap';
                                    return value;
                                })}
                        >
                            <img src={featureIcon5} alt="" />
                            <h1 class="ml-4 text-white">Thẻ nạp</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'quanlinophi'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'quanlinophi';
                                    return value;
                                })}
                        >
                            <img src={featureIcon6} alt="" />
                            <h1 class="ml-4 text-white">Quản lí nợ phí</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'goilieutrinh'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'goilieutrinh';
                                    return value;
                                })}
                        >
                            <img src={featureIcon7} alt="" />
                            <h1 class="ml-4 text-white">Gói liệu trình</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'quanlikhovattu'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'quanlikhovattu';
                                    return value;
                                })}
                        >
                            <img src={featureIcon8} alt="" />
                            <h1 class="ml-4 text-white">Quản lí kho, vật tư</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'quanlithuchi'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'quanlithuchi';
                                    return value;
                                })}
                        >
                            <img src={featureIcon9} alt="" />
                            <h1 class="ml-4 text-white">Quản lí thu chi</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'thongke'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'thongke';
                                    return value;
                                })}
                        >
                            <img src={featureIcon10} alt="" />
                            <h1 class="ml-4 text-white">Thông kê</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'thietlapchinhanh'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'thietlapchinhanh';
                                    return value;
                                })}
                        >
                            <img src={featureIcon11} alt="" />
                            <h1 class="ml-4 text-white">Thiết lập chi nhánh</h1>
                        </button>
                        <button
                            class={activeFeatureOn == 'phanquyentaikhoan'
                                ? 'cssItemSelectFeature activeItemNavSelectFeature'
                                : 'cssItemSelectFeature'}
                            on:click={() =>
                                activeFeature.update((value) => {
                                    value = 'phanquyentaikhoan';
                                    return value;
                                })}
                        >
                            <img src={featureIcon12} alt="" />
                            <h1 class="ml-4 text-white">Phân quyền tài khoản</h1>
                        </button>
                    </div>

                    {#if activeFeatureOn == 'booking'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Booking</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">Quản lý, sắp xếp lịch booking của khách hàng</h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'quanligiuong'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Quản lí giường</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'quanlihoadon'}
                        <div class=" ml-10 flex flex-col justify-center  items-center text-black">
                            <h1 class="font-bold text-2xl ">Quản lí hoá đơn</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'quanlikhachhang'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Quản lí khách hàng</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'thenap'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Thẻ nạp</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'quanlinophi'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Quản lí nợp phí</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'goilieutrinh'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Gói liệu trình</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'quanlikhovattu'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Quản lí kho, vật tư</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'quanlithuchi'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Quản lí thu chi</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'thongke'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Thống kê</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'thietlapchinhanh'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Thiết lập chi nhánh</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {:else if activeFeatureOn == 'phanquyentaikhoan'}
                        <div class=" ml-10 flex flex-col justify-center items-center text-black">
                            <h1 class="font-bold text-2xl ">Phân quyền tài khoản</h1>
                            <h2 class="mt-3 mb-7 font-medium text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                            </h2>
                            <img src={imgFeature} alt="" />
                        </div>
                    {/if}
                </div>
            </div>
        </div>

        <div class="mt-14 bg-[#005478] lg:hidden" id="feature">
            <div class="max-w-screen-lg mx-auto px-4 pb-12 ">
                <div class="py-7 font-bold text-3xl text-white">Tính năng</div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile1} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Booking</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile2} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Quản lý giường</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile3} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Quản lý hóa đơn</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile4} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Quản lý khách hàng</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile5} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Thẻ nạp</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile6} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Quản lý Nợ Phí</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile7} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Gói liệu trình</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile8} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Quản lý Kho, vật tư</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile9} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Quản lý Thu Chi</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile10} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Thống kê</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile11} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Thiết lập chi nhánh</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
                <div class="flex items-center py-4 border-t-2 border-opacity-20 border-white">
                    <div>
                        <img src={featureMobile12} alt="" />
                    </div>
                    <div class="ml-3">
                        <h1 class="font-bold text-base text-white">Phân quyền tài khoản</h1>
                        <p class="font-semibold text-sm text-gray-200">Quản lý, sắp xếp lịch booking của khách hàng</p>
                    </div>
                </div>
            </div>
        </div>
        <!--End feature-->

        <!-- Begin establish -->
        <div class="max-w-screen-lg mx-auto px-4 my-14 grid grid-cols-12 items-center" id="establish">
            <img src={imgEstablish} class="lg:col-span-6 md:col-span-4 max-md:col-span-12" alt="" />
            <div class="ml-[8%] lg:col-span-6 md:col-span-8 max-md:col-span-12 max-md:mt-10">
                <h1 class="font-bold text-2xl ">Thiết lập</h1>
                <div class="flex my-3 items-center">
                    <div
                        class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <div class="font-bold text-xs ml-2 text-gray-400">
                        Dễ dàng cài đặt mức giá, số lượng, cho từng dịch vụ, sản phẩm
                    </div>
                </div>
                <div class="flex my-3 items-center">
                    <div
                        class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <div class="font-bold text-xs ml-2 text-gray-400">
                        Cài đặt hoa hồng cho từng loại dịch vụ, nhân viên
                    </div>
                </div>
                <div class="flex my-3 items-center">
                    <div
                        class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <div class="font-bold text-xs ml-2 text-gray-400">Tạo nhân viên và chức vụ cho từng nhân viên</div>
                </div>
                <div class="flex my-3 items-center">
                    <div
                        class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <div class="font-bold text-xs ml-2 text-gray-400">Tạo mã khuyến mãi theo nhu cầu mong muốn</div>
                </div>
                <div class="flex my-3 items-center">
                    <div
                        class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <div class="font-bold text-xs ml-2 text-gray-400">Tạo combo dịch vụ + sản phẩm theo nhu cầu</div>
                </div>
                <div class="flex my-3 items-center">
                    <div
                        class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <div class="font-bold text-xs ml-2 text-gray-400">Thiết lập ghế/giường sử dụng dịch vụ</div>
                </div>
            </div>
        </div>
        <!-- End establish -->

        <!-- BeginWhyUs -->
        <div class="bg-[url('$lib/assets/Image/Rectangle106imgWhyUs.png')] py-16" id="whyus">
            <div class="max-w-screen-lg px-4 mx-auto ">
                <h1 class="font-bold text-3xl text-white">Tại sao chọn chúng tôi</h1>
                <div class="flex mt-14  flex-wrap">
                    <div
                        class=" lg:basis-[25%] max-lg:basis-[50%] max-lg:border-r-2 max-lg:border-b-2 max-lg:py-4 border-white px-3 w-full"
                    >
                        <div class="w-full ml-auto mr-auto flex justify-center items-center">
                            <img src={WhyUsIcon1} alt="" class="mb-8" />
                        </div>
                        <div class="text-center ml-auto mr-auto font-bold text-lg text-white">
                            Cung cấp giải pháp quản lý tổng thể
                        </div>
                    </div>
                    <div
                        class=" lg:basis-[25%] max-lg:basis-[50%]   max-lg:border-b-2 lg:border-x-2 max-lg:py-4 border-white  px-3  ml-auto mr-0"
                    >
                        <div class="w-full ml-auto mr-auto flex justify-center items-center">
                            <img src={WhyUsIcon2} alt="" class="mb-8 " />
                        </div>
                        <div class="text-center ml-auto mr-auto font-bold text-lg text-white">
                            Dễ dàng sử dụng, quản lý
                        </div>
                    </div>
                    <div
                        class=" lg:basis-[25%] max-lg:basis-[50%] max-lg:border-r-2 lg:border-r-2 max-lg:py-4 border-white  px-3  ml-auto mr-0"
                    >
                        <div class="w-full ml-auto mr-auto flex justify-center items-center">
                            <img src={WhyUsIcon3} alt="" class="mb-8 " />
                        </div>
                        <div class="text-center ml-auto mr-auto font-bold text-lg text-white">
                            Bảo mật dữ liệu tuyệt đối
                        </div>
                    </div>
                    <div class=" lg:basis-[25%] max-lg:basis-[50%] max-lg:py-4  px-3  ml-auto mr-0">
                        <div class="w-full ml-auto mr-auto flex justify-center items-center">
                            <img src={WhyUsIcon4} alt="" class="mb-8 h-[100px]" />
                        </div>
                        <div class="text-center ml-auto mr-auto font-bold text-lg text-white">Hỗ trợ 24/7</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- EndWhyUs -->

        <!-- Begin Blog -->
        <div class="max-w-screen-lg mx-auto px-4 my-14">
            <h1 class="mb-7 font-bold text-3xl">Blog</h1>
            <div class="grid grid-cols-12 gap-8">
                <a href="/" class="col-span-4 max-lg:col-span-12 max-lg:mb-4">
                    <div class="relative">
                        <div class="overflow-hidden rounded-xl">
                            <img src={imgBlog1} alt="" class="hover:scale-[1.3] transition-all w-full" />
                        </div>
                        <div class="absolute bg-[#005478] rounded text-white top-3 right-3 flex flex-col py-1 px-2">
                            <span class="font-semibold text-sm">16.10</span>
                            <span class="font-semibold text-sm">2022</span>
                        </div>
                    </div>
                    <h1 class="my-4 w-fit py-1 px-4 bg-[#D6F2F5] text-primary rounded-[200px] font-bold text-sm">
                        Tên chuyên mục
                    </h1>
                    <h2 class="font-bold text-lg">
                        Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                    </h2>
                    <h3 class="mt-4 font-semibold text-sm text-gray-400">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </h3>
                </a>
                <a href="/" class="col-span-4 max-lg:col-span-12 max-lg:mb-4">
                    <div class="relative">
                        <div class="overflow-hidden rounded-xl">
                            <img src={imgBlog2} alt="" class="hover:scale-[1.3] transition-all w-full" />
                        </div>
                        <div class="absolute bg-[#005478] rounded text-white top-3 right-3 flex flex-col py-1 px-2">
                            <span class="font-semibold text-sm">16.10</span>
                            <span class="font-semibold text-sm">2022</span>
                        </div>
                    </div>
                    <h1 class="my-4 w-fit py-1 px-4 bg-[#D6F2F5] text-primary rounded-[200px] font-bold text-sm">
                        Tên chuyên mục
                    </h1>
                    <h2 class="font-bold text-lg">
                        Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                    </h2>
                    <h3 class="mt-4 font-semibold text-sm text-gray-400">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </h3>
                </a>
                <a href="/" class="col-span-4 max-lg:col-span-12 max-lg:mb-4">
                    <div class="relative">
                        <div class="overflow-hidden rounded-xl">
                            <img src={imgBlog3} alt="" class="hover:scale-[1.3] transition-all w-full" />
                        </div>
                        <div class="absolute bg-[#005478] rounded text-white top-3 right-3 flex flex-col py-1 px-2">
                            <span class="font-semibold text-sm">16.10</span>
                            <span class="font-semibold text-sm">2022</span>
                        </div>
                    </div>
                    <h1 class="my-4 w-fit py-1 px-4 bg-[#D6F2F5] text-primary rounded-[200px] font-bold text-sm">
                        Tên chuyên mục
                    </h1>
                    <h2 class="font-bold text-lg">
                        Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                    </h2>
                    <h3 class="mt-4 font-semibold text-sm text-gray-400">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </h3>
                </a>
            </div>
            <div class="flex justify-center items-center">
                <a
                    href="/blog"
                    class="uppercase btn btn-prymary mt-12 py-2 px-7 font-bold text-base hover:bg-[#058d9f] transition-all duration-300"
                >
                    Xem Tất bài Viết
                </a>
            </div>
        </div>
        <!-- End Blog -->

        <!-- Begin client -->
        <div class="max-w-screen-lg mx-auto px-4 my-14" id="client">
            <h1 class="mb-7 font-bold text-3xl">Khách hàng</h1>
            <div class="grid grid-cols-12 gap-8">
                <div
                    class="lg:col-span-2 md:col-span-4 max-md:col-span-6 rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2"
                >
                    <img src={iconClient1} alt="" />
                </div>
                <div
                    class="lg:col-span-2 md:col-span-4 max-md:col-span-6 rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2"
                >
                    <img src={iconClient2} alt="" />
                </div>
                <div
                    class="lg:col-span-2 md:col-span-4 max-md:col-span-6 rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2"
                >
                    <img src={iconClient3} alt="" />
                </div>
                <div
                    class="lg:col-span-2 md:col-span-4 max-md:col-span-6 rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2"
                >
                    <img src={iconClient4} alt="" />
                </div>
                <div
                    class="lg:col-span-2 md:col-span-4 max-md:col-span-6 rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2"
                >
                    <img src={iconClient5} alt="" />
                </div>
                <div
                    class="lg:col-span-2 md:col-span-4 max-md:col-span-6 rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2"
                >
                    <img src={iconClient6} alt="" />
                </div>
            </div>
        </div>
        <!-- End client -->

        <!-- Begin advise -->
        <div class="bg-[#EFF4F6] relative" id="contact">
            <div class="max-w-screen-lg mx-auto px-4 py-11 my-[8rem]">
                <h1 class="mb-7 font-bold text-3xl">Đăng ký tư vấn</h1>
                <div class="mt-6 grid grid-cols-12 gap-2">
                    <form method="POST" action="?/register" use:enhance class="col-span-5 max-md:col-span-12">
                        <div>
                            <div
                                class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mt-5 {form
                                    ?.errors?.name
                                    ? 'border-red-800 border'
                                    : ''}"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>

                                <input
                                    class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                                    type="text"
                                    name="name"
                                    placeholder="Họ và tên"
                                    value={form?.name ?? ''}
                                />
                            </div>
                            {#if form?.errors?.name}
                                <p class="text-red-800 font-semibold text-base">{form?.errors?.name}</p>
                            {/if}
                        </div>

                        <div>
                            <div
                                class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mt-5 {form
                                    ?.errors?.phoneNumber
                                    ? 'border-red-800 border'
                                    : ''}"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>

                                <input
                                    class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Số điện thoại"
                                    value={form?.phoneNumber ?? ''}
                                />
                            </div>
                            {#if form?.errors?.phoneNumber}
                                <p class="text-red-800 font-semibold text-base">{form?.errors?.phoneNumber}</p>
                            {/if}
                        </div>
                        <div>
                            <div
                                class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mt-5 {form
                                    ?.errors?.email
                                    ? 'border-red-800 border'
                                    : ''}"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>

                                <input
                                    class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={form?.email ?? ''}
                                />
                            </div>
                            {#if form?.errors?.email}
                                <p class="text-red-800 font-semibold text-base">{form?.errors?.email}</p>
                            {/if}
                        </div>
                        <div>
                            <div
                                class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mt-5 {form
                                    ?.errors?.ShopName
                                    ? 'border-red-800 border'
                                    : ''}"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                                    />
                                </svg>

                                <input
                                    class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                                    type="text"
                                    name="ShopName"
                                    placeholder="Tên cửa hàng"
                                    value={form?.ShopName ?? ''}
                                />
                            </div>
                            {#if form?.errors?.ShopName}
                                <p class="text-red-800 font-semibold text-base">{form?.errors?.ShopName}</p>
                            {/if}
                        </div>
                        <div>
                            <div
                                class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mt-5 {form
                                    ?.errors?.business
                                    ? 'border-red-800 border'
                                    : ''}"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>

                                <input
                                    class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                                    type="text"
                                    name="business"
                                    placeholder="Ngành nghề kinh doanh"
                                    value={form?.business ?? ''}
                                />
                            </div>
                            {#if form?.errors?.business}
                                <p class="text-red-800 font-semibold text-base">{form?.errors?.business}</p>
                            {/if}
                        </div>
                        <div>
                            <div
                                class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mt-5 {form
                                    ?.errors?.location
                                    ? 'border-red-800 border'
                                    : ''}"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>

                                <input
                                    class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                                    type="text"
                                    name="location"
                                    placeholder="Địa chỉ"
                                    value={form?.location ?? ''}
                                />
                            </div>
                            {#if form?.errors?.location}
                                <p class="text-red-800 font-semibold text-base">{form?.errors?.location}</p>
                            {/if}
                        </div>
                        <button
                            type="submit"
                            class="btn btn-prymary py-2 px-7 font-bold text-base hover:bg-[#058d9f] transition-all duration-300 mt-5"
                            >Gửi yêu cầu</button
                        >
                    </form>

                    <div
                        class="lg:col-span-6 md:col-span-7 max-md:hidden h-full items-center flex justify-center absolute right-0 top-[-50%] translate-y-[50%]"
                    >
                        <img class=" lg:w-full lg:h-[90%] md:w-full md:h-[75%]" src={imgResisters} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <!-- End advise -->
    </div>

    <Footer />
    <!-- Begin Modal nav -->
    {#if handleModalOn}
        <div
            class="fixed top-0 left-o right-0 bottom-0 bg-primary bg-opacity-50 z-50 h-full w-full  lg:hidden"
            on:click={handleSetModal}
            on:keydown={handleSetModal}
        >
            <div
                class="w-[260px] h-full right-0 absolute bg-white text-gray-400 animate-leftInto"
                on:click={(e) => {
                    e.stopPropagation;
                }}
                on:keydown={(e) => {
                    e.stopPropagation;
                }}
            >
                <div
                    class="absolute right-0 top-0 py-2 px-4 hover:text-textColor transition-all cursor-pointer"
                    on:click={handleSetModal}
                    on:keydown={handleSetModal}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div class="mt-8">
                    <a
                        href="/"
                        class="py-4 px-5 font-semibold text-base border-b border-gray-300 hover:text-textColor block transition-all"
                        on:click={handleSetModal}
                        on:keydown={handleSetModal}>Trang chủ</a
                    >
                    <a
                        href="/"
                        class="py-4 px-5 font-semibold text-base border-b border-gray-300 hover:text-textColor block transition-all"
                        on:click={handleSetModal}
                        on:keydown={handleSetModal}>Giới thiệu</a
                    >
                    <a
                        href="#service"
                        class="py-4 px-5 font-semibold text-base border-b border-gray-300 hover:text-textColor block transition-all"
                        on:click={handleSetModal}
                        on:keydown={handleSetModal}>Dịch vụ</a
                    >
                    <a
                        href="#establish"
                        class="py-4 px-5 font-semibold text-base border-b border-gray-300 hover:text-textColor block transition-all"
                        on:click={handleSetModal}
                        on:keydown={handleSetModal}>Tính năng</a
                    >
                    <a
                        href="#whyus"
                        class="py-4 px-5 font-semibold text-base border-b border-gray-300 hover:text-textColor block transition-all"
                        on:click={handleSetModal}
                        on:keydown={handleSetModal}>Tại sao chọn chúng tôi?</a
                    >
                    <a
                        href="/blog"
                        class="py-4 px-5 font-semibold text-base border-b border-gray-300 hover:text-textColor flex justify-between items-center transition-all"
                        on:click={handleSetModal}
                        on:keydown={handleSetModal}
                    >
                        <p>Blog</p>
                    </a>
                    <a
                        href="#contact"
                        class="py-4 px-5 font-semibold text-base border-b border-gray-300 hover:text-textColor block transition-all"
                        on:click={handleSetModal}
                        on:keydown={handleSetModal}>Liên hệ</a
                    >
                </div>
            </div>
        </div>
    {/if}
    <!-- End Modal nav -->
</section>
