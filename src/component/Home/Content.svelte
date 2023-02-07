<script>
    import { activeFeature } from './../../store/store.js';

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

    let activeFeatureOn;
    activeFeature.subscribe((value) => {
        activeFeatureOn = value;
    });
</script>

<section class="">
    <!-- Begin introduce  -->
    <div class="max-w-screen-lg mx-auto px-4 mt-14">
        <h1 class="mb-7 font-bold text-3xl">Giới thiệu</h1>
        <p class="font-semibold text-sm w-[60%] text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus quo quaerat necessitatibus
            magni excepturi modi accusantium, nulla odit sint eos! Ipsam magni doloremque dolorem animi, facere hic
            libero deserunt.
        </p>
        <div class="mt-7 flex justify-center items-center ">
            <div class="flex flex-col justify-center ] items-center px-5 text-center">
                <img src={iconIntroduce1} alt="" class="mb-9" />
                <p class="font-bold text-lg">Pần mềm Xspa Quản lý đặt lịch Phát triển doanh số</p>
            </div>
            <div
                class=" flex flex-col justify-center  items-center px-5 text-center border-x-1 border-x-[1px] border-gray-300 "
            >
                <img src={iconIntroduce2} alt="" class="mb-9" />
                <p class="font-bold text-lg">Quản lý nhiều cơ sở trên cùng một phần mềm</p>
            </div>
            <div class="flex flex-col justify-center  items-center px-5 text-center">
                <img src={iconIntroduce3} alt="" class="mb-9" />
                <p class="font-bold text-lg">Có thể tuỳ biến 100% và chạy tên miền riêng theo thương hiệu</p>
            </div>
        </div>
    </div>
    <!-- End Introduce -->

    <!-- Begin service -->
    <div class="max-w-screen-lg mx-auto px-4 mt-14">
        <h1 class="mb-7 font-bold text-3xl">Dịch vụ</h1>
        <p class="font-semibold text-sm w-[60%] text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus quo quaerat necessitatibus
            magni excepturi modi accusantium, nulla odit sint eos! Ipsam magni doloremque dolorem animi, facere hic
            libero deserunt.
        </p>
        <div class="grid grid-cols-4 gap-5 mt-11">
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
    <div class="mt-14 select-feature">
        <div class="max-w-screen-lg mx-auto px-4 pb-4">
            <div class="py-12 font-bold text-3xl">Tính năng</div>
            <div class="flex">
                <div class="text-left">
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg  w-[340px] items-center activeItemNavHover checkactive activeItemNavSelectFeature"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'booking';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-book text-white " />
                        <h1 class="ml-4 text-white">Booking</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive "
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'quanligiuong';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-bed text-white" />
                        <h1 class="ml-4 text-white">Quản lí giường</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'quanlihoadon';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-file-circle-check text-white" />
                        <h1 class="ml-4 text-white">Quản lí hoá đơn</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'quanlikhachhang';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-people-group text-white" />
                        <h1 class="ml-4 text-white">Quản lí khách hàng</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'thenap';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-credit-card text-white" />
                        <h1 class="ml-4 text-white">Thẻ nạp</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'quanlinophi';
                                return value;
                            })}
                    >
                        <i class="fa-sharp fa-solid fa-id-card text-white" />
                        <h1 class="ml-4 text-white">Quản lí nợ phí</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'Goilieutrinh';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-box text-white" />
                        <h1 class="ml-4 text-white">Gói liệu trình</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'quanlikhovattu';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-box-archive text-white" />
                        <h1 class="ml-4 text-white">Quản lí kho, vật tư</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'quanlithuchi';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-database text-white" />
                        <h1 class="ml-4 text-white">Quản lí thu chi</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'thongke';
                                return value;
                            })}
                    >
                        <i class="fa-sharp fa-solid fa-chart-simple text-white" />
                        <h1 class="ml-4 text-white">Thông kê</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'thietlapchinhanh';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-link text-white" />
                        <h1 class="ml-4 text-white">Thiết lập chi nhánh</h1>
                    </button>
                    <button
                        class="rounded-md cursor-pointer px-4 py-2 my-2 flex font-bold text-lg w-[340px] items-center activeItemNavHover checkactive"
                        on:click={() =>
                            activeFeature.update((value) => {
                                value = 'phanquyentaikhoan';
                                return value;
                            })}
                    >
                        <i class="fa-solid fa-gear text-white" />
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
    <!-- End feature -->

    <!-- Begin establish -->
    <div class="max-w-screen-lg mx-auto px-4 my-14 flex items-center ">
        <img src={imgEstablish} alt="" />
        <div class="ml-[8%]">
            <h1 class="font-bold text-2xl ">Thiết lập</h1>
            <div class="flex my-3 items-center">
                <div
                    class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                >
                    <i class="fa-solid fa-check" />
                </div>
                <div class="font-bold text-xs ml-2 text-gray-400">
                    Dễ dàng cài đặt mức giá, số lượng, cho từng dịch vụ, sản phẩm
                </div>
            </div>
            <div class="flex my-3 items-center">
                <div
                    class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                >
                    <i class="fa-solid fa-check" />
                </div>
                <div class="font-bold text-xs ml-2 text-gray-400">
                    Cài đặt hoa hồng cho từng loại dịch vụ, nhân viên
                </div>
            </div>
            <div class="flex my-3 items-center">
                <div
                    class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                >
                    <i class="fa-solid fa-check" />
                </div>
                <div class="font-bold text-xs ml-2 text-gray-400">Tạo nhân viên và chức vụ cho từng nhân viên</div>
            </div>
            <div class="flex my-3 items-center">
                <div
                    class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                >
                    <i class="fa-solid fa-check" />
                </div>
                <div class="font-bold text-xs ml-2 text-gray-400">Tạo mã khuyến mãi theo nhu cầu mong muốn</div>
            </div>
            <div class="flex my-3 items-center">
                <div
                    class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                >
                    <i class="fa-solid fa-check" />
                </div>
                <div class="font-bold text-xs ml-2 text-gray-400">Tạo combo dịch vụ + sản phẩm theo nhu cầu</div>
            </div>
            <div class="flex my-3 items-center">
                <div
                    class="font-bold text-lg flex items-center justify-center p-1 w-fit bg-green-500 text-white rounded-full  "
                >
                    <i class="fa-solid fa-check" />
                </div>
                <div class="font-bold text-xs ml-2 text-gray-400">Thiết lập ghế/giường sử dụng dịch vụ</div>
            </div>
        </div>
    </div>
    <!-- End establish -->

    <!-- BeginWhyUs -->
    <div class="bg-[url('src/lib/assets/Image/Rectangle106imgWhyUs.png')] py-16">
        <div class="max-w-screen-lg px-4 mx-auto ">
            <h1 class="font-bold text-3xl text-white">Tại sao chọn chúng tôi</h1>
            <div class="flex mt-14  flex-wrap">
                <div class=" basis-[25%]  px-3 w-full">
                    <div class="w-full ml-auto mr-auto flex justify-center items-center">
                        <img src={WhyUsIcon1} alt="" class="mb-8" />
                    </div>
                    <div class="text-center ml-auto mr-auto font-bold text-lg text-white">
                        Cung cấp giải pháp quản lý tổng thể
                    </div>
                </div>
                <div class=" basis-[25%]  px-3  ml-auto mr-0">
                    <div class="w-full ml-auto mr-auto flex justify-center items-center">
                        <img src={WhyUsIcon2} alt="" class="mb-8 " />
                    </div>
                    <div class="text-center ml-auto mr-auto font-bold text-lg text-white">Dễ dàng sử dụng, quản lý</div>
                </div>
                <div class=" basis-[25%]  px-3  ml-auto mr-0">
                    <div class="w-full ml-auto mr-auto flex justify-center items-center">
                        <img src={WhyUsIcon3} alt="" class="mb-8 " />
                    </div>
                    <div class="text-center ml-auto mr-auto font-bold text-lg text-white">
                        Bảo mật dữ liệu tuyệt đối
                    </div>
                </div>
                <div class=" basis-[25%]  px-3  ml-auto mr-0">
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
        <div class="grid grid-cols-3 gap-8">
            <a href="/">
                <div class="relative">
                    <div class="overflow-hidden rounded-xl">
                        <img src={imgBlog1} alt="" class="hover:scale-[1.3] transition-all" />
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat.
                </h3>
            </a>
            <a href="/">
                <div class="relative">
                    <div class="overflow-hidden rounded-xl">
                        <img src={imgBlog2} alt="" class="hover:scale-[1.3] transition-all" />
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat.
                </h3>
            </a>
            <a href="/">
                <div class="relative">
                    <div class="overflow-hidden rounded-xl">
                        <img src={imgBlog3} alt="" class="hover:scale-[1.3] transition-all" />
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
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat.
                </h3>
            </a>
        </div>
        <div class="flex justify-center items-center">
            <button class="uppercase btn btn-prymary mt-12 py-2 px-7 font-bold text-base">Xem Tất bài Viết</button>
        </div>
    </div>
    <!-- End Blog -->

    <!-- Begin client -->
    <div class="max-w-screen-lg mx-auto px-4 my-14">
        <h1 class="mb-7 font-bold text-3xl">Khách hàng</h1>
        <div class="grid grid-cols-6 gap-8">
            <div class="rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2">
                <img src={iconClient1} alt="" />
            </div>
            <div class="rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2">
                <img src={iconClient2} alt="" />
            </div>
            <div class="rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2">
                <img src={iconClient3} alt="" />
            </div>
            <div class="rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2">
                <img src={iconClient4} alt="" />
            </div>
            <div class="rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2">
                <img src={iconClient5} alt="" />
            </div>
            <div class="rounded-md border-[2px] border-gray-200 flex justify-center items-center p-2">
                <img src={iconClient6} alt="" />
            </div>
        </div>
    </div>
    <!-- End client -->

    <!-- Begin advise -->
    <div class="bg-[#EFF4F6] ">
        <div class="max-w-screen-lg mx-auto px-4 py-11 my-14">
            <h1 class="mb-7 font-bold text-3xl">Đăng ký tư vấn</h1>
            <div class="mt-6 grid grid-cols-2 gap-2">
                <form method="POST">
                    <div class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mb-5">
                        <i class="fa-solid fa-user" />

                        <input
                            class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                            type="text"
                            name="name"
                            placeholder="Họ và tên"
                        />
                    </div>
                    <div class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mb-5">
                        <i class="fa-solid fa-phone" />

                        <input
                            class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                            type="tel"
                            name="phoneNumber"
                            placeholder="Số điện thoại"
                        />
                    </div>
                    <div class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mb-5">
                        <i class="fa-solid fa-envelope" />
                        <input
                            class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    <div class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mb-5">
                        <i class="fa-solid fa-shop" />
                        <input
                            class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                            type="text"
                            name="ShopName"
                            placeholder="Tên cửa hàng"
                        />
                    </div>
                    <div class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mb-5">
                        <i class="fa-solid fa-briefcase" />
                        <input
                            class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                            type="text"
                            name="business"
                            placeholder="Ngành nghề kinh doanh"
                        />
                    </div>
                    <div class="bg-white py-3 px-4 text-gray-400 w-full flex items-center rounded-lg mb-5">
                        <i class="fa-solid fa-location-pin" />
                        <input
                            class="w-full ml-2 focus-within:outline-none font-semibold text-base text-gray-600 placeholder:font-semibold placeholder:text-gray-300"
                            type="text"
                            name="location"
                            placeholder="Địa chỉ"
                        />
                    </div>
                    <button class="btn btn-prymary py-2 px-7 font-bold text-base">Gửi yêu cầu</button>
                </form>
                <div class="ml-4"><img src={imgResisters} alt="" /></div>
            </div>
        </div>
    </div>
    <!-- End advise -->
</section>
