<template>
  <div class="Experience">
    <b-card class="br--2">
      <b-container
        class="mt-3"
        fluid>
        <h2 class="t--20">Experience</h2>
        <br>
        <div
          v-for="(job, ijob) in jobs"
          :key="ijob"
          class="jobs">
          <b-row>
            <b-col cols="2">
              <div class="flex-to-center">
                <img
                  :alt="job.company_name"
                  :src="job.logo">
              </div>
            </b-col>

            <b-col>
              <b class="t--16">{{ job.company_name }}</b>
              <p class="t--14"> {{ generateYear(job) }} </p>
            </b-col>
          </b-row>

          <b-row
            v-for="(jobdesc, ijobdesc) in job.experiences"
            :key="ijobdesc">
            <b-col cols="2">
              <div class="flex-to-center">
                <div
                  v-if="job.experiences.length > 1"
                  class="dot" />
                <div
                  v-if="Number(ijobdesc) < (job.experiences.length - 1)"
                  class="liner" />
              </div>
            </b-col>

            <b-col cols="8">
              <div class="role t--14">
                <b> {{ jobdesc.title }} </b>
                <p class="c--grey"> {{ jobdesc.start_date | moment("MMM YYYY") }} -
                  {{ jobdesc.end_date | moment("MMM YYYY") }}
                  {{ jobdesc.end_date === null ? 'Present' : '' }}
                  <span class="dot-year">
                    {{ generateYear(jobdesc) }}
                  </span>
                </p>
                <p
                  :class="jobdesc.is_show ? 'not' : ''"
                  class="elipsis t--14">
                  <span
                    v-for="(detail, i) in (jobdesc.is_show ? jobdesc.jobdesc : splitJob(jobdesc.jobdesc))"
                    :key="i">
                    <span>
                      {{ detail }}
                      <a @click="jobdesc.is_show = !jobdesc.is_show">
                        <!-- eslint-disable-next-line -->
                                            {{ jobdesc.is_show && (Number(i) === (jobdesc.jobdesc.length - 1)) ? '.See Less' : '' }}
                        <!-- eslint-disable-next-line -->
                                            {{ !jobdesc.is_show && (Number(i) === (splitJob(jobdesc.jobdesc).length - 1)) ? '...Show More' : '' }}
                      </a>
                    </span>
                    <br>
                  </span>
                </p>
              </div>
            </b-col>
          </b-row>
          <hr v-if="(Number(ijob + 1) !== jobs.length) && (jobs.length !== 1)">
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
      jobs: [
        {
          company_name: 'Tokopedia',
          start_date: '2020-08-24',
          end_date: null,
          // eslint-disable-next-line
          logo: require('@/assets/images/tokopedia.jpeg'),
          experiences: [{
            title: 'Software Engineer',
            jobdesc: [
              '1 - Backfunnel team',
              '2 - Develop web for mobile and desktop version',
              '3 - Develop app using reactjs, react testing library, apollo graphql, and css emotion',
              '4 - Make sure UT coverage > 70%',
              '5 - Deploy app to staging and beta environment',
              '6 - Doing code review for another\'s developer code',
              '7 - Working closely to backend, UX designer, Test enginer, and Product owner',
              '8 - Meeting with product owner to define and update project',
              '9 - Daily meeting with others wpe to report progress',
            ],
            start_date: '2020-08-24',
            end_date: null,
            is_show: false,
          }],
        },
        {
          company_name: 'Biznis.id',
          start_date: '2020-01-24',
          end_date: '2020-07-24',
          // eslint-disable-next-line
          logo: require('@/assets/images/biznis-logo.png'),
          experiences: [{
            title: 'Senior Frontend Engineer',
            jobdesc: [
              '1 - Build Learning App from scratch using nuxtjs',
              '2 - Integrate Payment with Midtrans',
              '3 - Integrate Video player with FlowPlayer',
              '4 - Implement standarization commit message in git',
              '5 - Implement redis-express for session storage',
              '6 - Implement sentry for tracking bug in App',
            ],
            start_date: '2020-01-24',
            end_date: '2020-07-24',
            is_show: false,
          }],
        },
        {
          company_name: 'Jojonomic - The Future of Work',
          start_date: '2018-07-01',
          end_date: '2019-12-01',
          // eslint-disable-next-line
          logo: require('@/assets/images/jojonomic.png'),
          experiences: [{
            title: 'Squad Lead Engineer - Frontend Engineer',
            jobdesc: [
              '1 - Manage team, consist of 3 members.',
              '2 - Create documentation of weekly task.',
              '3 - Define weekly task for my teams and assign task on Jira board.',
              '4 - Meeting with business analyst about change request, mandays, and new feature of apps and translate them from business process to technical',
              '5 - Improve skeleton of code to make code easier to understand, so developer will deliver task on time.',
              '6 - Doing daily standup meeting with my team, talking about task, knowledge, and new technology.',
              '7 - Weekly meeting with other lead engineer to discuss about task point, time and improvement of code.',
              '8 - Work with infrastructure developer how to deploy vuejs project, design deployment process using jenkins, so we can cut off the time of deployment process.',
              '9 - bug fixing on production.',
              '10 - Build new feature, that is jojosales.',
              '11 - Doing retro to evaluate task and performance on last week.',
              '12 - Deliver technical knowledge to all frontend developer.',
              '13 - Responsible to review my team code',
            ],
            start_date: '2019-03-01',
            end_date: '2019-12-01',
            is_show: false,
          },
          {
            title: 'Software Engineer',
            jobdesc: [
              '1 - Migrate programming code from jquery (javascript library) to vue js (javascript framework)',
              '2 - Implement vue js, includes vuex (for state management) and router (for dynamic page route)',
              '3 - Setup webpack configuration for running framework (module compiler).',
              '4 - Implement eslint (using airbnb standard) in vue js project for standarization of code.',
              '5 - Build Base-Dasboard for global component, and deploy them on npm.',
              '6 - Design Frontend code to modular, separate in several repository (ex: Pro-dashboard, Costcenter-dashboard, etc)',
              '7 - Handle project on premise, and design how to patch vue js on them.',
              '8 - Embed vuejs module to jquery project.',
              '9 - Build documentation, how to use global component.',
              '10 - Configure global dependencies in base-dashboard',
              '11 - Create skeleton of code.',
              '12 - Implement sass (css preprocessor) and centralize any styling code on them.',
              '13 - Work with infrastructure developer, how to deploy vuejs project on web service.',
              '14 - Configure CI/CD on bitbucket to heroku, so we can deploy vuejs project automatically.',
              '15 - bug fixing any bug and build new feature like costcenter, jojoflow, and project.',
              '16 - Responsible to deploy vuejs project on QA server.',
              '17 - Responsible to review the code another developer, especially in vuejs project.',
              '18 - Implement micro-frontend structure',
            ],
            start_date: '2018-07-02',
            end_date: '2019-02-28',
            is_show: false,
          },
          ],
        },
        {
          company_name: 'Urbanhire',
          start_date: '2018-03-02',
          end_date: '2018-06-30',
          // eslint-disable-next-line
                    logo: require('@/assets/images/urbanhire.jpeg'),
          experiences: [{
            title: 'Software Engineer Intern',
            jobdesc: [
              '1 - Build landing page using jquery (js library), sass and less (css preprocessor), pug (html preprocessor)',
              '2 - Bug fixing some existing features.',
              '3 - Collaborate with team using git.',
              '4 - Understanding a little about webpack, gulp and grunt.',
              '5 - Implement javascript framework (vue js and little about react js) in several features.',
              '6 - Work together with teams (backend, frontend, UI/UX specialist and SEO specialist)',
            ],
            start_date: '2018-03-02',
            end_date: '2018-06-30',
            is_show: false,
          }],
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
        totalMonths = ((endMonth - startMonth) + 1);
      } else {
        totalMonths += (endMonth + 1) + (12 - startMonth);
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
    color: rgba(0, 0, 0, .6);
}

.t--14 {
    font-size: 14px;
}

.t--16 {
    font-size: 16px;
}

.t--17 {
    font-size: 17px;
}

.Experience {
    position: relative;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 2px 3px rgba(0, 0, 0, .2);

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
        color: rgba(0, 0, 0, .6) !important;
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
