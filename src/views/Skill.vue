<template>
  <div class="Skill">
    <b-card class="br--2">
      <b-container
        class="mt-3"
        fluid>
        <h2 class="t--20">Skills</h2>
        <br>
        <div
          v-for="(skill, iskill) in skills.slice(0, 3)"
          :key="iskill"
          class="jobs">
          <div>
            <b>{{ skill }}</b>
          </div>
          <hr v-if="(Number(iskill + 1) !== skills.slice(0, 3).length) && (skills.slice(0, 3).length !== 1)">
        </div>
        <b-collapse
          id="my-collapse"
          @shown="shown"
          @hidden="hidden">
          <hr>
          <div
            v-for="(skill, iskill) in skills.slice(3)"
            :key="iskill"
            class="jobs">
            <div>
              <b>{{ skill }}</b>
            </div>
            <hr v-if="(Number(iskill + 1) !== skills.slice(3).length) && (skills.slice(3).length !== 1)">
          </div>
        </b-collapse>
      </b-container>
    </b-card>
    <b-card
      v-if="skills.length > 3"
      class="hover">
      <div
        v-b-toggle.my-collapse
        class="float-to-center p--10">
        See More
      </div>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'Banner',
  data() {
    return {
      is_show: false,
      skills: [
        'Research',
        'Javascript',
        'Vuejs',
        'Nuxtjs',
        'Reactjs',
        'Webpack',
        'Firebase',
        'Git',
        'npm',
        'nodejs',
        'mongodb',
        'mongoose',
        'CSS 3',
        'JQuery',
        'Bootstrap',
        'HTML 5',
      ],
    };
  },
  methods: {
    shown() {
      this.is_show = true;
    },
    hidden() {
      this.is_show = false;
    },
    splitJob(data) {
      const dataTemp = [...data];
      return dataTemp.join(';').slice(0, 120).split(';').splice(0, 3);
    },
    generateYear(job) {
      const endDate = job.end_date ? new Date(job.end_date) : new Date();
      const startDate = new Date(job.start_date);
      const startYear = startDate.getFullYear();
      const endYear = endDate.getFullYear();
      const startMonth = startDate.getMonth();
      const endMonth = endDate.getMonth();
      let totalMonths = 0;
      if (startYear === endYear) {
        totalMonths = endMonth - startMonth;
      } else {
        totalMonths += (endMonth + 1) + (11 - startMonth);
        if ((endYear - startYear) > 1) {
          totalMonths += ((endYear - startYear - 1) * 12);
        }
      }
      const showYear = Math.round((totalMonths / 12) - ((totalMonths % 12) / 12));
      const showMonth = totalMonths % 12;
      const mix = (showYear >= 1 ? `${showYear} yr` : '') + (showMonth > 0 ? ` ${showMonth} mos` : '');
      return mix;
    },
  },
};

</script>

<style lang="scss">
  .c--grey {
    color: rgba(0,0,0,.6);
  }
  .t--14 {
    font-size: 14px;
  }
  .t--16 {
    font-size: 16px;
  }
  .t--20 {
    font-size: 20px;
  }
  .p--10 {
    padding: 10px;
  }
  .Skill {
    position: relative;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);

    .jobs {
      img {
        height: 55px;
        width: 55px;
      }
    }

    .hover {
      color: #006097;
      font-weight: bold;
      cursor: pointer;
      &:hover {
        background-color: rgba(152,216,244,.25);
      }
    }


    .card-body {
      padding: 0px;
    }

    .dot-year::before {
      content: '\00B7';
      margin: 0 5px;
    }

    .dot {
      position: relative;
      display: block;
      border: 2px solid #cfcfcf;
      border-radius: 50%;
      height: 8px;
      width: 8px;
      top: 10px;
      background-color: #cfcfcf;
    }

    .liner {
      position: relative;
      height: calc(100% - 40px);
      min-height: calc(60px - 30px);
      top: 30px;
      left: -5px;
      width: 2px;
      background-color: #e9e9e9;
    }
  }

  .elipsis {
    max-height: 100%;
    transition: all 0.2s ease-in;
    &.not {
      max-height: 100%;
      transition: all 0.2s ease-in;
    }

    p {
      max-width: 80%;
    }

    a {
      font-size: 14px;
      line-height: 1.42857;
      font-weight: 400;
      color: rgba(0,0,0,.6) !important;
      cursor: pointer;
    }
  }

  ol {
    padding-left: 15px;
  }

  .flex-to-center {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
  }

  .role {
    margin-top: 10px;
  }
</style>
