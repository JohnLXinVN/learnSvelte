<script>
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

    // const [activeFeature, setActiveFeature] = useState('booking');
</script>

<section class="">
    <!-- Begin introduce  -->
    <div class="max-w-screen-lg mx-auto px-4 mt-14">
        <h1 class="mb-7 font-bold text-3xl">Giới thiệu</h1>
        <p class="font-semibold text-sm w-[60%] text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus
            quo quaerat necessitatibus magni excepturi modi accusantium, nulla odit sint
            eos! Ipsam magni doloremque dolorem animi, facere hic libero deserunt.
        </p>
        <div class="mt-7 flex justify-center items-center ">
            <div class="flex flex-col justify-center items-center px-5 text-center">
                <img src={iconIntroduce1} alt="" class="mb-9" />
                <p class="font-bold text-lg">
                    Pần mềm Xspa Quản lý đặt lịch Phát triển doanh số
                </p>
            </div>
            <div
                class=" flex flex-col justify-center items-center px-5 text-center border-x-1 border-x-[1px] border-gray-300 "
            >
                <img src={iconIntroduce2} alt="" class="mb-9" />
                <p class="font-bold text-lg">
                    Quản lý nhiều cơ sở trên cùng một phần mềm
                </p>
            </div>
            <div class="flex flex-col justify-center items-center px-5 text-center">
                <img src={iconIntroduce3} alt="" class="mb-9" />
                <p class="font-bold text-lg">
                    Có thể tuỳ biến 100% và chạy tên miền riêng theo thương hiệu
                </p>
            </div>
        </div>
    </div>
    <!-- End Introduce -->

    <!-- Begin service -->
    <div class="max-w-screen-lg mx-auto px-4 mt-14">
        <h1 class="mb-7 font-bold text-3xl">Dịch vụ</h1>
        <p class="font-semibold text-sm w-[60%] text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus
            quo quaerat necessitatibus magni excepturi modi accusantium, nulla odit sint
            eos! Ipsam magni doloremque dolorem animi, facere hic libero deserunt.
        </p>
        <div class="grid grid-cols-4 gap-5 mt-11">
            <div class="relative">
                <img src={imgService1} alt="" />
                <div
                    class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md"
                >
                    <p class="font-bold text-sm text-center">Thẩm mỹ viện</p>
                </div>
            </div>
            <div class="relative">
                <img src={imgService2} alt="" />
                <div
                    class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md"
                >
                    <p class="font-bold text-sm text-center">Spa</p>
                </div>
            </div>
            <div class="relative">
                <img src={imgService3} alt="" />
                <div
                    class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md"
                >
                    <p class="font-bold text-sm text-center">Salon Tóc</p>
                </div>
            </div>
            <div class="relative">
                <img src={imgService4} alt="" />
                <div
                    class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md"
                >
                    <p class="font-bold text-sm text-center">Nail</p>
                </div>
            </div>
            <div class="relative">
                <img src={imgService5} alt="" />
                <div
                    class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md"
                >
                    <p class="font-bold text-sm text-center">Massage</p>
                </div>
            </div>
            <div class="relative">
                <img src={imgService6} alt="" />
                <div
                    class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md"
                >
                    <p class="font-bold text-sm text-center">Makeup</p>
                </div>
            </div>
            <div class="relative">
                <img src={imgService7} alt="" />
                <div
                    class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md"
                >
                    <p class="font-bold text-sm text-center">Tatoo</p>
                </div>
            </div>
            <div class="relative">
                <img src={imgService8} alt="" />
                <div
                    class="absolute bottom-2 left-[50%] translate-x-[-50%] bg-white py-2 px-8 w-[75%] rounded-md"
                >
                    <p class="font-bold text-sm text-center">Châm cứu</p>
                </div>
            </div>
        </div>
    </div>

    <!-- End service -->

    <!-- Begin feature -->
    <div class="mt-14 select-feature">
        <div class="max-w-screen-lg mx-auto px-4 pb-4">
            <div class="py-12 font-bold text-3xl">Tính năng</div>
            <div class="flex">
                <div class="text-left">
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg  w-[340px] items-center activeItemNavSelectFeature "
                    >
                        <i
                            class="fa-solid fa-book text-primary activeItemNavSelectFeatureIcon"
                        />
                        <h1 class="ml-4 text-white">Booking</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-solid fa-bed text-primary" />
                        <h1 class="ml-4 text-white">Quản lí giường</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-solid fa-file-circle-check text-primary" />
                        <h1 class="ml-4 text-white">Quản lí hoá đơn</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-solid fa-people-group text-primary" />
                        <h1 class="ml-4 text-white">Quản lí khách hàng</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-solid fa-credit-card text-primary" />
                        <h1 class="ml-4 text-white">Thẻ nạp</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-sharp fa-solid fa-id-card text-primary" />
                        <h1 class="ml-4 text-white">Quản lí nợ phí</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-solid fa-box text-primary" />
                        <h1 class="ml-4 text-white">Gói liệu trình</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-solid fa-box-archive text-primary" />
                        <h1 class="ml-4 text-white">Quản lí kho, vật tư</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-solid fa-database text-primary" />
                        <h1 class="ml-4 text-white">Quản lí thu chi</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-sharp fa-solid fa-chart-simple text-primary" />
                        <h1 class="ml-4 text-white">Thông kê</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-solid fa-link text-primary" />
                        <h1 class="ml-4 text-white">Thiết lập chi nhánh</h1>
                    </div>
                    <div
                        class="cursor-pointer px-4 py-2 flex font-bold text-lg w-[340px] items-center"
                    >
                        <i class="fa-solid fa-gear text-primary" />
                        <h1 class="ml-4 text-white">Phân quyền tài khoản</h1>
                    </div>
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Booking</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Quản lý, sắp xếp lịch booking của khách hàng
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <!-- <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Quản lí giường</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Quản lí hoá đơn</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Quản lí khách hàng</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Thẻ nạp</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Quản lí nợp phí</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Gói liệu trình</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Quản lí kho, vật tư</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Quản lí thu chi</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Thống kê</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Thiết lập chi nhánh</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div>
                <div class=" ml-10 flex flex-col justify-center items-center text-black">
                    <h1 class="font-bold text-2xl ">Phân quyền tài khoản</h1>
                    <h2 class="mt-3 mb-7 font-medium text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                    </h2>
                    <img src={imgFeature} alt="" />
                </div> -->
            </div>
        </div>
    </div>
    <!-- End feature -->
</section>
