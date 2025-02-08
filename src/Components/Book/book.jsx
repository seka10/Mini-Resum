import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from "../page";
import Cover from "../Pages/The Cover/Cover";
import coverImg from "../../assets/BookCover.jpg";
import FirstPage from "../Pages/FirstPage/FirstPage";
import Skills from "../Pages/Skills/Skills.jsx";
import Services from "../Pages/Services/Services.jsx";
import About from "../Pages/About/About.jsx";
import Final from "../Pages//Final/Final.jsx";
import Projects from "../Pages/Projects/Projects.jsx";
import ProjectsClone from "../Pages/Projects/ProjectsClone.jsx";

import Img1 from "../../assets/pro/pro2.png";
import Img2 from "../../assets/pro/pro4.png";

const ProjectData=[
{
  id:" E-Commercial Website ",
  desc: "modern e-commerce website designed for a seamless shopping experience. It features a clean and user-friendly interface, showcasing a variety of products with detailed descriptions and prices. The site offers smooth navigation, making it easy for customers to browse, select, and purchase items effortlessly.",
  img: Img2,
  PreviewLinks: "https://online-e-store007.netlify.app/"
},
{
  id:"Online Computer Shoping ",
  desc: "dynamic and modern website designed to showcase creative projects and portfolios. It features a clean, responsive layout with an intuitive interface, making it easy to display visual content effectively. Ideal for professionals looking to present their work with style and impact.",
  img: Img1,
  PreviewLinks: "https://mega-frame.vercel.app/"
},
];

function Book(props) {
    return (
        <HTMLFlipBook width={600} height={500} showCover="true">
            <Page>
                <Cover coverImg={coverImg} title=" Junior Front-End Dev Resume" />
            </Page>
            <Page >
            </Page>
            <Page >
                <FirstPage />
            </Page>
            <Page >
                <Skills />
            </Page>
            <Page>
                <Services />
            </Page>
          <Page>
                <About />
            </Page>
                <Page>
                <Projects />
            </Page>
            <Page >
                <ProjectsClone />
            </Page>
            <Page >
            </Page>
             <Page >
                <Final  coverImg={coverImg}/>
            </Page>
        </HTMLFlipBook>
    );
}

export default Book;
