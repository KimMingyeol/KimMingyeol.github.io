document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("landscape");
    const tab = document.querySelector(".tab");

    function adjustImage() {
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const tabRatio = tab.offsetWidth / 500;

        // window size; shrinked : enlarged
        img.style.objectFit = imgRatio > tabRatio ? "cover" : "contain";
        img.style.height = imgRatio > tabRatio ? "500px" : "auto";
    }

    window.addEventListener("resize", adjustImage);
    window.addEventListener("load", adjustImage);
});
