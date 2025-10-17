function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>© {year} My App. All rights reserved.</p>
        </footer>
    )
}

export default Footer;