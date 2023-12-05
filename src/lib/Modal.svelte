<script>
    export let message = '';
    import { onMount, afterUpdate } from 'svelte';
  
    function close() {
      message = '';
    }
  
    onMount(() => {
      // Este código se ejecuta cuando el componente se monta
      if (message) {
        setTimeout(() => {
          close();
        }, 1000);
      }
    });
  
    // Utiliza afterUpdate para ejecutar el código cuando cambia el mensaje
    afterUpdate(() => {
      if (message) {
        setTimeout(() => {
          close();
        }, 1000);
      }
    });
  </script>
  
  <style>
    /* Estilos para el fondo de desenfoque */
    .blur-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5); /* Ajusta el nivel de opacidad según tus preferencias */
      backdrop-filter: blur(50px); /* Ajusta el nivel de desenfoque según tus preferencias */
      z-index: 999; /* Asegúrate de que tenga un índice z mayor que el modal */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    /* Estilos para el modal */
    .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding:  0rem 1rem;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    font-size: 1.2rem;
    transition: opacity 1s ease-in-out;
  }
  </style>
  
  
  {#if message}
    <div class="blur-background">
      <div class="modal">
        <p>{message}</p>
      </div>
    </div>
  {/if}
  