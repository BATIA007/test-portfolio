import React from 'react'
import { Grid, Card, CardMedia, Typography, CardContent, CardActions, Button } from '@mui/material'

const items = [{
  src: require('../images/beholder.png'),
  title: 'BEHOLDERS WAR',
  text: `
-React
-TypeScript
-Redux
    `
  ,
  watch: 'https://test3-red.vercel.app/',
  git: ''
}, {
  src: require('../images/garant.png'),
  title: 'Garant (cancelled project, mob)',
  text: `
-React
-TypeScript
-Redux
    `
  ,
  watch: 'https://test-portfolio-zomt.vercel.app/',
  git: 'https://github.com/BATIA007/cancelled-work-react-ts-mob-garant'
}, {
  src: require('../images/prodkarta.png'),
  title: 'ProdKarta',
  text: `
-HTML                    -JavaScript
-CSS (SASS)
-WebPack
    `
  ,
  watch: 'https://xn--80aakysfhes.xn--p1ai/',
  git: 'https://github.com/BATIA007/work-html-scss-js-webpack-ProdKarta'
}, {
  src: require('../images/Hanturkazan.png'),
  title: 'HanTurKazan',
  text: `
-HTML
-CSS (SASS)
-JavaScript
    `
  ,
  watch: 'https://hantour-kazan.ru/',
  git: 'https://github.com/BATIA007/work-html-scss-js-hanturkazan'
}, {
  src: require('../images/euroevent.png'),
  title: 'EuroEvent',
  text: `
-HTML
-CSS (SASS)
-JavaScript
    `
  ,
  watch: 'https://www.euroexpoevent.ru/',
  git: 'https://github.com/BATIA007/work-html-scss-js-Euroevent'
}, {
  src: require('../images/bommond.png'),
  title: 'Bommond (Mob only)',
  text: `
-HTML
-CSS (SASS)
-JavaScript
    `
  ,
  watch: 'https://batia007.github.io/work-mob-html-scss-js-Bommond/',
  git: 'https://github.com/BATIA007/work-mob-html-scss-js-Bommond'
}, {
  src: require('../images/milatex.png'),
  title: 'Milatex',
  text: `
-HTML
-CSS (SASS)
-JavaScript
    `
  ,
  watch: 'https://batia007.github.io/work-html-scss-js-Milatex/',
  git: 'https://github.com/BATIA007/work-html-scss-js-Milatex'
}, {
  src: require('../images/proorb.png'),
  title: 'Pro Orb',
  text: `
-HTML
-CSS (SASS)
-JavaScript
    `
  ,
  watch: 'https://batia007.github.io/work-html-scss-ProOrb/',
  git: 'https://github.com/BATIA007/work-html-scss-ProOrb'
}, {
  src: require('../images/dior.png'),
  title: 'Dior',
  text: `
-HTML
-CSS (SASS)

    `
  ,
  watch: 'https://batia007.github.io/work-simple-dior/',
  git: 'https://github.com/BATIA007/work-simple-dior'
}, {
  src: require('../images/mntn.png'),
  title: 'MNTN',
  text: `
Test Project
-HTML
-CSS (SASS)
    `
  ,
  watch: 'https://batia007.github.io/test-html-scss-MNTN/',
  git: 'https://github.com/BATIA007/test-html-scss-MNTN'
}, {
  src: require('../images/axit.png'),
  title: 'Axit',
  text: `
Test Project
-HTML
-CSS
    `
  ,
  watch: 'https://batia007.github.io/test-html-css-axit/',
  git: 'https://github.com/BATIA007/test-html-css-axit'
}, {
  src: require('../images/burgerhouse.png'),
  title: 'Burger House',
  text: `
Test Project
-HTML
-CSS (Sass)
    `
  ,
  watch: 'https://batia007.github.io/test-html-css-BurgetHouse/',
  git: 'https://github.com/BATIA007/test-html-css-BurgetHouse'
}, {
  src: require('../images/dartservice.png'),
  title: 'Dart Service',
  text: `
Test Project
-HTML
-CSS (Sass)
    `
  ,
  watch: 'https://batia007.github.io/test-html-css-DartService/',
  git: 'https://github.com/BATIA007/test-html-css-DartService'
}]

export const Cards: React.FC = () => {
  return (
    <>
      <Typography textAlign={'center'} mb={10} variant='h2' component='h3'>Projects</Typography>
      <Grid container rowSpacing={5} columnSpacing={5}>
        {items.map(data => (
          <Grid key={data.title} item md={6}>
            <Card sx={{ background: 'rgba(0,0,0,0.7)', color: '#fff' }}>
              <CardMedia sx={{ width: '100%' }} component='img' image={data.src} alt="Website image" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="p">
                  {data.title}
                </Typography>
                <Typography whiteSpace='pre-wrap' variant='body1'>{data.text}</Typography>
              </CardContent>
              <CardActions sx={{ display: 'felx', columnGap: 2 }}>
                <Button variant='outlined' fullWidth target='_blank' href={data.watch} size='large'>Watch</Button>
                {data.git && <Button variant='outlined' fullWidth href={data.git} size='large'>GitHub</Button>}
              </CardActions>
            </Card>
          </Grid>
        ))}

      </Grid >
    </>
  )
}
