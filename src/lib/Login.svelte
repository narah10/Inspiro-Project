<script>
  import { signUp, login } from "./auth.mjs";
  import Swal from "sweetalert2";
  import canvasConfetti from "canvas-confetti";

  let email = "";
  let password = "";
  let loading = false;
  let errorMessage = "";

  async function handleSignup(e) {
    try {
      loading = true;
      signUp({ email, password });

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

      login({ email, password });

 
      const loginSuccess = true;

      if (loginSuccess) {

        await Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500,
        });

        // Trigger confetti effect
        const confettiSettings = { target: 'login-confetti' };
        canvasConfetti(confettiSettings);
      }
    } catch (err) {
      errorMessage = err;
    } finally {
      loading = false;
    }
  }
</script>

<p>Sign in Below</p>
<form on:submit={handleLogin}>
  <p>
    <label for="email">Email</label>
    <input type="text" id="email" name="email" bind:value={email} />
  </p>
  <p>
    <label for="password">Password</label>
    <input type="password" name="password" id="password" bind:value={password} />
  </p>
  {#if errorMessage}
    <p>{errorMessage}</p>
  {/if}
  <button disabled={loading}>Login</button>
  <button type="button" disabled={loading} on:click={handleSignup}>Signup</button>
</form>
<div id="login-confetti"></div>
