<template>
  <div class="Banner">

    <div class="background">
      <div class="photo">
        <img
          :src="require('@/assets/images/photo.jpeg')"
          alt="Edit photo"
          height="128"
          width="128">
      </div>
    </div>
    <b-card class="br--2">
      <br><br><br>
      <b-container fluid>
        <b-row>
          <b-col
            cols="12"
            md="7">
            <div>
              <h3>Mochammad Fadholi</h3>
              <h4 class="t--17">Frontend Engineer</h4>
              <ul>
                <li class="d-inline">South Jakarta</li>
                <li class="d-inline dot">Indonesia</li>
                <li class="d-inline dot">
                  <a
                    class="pointer"
                    @click="$router.replace('/contact')">
                    Contact Info
                  </a>
                </li>
              </ul>
            </div>
          </b-col>

          <b-col>
            <div>
              <b-row class="work">
                <b-col cols="2">
                  <img
                    src="https://media.licdn.com/dms/image/C4D0BAQFu7TX3cwfLkg/company-logo_400_400/0?e=1574899200&amp;v=beta&amp;t=RZX3gIrIV_pwgqj-3j2VDHQEoGSSG2VeUsVZwnAM0fk"
                    class="EntityPhoto-square-1 flex-shrink-zero"
                    alt="">
                </b-col>
                <b-col>
                  <span> Jojonomic - The Future of Work </span>
                </b-col>
              </b-row>

              <b-row class="school">
                <b-col cols="2">
                  <img
                    src="https://media.licdn.com/dms/image/C4E0BAQE7JmnVsXZ_-w/company-logo_400_400/0?e=1574899200&amp;v=beta&amp;t=Iq-2ZFKFidYdeHJlxP66Xqpi60Es49vK1_XraLthFQM"
                    class="EntityPhoto-square-1 flex-shrink-zero"
                    alt="">
                </b-col>
                <b-col>
                  <span> Bandung Institute of Technology (ITB) </span>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <br>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'Banner',
};

</script>

<style lang="scss">
  body {
    background-color: #f5f5f5;
  }

  .Banner {
    position: relative;
    box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
    .photo {
      img {
        border-radius: 50%;
        box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15);
        left: 30px;
        position: absolute;
        top: 120px;
        z-index: 2;
      }
    }

    .pointer {
      cursor: pointer;
    }

    .background {
      height: 190px;
      width: 100%;
      background: url('https://static-exp1.licdn.com/sc/h/3chad3rzxalsf65nuo7hxciac') 50%/cover;
    }

    .card-body {
      padding: 0px;
    }

    ul {
      padding: 0px;

      .d-inline.dot {
        a {
          color: #0073b1;
          text-decoration: none;
          transition: all 0.2s ease-in;
          &:hover {
            color: darken(#0073b1, 20%);
            transition: all 0.2s ease-in;
          }
        }
        &::before {
          content: '\00B7';
          margin: 0;
          padding: 0 4px;
          color: #000;
          font-weight: 400;
        }
      }

    }

    .work, .school {
      img {
        width: 32px;
        height: 32px;
        box-sizing: border-box;
        background-clip: content-box;
        border: 4px solid transparent;
        border-radius: 6px;
      }

      span {
        font-size: 14px;
        line-height: 1.42857;
        font-weight: 600;
      }
    }
  }
</style>
