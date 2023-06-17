<script>
    import ChatBox from '../shared/ChatBox.svelte';
    import MessageBubble from '../shared/MessageBubble.svelte';
	import Tabs from "../shared/Tabs.svelte";
    import {Link, navigate} from 'svelte-navigator';
    import ChatStore from '../stores/ChatStore.js';
    import { DateInput } from 'date-picker-svelte';
    import axios from 'axios';

	
	function datepicked (e) {
		console.log(e.detail.datepicked)
	}


    export let representative = {
        name: "Sam",
        gender: "Male",
        id:123
    };

    export let src;
    if (representative.gender === "Female"){
        src = "../images/customer-service-agent.png"
    }
    else if(representative.gender === "Male"){
        src = "../images/customer-support-male.png";
    }
    else{
        src = "../images/customer-service-neutral.png";
    }


    
    let customerChat =[ {
        customerName: "David",
        customerId: "138",
        messages: ["i cant find something..."],   
        date: "12.20",
        platform: "Instagram"
    },
    {
        customerName: "Susan",
        customerId: "123",
        messages: ["hello, may i ask a question?"],
        date: "13.05",
        platform: "Twitter"
    },
    {
        customerName: "Beth",
        customerId: "102",
        // message id'ye gerek var mı?
        messages: ["asdfgjk"],
        date: "12.25",
        platform: "Twitter"
    },
    {
        customerName: "John",
        customerId: "192",
        messages: ["agsghd sjckjscksc hskjcc"],
        date: "09.25",
        platform: "Telegram"
    }
    ];




    let repChat = {
        repName: representative.name,
        repId: representative.id,
        messageList: [{
            message: "",
            date: ""}]
    };

    let lastMessage;

    	//tabs, bunlara tıklayınca ilgili listeler gösterilecek. hint: mesaj listesinde okunan ve okunmayanlar.
	let items = ["Open", "Completed"];
	//başlarken hangisi aktif olacak?
	let activeItem = "Open";
	//bu propları tab componentına göndereceğiz.
    let text="";

    const tabChangeHandler = (event) => {
		//event objesi ve detail propertysini kullanarak gönderilen data'yı alabiliriz.
		activeItem = event.detail;
	};

    let dateStart = new Date();
    let dateEnd = new Date();
    let showCalendar = false;
    const pickDate = () => {
		showCalendar = true;
	};

    const navigateHome = () => {
        showCalendar = false;
    };


</script>

