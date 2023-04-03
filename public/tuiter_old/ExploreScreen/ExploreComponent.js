import PostSummaryList from "../PostSummaryList/index.js";
import NavigationTab from "../Navigation/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row align-items-center mx-0">
        <!-- search field and cog -->
            <div class="col-11 px-0">
                <label for="search-tuiter" class="form-label w-100 mb-0">
                <div class="input-group">
                    <span class="input-group-text bg-white border-end-0 rounded-end rounded-pill">
                        <i class="fas fa-search text-secondary"></i>
                    </span>
                    <input type="text"
                           id="search-tuiter"
                           class="form-control border-start-0 rounded-start rounded-pill px-0"
                           placeholder="Search Twitter" />
                </div>
                </label>
            </div>
            <div class="col-1 wd-cog pe-0">
                <a href="explore-settings.html" class="fas fa-cog fa-2x text-decoration-none float-end"></a>
            </div>
        </div>
        <!-- nav tabs -->
<!--        TODO: make the below 'active' parameter flexible -->
        ${NavigationTab("for you")}
        <!-- image with overlaid text -->
        <div class="position-relative mb-2">
            <img src="../../images/spacex.jpeg" class="card-img w-100" alt="...">
            <h2 class="fw-bolder position-absolute bottom-0 ps-2">SpaceX's Starship</h2>
        </div>
        <!-- Posts -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
