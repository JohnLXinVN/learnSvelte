<script lang="ts">
    import Banner from '../component/Home/Banner.svelte';
    import Content from '../component/Home/Content.svelte';
    import Header from '../component/Header.svelte';
    import Footer from '../component/Footer.svelte';
    import { activeModalNav } from '../store/store';

    const handleSetModal = () => {
        activeModalNav.update((value) => {
            return !value;
        });
    };
    let handleModalOn;

    activeModalNav.subscribe((value) => {
        handleModalOn = value;
    });
</script>

<section class="relative">
    <Header />
    <div class="mt-header">
        <Banner />
        <Content />
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
                    <i class="fa-solid fa-xmark text-2xl" />
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
