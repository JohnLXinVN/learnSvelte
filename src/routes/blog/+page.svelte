<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import imgBlogPage1 from '$lib/assets/Image/imgBlogPage1.png';
    import imgBlogPage2 from '$lib/assets/Image/imgBlogPage2.png';
    import imgBlogPage3 from '$lib/assets/Image/imgBlogPage3.png';
    import imgBlogPage4 from '$lib/assets/Image/imgBlogPage4.png';
    import imgBlogPage5 from '$lib/assets/Image/imgBlogPage5.png';
    import imgBlogPage6 from '$lib/assets/Image/imgBlogPage6.png';
    import imgBlogPage7 from '$lib/assets/Image/imgBlogPage7.png';
</script>

<div class="max-w-screen-lg mx-auto px-4 mt-header">
    <a href="/" class="btnReturnHome pt-7 font-bold text-primary flex w-fit justify-center items-center max-md:hidden">
        <i class="fa-sharp fa-solid fa-arrow-left mr-2 flex items-center iconArrowHome transition-all" />
        <div class="font-bold uppercase ">Về trang chủ</div>
    </a>
    <div class="grid grid-cols-12 gap-8 pt-7">
        <h1 class="font-bold text-4xl col-span-8 max-md:col-span-12">Blog</h1>
        <div class="w-full border-2 rounded-md py-2 pl-5 pr-4 flex items-center col-span-4 max-md:col-span-12">
            <input
                type="text"
                name=""
                id=""
                placeholder="Tìm kiếm"
                class="w-full focus-within:outline-none font-semibold"
            />
            <div class="px-2 h-full hover:cursor-pointer "><i class="fa-solid fa-magnifying-glass" /></div>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-8 mt-14">
        <div class="col-span-1 max-md:hidden" />
        <div class="mb-9 md:hidden max-md:col-span-12">
            <div
                class="bg-gray-200 text-[#777E90] cursor-pointer py-3 px-6 rounded-lg font-bold text-lg mt-4 activeHoverCategories transition-all duration-300 activeCategories"
            >
                Tất cả chuyên mục
            </div>
            <div
                class="bg-gray-200 text-[#777E90] cursor-pointer py-3 px-6 rounded-lg font-bold text-lg mt-4 activeHoverCategories transition-all duration-300"
            >
                Chuyên mục 1
            </div>
            <div
                class="bg-gray-200 text-[#777E90] cursor-pointer py-3 px-6 rounded-lg font-bold text-lg mt-4 activeHoverCategories transition-all duration-300"
            >
                Chuyên mục 2
            </div>
            <div
                class="bg-gray-200 text-[#777E90] cursor-pointer py-3 px-6 rounded-lg font-bold text-lg mt-4 activeHoverCategories transition-all duration-300"
            >
                Chuyên mục 3
            </div>
        </div>
        <div class="col-span-7 max-md:col-span-12">
            <div class="border-b-2 border-gray-300">
                <a href="/" class="mb-14 block">
                    <div class="relative">
                        <img src={imgBlogPage1} alt="" />
                        <div class="absolute bg-[#005478] rounded text-white top-3 right-3 flex flex-col py-1 px-2">
                            <span class="font-semibold text-sm">16.10</span>
                            <span class="font-semibold text-sm">2022</span>
                        </div>
                    </div>
                    <h1 class="my-4 w-fit py-1 px-4 bg-[#D6F2F5] text-primary rounded-[200px] font-bold text-sm">
                        Tên chuyên mục
                    </h1>
                    <h2 class="font-semibold text-2xl text-textColor ">
                        Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                    </h2>
                    <p class="text-gray-300 font-semibold text-sm mt-2">16.10.2022</p>
                </a>
                <a href="/" class="mb-14 block">
                    <div class="relative">
                        <img src={imgBlogPage2} alt="" />
                        <div class="absolute bg-[#005478] rounded text-white top-3 right-3 flex flex-col py-1 px-2">
                            <span class="font-semibold text-sm">16.10</span>
                            <span class="font-semibold text-sm">2022</span>
                        </div>
                    </div>
                    <h1 class="my-4 w-fit py-1 px-4 bg-[#D6F2F5] text-primary rounded-[200px] font-bold text-sm">
                        Tên chuyên mục
                    </h1>
                    <h2 class="font-semibold text-2xl text-textColor ">
                        Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                    </h2>
                    <p class="text-gray-300 font-semibold text-sm mt-2">16.10.2022</p>
                </a>
                <a href="/" class="mb-14 block">
                    <div class="relative">
                        <img src={imgBlogPage3} alt="" />
                        <div class="absolute bg-[#005478] rounded text-white top-3 right-3 flex flex-col py-1 px-2">
                            <span class="font-semibold text-sm">16.10</span>
                            <span class="font-semibold text-sm">2022</span>
                        </div>
                    </div>
                    <h1 class="my-4 w-fit py-1 px-4 bg-[#D6F2F5] text-primary rounded-[200px] font-bold text-sm">
                        Tên chuyên mục
                    </h1>
                    <h2 class="font-semibold text-2xl text-textColor ">
                        Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                    </h2>
                    <p class="text-gray-300 font-semibold text-sm mt-2">16.10.2022</p>
                </a>
                <a href="/" class="mb-14 block">
                    <div class="relative">
                        <img src={imgBlogPage4} alt="" />
                        <div class="absolute bg-[#005478] rounded text-white top-3 right-3 flex flex-col py-1 px-2">
                            <span class="font-semibold text-sm">16.10</span>
                            <span class="font-semibold text-sm">2022</span>
                        </div>
                    </div>
                    <h1 class="my-4 w-fit py-1 px-4 bg-[#D6F2F5] text-primary rounded-[200px] font-bold text-sm">
                        Tên chuyên mục
                    </h1>
                    <h2 class="font-semibold text-2xl text-textColor ">
                        Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                    </h2>
                    <p class="text-gray-300 font-semibold text-sm mt-2">16.10.2022</p>
                </a>
            </div>
            <div class="mt-9 flex justify-start">
                <div
                    class="w-[36px] h-[36px] cursor-pointer flex justify-center items-center bg-gray-300 text-gray-400 font-semibold text-sm rounded-lg "
                >
                    <i class="fa-solid fa-chevron-left" />
                </div>
                <div
                    class="w-[36px] h-[36px] cursor-pointer flex justify-center items-center bg-gray-300 text-gray-400 font-semibold text-sm ml-2 rounded-lg activeBtnPaginate"
                >
                    1
                </div>
                <div
                    class="w-[36px] h-[36px] cursor-pointer flex justify-center items-center bg-gray-300 text-gray-400 font-semibold text-sm ml-2 rounded-lg"
                >
                    2
                </div>
                <div
                    class="w-[36px] h-[36px] cursor-pointer flex justify-center items-center bg-gray-300 text-gray-400 font-semibold text-sm ml-2 rounded-lg"
                >
                    3
                </div>
                <div
                    class="w-[36px] h-[36px] cursor-pointer flex justify-center items-center bg-gray-300 text-gray-400 font-semibold text-sm ml-2 rounded-lg"
                >
                    4
                </div>
                <div
                    class="w-[36px] h-[36px] cursor-pointer flex justify-center items-center bg-gray-300 text-gray-400 font-semibold text-sm ml-2 rounded-lg"
                >
                    5
                </div>
                <div
                    class="w-[36px] h-[36px] cursor-pointer flex justify-center items-center bg-gray-300 text-gray-400 font-semibold text-sm ml-2 rounded-lg"
                >
                    <i class="fa-solid fa-chevron-right" />
                </div>
                <div
                    class="w-fit px-3 h-[36px] cursor-pointer flex justify-center items-center bg-gray-300 text-gray-400 font-semibold text-sm uppercase ml-2 rounded-lg"
                >
                    Trang cuối
                </div>
            </div>
        </div>
        <div class="col-span-4 max-md:col-span-12">
            <div class="mb-9 max-md:hidden">
                <div
                    class="bg-gray-200 text-[#777E90] cursor-pointer py-3 px-6 rounded-lg font-bold text-lg mt-4 activeHoverCategories transition-all duration-300 activeCategories"
                >
                    Tất cả chuyên mục
                </div>
                <div
                    class="bg-gray-200 text-[#777E90] cursor-pointer py-3 px-6 rounded-lg font-bold text-lg mt-4 activeHoverCategories transition-all duration-300"
                >
                    Chuyên mục 1
                </div>
                <div
                    class="bg-gray-200 text-[#777E90] cursor-pointer py-3 px-6 rounded-lg font-bold text-lg mt-4 activeHoverCategories transition-all duration-300"
                >
                    Chuyên mục 2
                </div>
                <div
                    class="bg-gray-200 text-[#777E90] cursor-pointer py-3 px-6 rounded-lg font-bold text-lg mt-4 activeHoverCategories transition-all duration-300"
                >
                    Chuyên mục 3
                </div>
            </div>
            <h1 class="font-bold text-2xl text-textColor mb-5 max-md:mt-7">Bài viết nổi bật</h1>

            <div>
                <div class="flex items-center py-5 border-t-2 cursor-pointer">
                    <div>
                        <h1
                            class="py-1 px-4 text-primary bg-[#D6F2F5] uppercase font-bold text-xs w-fit rounded-full mb-3"
                        >
                            Tên chuyên mục
                        </h1>
                        <h2 class="mb-3 font-bold text-sm text-textColor">
                            Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                        </h2>
                        <p class="font-semibold text-sm text-gray-400">16.10.2022</p>
                    </div>
                    <div class="w-[120px]">
                        <img src={imgBlogPage5} alt="" />
                    </div>
                </div>
                <div class="flex items-center py-5 border-t-2 cursor-pointer">
                    <div>
                        <h1
                            class="py-1 px-4 text-primary bg-[#D6F2F5] uppercase font-bold text-xs w-fit rounded-full mb-3"
                        >
                            Tên chuyên mục
                        </h1>
                        <h2 class="mb-3 font-bold text-sm text-textColor">
                            Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                        </h2>
                        <p class="font-semibold text-sm text-gray-400">16.10.2022</p>
                    </div>
                    <div class="w-[120px]">
                        <img src={imgBlogPage6} alt="" />
                    </div>
                </div>
                <div class="flex items-center py-5 border-t-2 cursor-pointer">
                    <div>
                        <h1
                            class="py-1 px-4 text-primary bg-[#D6F2F5] uppercase font-bold text-xs w-fit rounded-full mb-3"
                        >
                            Tên chuyên mục
                        </h1>
                        <h2 class="mb-3 font-bold text-sm text-textColor">
                            Beautyhub đang thúc đẩy hoạt động kinh doanh của House of Gloss như thế nào
                        </h2>
                        <p class="font-semibold text-sm text-gray-400">16.10.2022</p>
                    </div>
                    <div class="w-[120px]">
                        <img src={imgBlogPage7} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
