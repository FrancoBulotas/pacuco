

const ToggleNavButton = () => {

    const handleClick = (event) => {
        event.preventDefault()
        document.body.classList.toggle('sb-sidenav-toggled')
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'))
    }

    return(
        <button onClick={handleClick} className="btn btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle"><i className="fas fa-bars"></i></button>
    )
}

export default ToggleNavButton