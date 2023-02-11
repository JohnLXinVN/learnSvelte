<script>
    import srcLogo from '$lib/assets/Image/avatar_XSpa.png';
    import { activeModalBlogNav } from '../store/store';

    const handleSetModalBlog = () => {
        activeModalBlogNav.update((value) => {
            return !value;
        });
    };
</script>

<section>
    <div
        class="h-[70px] w-full flex  justify-between items-center shadow-md bg-white z-20 fixed top-0 left-0 right-0 opacity-90"
    >
        <div class="flex items-center">
            <a href="/">
                <img src={srcLogo} alt="" class="w-[70px] h-full" />
            </a>
            <h1 class="ml-5 text-lg max-md:text-sm font-bold text-primary">Phần mềm quản lí vận hành</h1>
        </div>
        <ul class="flex uppercase font-bold text-sm h-full items-center justify-center max-lg:hidden">
            <li class="navItem activeNavHover "><a href="/">Trang Chủ</a></li>

            <li class="navItem activeNavHover activeNav"><a href="/introduce">Giới thiệu</a></li>

            <li class="navItem activeNavHover "><a href="/blog">Blog</a></li>
        </ul>
        <div
            class="h-full flex items-center justify-center px-5 cursor-pointer lg:hidden"
            on:click={handleSetModalBlog}
            on:keydown={handleSetModalBlog}
        >
            <i class="fa-solid fa-bars text-gray-500 text-3xl" />
        </div>
    </div>
</section>
