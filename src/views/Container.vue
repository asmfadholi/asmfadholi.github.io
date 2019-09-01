<template>
  <div class="Container">
    <b-container>
      <b-row>
        <b-col
          cols="12"
          lg="8">
          <transition name="fade">
            <Banner v-if="is_show_banner"/>
          </transition>
          <br>
          <transition name="fade">
            <Experience v-if="is_show_content"/>
          </transition>
          <transition name="fade">
            <Education v-if="is_show_content"/>
          </transition>
          <transition name="fade">
            <Certification v-if="is_show_content"/>
          </transition>
          <br>
          <transition name="fade">
            <Skill v-if="is_show_content"/>
          </transition>
        </b-col>

        <b-col
          cols="12"
          lg="4">
          <br>
          <transition name="fade">
            <Portfolio v-if="is_show_portfolio"/>
          </transition>
        </b-col>
      </b-row>
    </b-container>
    <router-view />
  </div>
</template>

<script>
import Banner from './Banner';
import Experience from './Experience';
import Education from './Education';
import Certification from './Certification';
import Skill from './Skill';
import Portfolio from './Portfolio';

export default {
  name: 'Container',
  components: {
    Banner,
    Experience,
    Education,
    Certification,
    Skill,
    Portfolio,
  },
  data() {
    return {
      is_show: false,
      is_show_banner: false,
      is_show_content: false,
      is_show_portfolio: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.is_show_banner = true;
    }, 1000);
    setTimeout(() => {
      this.is_show_content = true;
    }, 1500);
    setTimeout(() => {
      this.is_show_portfolio = true;
    }, 2000);
  },
};

</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all .5s ease;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(20px);
}
</style>
