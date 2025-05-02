<template>
  <div class="min-h-screen flex flex-col">
    <div class="navbar bg-primary text-primary-content">
      <div class="navbar-start">
        <NuxtLink to="/" class=" btn btn-ghost text-xl">
          Travel log
        </NuxtLink>
      </div>
      <div class="navbar-end">
        <a class="btn btn-accent">Sign in</a>
      </div>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>
