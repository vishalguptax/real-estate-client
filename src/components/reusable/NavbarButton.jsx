
const NavbarButton = ({ children, className, onClick }) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default NavbarButton;
