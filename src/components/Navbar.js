import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <a href="/"><div className="item logo">logo</div></a>
                    <div className="item actions">
                        <a href="/projects">projects</a>
                        <a href="">events</a>
                        <a href="">resources</a>
                        <a href="">contact us</a>
                        <a>[]</a>
                    </div>
            </div>
        </div>
    );
}

export default Navbar;