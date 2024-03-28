import React from 'react';
import SkillsTable from '/SkillsTable';
import ContactForm from '/ContactForm';
import './App.css';


function App() {
    return (
        <>
        <div className="App">
                  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                        <div className="container px-5">
                            {/* href="mailto:marie.sauve@outlook.com" */}
                        <a className="navbar-brand" href="#!"><img className="img-fluid rounded-circle" src="assets/img/faviconmed.png" alt="Cartoon Image" /> Marie Sauve</a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto">                                 
                                <li className="nav-item"><a className="nav-link" href="https://mariesauve.azurewebsites.net/" target="_blank">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="https://mariesauve.azurewebsites.net/Home/Contact" target="_blank">Contact</a></li>
                                <li className="nav-item"><a className="nav-link" href="https://github.com/mariesauve" target="_blank"><i className="fa-brands fa-github fa-xl"></i> GitHub</a></li>
                                </ul>
                            </div>
                        </div>
                  </nav>
                    {/* Header */}
                    <header className="masthead text-center text-white">
                       <div className="masthead-content">
                            <div className="container px-5 /*text-center*/">
                            <h1 className="masthead-heading mb-0">Discover My Portfolio</h1>
                            <h2 className="masthead-subheading mb-0">Prepare to be Impressed!</h2>
                            <div>
                                <a className="btn btn-primary btn-xl rounded-pill mt-3" href="https://triosdevelopers.com/~M.Sauve/Portfolio2/" target="_blank">My Gallery</a>
                                </div>
                            <div> <a className="btn btn-primary btn-xl rounded-pill mt-3" href="assets/Resume-2024.pdf" target="_blank">Resume</a>
                            </div>
                            </div>
                        </div>
                        <div className="bg-circle-1 bg-circle"></div>
                        <div className="bg-circle-2 bg-circle"></div>
                        <div className="bg-circle-3 bg-circle"></div>
                        <div className="bg-circle-4 bg-circle"></div>
                    </header>
                    {/* Content section 1 */}
                    <section id="scroll">
                        <div className="container px-5">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/01.jpg" alt="Cartoon coding girl" />
                                    <a href="https://www.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_65309450.htm#fromView=search&page=1&position=3&uuid=b1dbeaf6-f76a-4026-ad8b-afe48de9279b">Image by catalyststuff on Freepik</a></div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-5">
                                    <h2 className="display-4">Embark on a Journey with a Web Developer Extraordinaire!</h2>
                                    <p>As a web developer with a unique blend of cake design and IT administration experience...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Content section 2 */}
                    <section>
                        <div className="container px-5">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6">
                                <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/03.jpg" alt="Computer and code picture" /><a href="https://www.freepik.com/free-photo/composition-with-html-system-websites_75523907.htm#query=computer%20code&position=37&from_view=keyword&track=ais&uuid=a69cb232-ff35-4a11-b9cb-3453b403633e">Image by Freepik</a></div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                    <h2 className="display-4">Saluting Diversity in Skills!</h2>
                                    <p>My skill set is a rich tapestry blending soft skills with a myriad of technical expertise. Here's a glimpse:</p>
                                    <div className="App">
                                        <SkillsTable />
                                    </div>
                                        <a className="btn btn-primary btn-xl rounded-pill mt-5" href="https://mariesauve.azurewebsites.net/Home/Skills" target="_blank">Skills Link</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Content section 3 */}
                    <section>
                        <div className="container px-5">
                            <div className="row gx-5 align-items-center">
                                <div className="col-lg-6 order-lg-2">
                                <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/02.jpg" alt="Cartoon girl on a computer" />
                                    <a href="https://www.freepik.com/free-vector/cute-gamer-girl-playing-computer-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_21761498.htm#fromView=search&page=2&position=7&uuid=b1dbeaf6-f76a-4026-ad8b-afe48de9279b">Image by catalyststuff on Freepik</a>                                </div>
                                </div>
                                <div className="col-lg-6 order-lg-1">
                                    <div className="p-5">
                                        <h2 className="display-4">Projects!</h2>
                                    <p> Explore a collection of my diverse projects, demonstrating expertise in sought-after technologies like C# ASP.NET MVC, SQL, JavaScript, CSS, HTML/HTML5, Java, and C++. As a web developer student, I've crafted engaging solutions that harness the power of these languages and frameworks. Dive into my work to discover innovative designs, seamless user experiences, and efficient coding practices. Whether it's building dynamic web applications or crafting responsive interfaces, I'm passionate about delivering high-quality results. Browse through my projects to witness the intersection of creativity and technical skill. Ready to elevate your online presence? Let's collaborate on your next digital venture!
                                        <div> <a href="https://github.com/mariesauve" target="_blank"><i className="fa-brands fa-github fa-xl"></i> GitHub</a></div> </p>

                                        <a className="btn btn-primary btn-xl rounded-pill mt-5" href="https://triosdevelopers.com/~M.Sauve/?C=D;O=A" target="_blank">Projects Link</a>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </section>          
                <div className="App">
                    <ContactForm />
                   
                </div>
              
                {/* Footer*/}
                <footer className="bg-white py-4 mt-auto">
                    <div className="container px-5">
                        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                            <div className="col-auto"><div className="small m-0">Copyright &copy; Marie Sauve 2024</div></div>
                            <div className="col-auto">
                                <a className="small" href="./public/lokishhh.jpg" target="_blank" alt="Shh Loki picture">Privacy</a>
                                <span className="mx-1">&middot;</span>
                                <a className="small" href="https://mariesauve.azurewebsites.net/Home/Contact" target="_blank"><i className="fa-solid fa-address-card fa-xl"></i></a>
                                <span className="mx-1">&middot;</span>
                                <a className="small" href="https://github.com/mariesauve" target="_blank"><i className="fa-brands fa-github fa-xl"></i></a>

                            </div>
                        </div>
                    </div>
                </footer>
           

            
            </div>
        </>
    );
}

export default App;
