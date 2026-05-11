import React from "react";

export default function AcademicsPage() {
  return (
    <>

    {/*  Background Animated Pink Doodles  */}
    <div className="bg-orbs">
    </div>

    {/*  Navigation  */}
    <nav>
        <div className="container nav-container">
            <a href="index.html" className="logo">Dr. Mrinalini Atrey</a>
            <ul className="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="blogs.html">Blogs</a></li>
                <li><a href="academics.html" className="active">Academics</a></li>
            </ul>
            <button className="mobile-menu-btn" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    {/*  Page Header  */}
    <header className="section" style={{ marginTop: 'var(--nav-height)', paddingBottom: '2rem' }}>
        <div className="container text-center" style={{ textAlign: 'center' }}>
            <span className="glass-pill" style={{ marginBottom: '1rem' }}>Research Library</span>
            <h1 style={{ transitionDelay: '0.1s' }}>Academic <span
                    style={{ background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Profiles
                    & Archive</span></h1>
            <p style={{ transitionDelay: '0.2s', maxWidth: '600px', margin: '1rem auto 0' }}>A comprehensive
                repository of my published works, research papers, and institutional links. Detailed bibliography
                focusing on gendered foodways, oral traditions, and intangible cultural heritage in the Jammu region.
            </p>

            <div className="profile-links" style={{ transitionDelay: '0.3s' }}>
                <a href="https://scholar.google.co.in/citations?user=HCrTFzMAAAAJ&hl=en" target="_blank"
                    rel="noopener noreferrer" className="profile-link" title="Google Scholar">
                    <i className="fa-brands fa-google" style={{ color: '#ea4335' }}></i> Scholar
                </a>
                <a href="https://jammuuniversity.academia.edu/MrinaliniAtrey/CurriculumVitae" target="_blank"
                    rel="noopener noreferrer" className="profile-link" title="Academia.edu">
                    <i className="fa-solid fa-graduation-cap" style={{ color: 'var(--accent-lavender)' }}></i> Academia
                </a>
                <a href="https://www.linkedin.com/in/mrinalini-a-61875510/" target="_blank"
                    rel="noopener noreferrer" className="profile-link" title="LinkedIn">
                    <i className="fa-brands fa-linkedin" style={{ color: '#0077b5' }}></i> LinkedIn
                </a>
                <a href="https://www.youtube.com/@Pastandpages" target="_blank"
                    rel="noopener noreferrer" className="profile-link" title="YouTube">
                    <i className="fa-brands fa-youtube" style={{ color: '#ff0000' }}></i> YouTube
                </a>
                <a href="https://www.icomosindia.com/nsc.html" target="_blank" rel="noopener noreferrer"
                    className="profile-link" title="ICOMOS India NSC">
                    <i className="fa-solid fa-building-columns" style={{ color: 'var(--accent-pink)' }}></i> ICOMOS
                </a>
                <a href="https://www.criticalheritagestudies.org/membership-directory#!biz/id/563ee34c4f952ee5392f9f95"
                    target="_blank" rel="noopener noreferrer" className="profile-link" title="ACHS Directory">
                    <i className="fa-solid fa-users" style={{ color: 'var(--text-dark)' }}></i> ACHS
                </a>
            </div>
        </div>
    </header>

    {/*  Main Archive  */}
    <main className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
            <div className="glass-card reveal">
                <h2
                    style={{ marginBottom: '2rem', fontSize: '1.8rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                    Published Works</h2>

                <table className="archive-table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Title & Publication</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  JK Monitor Article  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>N/A</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Preserving Jammu's Rich Heritage: Dr. Mrinalini Atrey's Research Sheds Light on Intangible Cultural Legacy</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>JK Monitor</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(251, 207, 232, 0.5)' }}>Article</span></td>
                            <td data-label="Action"><a href="https://jkmonitor.org/archive-2010-2024/categories/preserving-jammus-rich-heritage-dr-mrinalini-atreys-research-sheds-light-on-intangible-cultural-legacy.html" target="_blank" rel="noopener noreferrer" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 1  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2025</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Seasonal migration practices of the Gujjar and Bakarwal communities</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Intangible cultural heritage safeguarding & climate action</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(224, 242, 254, 0.5)' }}>Book Chapter</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:IjCSPb-OGe4C" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 2  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2023</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>How Now, My Good Folklorist, I have Some Questions for You...</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>ISFNR Newsletter</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(251, 207, 232, 0.5)' }}>Newsletter Article</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:Y0pCki6q_DkC" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 3  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2021</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Documenting the Folk Deities of Jammu Region</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Understanding Culture and Society in India</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(224, 242, 254, 0.5)' }}>Book Chapter</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:u-x6o8ySG0sC" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 4  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2021</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Intangible Cultural Heritage and Women Narratives: A Case Study of Jammu Region, India</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Patrimonio</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(233, 213, 255, 0.5)' }}>Journal</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:2osOgNQ5qMEC" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 5  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2021</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>The Dancing Poet: Rabindranath Tagore and Choreographies of Participation</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Asian Ethnology</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(233, 213, 255, 0.5)' }}>Journal</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:9yKSN-GCB0IC" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 6  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2021</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Patrimonio Cultural Inmaterial y Narrativas de Mujeres</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>PATRIMONIO: Economía Cultural y Educación para la Paz</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(233, 213, 255, 0.5)' }}>Journal</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:d1gkVwhDpl0C" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 7  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2016</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Genre–text–interpretation</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Genre–Text–Interpretation</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(233, 213, 255, 0.5)' }}>Book/Edited Volume</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:zYLM7Y9cAGgC" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 8  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2016</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Major Generic Forms of Dogri lok gathas</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Genre–Text–Interpretation</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(224, 242, 254, 0.5)' }}>Book Chapter</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:qjMakFHDy7sC" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 9  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2016</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Manifestations of Humour in Serbian Folklore Material: The Example of Šala</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Genre–Text–Interpretation</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(224, 242, 254, 0.5)' }}>Book Chapter</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:Tyk-4Ss8FVUC" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 10  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2012</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Naga Deity Cult in Jammu Region</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Shodhak: A Journal of Historical Research</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(233, 213, 255, 0.5)' }}>Journal</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:UeHWp8X0CEIC" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                        {/*  Paper 11  */}
                        <tr>
                            <td data-label="Year" style={{ fontWeight: 500, color: 'var(--text-light)' }}>2008</td>
                            <td data-label="Title & Publication">
                                <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Deity, cult, rituals & oral traditions in Jammu</strong>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Saksham Books International</span>
                            </td>
                            <td data-label="Type"><span className="glass-pill" style={{ fontSize: '0.75rem', background: 'rgba(233, 213, 255, 0.5)' }}>Book</span></td>
                            <td data-label="Action"><a href="https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=HCrTFzMAAAAJ&citation_for_view=HCrTFzMAAAAJ:u5HHmVD_uO8C" className="btn btn-glass" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>View <i className="fa-solid fa-external-link-alt" style={{ marginLeft: '5px', fontSize: '0.8rem' }}></i></a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="glass-card reveal" style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem' }}>
                <i className="fa-solid fa-quote-left"
                    style={{ fontSize: '2rem', color: 'var(--accent-pink)', opacity: 0.5, marginBottom: '1rem' }}></i>
                <p
                    style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: 500, maxWidth: '700px', margin: '0 auto', color: 'var(--text-dark)' }}>
                    "Research is to see what everybody else has seen, and to think what nobody else has thought."
                </p>
            </div>
        </div>
    </main>

    {/*  Footer  */}
    <footer>
        <div className="container">
            <div className="footer-content reveal">
                <div className="footer-col" style={{ flex: 2, minWidth: '250px' }}>
                    <h3 className="logo" style={{ marginBottom: '1rem' }}>Dr. Mrinalini Atrey</h3>
                    <p style={{ maxWidth: '300px' }}>Dr Mrinalini Atrey - A heritage scholar bridging fieldwork with global
                        advocacy.</p>
                </div>
                <div className="footer-col" style={{ flex: 1, minWidth: '150px' }}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html#about">About</a></li>
                        <li><a href="blogs.html">Blogs</a></li>
                        <li><a href="academics.html">Academics</a></li>
                    </ul>
                </div>
                <div className="footer-col" style={{ flex: 1, minWidth: '150px' }}>
                    <h4>Connect & Profiles</h4>
                    <ul>
                        <li><a href="https://scholar.google.co.in/citations?user=HCrTFzMAAAAJ&hl=en" target="_blank"
                                rel="noopener noreferrer">Google Scholar</a></li>
                        <li><a href="https://jammuuniversity.academia.edu/MrinaliniAtrey/CurriculumVitae"
                                target="_blank" rel="noopener noreferrer">Academia.edu</a></li>
                        <li><a href="https://www.linkedin.com/in/mrinalini-a-61875510/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://www.youtube.com/@Pastandpages" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                        <li><a href="https://www.icomosindia.com/nsc.html" target="_blank"
                                rel="noopener noreferrer">ICOMOS India</a></li>
                        <li><a href="https://www.criticalheritagestudies.org/membership-directory#!biz/id/563ee34c4f952ee5392f9f95"
                                target="_blank" rel="noopener noreferrer">ACHS Directory</a></li>
                        <li><a href="mailto:atreymrinalini@gmail.com">Email Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 All rights reserved | Made with 💖 | <a href="https://prem-singh.vercel.app">By Prem</a></p>
            </div>
        </div>
    </footer>

    

    </>
  );
}
