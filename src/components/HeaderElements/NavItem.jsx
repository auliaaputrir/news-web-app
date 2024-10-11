import { NavLink } from 'react-router-dom';

export default function NavItem(props) {
    const {children, to, classBorder='border-b-2', borderColor='border-b-black'} = props
    return (
        <NavLink
            to={to}
            end
            className={({ isActive }) =>
                `inline-block ${classBorder}  transition-all duration-300 ${isActive ? `${borderColor} pb-2`  : `border-transparent hover:${borderColor} pb-2`}`
            }
        >
            {children}
        </NavLink>
    )
}