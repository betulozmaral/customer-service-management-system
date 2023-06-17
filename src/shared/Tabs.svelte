<script>

    // App.svelte'den gelen propları burada kabul edeceğiz 
    export let items ;
    export let activeItem;
    import { createEventDispatcher } from 'svelte';
    //kullanıcı bir itema tıkladığında, bu dispatch fonksiyonunu custom eventi ateşlemek (dispatch) için kullanabiliriz.
    const dispatch = createEventDispatcher(); 
</script>


<div class="tabs">
    <ul>
        {#each items as item} 
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => dispatch('tabChange', item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>

</div>



<style>
    .tabs{
        margin-bottom: 25px;
    }
    ul {
        /*list itemlerini sütun olarak gösterelim, ortalayalım, başlarındaki bulletı kaldıralım, default paddingi sıfırlayalım*/
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    /*list itemleri birbirinden ayıralım*/
    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;    /*tıklanabilir olduğunu göstermek için */
    }
    /* Eğer aktif element seçili ise farklı bir stil vereceğim. seen messages, unseen messages gibi. */
    .active{
        color: #f76969;
        /*nesnenin altına kırmızı bir çizgi çeker ve bundan sonra padding/boşluk bırakır */ 
        border-bottom: 2px solid #f68080;
        padding-bottom: 8px;
    }

</style>