<!-- bu elementlerin oturduğu beyaz pencere -->
<div class="wrapper">   
    <header>
        <Link to="/chats">
        <img src="../images/logo-no-background.png" alt="Orion logo" height="50px" width="auto"/>
        </Link>
        <nav class ="navbar">
            <div class="icons">
                <ul>
                    <li>
                        <Link to="/chats">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" on:click={navigateHome}>
                        <path d="M12 17.99V14.99M9.02 2.83999L3.63 7.03999C2.73 7.73999 2 9.22999 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28999 21.19 7.73999 20.2 7.04999L14.02 2.71999C12.62 1.73999 10.37 1.78999 9.02 2.83999Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </Link>

                    </li> 
                    
                    <li>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div class="calendar" on:click={pickDate}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9949 13.7H12.0049M8.29395 13.7H8.30395M8.29395 16.7H8.30395" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                            
                    </li>

                    <li>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15V15Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2 12.88V11.12C2 10.08 2.85 9.22 3.9 9.22C5.71 9.22 6.45 7.94 5.54 6.37C5.02 5.47 5.33 4.3 6.24 3.78L7.97 2.79C8.76 2.32 9.78 2.6 10.25 3.39L10.36 3.58C11.26 5.15 12.74 5.15 13.65 3.58L13.76 3.39C14.23 2.6 15.25 2.32 16.04 2.79L17.77 3.78C18.68 4.3 18.99 5.47 18.47 6.37C17.56 7.94 18.3 9.22 20.11 9.22C21.15 9.22 22.01 10.07 22.01 11.12V12.88C22.01 13.92 21.16 14.78 20.11 14.78C18.3 14.78 17.56 16.06 18.47 17.63C18.99 18.54 18.68 19.7 17.77 20.22L16.04 21.21C15.25 21.68 14.23 21.4 13.76 20.61L13.65 20.42C12.75 18.85 11.27 18.85 10.36 20.42L10.25 20.61C9.78 21.4 8.76 21.68 7.97 21.21L6.24 20.22C5.8041 19.969 5.48558 19.5553 5.35435 19.0698C5.22311 18.5842 5.28988 18.0664 5.54 17.63C6.45 16.06 5.71 14.78 3.9 14.78C2.85 14.78 2 13.92 2 12.88V12.88Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                    </li>
                </ul>
            </div>
        </nav>

        <div class="account-info">
            <img {src} alt="Profile" height="40px" width="40px">
            <p>{representative.name}</p>
        </div>

    </header>

    <main>
        <div class="chat-list"> <!--sol sütun-->
	<!-- Tabs componentını import ettikten sonra bu componenta items proplarını 
	gönderelim. prop ve değişken ismi aynı olduğu için { } içinde yazmamız yeterli -->
	        <Tabs {activeItem} {items} on:tabChange={tabChangeHandler} />

            
            <!--Burada seçilen itema göre içerik göstereceğiz.-->
            {#if activeItem === "Open"}
                <!--buraya gönderilen liste farklı olacak sadece.-->
                <div class="chat-boxes">
                    <!--kaç tane varsa. sürekli güncellenecek. max kaç tane box görüntülenecek.storeda depolanabilir belki.-->
                    <!-- bunlar chat boxlar. liste halinde sıralanır.son mesaj gönderilir sadece. -->
                        {#each customerChat as customer}
                            {#if customer.messages.length > 0}
                            <!-- lastMessage = {customer.messages[customer.messages.length-1]}; -->
                            <!-- aynı customer id'sine sahip mesajlar farklı boxlarda görünmemeli. storeda mı saklıyoruz? poll oluşturmaya bak.  -->
                                <!-- <ChatBox customerName={customer.customerName} date={customer.date}  messages={customer.messages}/> -->
                            {/if}
                        {/each}
                </div>
            {:else if activeItem === "Completed"}
                <p>Completed conversations</p>
            {/if}
        </div>

        <!--default olarak ilk chat, sonrasında chat listte hangi chate tıklandıysa o.-->
        <div class="chat-window"> <!--sağ sütun-->
            {#if showCalendar===true}
                <p>Başlangıç tarihi:</p>
                <DateInput bind:value={dateStart}/>
                <p>{dateStart}</p>
                <p>Bitiş tarihi:</p>
                <DateInput bind:value={dateEnd} />

            {:else}
            <div class="chat-header">
                <div class="profile-container">
                    <img src="../images/profile-icon-woman.png" alt="Profile" height="40px" width="40px">  <!--bu bilgiler chat boxtan geliyor.src bilgisi de.-->
                    <p>{customerChat[0].customerName}</p>
                </div>
                <p class="platform">from platform</p>   
            </div>
            <div class="message-bubbles-wrapper">
                <!-- müşteriden gelen mesajda src ye gerek yok.  -->
                <!-- <MessageBubble messageList={customerChat[0].messages}/>  her yeni mesaj, ismi, ppsi, tarihi, mesaj bilgisiyle geliyor. -->
            <!-- bu triggerlanarak gösterilmeli. yeni mesaj geldiğinde veya customer service yanıt gönderdiğinde
            bu mesajlar yine bir yerde depolanacak. bir pencerede max şu kadar cm alan var, onu aşınca yukarı kaymalı. slider-->
                <!-- temsilciden iletilen mesajda srcyi de göndeririz -->
                <!-- <MessageBubble fromRepresentative = {true} messageList=repChat.messageList {src}/> -->
            </div>
            <div class="msg-input-box">
                <!-- Mesajları yazdırsın ekrana. -->
                <input bind:value={text} type="text" placeholder="Type a message">
                <div class="send-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.1401 0.959982L5.11012 3.95998C-0.959883 5.98998 -0.959883 9.29998 5.11012 11.32L7.79012 12.21L8.68012 14.89C10.7001 20.96 14.0201 20.96 16.0401 14.89L19.0501 5.86998C20.3901 1.81998 18.1901 -0.390018 14.1401 0.959982ZM14.4601 6.33998L10.6601 10.16C10.5101 10.31 10.3201 10.38 10.1301 10.38C9.94012 10.38 9.75012 10.31 9.60012 10.16C9.46064 10.0188 9.38242 9.82841 9.38242 9.62998C9.38242 9.43155 9.46064 9.24112 9.60012 9.09998L13.4001 5.27998C13.6901 4.98998 14.1701 4.98998 14.4601 5.27998C14.7501 5.56998 14.7501 6.04998 14.4601 6.33998Z" 
                        fill="#7596e3"/>    <!--iconun rengini değiştirebilirsin.-->
                    </svg>
                        
                </div>
            </div>
            {/if}
        </div>
    </main>


</div>




<style>
    .wrapper{
        max-width: 1200px;
        height: 700px; /*sonradan bu pencere boyutunu ayarla */
        margin: 20px auto;
        padding: 20px;
        background: #f7f7f71e;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 16px;

    }

    .chat-list, .chat-window{
        background: #f7f7f783;
        border-radius: 16px;
        padding: 20px;
        margin: 15px 0;   
        height: 530px;
    }

    .chat-list{
        width: 300px;
        margin-left: 20px;
        overflow-y: scroll;

    }

    .chat-window{
        width: 750px;
        margin-right: 20px;
        position: relative;
    }

    .account-info{
        display: flex;
    }

    .account-info p{
        margin-right: 35px;
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .icons ul{
        list-style-type: none;
        display: flex;
        gap: 36px;
        margin: 0;
    }

    .icons li{
        cursor: pointer;

    }

    .chat-header{
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        height: 50px;
        border-bottom: 1px solid rgb(165, 164, 164);
    }

    main{
        display: flex;
        gap: 50px;
    }

    .chat-boxes{
        display: flex;
        flex-direction: column-reverse;
        gap: 10px;
        
    }

    .profile-container{
        display: flex;
        gap:10px;
    }

    .message-bubbles-wrapper{
        height: 400px;
        overflow-y: scroll;
        position: relative;
    }
    
    .msg-input-box input{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: 1px solid rgb(165, 164, 164);
        padding: 0 20px;

    }

    .msg-input-box{
        display: flex;
        height: 40px;
        width: 700px;
        margin-right: 40px;
        position: relative;
        cursor: pointer;
        position: absolute;
        bottom: 20px;
    }

    .msg-input-box div{
        position: absolute;
        top: 9px;
        right: 20px;
    }

        
    
</style>