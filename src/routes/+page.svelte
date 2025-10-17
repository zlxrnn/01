<script lang="js">
    import Navbar from "./navbar.svelte";
    import Footer from "./footer.svelte";

    let quote = "rico adalah rico";
    let author = "-MIkel";

    let count = 0;

    function alertButton() {
        count++
        if (count > 5) {
            window.alert("nengah");
            count = 0;
        }
    }
</script>


<Navbar />

<section class="container">
    <!-- Main shit -->
    <!-- <div class="quotes mt-5">
        <article>{quote}</article>
        <cite>{author}</cite>
    </div> -->

    <!-- Buttons -->
    <!-- <button on:click={() => alertButton() } class=" border-3 bg-black text-white p-4 mt-6 rounded-2xl hover:bg-pink-300 transition-all duration-300">
        Click Me Daddy, I've been clicked by {count}
    </button> -->

    <!-- <video controls loop muted class=" pt-6 size-150">
        <source src="/video/ommartin.mp4" type="video/mp4">
        SAYANGGGGGGGGGGGGGGGGGGGG
    </video> -->

</section>

<Footer />


<style>
    * {
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        /* font-family: "Pixelify Sans", sans-serif;    */
    }

</style>