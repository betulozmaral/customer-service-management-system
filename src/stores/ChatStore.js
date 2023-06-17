import { writable } from "svelte/store";

//şimdilik gelen mesajlar olsun sadece. 
//bu bir data store'u oluşturur. initial data gönderebiliriz. bir data arrayini depoluyor şu an. 
const ChatStore = writable(
    [
		{
			fromRepresentative: false,
			message: "Merhaba, bir sorum olacak.",
            date: "20:30",
            userId:123,
            messageId:1,
            username:"Betül"
		},
        {
			fromRepresentative: false,
			message: "Ürünle ilgili yardımcı olabilir misiniz?",
            date: "20:40",
            userId:125,
            messageId:2,
            username:"Nur"
		},
        {
			fromRepresentative: false,
			message: "Satın almak istediğim bir ürün var.",
            date: "20:40",
            userId:123,
            messageId:3,
            username:"Betül"
		},
        {
            // sadece representative mesaj gönderirken customer id alırız. 
			fromRepresentative: true,
            toCustomerId: 123,
			message: "Tabi, nasıl yardımcı olabilirim?",
            date: "20:41",
            userId:123,
            messageId:4,
            username:"Sam"
		},
	],
);

//bunu export etmemiz gerek.
export default ChatStore;

//bu store'u dinlemek istediğimiz componentlarda import etmemiz gerek. Örn ChatPage.svelte 


/*
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
    */