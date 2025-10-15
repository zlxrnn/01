<script>

    import MyLovelyNavbar from "./navbar.svelte";

    let a = "skibidi";
    let randompic = "https://preview.redd.it/yall-i-drew-the-travis-scott-fish-v0-xxlhlp5gbs591.jpg?width=640&crop=smart&auto=webp&s=8b6ec5245a685d602e9ae4e3b7479d90002845f4";
    let o = 0;

    
    
    function skibidi()
    {
        o++;
        if (o == 50) 
        {
            alert("Nenjah");
            o = 0; 
        }
    }

</script>

<style>
    h1 {
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: 700;
        color: red;
    }
</style>

<div class="container " >
    <MyLovelyNavbar />

    <h1>tailwind hilang</h1>
    <p>Lorem udin udin udin ipsum dolor sit amet consectetur adipisicing elit. 
        Veritatis nostrum eos voluptatibus magnam alias maxime. Assumenda 
        voluptatem nulla eum aliquid, maxime dolorem porro sunt facere reiciendis libero, 
        architecto beatae saepe.</p>

    <img src={randompic} alt="">

    <button on:click={skibidi} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me {o}
    </button>

    <video controls autoplay loop muted>
        <source src="/video/ommartin.mp4" type="video/mp4"/>
        sayangggggggggggggggggggggggggggggggggggggggggggggggg
    </video>
</div>
