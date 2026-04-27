import { useState } from 'react'
import './SideMenu.css'
import Box from '../components/Box/Box'


function SideMenu() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="container2">

                <header className='navbar2'>
                    <div className='logo'>your name</div>
                    <nav>
                        <a href='#'>Home/</a>
                        <a href='#'>Projects/</a>
                        <a href='#'>Articles/</a>
                        <a href='#'>Contact/</a>
                    </nav>
                </header>

                <h1 className='title2'>Frontend Developer</h1>
                <div className='main-section2'>
                    <div className='generalBox'>

                        <h3>Projects</h3>
                    </div>
                    <div className='box2'>

                        <Box title={ "Projects"} />
                        <div className='nida'> { "box"} </div>
                        <div className='nida'>{ "box"}</div>
                        <div className='nida'>{ "box"}</div>
                        <div className='nida'>{ "box"}</div>
                        <div className='nida'>{ "box"}</div>

                    </div>
                    <div className='general2Box'>
                        <Box title={ "workexperience" } />
                        <h3>work experience</h3>
                    </div>
                    <div className='generalBlue2Box'>
                        <div className='boxes2'>
                            <p>roadmap.sh</p>
                            <p>Solve all the frontend projects</p>
                            <a href='#'>visit my profile</a>

                            <hr />
                            <p>openSource work</p>
                            <p>Contributed to 50 openSource projects. Made my own projects with GitHub stars</p>
                            <a href='#'>Visit my GitHub profile</a>
                        </div>
                    </div>
                    <div className='generalBluebox3'>
                        <div className='boxs2'>
                            <h3>Education</h3>
                            <p>Graduated with 3.76 out of 4 CGPA.won ACME hackhathon, organized 30 sections.</p>
                            <h4>Courses i took:</h4>
                            <ul>
                                <li>Object oriented programming</li>
                                <li>Data structures and alghorithm</li>
                                <li>Web Engineering</li>
                                <li>Artificial Intelligence</li>
                                <li>Computer graphics</li>
                                <li>Human computer interactions</li>
                                <li>Database management system</li>
                                <li>Distributed database system</li>
                                <li>Discreet mathematics</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='reviews2'>
                    <h3>Reviews from my teachers</h3>
                </div>

                <div className='review-cards'>
                    <div className='card2'>
                        <p>Jhon Doe was a brilliant student; always stood out with his assignments.</p>
                        <span>Jane Doe</span>
                        <span>Assistant Professor</span>
                    </div>
                </div>
                <div className='footer'>
                    all rights reserved.
                </div>

            </div >


        </>
    )
}

export default SideMenu
