<template>
  <div class="Container">
    <b-container>
      <b-row>
        <b-col
          cols="12"
          lg="8">
          <Banner />
          <br>
          <Experience />
          <Education />
          <Certification />
          <br>
          <Skill />
        </b-col>

        <b-col
          cols="12"
          lg="4">
          <br>
          <Portfolio />
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
};

</script>
