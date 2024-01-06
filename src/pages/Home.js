import { Container, Typography } from '@mui/material';
import '../App.css';
import TourCard from "../components/TourCard"
import Grid from '@mui/material/Grid';
import cities from "../data.json"

function Home(){
    return (
    <div className="App">
      <Container sx={{marginY:5}}>
        {cities.map((city) =>(
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>

            <Grid container spacing={2}>
              {city.tours.map((tour, index) => (
                  <TourCard tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
    )
}


export default Home
