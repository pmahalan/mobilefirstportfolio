import React from "react";
import ContactForm from "../../components/Contact";

function MainPage(props) {
    return (
<div className="App">
<div className="App-header">

        <h1 className="hithere">Priya Mahalanobis</h1>

        <img className="mepic" src={require('../../../src/var3.png')}></img>

        <p className="blurbing"> Welcome to my website! In February 2020, I earned my Full Stack Web Development <a className="mylinks" href="https://credly.com/credit/23192550">certificate</a> from the UCF Coding Boot Camp. </p>
        <p className="blurbing">  I am excited to further develop my skillsets as a junior developer in the workplace; in any technical endeavor, I strive to be resourceful in finding solutions to challenges. </p>
        <p className="blurbing">  Alongside my bootcamp certificate, my <a className="mylinks" href="https://www.ucf.edu/degree/digital-media-ma/">Master of Arts in Digital Media</a> has provided me with an awareness of theoretical, philosophical, and creative outlooks on technology and the web. </p>
        <p className="relocation"> Open to relocation. </p>


        <h2 className="littleheading">Skills</h2>

        <p className="maintext"> HTML </p>
        <p className="maintext"> CSS </p>
        <p className="maintext"> JavaScript </p>
        <p className="maintext"> React.js </p>
        <p className="maintext"> MySQL </p>
        <p className="maintext"> MongoDB </p>
        <p className="maintext"> Express.js </p>
        <p className="maintext"> jQuery </p>
        <p className="maintext"> Node.js </p>

        <h2 className="littleheading">Contact</h2>

        <p className="maintext"> <a className="mylinks" href="https://www.linkedin.com/in/priya-mahalanobis-75a103189">LinkedIn</a> </p>
        <p className="maintext"> <a className="mylinks" href="https://github.com/pmahalan">Git Hub</a> </p>
        <p className="maintext"> <a className="mylinks" href="Priya_M_Resume.pdf">Resume</a></p>
        <p className="maintext"> <a className="mylinkslast" href="mailto:pmahalan@knights.ucf.edu">Email</a></p>
        <p className="maintext"> <br></br> </p>
    </div>    

<div className="secondpart">
    <h1 className="recentprojects">Recent Projects</h1>

            <div className="beginningofgrid">

                <div className="projpart1">
                    <h2 className="projecttitle1"> GLITTER </h2>
                    <img className="projectpic" src={require('../../../src/new1.png')}></img> 
                </div>

                <div className="projpart2">
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="projectdescription"> A MERN application with functionality to create, read and delete 
                        notes pertaining to travel goals as part of a fun and inspirational personal dashboard. </p>
                     {/* <p className="projectlink"> Deployed Application: */}
                       <p> <a className="mylinks2" href="https://arcane-retreat-34096.herokuapp.com/"> &bull; Deployed Application</a> </p>
                    {/* <p className="projectlink"> GitHub: */}
                       <p> <a className="mylinks2" href="https://github.com/pmahalan/GLITTER"
                        > &bull; GitHub </a> </p>
                </div>        

                <div className="projpart1">
                    <h2 className="projecttitle"> Text Tracker </h2>
                    <img className="projectpic" src={require('../../../src/new2.png')}></img>
                </div>

                <div className="projpart2">
                <br></br>
                <br></br>
                <br></br>
                    <p className="projectdescription"> A full-stack application utilizing a webhook API to automate the storage of user information into a MySQL database. Provides users with CRUD functionality on a mobile-first UI.   </p>
                    {/* <p className="projectlink"> Deployed Application: */}
                    <p> <a className="mylinks2" href="https://protected-thicket-21207.herokuapp.com/">&bull; Deployed Application</a> </p>
                    {/* <p className="projectlink"> GitHub: */}
                    <p> <a className="mylinks2" href="https://github.com/pmahalan/Project_2"> &bull; GitHub </a> </p>
                </div>

                <div className="projpart1">
                    <h2 className="projecttitle"> Profile Generator </h2>
                    <img className="projectpic" src={require('../../../src/new4.png')}></img>
                </div>

                <div className="projpart2">
                <br></br>
                <br></br>
                <br></br>
                    <p className="projectdescription"> A command-line application which renders an HTML page and a PDF document of a person’s GitHub profile information, through the use of the GitHub API as well as node.js packages such as Inquirer and Electron.
                        My first project using Node.js.</p>
                    {/* <p className="projectlink"> GitHub: */}
                        <p> <a className="mylinks2" href="https://github.com/pmahalan/Node.js-Generator">&bull; GitHub</a> </p>
                </div>

                <div className="projpart1">
                    <h2 className="projecttitle">Make Me Laugh </h2>
                    <img className="projectpic" src={require('../../../src/new3.png')}></img>
                </div>

                <div className="projpart2">
                <br></br>
                <br></br>
                <br></br>
                    <p className="projectdescription"> A website utilizing AJAX calls to open-source joke and humor APIs, in addition to jQuery functions for filter-selection abilities.</p>
                    {/* <p className="projectlink"> GitHub: */}
                        <p> <a className="mylinks2" href="https://github.com/panamadan/Project1">&bull; GitHub</a> </p>
                        <p> <a className="mylinks2" href="https://panamadan.github.io/Project1/">&bull; Website</a> </p>


                </div>

        </div>

            <br></br>
            &emsp;

            </div>
            &emsp;
            &emsp;
            <ContactForm></ContactForm>
</div>
    );
}

export default MainPage;