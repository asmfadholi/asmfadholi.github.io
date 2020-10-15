<template>
  <div class="Contact">
    <b-modal
      ref="modalContact"
      :hide-footer="true"
      title="Mochammad Fadholi"
      @hidden="hidden">
      <b-container fluid>
        <h4 class="t--20 mb--16">Contact Info</h4>
        <div
          v-for="(contact, i) in contacts"
          :key="i">
          <b-row class="mb--16">
            <b-col cols="1">
              <component :is="contact" />
            </b-col>

            <b-col>
              <b>{{ contact.name }}</b>
              <br>
              <a
                class="t--14"
                :href="contact.url">
                {{ contact.label_url }}
              </a>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data() {
    return {
      contacts: [
        {
          name: 'Linkedin',
          logo: '',
          template: `<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="social-icon" focusable="false"><g style="fill: currentColor" class="solid-icon">
        <rect x="-0.003" style="fill:none;" width="24" height="24"></rect>
        <path style="" d="M20,2h-16c-1.1,0-2,0.9-2,2v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2zM8,19h-3v-9h3V19zM6.5,8.8C5.5,8.8,4.7,8,4.7,7s0.8-1.8,1.8-1.8S8.3,6,8.3,7S7.5,8.8,6.5,8.8zM19,19h-3v-4c0-1.4-0.6-2-1.5-2c-1.1,0-1.5,0.8-1.5,2.2V19h-3v-9h2.9v1.1c0.5-0.7,1.4-1.3,2.6-1.3c2.3,0,3.5,1.1,3.5,3.7V19z"></path>
      </g></svg>`,
          url: 'https://www.linkedin.com/in/mochammad-fadholi',
          label_url: 'https://www.linkedin.com/in/mochammad-fadholi',
        },
        {
          name: 'Email',
          logo: '',
          template: '<svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" class="artdeco-icon" focusable="false"><path d="M21,4H3A1,1,0,0,0,2,5V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V5A1,1,0,0,0,21,4ZM20,6V8l-8,5.24L4,8V6H20ZM4,18V9l7.32,4.78a1.25,1.25,0,0,0,1.37,0L20,9v9H4Z" class="large-icon" style="fill: currentColor"></path></svg>',
          url: 'mailto:asmfadholi@gmail.com',
          label_url: 'asmfadholi@gmail.com',
        },
      ],
    };
  },
  mounted() {
    this.$refs.modalContact.show();
  },
  methods: {
    hidden() {
      this.$router.replace('/');
    },
  },
};

</script>

<style lang="scss">
  .mb--16 {
    margin-bottom: 16px;
  }
</style>
