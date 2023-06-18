<script>
    import MessageBubble from "./MessageBubble.svelte";
    export let chat;

</script>

<div class="list-bubbles">
    {#if chat}
    {#each chat.messages as message(message.id)}
        <MessageBubble messageList={message} 
            fromRepresentative={message.direction}
        />
    {/each}
    {:else}
    <p>No chat selected</p>
    {/if}
</div>


<style>

</style>