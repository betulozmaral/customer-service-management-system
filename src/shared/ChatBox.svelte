<script>
    let src= "../images/profile-icon-woman.png";
    export let customerName="";
    export let date ="";
    export let message = ""; //belki sadece son gönderilen mesajı alabiliriz. 
    export let chatId;
</script>

<div class="chat-box">
    <slot>
    <img {src} alt="Profile" height="40px" width="40px">    <!--her zaman müşterinin fotosu-->
    <div class="name-and-message">
        <p class=name>{customerName}</p>
        <p class=message>{message}</p> <!--son gönderilen mesajın ilk 25 karakteri gösterilmeli örn.-->
    </div>
    <p class=date>{date}</p>
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