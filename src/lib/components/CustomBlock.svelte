<script>
    export let data = { content: '' };
  </script>
  
  <div class="custom-block">
    <input type="text" bind:value={data.content} placeholder="Enter custom content" />
  </div>
  
  <style>
    .custom-block {
      padding: 10px;
      border: 1px solid #ddd;
      margin: 5px 0;
    }
  </style>