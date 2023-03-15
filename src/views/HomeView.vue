<template>
  <div class="main_view">
    <h1>Welcome to my portfolio!</h1>
    <h1>Here you'll find a list of my projects, from university to artwork. I am front-end for now, but aspire to become a Full Stack Developer.</h1>

    <RouterLink to="/projects" class="main_button">
      <h1>Check out my <b>projects!</b></h1>
    </RouterLink>
  </div>
</template>

<style scoped>

h1 {
  margin-top: 0;
  margin-bottom: calc(var(--pad)*2);
  max-width: calc(100% - var(--pad));
}

h1:nth-child(odd)
{
  text-align: left;
}

h1:nth-child(even)
{
  text-align: right;
  margin-left: auto;
}

.main_button h1 {
  margin: 0;
  max-width: 100%;
}

</style>