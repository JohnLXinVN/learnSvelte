<script>
    import Footer from '../../lib/component/Footer.svelte';
    import HeaderIntroduce from '../../lib/component/HeaderIntroduce.svelte';

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<HeaderIntroduce />
<slot />
<Footer />
