<script>

    export let messageList = [""];
    // default mesaj müşteriden temsilciye doğru. buna göre bubble rengi belirlenir. ve atanan profil fotoğrafı.
    export let fromRepresentative = false; 
    //default değer müşteri fotoğrafı. src gönderilmediyse müşteridendir. 
    let srcCustomer = "../images/profile-icon-woman.png";
    let srcRep = "../images/customer-support-male.png";
    let src;

</script>

<div class="bubble" class:from-rep={fromRepresentative}>
    <!-- slot kullanılmalı mı data gönderirken gerekli mi -->
    <slot>
        {#if fromRepresentative===true}
        <img src=srcRep alt="Profile" height="40px" width="40px">
        {:else}
        <img src=srcCustomer alt="Profile" height="40px" width="40px">
        {/if}
        <!-- conditional class for bubble color -->
        <div class="messages">
        {#each messageList as msg}
            <p>{msg}</p>
        {/each}
        </div>
        <!-- mesaj listesinden gelen her bir elemanı tek kutucuk olarak yazdır.  -->
    </slot>
</div>

<style>

img{
    border-radius: 10px;
    margin: 5px 5px;
}

p{
    border-radius: 12px;
    font-size: small;
    font-weight: 400;
    padding: 8px 16px;
    background: #F1F1F1;
    color: black;
    

    /* mesaj uzunluğuna göre yükseklik ayarlanmalı. ama max genişlik de verilmeli.
    width: 168px;
    height: 37px;
    */
    max-width: 300px;
}

.bubble.from-rep p{
  
    background: #7596e3; /*daha koyu da olabilir, veya mavi renkli */
    color: white; /*siyah da kalabilirdi*/
}

.bubble.from-rep{
    flex-direction: row-reverse;
    justify-content: flex-end;
    position: absolute;
    right: 20px;
}


.bubble{    /*buraları düzenle. */
    display: flex;
    margin: 24px 0;
}

.messages{
    gap: 10px;
}
</style>