<script>
    import ChatStore from '../stores/ChatStore';
    let src= "../images/profile-icon-woman.png";
    export let customerName="";
    export let date;
    export let message = ""; //belki sadece son gönderilen mesajı alabiliriz. 
    export let chatId;
    let time = new Date(date);
    let sentAt = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    import { createEventDispatcher } from 'svelte';
    //kullanıcı bir itema tıkladığında, bu dispatch fonksiyonunu custom eventi ateşlemek (dispatch) için kullanabiliriz.
    const dispatch = createEventDispatcher(); 

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="chat-box" on:click={() => dispatch('showChat', {customerName, chatId, message, date})}>
    <slot>
    <img {src} alt="Profile" height="40px" width="40px">    <!--her zaman müşterinin fotosu-->
    <div class="name-and-message">
        <p class=name>{customerName}</p>
        <p class=message>{message.substring(0,25)}...</p> <!--son gönderilen mesajın ilk 25 karakteri gösterilmeli örn.-->
    </div>
    <p class=date>{sentAt}</p>
    <!--bir de üstüne tıklayınca sohbet ekranına link vs. olmalı-->
    </slot>
</div>

<style>
    .chat-box{
        display: flex;
        position: relative;
        background: #f1f1f198;
        border-radius: 10px;
        padding: 0 5px;
        font-size: small;
    }

    .date{
        position: absolute;
        right: 10px;
    }

    .name-and-message{
        margin-left: 48px;

    } 

    img{
        position: absolute;
        top: 6px;
    }
</style>