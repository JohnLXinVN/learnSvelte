<script>
    import Footer from '../../component/Footer.svelte';
    import HeaderIntroduce from '../../component/HeaderIntroduce.svelte';

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<HeaderIntroduce />
<slot />
<Footer />
