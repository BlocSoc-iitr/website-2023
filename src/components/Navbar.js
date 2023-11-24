import "../styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="navbar">
                    <div className="item logo">logo</div>
                    <div className="item actions">
                        <a href="">project</a>
                        <a href="">event</a>
                        <a href="">resources</a>
                        <a href="">contact us</a>
                    </div>
            </div>
        </div>
    );
}

export default Navbar;