function generateStackIcon(sidebar) {
    return(`
        <span class="fa-stack wd-small">
            <i class="${sidebar.iconMain} fa-stack-2x" style="text-align: left"></i>
            <i class="${sidebar.iconSub} fa-stack-1x fa-inverse" style="width: 80%"></i>
        </span>
    `)
}
const navSidebarItem = (sidebar, active) => {
    let icon;
    if(sidebar.stack) {
        icon = generateStackIcon(sidebar)
    } else {
        icon = `<i class="${sidebar.iconMain}"></i>`
    }
    return(`
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

// For text only
// $('#wd-nav').append(`
//     ${navSidebarItem(
//         // {
//         //     active: false,
//         //     stack: false,
//         //     source: "/",
//         //     iconMain: "fab fa-twitter",
//         //     iconSub: "",
//         //     name: "",
//         // },
//         // {
//         //     active: false,
//         //     stack: false,
//         //     source: "../HomeScreen/index.html",
//         //     iconMain: "fas fa-home",
//         //     iconSub: "",
//         //     name: "Home",
//         // },
//         //
//         {
//             active: false,
//             stack: true,
//             source: "/",
//             iconMain: "fas fa-circle",
//             iconSub: "fas fa-ellipsis-h",
//             name: "More",
//         }
//     )}
// `)