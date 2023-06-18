<script>
// @ts-nocheck

    import Tabs from "../shared/Tabs.svelte";
    import {Link, navigate} from 'svelte-navigator';
    import { DateInput } from 'date-picker-svelte';
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

    //tabs, bunlara tıklayınca ilgili listeler gösterilecek. hint: mesaj listesinde okunan ve okunmayanlar.
	let items = ["Open", "Completed"];
	//başlarken hangisi aktif olacak?
	$: activeItem = "Open";


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

    let text="";
    
    let selectedChat = undefined;
    const chats = [
            {
                "id": 41,
                "externalId": "1361402515355553794",
                "customerName": "David",
                "platform": "TWITTER",
                "messages": [
                    {
                        "id": 415,
                        "externalId": "1669405379401269253",
                        "text": "Merhabalar",
                        "time": 1686852233158,
                        "direction": false,
                        "readStatus": null
                    },
                    {
                        "id": 416,
                        "externalId": "1669415798215983118",
                        "text": "Merhaba, nasıl yardımcı olabilirim",
                        "time": 1686854717197,
                        "direction": true,
                        "readStatus": null
                    }
                ],
                "hasEnded": false,
                "satisfactionRate": null,
                "duration": null
            },
            {
                "id": 45,
                "externalId": "9112649675442355",
                "customerName": "Lana",
                "platform": "FACEBOOK",
                "messages": [
                    {
                        "id": 448,
                        "externalId": "m_fwToYSFifhRb-wMqN-4Wtw8_7V1IRABj_LOtpkS6X0pQAHmHoExtNs3tboY5E2_7zmCb8TJCFAg42L5OVZTuWQ",
                        "text": "Bir sorum var. Yardımcı olabilir misiniz?",
                        "time": 1676745627000,
                        "direction": false,
                        "readStatus": null
                    },
                    {
                        "id": 449,
                        "externalId": "m_HmkxJ3Qk5Og8TUy9Fzi27w8_7V1IRABj_LOtpkS6X0oNSNnO_4eHYHHZHd7A4jRzdfYUaJ8QKFEHLZTTkCZPhQ",
                        "text": "merhaba",
                        "time": 1676745824000,
                        "direction": false,
                        "readStatus": null
                    },
                    {
                        "id": 450,
                        "externalId": "m_FqSTLaBsbHAvr_efz874zQ8_7V1IRABj_LOtpkS6X0oP5Xpns7rCiWb_JqGe2n2-reK8oGNvow-zxMhVU1BQ1A",
                        "text": "deneme 1",
                        "time": 1676745828000,
                        "direction": false,
                        "readStatus": null
                    },
                    {
                        "id": 451,
                        "externalId": "m_kxbgLDqO-fSOnhamFkWgXg8_7V1IRABj_LOtpkS6X0rSeg14r08dgfgPDGTYJvBNCSxQwZeOaGqKgPlUaXZOIQ",
                        "text": "Bir hata alıyorum",
                        "time": 1686854774000,
                        "direction": true,
                        "readStatus": null
                    }
                ],
                "hasEnded": false,
                "satisfactionRate": null,
                "duration": null
            },
            {
                    "id": 40,
                    "externalId": "1315004293523668994",
                    "customerName": "Susan",
                    "platform": "TWITTER",
                    "messages": [
                        {
                            "id": 394,
                            "externalId": "1661877105515216905",
                            "text": "Peace post ❤️ https://t.co/vZWHJEGWo2",
                            "time": 1685057352795,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 395,
                            "externalId": "1662048723994660869",
                            "text": "♥️",
                            "time": 1685098269829,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 396,
                            "externalId": "1663551499304337414",
                            "text": "https://t.co/sfjEpOuc4m",
                            "time": 1685456559383,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 397,
                            "externalId": "1663811959861420037",
                            "text": "https://t.co/KY2NB6rvBC",
                            "time": 1685518658019,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 398,
                            "externalId": "1664704146434412559",
                            "text": "Neden çocuk yapmamaliyiz huaoajzhxiwjs https://t.co/PKJ2WiVcNt",
                            "time": 1685731371874,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 399,
                            "externalId": "1664704666481971214",
                            "text": "Djfkflflff",
                            "time": 1685731495863,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 400,
                            "externalId": "1664704675214512138",
                            "text": "Evet yaaa",
                            "time": 1685731497945,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 401,
                            "externalId": "1665285767000739844",
                            "text": "https://t.co/3p6XaOt5T9",
                            "time": 1685870041023,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 402,
                            "externalId": "1665568772885708804",
                            "text": "https://t.co/2haim3kiIz",
                            "time": 1685937514884,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 403,
                            "externalId": "1665617069000228868",
                            "text": "https://t.co/B1v9GL7FEj",
                            "time": 1685949029575,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 404,
                            "externalId": "1665617090718445573",
                            "text": "https://t.co/Z8sJRZHUvG",
                            "time": 1685949034753,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 405,
                            "externalId": "1665652040658300933",
                            "text": "https://t.co/bDRAFYO0wk",
                            "time": 1685957367468,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 406,
                            "externalId": "1666365671825891332",
                            "text": "https://t.co/A5fBEeex5W",
                            "time": 1686127510397,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 407,
                            "externalId": "1666372008085422085",
                            "text": "Tatil needdddd https://t.co/13lnXRoFL1",
                            "time": 1686129021079,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 408,
                            "externalId": "1666823169146241030",
                            "text": "Allah ım sen nasip et lütfen jajsksk https://t.co/ZMbVQuh39y",
                            "time": 1686236586258,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 409,
                            "externalId": "1667063575402225675",
                            "text": "https://t.co/uUCUbdP8bq",
                            "time": 1686293903576,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 410,
                            "externalId": "1667068506616000518",
                            "text": "Haber güzel ama yorumlar realite akıyor jajkajsjs https://t.co/qQ4jjbJecd",
                            "time": 1686295079269,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 411,
                            "externalId": "1669117395250585604",
                            "text": "This is a message from postman",
                            "time": 1686783572386,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 412,
                            "externalId": "1669117737623330823",
                            "text": "Love from postman <3",
                            "time": 1686783654014,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 413,
                            "externalId": "1669118302671589381",
                            "text": "Love from postwoman (elle yazdım)",
                            "time": 1686783788732,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 414,
                            "externalId": "1669415760546938885",
                            "text": "Manitan çalışıyo bu bir deneme mesajıdır",
                            "time": 1686854708216,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 473,
                            "externalId": "1669690826786586630",
                            "text": "Ya ben bunu yerim yer maşallah ne kadar akıllı uslu bi kediymis https://t.co/CIZQY2Msgc",
                            "time": 1686920289118,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 474,
                            "externalId": "1669710265070256132",
                            "text": "Ayy yavrum benim bebeğim",
                            "time": 1686924923566,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 475,
                            "externalId": "1669710291028803590",
                            "text": "♥️",
                            "time": 1686924929755,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 476,
                            "externalId": "1669710319210442756",
                            "text": "Sorunum giderilmedi hala.",
                            "time": 1686924936474,
                            "direction": false,
                            "readStatus": null
                        }
                    ],
                    "hasEnded": false,
                    "satisfactionRate": null,
                    "duration": null
            },
            {
                    "id": 42,
                    "externalId": "1123696435235622916",
                    "customerName": "Mathew",
                    "platform": "TWITTER",
                    "messages": [
                        {
                            "id": 417,
                            "externalId": "1668651611931959300",
                            "text": "Bu bir deneme mesajıdır",
                            "time": 1686672520989,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 418,
                            "externalId": "1668651719197093892",
                            "text": "Merhaba ben onur",
                            "time": 1686672546563,
                            "direction": true,
                            "readStatus": null
                        },
                        {
                            "id": 419,
                            "externalId": "1668652563917414404",
                            "text": "Yardımınız için teşekkürler",
                            "time": 1686672747960,
                            "direction": true,
                            "readStatus": null
                        }
                    ],
                    "hasEnded": false,
                    "satisfactionRate": null,
                    "duration": null
            },
            {
                    "id": 47,
                    "externalId": "17841456803916904",
                    "customerName": "Javier",
                    "platform": "INSTAGRAM",
                    "messages": [
                        {
                            "id": 456,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDgzODQ2MDY2Njg5NDU5NzA0MjIzNzEwMzM3NTY0NjcyMAZDZD",
                            "text": "Merhaba",
                            "time": 1671756302000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 457,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDgzODQ2MDcwNzYxMDgwMzk2NDA1MTAzNjk4OTAzMDQwMAZDZD",
                            "text": "Selamlar",
                            "time": 1671756304000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 458,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDg0MDk1Mjk0MDE5NTgyNTk0ODMzNTg5NTk2NjkwODQxNgZDZD",
                            "text": "Instagram deneme deneme",
                            "time": 1671891408000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 459,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDg0MTA0MjA1NTcxMDk2ODc1ODgyNDgwNDc3MDkwNjExMgZDZD",
                            "text": "Mesaj mesaj mesaj",
                            "time": 1671896239000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 460,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDg0MTA2MjEyNjc2NTczMzQ5MjY5NzYyNzYyOTcxNTQ1NgZDZD",
                            "text": "Merhaba Onur",
                            "time": 1671897327000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 461,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDg0MTA2MzA1NTMxODk5MTg2ODkyNTMzNzE2NjQxMzgyNAZDZD",
                            "text": "Merhaba Onur",
                            "time": 1671897378000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 462,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDg0MzA0OTYzMjYxNzA4MjI3MzMzNDk2NjU1NzM0Mzc0NAZDZD",
                            "text": "",
                            "time": 1672005070000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 463,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDk3NTU3NzgwMjIwNjY1MzA1MTMxNDcxMzc4OTQ2NDU3NgZDZD",
                            "text": "MErhaba bu bir deneme mesajıdır cts",
                            "time": 1679189437000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 464,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDk4ODE0ODI1MzY2NzQ2ODc4MzgyMzk2MjUzNDU3NjEyOAZDZD",
                            "text": "Pazar gecesi : 283505501004377",
                            "time": 1679870882000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 465,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDk4ODE1Mjk2MzQyMDk1MzQ5OTU4MjEyMjg5NDAzMjg5NgZDZD",
                            "text": "Süper bilgi",
                            "time": 1679871138000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 466,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDk4ODE1MzAwNzcwODA5OTU4NTkyODgyNTIxODc5MzQ3MgZDZD",
                            "text": "Teşekkürler",
                            "time": 1679871140000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 467,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMDk5OTI0NTc0NDk1NDI5ODc0NDg4MjA3ODcxNDY5MTU4NAZDZD",
                            "text": "Hello HELLO, world WORLD!",
                            "time": 1680472479000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 468,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMTExNTYzODUzMTQ4OTY1OTc3NzIwNjc3NjI0MjM3MjYwOAZDZD",
                            "text": "Bana mesaj atabilmen için sana mesaj atıyorummmm",
                            "time": 1686782144000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 469,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMTExNTY1MDM2ODkxMDQ3MDg1ODk5Nzk5NDk4MTY4NzI5NgZDZD",
                            "text": "This is a message from graph api explorer",
                            "time": 1686782786000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 470,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMTExNTY1NDQ4MjEzNDUxMDc3ODE5ODEyOTY4OTc1NTY0OAZDZD",
                            "text": "This is a message from postman",
                            "time": 1686783009000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 471,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMTExNjk3Njc0OTg1MTQwMTE2MDExNTI5OTI5MzMzMTQ1NgZDZD",
                            "text": "Merhaba merhabaaaa",
                            "time": 1686854689000,
                            "direction": false,
                            "readStatus": null
                        },
                        {
                            "id": 472,
                            "externalId": "aWdfZAG1faXRlbToxOklHTWVzc2FnZAUlEOjE3ODQxNDU2ODAzOTE2OTA0OjM0MDI4MjM2Njg0MTcxMDMwMDk0OTEyODExNzUxNzgyMDE1OTc2NTozMTExNjk3OTA4MDkxMzI2Nzc5MTYyNjgzMjM2OTk0MjUyOAZDZD",
                            "text": "İyi günler",
                            "time": 1686854816000,
                            "direction": false,
                            "readStatus": null
                        }
                    ],
                    "hasEnded": false,
                    "satisfactionRate": null,
                    "duration": null
            }
	];

    function selectChat(id) {
        selectedChat = chats.find(chat => chat.id === id);
    }

