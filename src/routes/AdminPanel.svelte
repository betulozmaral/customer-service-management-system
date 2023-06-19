<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
    import {Link} from 'svelte-navigator';


    let src = "../images/customer-service-neutral.png"
    let admin= {};

    let tableData = [
    {
        "col1" : "value1",
        "col2" : "value2",
        "col3" : "value3",
    },
    {
        "col1" : "value4",
        "col2" : "value5",
        "col3" : "value6",
    }
  ];

  let repTable=[{}];

  async function getRepStatistics() {
    try{
        const accessToken = localStorage.getItem('access_token');
        const config = {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Origin': window.location.origin
                }
        };
        const response = await axios.get('http://localhost:9090/admin/getrepresentativesstatistics', config);
            repTable = response.data;
        } catch (error) {
            console.error(error);
        }
    }

    onMount(getRepStatistics);
    // repTable = repTable.filter((rep) => rep.representativeName !== "");
    const repColumns = ["Name","Ongoing chats", "Ended chats","Total chats", 
    "Messages sent", "Messages received", "Total messages", "Words sent", 
    "Words received", "Total words", "Workload"];

</script>

<div class="wrapper">  
    <header>
        <Link to="/">
            <img src="../images/logo-no-background.png" alt="Orion logo" height="50px" width="auto"/>
        </Link>

        <div class="account-info">
            <img {src} alt="Profile" height="40px" width="40px">
            <p>Admin</p>
        </div>
    </header> 

    <div class="window">
            <table>
                <thead>
                <tr>
                    <!-- {#each Object.keys(tableData[0]) as columnHeading} -->
                    {#each Object.keys(repTable[0]) as columnHeading, i}
                    <th>{repColumns[i]}</th>
                    <!-- <th>{columnHeading}</th> -->
                    {/each}
                </tr>
                </thead>
                <tbody>
                    <!-- {#each Object.values(tableData) as row} -->
                    {#each Object.values(repTable) as row}
                    {#if row.representativeName!==""}
                <tr>
                    {#each Object.values(row) as cell}
                    <td>{cell}</td>
                    {/each}
                </tr>
                {/if}
                {/each}
                </tbody>
          </table>
    </div>

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

    .window{
        background: #f7f7f783;
        border-radius: 16px;
        padding: 20px;
        margin: 15px 20px;   
        height: 530px;
        /* width: 750px; */

    }

    th, td {
    border: 1px solid;
    border-collapse: collapse;
    margin: 10px;
    padding: 10px;
  }

  table{
    border: 1px solid;
    margin: 120px auto;
    border-collapse: collapse;
    font-size: small;
  }

</style>