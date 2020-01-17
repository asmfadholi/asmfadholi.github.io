<template>
  <div class="Education">
    <b-card class="br--2">
      <b-container
        class="mt-3"
        fluid>
        <h2 class="t--20">Education</h2>
        <br>
        <div
          v-for="(edu, iedu) in educations"
          :key="iedu"
          class="jobs">
          <b-row>
            <b-col cols="2">
              <div class="flex-to-center">
                <img
                  :alt="edu.institution_name"
                  :src="edu.logo">
              </div>
            </b-col>

            <b-col>
              <b class="t--16">{{ edu.institution_name }}</b>
              <p class="t--14">
                <span>{{ edu.major }}</span>
                <br>
                <span class="c--grey">
                  {{ edu.start_date | moment('YYYY') }} - {{ edu.end_date | moment('YYYY') }}
                </span>
              </p>

            </b-col>
          </b-row>
          <hr v-if="educations.length !== 1">
        </div>
      </b-container>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'Banner',
  data() {
    return {
      educations: [
        {
          institution_name: 'Bandung Institute of Technology (ITB)',
          major: 'Bachelor of Engineering - BE, Biological Engineering',
          start_date: '2013-08-23',
          end_date: '2017-10-20',
          logo: require('@/assets/images/itb-logo.png'),
          description: [],
        },
      ],
    };
  },
  methods: {
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
  .Education {
    position: relative;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);

    .jobs {
      img {
        height: 55px;
        width: 55px;
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
