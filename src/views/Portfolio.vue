<template>
  <div class="Portfolio">
    <b-card class="br--2">
      <b-container
        class="mt-3 scroll"
        fluid>
        <h2 class="t--20">Portfolio</h2>
        <br>
        <div
          v-for="(port, iport) in portfolio"
          :key="iport">
          <a
            :href="port.url"
            target="_blank"
            rel="noreferrer">
            <h3 class="t--16"> <b> {{ port.title }} </b> </h3>
          </a>
          <div class="float-to-center">
            <img
              :src="port.image"
              :alt="port.title"
              width="100%">
          </div>
          <br>
          <p class="t--14 c--grey">
            <span
              v-for="(des, ides) in port.description"
              :key="ides">
              {{ des }}
              <br>
            </span>
          </p>

          <hr>
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
      portfolio: [
        {
          title: 'Todo List App',
          url: 'https://codepen.io/asmfadholi/full/RQMzXJ',
          image: 'https://raw.githubusercontent.com/asmfadholi/assets/master/assets/todo.jpg',
          description: [
            'Using Jquery, HTML5, javascript and CSS3',
          ],
        },
        {
          title: 'Local Weather',
          url: 'https://codepen.io/asmfadholi/full/paPzjR',
          image: 'https://raw.githubusercontent.com/asmfadholi/assets/master/assets/local_weather.jpg',
          description: [
            'Using Jquery, HTML5, javascript and CSS3',
          ],
        },
        {
          title: 'Wikipedia Search Engine',
          url: 'https://codepen.io/asmfadholi/full/qxmJQg',
          image: 'https://raw.githubusercontent.com/asmfadholi/assets/master/assets/wikipedia_search.jpg',
          description: [
            'Using Jquery, HTML5, javascript and CSS3',
          ],
        },
        {
          title: 'Random Quotes App',
          url: 'https://codepen.io/asmfadholi/full/EQZoxm',
          image: 'https://raw.githubusercontent.com/asmfadholi/assets/master/assets/random_quotes.jpg',
          description: [
            'Using Jquery, HTML5, javascript and CSS3',
          ],
        },
        // {
        //   title: 'Implement UI/UX Home Page',
        //   url: 'https://asmfadholi.github.io/urbanhireproject/',
        //   image: 'https://ecc.co.id/public/portofolio/439016/1527323758Screenshot_from_2018-05-26_15-34-29.png',
        //   description: [
        //     'Using Jquery, HTML5, Bootstrap and CSS3',
        //   ],
        // },
        {
          title: 'Urbanhire Project',
          url: 'https://www.urbanhire.co/employers/',
          image: 'https://ecc.co.id/public/portofolio/439016/1527324287Screenshot_from_2018-05-26_15-43-25.png',
          description: [
            'Using jade (HTML preprocessor), Less (CSS preprocessor), javascript and Jquery',
          ],
        },
        // {
        //   title: 'Responsive Home Page',
        //   url: 'https://blanja-assignment.herokuapp.com/',
        //   image: 'https://ecc.co.id/public/portofolio/439016/1527324435Screenshot_from_2018-05-26_15-46-51.png',
        //   description: [
        //     'Using jade (HTML preprocessor), Less (CSS preprocessor), Vuejs (Javascript Framework), webpack, babel, and Dummy Restful Api.',
        //   ],
        // },
        // {
        //   title: 'Infinite Scroll App',
        //   url: 'https://infinite-scroll-app.herokuapp.com/',
        //   image: 'https://ecc.co.id/public/portofolio/439016/1566407272Screenshot_from_2019-08-22_00-05-56.png',
        //   description: [
        //     'Using react-js, scss, jsx and react-js cli',
        //   ],
        // },
        {
          title: 'Jojonomic Project',
          url: 'https://core.jojonomic.com/',
          image: 'https://raw.githubusercontent.com/asmfadholi/assets/master/Screenshot%20from%202019-08-31%2021-44-06.png',
          description: [
            'Developing jojosales, jojoflow, costcenter, global component and documentation using Vuejs, webpack, scss, babel, and nodejs',
          ],
        },
        {
          title: 'Biznis.id Project',
          url: 'https://biznis.id/',
          image: require('@/assets/images/biznis-product.png'),
          description: [
            'Using nuxtjs, scss, nodejs, redis, express-session, flowplayer, midtrans',
          ],
        },
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
  .Portfolio {
    position: relative;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);

    .scroll {
      max-height: 1708px;
      overflow: scroll;
    }

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
