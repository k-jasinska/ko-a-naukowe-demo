(function () {
    var groups = document.querySelectorAll(".group-title");

    groups.forEach((group) => {
        group.addEventListener('click', function (e) {
            $(this).next('.group-descr').slideToggle(300);
        });
    });
    //     $('.group-descr').stop().slideToggle(300);
})();