<script>
  import { RouterLink } from 'vue-router'
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">WeroxStore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="navbar-brand" to="/clientes"> Clientes </RouterLink>
          <RouterLink class="navbar-brand" to="/proveedores"> Proveedores </RouterLink>
          <RouterLink class="navbar-brand" to="/ventas"> Ventas </RouterLink>
          <RouterLink class="navbar-brand" to="/clientes/registro"> Registro </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>