import Profile from "./components/Profile"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"

export default function () {
    return (
        <div className="main-container">
            <div className="profile-section">
                <Profile />
            </div>  
            <div className="content-wrapper">
                <main className="content-section">
                    <About />
                    <Experience />
                    <Projects />
                </main>
            </div>
        </div>
    )
}
