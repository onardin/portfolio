import Links from "./Links"

export default function () {
    return (
        <>
            <h1>Oliviero Nardin</h1>
            <h2>Software Engineer</h2>
            <nav className="profile-nav">
                <img src="/profile-pic.jpeg" alt="Profile image" className="profile-pic" />
                <Links />
            </nav>
        </>
    )
}