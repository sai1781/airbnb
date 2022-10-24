import "./NewThisWeek.scss";
import { useState, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Stack } from "@mui/system";
import { Chip,CardMedia, ImageList, ImageListItem, ImageListItemBar, IconButton, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';



const NewThisWeek = _ => {
    const itemData = [
        {
            img: 'https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg',
            title: 'Collection',
            about: 'Most Popular around the World',
            featured: true,
        },
        {
            img: 'https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg',
            title: 'Collection',
            about: 'Great for team building',
        },
        {
            img: 'https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg',
            title: 'Collection',
            about: 'Fun for the family',
        }
    ];

    const data = ["Great for groups", "Family-friendly", "Animals", "Arts&Writing", "Baking",
        "Cooking", "Dance", "Drinks", "Entertainment", "Fitness", "History", "Wellness", "Olympains&Paralypians", "Designed for aceessibility"
    ]

    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);

    //Slide click
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    //Anim
    const anim = (e) => {
        gsap.from(e.target, { scale: 1 });
        gsap.to(e.target, { scale: 1.5 });
    };
    const anim2 = (e) => {
        gsap.from(e.target, { scale: 1.5 });
        gsap.to(e.target, { scale: 1 });
    };

    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    let scrl2 = useRef(null);
    const [scrollX2, setscrollX2] = useState(0);
    const [scrolEnd2, setscrolEnd2] = useState(false);

    //Slide click
    const slide2 = (shift) => {
        scrl2.current.scrollLeft += shift;
        setscrollX2(scrollX2 + shift);

        if (
            Math.floor(scrl2.current.scrollWidth - scrl2.current.scrollLeft) <=
            scrl2.current.offsetWidth
        ) {
            setscrolEnd2(true);
        } else {
            setscrolEnd2(false);
        }
    };


    const scrollCheck2 = () => {
        setscrollX2(scrl2.current.scrollLeft);
        if (
            Math.floor(scrl2.current.scrollWidth - scrl2.current.scrollLeft) <=
            scrl2.current.offsetWidth
        ) {
            setscrolEnd2(true);
        } else {
            setscrolEnd2(false);
        }
    };
    const handleClick2 = () => {
        console.info('You clicked the Chip.');
    };



    return (
        <>
            {/* <Container maxWidth="false" style={{ backgroundColor: "", border:"2px solid red", marginTop:"7rem" }}> */}
            <Container maxWidth="false" style={{ marginTop: 50, marginLeft: 65, width: "auto", marginRight: 100, marginTop:100 }}>
                <Stack className="app2">
                    <Stack justifyContent="space-between" direction="row"  >
                        <Typography fontSize={40} fontWeight="600" >New this Week</Typography>

                        <Stack direction="row" flexWrap="noWrap" justifyContent="center" alignItems="center" >
                            {scrollX2 !== 0 && (
                                <button
                                    className="prev2 hover"
                                    onClick={() => slide2(-550)}
                                    
                                >
                                    <FontAwesomeIcon style={{ fontSize: 15, padding: 6, }} icon={faAngleLeft} />

                                </button>
                            )}
                            {!scrolEnd2 && (
                                <button
                                    className="next2 hover"
                                    onClick={() => slide2(+550)}

                                >
                                    <FontAwesomeIcon style={{ fontSize: 15, padding: 6 }} icon={faAngleRight} />
                                </button>

                            )}
                        </Stack>
                    </Stack>

                </Stack>
            </Container>
            <Box maxWidth="false" style={{height:460 }}>
                <ImageList ref={scrl2} onScroll={scrollCheck2} style={{ overflow: "hidden", paddingLeft: 60}} cols={3} columnWidth={500} rowHeight="450">
                    {itemData.map((item) => (
                        <ImageListItem sx={{ width: 700, backgroundColor:"white"  }} key={item.img}>
                            <img className="newThisWeekImages"
                                style={{ borderRadius: 15 }}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                        'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)', padding: 1,
                                }}
                                title={item.title}
                                position="top"
                                actionPosition="left"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, ' +
                                        'rgba(0,0,0,0.0) 70%, rgba(0,0,0,0) 100%)', padding: 1, mt: 3, fontWeight: "900",
                                    titleWrap: "Wrap", width: "100%"
                                }}
                                title={<Typography fontSize={30} flexWrap="wrap" >{item.about}</Typography>}
                                position="top"
                                actionPosition="right"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, ' +
                                        'rgba(0,0,0,0.0) 70%, rgba(0,0,0,0) 100%)', mb: 3, ml: 3
                                }}
                                title={<Button variant="outlined" size="medium" style={{ color: "black", border: "none", backgroundColor: "white", borderRadius: 10 }}>
                                    Show all
                                </Button>}
                                position="bottom"
                                onPosition="left"
                            />


                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Container maxWidth="false" style={{marginLeft:65,width:"auto", marginRight:100}}>
                <div className="App">
                    <Stack direction="row" spacing={1.5}  width="30%" justifyContent="flex-start">
                        <Chip   style={{height:40, width:"auto", fontSize:18, backgroundColor:"white", border:"1px solid rgba(0,0,0,0.3)"}}  label="Dates" onClick={handleClick} />
                        <Chip  style={{height:40, width:"auto", fontSize:18, backgroundColor:"white", border:"1px solid rgba(0,0,0,0.3)"}}  label="Group Size" onClick={handleClick} />
                        <Chip   style={{height:40, width:"auto", fontSize:18, backgroundColor:"white", border:"1px solid rgba(0,0,0,0.3)"}} label="More filters" onClick={handleClick} />
                        <hr    />
                    </Stack>
                    {scrollX !== 0 && (
                        <button
                            className="prev hover"
                            onClick={() => slide(-50)}

                        >
                            <FontAwesomeIcon style={{ fontSize: 15, padding: 6 }} icon={faAngleLeft} />
                        </button>
                    )}
                    <ul ref={scrl} onScroll={scrollCheck} style={{ overflow: "hidden", width:"auto"}}>
                        {data.map((d, i) => (
                            <Chip label={d}  style={{height:40, width:"auto", fontSize:18,marginRight:10}} onClick={handleClick}  />

                        ))}
                    </ul>
                    {!scrolEnd && (
                        <button
                            className="next hover"
                            onClick={() => slide(+50)}

                        >
                            <FontAwesomeIcon style={{ fontSize: 15, padding: 6, }} icon={faAngleRight} />
                        </button>
                    )}
                </div>
            </Container>

            {/* </Container> */}


        </>
    )
}


export default NewThisWeek;




{/* 
// return (
//     <ImageListItem key={item.img} cols={cols} rows={rows}>
//       <img
//         {...srcset(item.img, 250, 200, rows, cols)}
//         alt={item.title}
//         loading="lazy"
//       />
//       <ImageListItemBar
//         sx={{
//           background:
//             "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
//             "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
//         }}
//         title={item.title}
//         position="top"
//         actionIcon={
//           <IconButton
//             sx={{ color: "white" }}
//             aria-label={`star ${item.title}`}
//           >
//             <StarBorderIcon />
//           </IconButton>
//         }
//         actionPosition="left"
//       />
//     </ImageListItem> */}






