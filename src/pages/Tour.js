import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import QuiltedImageList from '../components/ImageView'
import ControlledAccordions from '../components/Accordian'
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';

function Tour() {
    return (
        <Container sx={{width:900}}>
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the world!
            </Typography>
            <Box marginTop={3} sx={{display: "flex"}}>
                <img src = "https://imgs.search.brave.com/uea6ivNXhAt-ynv-PYM3DfrxZh9Gk9wrOaatM0wgGiA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAw/NDI5NTA1L3Bob3Rv/L2xhcy12ZWdhcy1z/a3lsaW5lLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1nUnY5/Yjlwa2lUYkRKbTNS/R1RQQlFFUmYyZV9u/YWZrcnRYTW9lbUsy/TmhzPQ" 
                    alt="" height={325}
                />
                <QuiltedImageList/>
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum inventore aperiam fugiat! Facilis consequuntur repudiandae omnis, maiores consectetur culpa accusantium deleniti modi exercitationem sint atque non? Corporis nobis incidunt tempore.
                </Typography>
            </Box>
            <Box  marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={3}>
                    Frequently Asked Questions
                </Typography>
                <ControlledAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal/>
                </BottomNavigation>
            </Paper>

        </Container>
    )
}

export default Tour
