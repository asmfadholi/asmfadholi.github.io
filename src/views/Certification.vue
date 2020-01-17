<template>
  <div class="Certification">
    <b-card class="br--2">
      <b-container
        class="mt-3"
        fluid>
        <h2 class="t--20">Licenses &amp; Certifications</h2>
        <br>
        <div
          v-for="(cert, icert) in certification"
          :key="icert"
          class="jobs">
          <b-row>
            <b-col cols="2">
              <div class="flex-to-center">
                <img
                  :alt="cert.name"
                  :src="cert.logo">
              </div>
            </b-col>

            <b-col>
              <b class="t--16">{{ cert.name }}</b>
              <p class="t--14">
                <span>{{ cert.organization }}</span>
                <br>
                <span>
                  Issued {{ cert.start_date | moment('MMM YYYY') }} -
                  {{ cert.end_date | moment('MMM YYYY') }}
                  {{ !cert.end_date ? 'No Expiration Date' : '' }}
                </span>
                <br>
                <span class="c--grey">
                  {{ cert.credential ? `Credential ID ${cert.credential}` : '' }}
                </span>
              </p>
              <b>
                <a
                  :href="cert.credential_url"
                  class="c--grey "
                  target="_blank">See credential
                </a>
              </b>

            </b-col>
          </b-row>
          <hr v-if="(Number(icert + 1) !== certification.length) && (certification.length !== 1)">
        </div>
      </b-container>
      <br>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'Banner',
  data() {
    return {
      certification: [
        {
          name: 'Create Telegram bot with NodeJS and Firebase Cloud Functions',
          organization: 'Udemy',
          credential: 'UC-POEDEG32',
          credential_url: 'https://www.udemy.com/certificate/UC-POEDEG32/',
          logo: require('@/assets/images/udemy.jpeg'),
          start_date: '2020-01-14',
          end_date: null,
        },
        {
          name: 'Introduction to HTML 5',
          organization: 'Coursera',
          credential: 'RSE9UWB2VP8W',
          credential_url: 'https://www.coursera.org/account/accomplishments/verify/RSE9UWB2VP8W',
          logo: require('@/assets/images/coursera.jpeg'),
          start_date: '2019-08-23',
          end_date: null,
        },
        {
          name: 'Javascript Algorithms and Data Structures',
          organization: 'FreeCodeCamp',
          credential: null,
          credential_url: 'https://www.freecodecamp.org/certification/asmfadholi/javascript-algorithms-and-data-structures',
          logo: require('@/assets/images/free-code-camp.jpeg'),
          start_date: '2019-08-23',
          end_date: null,
        },
        {
          name: 'Responsive Web Design',
          organization: 'FreeCodeCamp',
          credential: null,
          credential_url: 'https://www.freecodecamp.org/certification/asmfadholi/responsive-web-design',
          logo: require('@/assets/images/free-code-camp.jpeg'),
          start_date: '2018-11-01',
          end_date: null,
        },
        {
          name: 'MongoDB Essentials - Understand the Basics of MongoDB',
          organization: 'Udemy',
          credential: 'UC-56VCD11Q',
          credential_url: 'https://www.udemy.com/certificate/UC-56VCD11Q/',
          logo: require('@/assets/images/udemy.jpeg'),
          start_date: '2018-04-23',
          end_date: null,
        },
        {
          name: 'Learn to Program in Javascript: Beginner to Pro',
          organization: 'Udemy',
          credential: 'UC-ESL1QOPE',
          credential_url: 'https://www.udemy.com/certificate/UC-ESL1QOPE/',
          logo: require('@/assets/images/udemy.jpeg'),
          start_date: '2018-04-23',
          end_date: null,
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
  .br--2 {
    border-radius: 2px;
  }
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
  .Certification {
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
