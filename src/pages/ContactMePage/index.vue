<template>
  <PageBody>
    <PageH>Contact Info</PageH>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <PageP>
          This page is currently under construciton and will feature a full contact form.
          For now, here is my business email address.
        </PageP>
        <PageP>
          Contact me at: techtress (dot) alan (at) gmail (dot) com
        </PageP>
      </div>
      <div class="col">
        <ContactMeForm/>
      </div>
    </div>
  </PageBody>
</template>

<script setup>
import ContactMeForm from './ContactMeForm.vue'
</script>