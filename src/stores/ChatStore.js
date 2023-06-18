import { writable } from "svelte/store";

//şimdilik bir representative'in üzerindeki sohbetler olsun.
//bu bir data store'u oluşturur. initial data gönderebiliriz. bir data arrayini depoluyor şu an. 
//son gönderilen mesaj saatine göre sıralanmış şekilde bana gelsin. 
const ChatStore = writable(
    [
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
	],
);

//bunu export etmemiz gerek.
export default ChatStore;

//bu store'u dinlemek istediğimiz componentlarda import etmemiz gerek. Örn ChatPage.svelte 
