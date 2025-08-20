import Profile from "./components/Profile"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"

export default function () {
    return (
        <div className="main-container">
            <div className="profile-section">
                <div className="section-box">
                    <Profile />
                </div>
            </div> 
            <div className="content-wrapper">
                <main className="content-section">
                    <div className="section-box">
                        <About />
                    </div>
                    <div className="section-box">
                        <Experience />
                    </div>
                    <div className="section-box">
                        <Projects />
                    </div>
                </main>
            </div>
        </div>
    )
}