</script>


<div class="wrapper">   
    <header>
        <Link to="/">
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
                <!-- <div style="display: flex;"> -->
                <!-- <div class="chat-list"> -->
                <div class="chat-boxes">
                    
                {#each chats as chat (chat.id)}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="chat-box {selectedChat && selectedChat.id === chat.id ? 'active' : ''}" on:click={() => selectChat(chat.id)}>
                    <img {src} alt="Profile" height="40px" width="40px">    <!--her zaman müşterinin fotosu-->
                    <div class="name-and-message">
                        <p class=name>user:{chat.externalId} from {chat.platform.toLowerCase()} </p>
                        <!-- <p class=message>{message.substring(0,25)}...</p> son gönderilen mesajın ilk 25 karakteri gösterilmeli örn. -->
                    </div>
                    <!-- <p class=date>{chat.platform.toLowerCase()}</p> -->
                </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- <div class="chat-list-item {selectedChat && selectedChat.id === chat.id ? 'active' : ''}" on:click={() => selectChat(chat.id)}> -->
                     <!-- <h4>user:{chat.externalId} from {chat.platform.toLowerCase()}</h4> -->
                    <!-- </div> -->
                {/each}
                </div>
                <!-- </div> -->
            {:else if activeItem === "Completed"}
                <p>Completed conversations</p>
            {/if}
        </div>


    <div class="chat-window"> <!--sağ sütun-->
            {#if showCalendar===true}
                <p>Başlangıç tarihi:</p>
                <DateInput bind:value={dateStart}/>
                <p>{dateStart}</p>
                <p>Bitiş tarihi:</p>
                <DateInput bind:value={dateEnd} />
        <!-- <div class="chat-content"> -->
            {:else if selectedChat}
            <!-- <h3>Chat with user {selectedChat.externalId}</h3> -->
            <div class="chat-header">
                <div class="profile-container">
                    <img src="../images/profile-icon-woman.png" alt="Profile" height="40px" width="40px">  <!--bu bilgiler chat boxtan geliyor.src bilgisi de.-->
                    <p>User: {selectedChat.externalId}</p>
                </div>
                <p class="platform">from {selectedChat.platform}</p>   
            </div> 
            <div class="message-bubbles-wrapper">
            {#each selectedChat.messages as message (message.id)}
                <div class="message {message.direction ? 'sent' : 'received'}">
                    <p>{message.text}</p>
                    <small>{new Date(message.time).toLocaleString()}</small>
                </div>
            {/each}
            </div>
            <div class="msg-input-box">
                <!-- Mesajları yazdırsın ekrana. -->
                <input bind:value={text} type="text" placeholder="Type a message">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div class="send-button" on:click={()=>console.log(text)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.1401 0.959982L5.11012 3.95998C-0.959883 5.98998 -0.959883 9.29998 5.11012 11.32L7.79012 12.21L8.68012 14.89C10.7001 20.96 14.0201 20.96 16.0401 14.89L19.0501 5.86998C20.3901 1.81998 18.1901 -0.390018 14.1401 0.959982ZM14.4601 6.33998L10.6601 10.16C10.5101 10.31 10.3201 10.38 10.1301 10.38C9.94012 10.38 9.75012 10.31 9.60012 10.16C9.46064 10.0188 9.38242 9.82841 9.38242 9.62998C9.38242 9.43155 9.46064 9.24112 9.60012 9.09998L13.4001 5.27998C13.6901 4.98998 14.1701 4.98998 14.4601 5.27998C14.7501 5.56998 14.7501 6.04998 14.4601 6.33998Z" 
                        fill="#7596e3"/>    <!--iconun rengini değiştirebilirsin.-->
                    </svg>
                        
                </div>
            </div>
        <!-- </div> -->
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

    ul{
        list-style-type: none;
        margin : 0;
        padding: 0;
    }

    li{
        margin-bottom: 10px;
    }



    .chat-list {
        width: 30%;
        overflow: auto;
        border-right: 1px solid #ddd;
    }

    .chat-content {
        width: 70%;
        padding: 1rem;
        overflow: auto;
    }

    .chat-list-item {
        padding: 1rem;
        border-bottom: 1px solid #ddd;
    }

    .chat-list-item.active {
        background: #ddd;
    }

    .message.sent {
        text-align: right;
    }

    .message.received {
        text-align: left;
    }
    
    .message.sent {
    text-align: right;
    background-color: #dcf8c6;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
}

.message.received {
    text-align: left;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
}

.chat-box{
        display: flex;
        position: relative;
        background: #f1f1f198;
        border-radius: 10px;
        padding: 0 5px;
        font-size: small;
    }



    .name-and-message{
        margin-left: 15px;

    } 


</style>