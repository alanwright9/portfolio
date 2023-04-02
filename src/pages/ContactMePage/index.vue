<template>
  <PageBody>
    <PageH>Contact Info</PageH>
    <PageGrid size="1" size-md="2">
      <PageCol>
        <PageP>
          This page is currently under construciton and will feature a full contact form.
          For now, here is my business email address.
        </PageP>
        <PageP>
          Contact me at: techtress (dot) alan (at) gmail (dot) com
        </PageP>
      </PageCol>
      <PageCol>
        <ContactMeForm/>
      </PageCol>
    </PageGrid>
  </PageBody>
</template>

<script setup>
import ContactMeForm from './ContactMeForm.vue'
</script>