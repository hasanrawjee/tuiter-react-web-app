/* eslint-env jquery */
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function homeComponent() {
    let active = "home";
    $('#wd-home').append(`
        <h2>Home</h2>
        <div class="row mt-2">
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--                <h3>Navigation Sidebar</h3>-->
                ${NavigationSidebar(active)}
            </div>
            <div class="col-10 col-lg-7 col-xl-6">
<!--                <h3>Home Component</h3>  -->
                ${PostList()}       
            </div>
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
<!--                <h3>Post Summary List</h3>-->
                ${PostSummaryList()}
            </div>
        </div>
    `);
    // Edit summary post image width and breakpoints column size to adapt to the Home Screen
    $("img.wd-post-summary-image").attr("width", "80px");
    $('.wd-post-left').addClass("col-lg-9 col-xxl-10").removeClass("col-lg-10");
    $('.wd-post-right').addClass("col-lg-3 col-xxl-2").removeClass("col-lg-2");
    // Set post list item's background as transparent in the middle Home Component area
    $('.wd-post-list-item').addClass("bg-transparent");
}

$(homeComponent)