import { Stack } from '@mui/material'
import { Typography, Container } from '@mui/material'
import { Box } from '@mui/material'
import { Divider } from '@mui/material';
import { Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGlobe} from '@fortawesome/free-solid-svg-icons'
// import {faFacebook} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons"






const Footer = _ => {
    const header = ["Support", "Community", "Hosting", "Airbnb"]

    const list = ["Help Center", "Air Cover", "Safety information",
        "Supporting people with disabilities",
        "Cancellation options",
        "Our COVID-19 Response",
        "Report a neighbourhood concern"]

    const list2 = [
        "Airbnb.org: disaster relief housing",
        "Support Afghan refugees",
        "Combating discrimination"
    ]
    const list3 = [
        "Try hosting",
        "AirCover for Hosts",
        "Explore hosting resources",
        "Visit our community forum",
        "How to host responsibly"
    ]
    const list4 = [
        "Newsroom",
        "Learn about new features",
        "Letter from our founders",
        "Careers",
        "Investors"
    ]


    return (
        <>
            <Box className="Footer" style={{ background: "#f1f1f1" }} >
                <Container maxWidth="false" style={{ marginLeft: 65, width: "auto", marginRight: 100 }}>

                    <Stack direction="row" spacing={7} justifyContent="space-evenly" mr={15}>
                        <Stack padding={2}  >
                            <Typography fontWeight={900}>Support</Typography>
                            {list.map((e, idx) => {
                                return (
                                    <Link underline='hover' color="black" noWrap={true} paddingTop={2}>{e}</Link>

                                )
                            })}
                        </Stack>
                        <Stack padding={2} >
                            <Typography fontWeight={900}>Community</Typography>
                            {list2.map((e, idx) => {
                                return (
                                    <Link underline='hover' color="black" noWrap={true} paddingTop={2}>{e}</Link>

                                )
                            })}
                        </Stack>
                        <Stack padding={2}  >
                            <Typography fontWeight={900}>Hosting</Typography>
                            {list3.map((e, idx) => {
                                return (
                                    <Link underline='hover' color="black" noWrap={true} paddingTop={2}>{e}</Link>

                                )
                            })}
                        </Stack>
                        <Stack padding={2}  >
                            <Typography fontWeight={900}>Airbnb</Typography>
                            {list4.map((e, idx) => {
                                return (
                                    <Link underline='hover' color="black" noWrap={true} paddingTop={2}>{e}</Link>
                                )
                            })}
                        </Stack>
                    </Stack>
                    <Divider variant="fullWidth" />

                </Container>
                <Box>
                    <Container maxWidth="false" style={{ marginLeft: 65, width: "auto", marginRight: 100,}} >
                        <Box >
                            <Stack style={{height:45}} direction="row" justifyContent="space-between" alignItems="center" >
                                <Stack  direction="row" spacing={3}  justifyContent="flex-start" alignitems="center" >
                                    <Typography>&copy; 2022 Airbnb,Inc privacy Terms Sitemap Company details</Typography>
                                </Stack>
                                <Stack direction="row" spacing={3} justifyContent="flex-start" alignitems="center" >
                                    <Link underline='hover' color='black' ><Typography><FontAwesomeIcon icon={faGlobe} style={{marginRight:12}} />English(IN)</Typography></Link>
                                     <Link underline='hover' color='black' ><Typography>&#8377; INR</Typography></Link>
                                    <Link underline='hover' color='black' ><FontAwesomeIcon icon={faFacebook} /></Link>
                                    <Link underline='hover' color='black'><FontAwesomeIcon icon={faTwitter} /></Link>
                                    <Link underline='hover' color='black' ><FontAwesomeIcon icon={faInstagram} /></Link>

                                    

                                </Stack>
                            </Stack>
                        </Box>
                    </Container>
                </Box>
            </Box>




        </>
    )
}


export default Footer;



