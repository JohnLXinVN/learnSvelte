<script>
    import srcLogo from '$lib/assets/Image/avatar_XSpa.png';
    import { activeModalNav } from '../store/store';

    const handleSetModal = () => {
        activeModalNav.update((value) => {
            return !value;
        });
    };
</script>

<section>
    <div
        class="h-header w-full flex  justify-between items-center shadow-md fixed top-0 left-0 right-0 bg-white z-20 opacity-90"
    >
        <div class="flex items-center">
            <a href="/" class="w-[70px] h-full block">
                <img src={srcLogo} alt="" class="w-[70px] h-full" />
            </a>
            <h1 class="ml-5 text-lg max-md:text-sm font-bold text-primary">Phần mềm quản lí vận hành</h1>
        </div>
        <ul class="flex uppercase h-full items-center justify-center max-lg:hidden">
            <li class=" font-bold text-sm inline-block navItem activeNavHover activeNav">
                <a href="/">Trang chủ</a>
            </li>
            <li class=" font-bold text-sm inline-block navItem activeNavHover">
                <a href="/introduce">Giới thiệu</a>
            </li>
            <li class=" font-bold text-sm inline-block navItem activeNavHover"><a href="#service">Dịch vụ</a></li>
            <li class=" font-bold text-sm inline-block navItem activeNavHover"><a href="#establish">Tính năng</a></li>
            <li class=" font-bold text-sm inline-block navItem activeNavHover">
                <a href="#whyus">Tại sao chọn chúng tôi</a>
            </li>

            <li class=" font-bold text-sm inline-block navItem activeNavHover"><a href="/blog">Blog</a></li>
            <li class=" font-bold text-sm inline-block navItem activeNavHover"><a href="#contact">Liên hệ</a></li>
        </ul>
        <div
            class="h-full flex items-center justify-center px-5 cursor-pointer lg:hidden"
            on:click={handleSetModal}
            on:keydown={handleSetModal}
        >
            <i class="fa-solid fa-bars text-gray-500 text-3xl" />
        </div>
    </div>
</section>
