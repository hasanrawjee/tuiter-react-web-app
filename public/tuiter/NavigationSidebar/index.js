import NavSidebarItem from "./NavSidebarItem.js";
import sidebars from "./sidebars.js";

const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            ${sidebars.map(sidebar => {
                return(`
                    ${NavSidebarItem(sidebar, active === sidebar.name ? "active" : "")}
                `)
            }).join('')}
        </div>
        <div class="d-grid mt-2">
        <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a></div>
    `);
}

export default NavigationSidebar;

// Used for test only
// $('#wd-nav').append(
//     `${NavigationSidebar("home")}`
// )