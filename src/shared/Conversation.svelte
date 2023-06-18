<script>
    import MessageBubble from "./MessageBubble.svelte";
    export let chat;
    // import ChatStore  from "../stores/ChatStore";

</script>

<div class="list-bubbles">
    {#each chat.messages as message}
        <MessageBubble messageList={message} 
            fromRepresentative={message.direction}
        />
    {/each}
</div>


<style>

</style>