function toggleSidebar() {
    if (window.innerWidth <= 922 && document.body.classList.contains("sidenav-toggled")) {
        document.body.classList.toggle("sidenav-toggled")
    }
}

export default toggleSidebar