//jshint esversion:6


function toggleChecked() {
    const checkbox = document.querySelector('input[type="checkbox"]');
    /* const checkboxBg = document.querySelector('input[type="checkbox"]'); */

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            console.log("Month");
            $(".month-price").show();
            $(".year-price").hide();
            document.getElementsByTagName("span")[0].style.background = "hsl(234, 14%, 74%)";
        } else {
            console.log("Annually");
            $(".month-price").hide();
            $(".year-price").show();
            document.getElementsByTagName("span")[0].style.background = " hsl(237, 63%, 64%";
        }
    });
}