const config = {
    env:'dev',
    local:{
    'url':"http://localhost:4000/",
    },
    dev:{
    'url':"https://cards.myvisage.in/",
      },
    }

const env= config.env

export default config[env]