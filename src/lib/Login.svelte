<script>
    import { signUp, login } from "./auth.mjs";
    // import { userStore } from "./stores.mjs";
    let email = "";
    let password = "";
    let loading = false;
    let errorMessage = "";
  
    async function handleSignup(e) {
      try {
        loading = true;
        // signup
        signUp({ email, password });
        // if fails throw error
      } catch (err) {
        errorMessage = err;
      } finally {
        loading = false;
      }
    }
    async function handleLogin(e) {
      e.preventDefault();
      try {
        loading = true;
        // login
        login({ email, password });
  
        // if fails throw error
      } catch (err) {
        errorMessage = err;
      } finally {
        loading = false;
      }
    }
  </script>
  
  <!-- <p>Sign in Below</p> -->
  <form on:submit={handleLogin}>
    <div>
      <label for="email">Email</label>
      <input type="text" id="email" name="email" bind:value={email} />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        bind:value={password}
      />
    </div>
    {#if errorMessage}
    <div>
      <p>{errorMessage}</p>
    </div>
    {/if}
    <button disabled={loading}>Login</button>
    <button type="button" disabled={loading} on:click={handleSignup}
      >Signup</button
    >
  </form>
  
  <style>
    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1em;
    }
    input, label{
      display: block;
      text-align: left;
      font-size: 1.1em;
    }
    input {
       padding: 0.5em;
       border: 1px solid #ccc;
       border-radius: 5px;
       margin-bottom: 1em;
       font-size: 1.1em;
   }
   button {
         padding: 0.5em;
         border: 1px solid #ccc;
         color: white;
         border-radius: 5px;
         margin-bottom: 1em;
         font-size: 1.1em;
         background-color: #5A55BC;
   }
  </style>