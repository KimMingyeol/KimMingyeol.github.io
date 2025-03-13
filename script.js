document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("landscape");
    const tab = document.querySelector(".tab");

    function adjustImage() {
        const min_landscape_image_height = 450; // MODIFY HERE if you want

        const img_ratio = img.naturalWidth / img.naturalHeight;
        const width_percentage_landscape_image_covers_tab = 100;    // MODIFY HERE if you change the image's "width(%)" property in style.scss
        const min_tab_width_to_keep_img_ratio = (100/width_percentage_landscape_image_covers_tab) * (min_landscape_image_height * img_ratio);

        // Window size; Shrinked (landscape image cropped in width-axis) : Enlarged (landscape image expanded with img_ratio kept)
        const tab_style = window.getComputedStyle(tab);
        const tab_paddingLeft = parseInt(tab_style.paddingLeft);
        const tab_paddingRight = parseInt(tab_style.paddingRight);

        const current_tab_width = tab.clientWidth - tab_paddingLeft - tab_paddingRight;  // As described in style.scss, 960px (padding added) is the maximum tab width
        img.style.objectFit = min_tab_width_to_keep_img_ratio > current_tab_width ? "cover" : "contain";
        img.style.height = min_tab_width_to_keep_img_ratio > current_tab_width ? min_landscape_image_height.toString() + "px" : "auto";
    }

    window.addEventListener("resize", adjustImage);
    window.addEventListener("load", adjustImage);
});
