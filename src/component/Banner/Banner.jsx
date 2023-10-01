//* Packages Imports */
import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

//* Components Imports */
import Carousal from './Carousal'


const useStyles = makeStyles(() => ({
     banner: {
        backgroundImage: "url(./banner2.jpg)",
     },
    bannerContent: {
 height: 400,
 display: "flex",
 flexDirection: "column",
 paddingTop:25,
 justifyContent: "space-around"
    },
    tagline: {
          display:" flex",
          height: "40%",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center"
    }
}))

const Banner = () => {
    const classes = useStyles()
    
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
      <div className={classes.tagline}>
        <Typography variant='h2'
        style={{
            fontWeight: "bold",
            marginBottom:15,
            fontFamily: "Poppins"
        }}
        >
            Crypto Hunter
        </Typography>
        <Typography variant='subtitle2'
        style={{
            color: "darkgray",
            textTransform: "capitalize",
            fontFamily: "Poppins",
            fontWeight: "bold"
        }}
        >
           Get all the Info regarding your Crypto Currency 
        </Typography>
      </div>
      <Carousal/>
        </Container>
    </div>
  )
}

export default Banner