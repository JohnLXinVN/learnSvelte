<script>
    import Footer from '../../component/Footer.svelte';
    import HeaderBlog from '../../component/HeaderBlog.svelte';

    import '../../app.css';
    import '../../global.css';
    import { activeModalBlogNav } from '../../store/store';

    const handleSetModalBlog = () => {
        activeModalBlogNav.update((value) => {
            return !value;
        });
    };
    let handleModalBlogOn;

    activeModalBlogNav.subscribe((value) => {
        handleModalBlogOn = value;
    });
</script>

<HeaderBlog />
<slot />
<Footer />

<div>
    <!-- Begin Modal Blog nav -->
    {#if handleModalBlogOn}
        <div
            class="fixed top-0 left-o right-0 bottom-0 bg-primary bg-opacity-50 z-50 h-full w-full  lg:hidden"
            on:click={handleSetModalBlog}
            on:keydown={handleSetModalBlog}
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
                    on:click={handleSetModalBlog}
                    on:keydown={handleSetModalBlog}
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
                        on:click={handleSetModalBlog}
                        on:keydown={handleSetModalBlog}>Trang chủ</a
                    >
                    <a
                        href="/"
                        class="py-4 px-5 font-semibold text-base border-b border-gray-300 hover:text-textColor block transition-all"
                        on:click={handleSetModalBlog}
                        on:keydown={handleSetModalBlog}>Giới thiệu</a
                    >

                    <a
                        href="/blog"
                        class="py-4 px-5 font-semibold text-base border-b border-gray-300 hover:text-textColor flex justify-between items-center transition-all"
                        on:click={handleSetModalBlog}
                        on:keydown={handleSetModalBlog}
                    >
                        <p>Blog</p>
                    </a>
                </div>
            </div>
        </div>
    {/if}
    <!-- End Modal Blog nav -->
</div>
