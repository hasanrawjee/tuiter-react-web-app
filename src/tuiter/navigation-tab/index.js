import tabs from './tabs.json'
import NavigationTabItem from "./navigation-tab-item";
import { useLocation } from "react-router";

const NavigationTab = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    const active = paths[3];
    return (
        <ul className="nav nav-pills mb-2 mt-2">
            {
                tabs.map(tab => {
                    return (<NavigationTabItem key={tab._id} tab={tab} active={active ? active : "for-you"} />)
                })
            }
        </ul>
    )
}

export default NavigationTab;