import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Markdown from "./Markdown";
import RecipeReviewCard from "./card";
import { Col, Row } from "react-bootstrap";


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

const sections = [
  "Technology",
  "Design",
  "Culture",
  "Business",
  "Politics",
  "Opinion",
  "Science",
  "Health",
  "Style",
  "Travel"
];

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content."
  }
];


const archives = [
  "March 2020",
  "February 2020",
  "January 2020",
  "December 2019",
  "November 2019",
  "October 2019",
  "September 2019",
  "August 2019",
  "July 2019",
  "June 2019",
  "May 2019",
  "April 2019"
];

const social = ["GitHub", "Twitter", "Facebook"];

export default function Blog() {
  const classes = useStyles();

  return (
      <div>
      
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          {/* Main featured post */}
         
          {/* End main featured post */}
          {/* Sub featured posts */}

          <Col md size={12}>
            <Row
              style={{
                 
                padding: "20px",
                margin: "20px"
              }}
            >
              <Col md size={4}>
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>
            </Row>
            <Divider />
            <Row
              style={{
                 
                padding: "20px",
                margin: "20px"
              }}
            >
              <Col md size={4}>
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>
            </Row>
            <Divider />
            <Row
              style={{
                 
                padding: "20px",
                margin: "20px"
              }}
            >
              <Col md size={4}>
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>
            </Row>
            <Divider />
            <Row
              style={{
                 
                padding: "20px",
                margin: "20px"
              }}
            >
              <Col md size={4}>
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>
            </Row>
            <Divider />
            <Row
              style={{ 
                padding: "10px",
                margin: "10px"
              }}
            >
              <Col md size={4} >
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>

              <Col md size={4}>
                <RecipeReviewCard />
              </Col>
            </Row>
            <Divider />
           
          </Col>

          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            {/*<Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                From the Firehose
              </Typography>
              <Divider />
              
            </Grid>*/}
            {/* End main content */}
            {/* Sidebar */}
            {/*<Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
            </Paper>}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
              </Typography>
              {archives.map(archive => (
                <Link display="block" variant="body1" href="#" key={archive}>
                  {archive}
                </Link>
              ))}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Link display="block" variant="body1" href="#" key={network}>
                  {network}
                </Link>
              ))}
              </Grid>*/}
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
    </React.Fragment>
    </div>
  );
}
