import { NavLink } from 'react-router-dom';

export default function NavItem(props) {
    const {children, to} = props
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) =>
                `inline-block border-b-2 transition-all duration-300 ${isActive ? 'border-black pb-2' : 'border-transparent hover:border-black pb-2'}`
            }
        >
            {children}
        </NavLink>
    )
}