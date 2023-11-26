<script lang="ts">
    import { page } from '$app/stores';
  
    // Fun error messages
    const errorMessages = [
      "Oops! The page is on vacation.",
      "Page not found, but our sense of humor is intact!",
      "Looks like this page is taking a coffee break.",
      "Are you lost in the digital wilderness?",
      "Uh-oh! The gremlins ate this page.",
      "This page is in a parallel universe.",
    ];
  
    // Select a random error message
    $: errorMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];
  </script>
  
  <div class="flex flex-col items-center justify-center h-screen w-full">
    <img src="/error.svg" alt="404 Not Found" class="h-44 " />
  
    <h1 class="text-4xl font-bold text-gray-800">{$page.status}: {$page.error?.message}</h1>
  
    <p class="text-lg text-gray-600 mb-4">{errorMessage}</p>
  
    <a href="/" class="text-blue-500 hover:underline">Go back home</a>
  </div>