function generateStackIcon(sidebar) {
    return (`
        <span class="fa-stack wd-small">
            <i class="${sidebar.iconMain} fa-stack-2x" style="text-align: left"></i>
            <i class="${sidebar.iconSub} fa-stack-1x fa-inverse" style="width: 80%"></i>
        </span>
    `)
}
const navSidebarItem = (sidebar, active) => {
    let icon;
    if (sidebar.stack) {
        icon = generateStackIcon(sidebar)
    } else {
        icon = `<i class="${sidebar.iconMain}"></i>`
    }
    return (`
        <a href="${sidebar.source}" class="list-group-item ${active}">
            <div class="row">
                <div class="col-xl-2">
                    ${icon}
                </div>
                <div class="d-none d-xl-inline col-xl-10">
                    <!-- Capitalize the first letter of sidebar name -->
                    ${sidebar.name ? sidebar.name[0].toUpperCase() + sidebar.name.slice(1) : ""}
                </div>
            </div>
        </a>
    `);
}

export default navSidebarItem;