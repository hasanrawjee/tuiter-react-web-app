import tabs from "./tabs.js";
import NavigationItem from "./NavigationItem.js";

const Navigation = (active) => {
    return(`
        <ul class="nav mb-2 nav-tabs mt-2">     
            ${tabs.map(tab => {
                return(`
                    ${NavigationItem(tab, active === tab.name ? "active" : "")}
                `)
            }).join('')}
        </ul>
    `)
}

export default Navigation;

// used for test only
// $('#wd-nav-tab').append(`
//     ${NavigationTab("for you")}
// `)