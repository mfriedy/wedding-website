document.addEventListener('DOMContentLoaded', function () {

    /***************** Waypoints (using Intersection Observer) ******************/
    const waypoints = [
        { selector: '.wp1', animation: 'fadeInLeft' },
        { selector: '.wp2', animation: 'fadeInRight' },
        { selector: '.wp3', animation: 'fadeInLeft' },
        { selector: '.wp4', animation: 'fadeInRight' },
        { selector: '.wp5', animation: 'fadeInLeft' },
        { selector: '.wp6', animation: 'fadeInRight' },
        { selector: '.wp7', animation: 'fadeInUp' },
        { selector: '.wp8', animation: 'fadeInLeft' },
        { selector: '.wp9', animation: 'fadeInRight' }
    ];

    waypoints.forEach(function (waypoint) {
        const elements = document.querySelectorAll(waypoint.selector);
        elements.forEach(function (element) {
            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated', waypoint.animation);
                        observer.unobserve(entry.target); // Stop observing once the animation is applied
                    }
                });
            }, { threshold: 0.75 });
            observer.observe(element);
        });
    });


});


// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}
