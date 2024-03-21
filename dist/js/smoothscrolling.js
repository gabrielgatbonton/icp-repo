$(document).ready(function () {
  // Smooth Scrolling for buttons and anchor tags
  $("a[href^='#'], .btn").on("click", function (event) {
    // Check if the hash is not empty
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      const hash = this.hash;

      // Calculate the distance to scroll
      const targetOffset = $(hash).offset().top;
      const currentScrollTop = $(window).scrollTop();
      const distance = Math.abs(targetOffset - currentScrollTop);

      // Calculate the animation duration based on distance
      const animationDuration = Math.min(distance, 1000); // Set maximum duration to 1000ms
      console.log(targetOffset);
      console.log(animationDuration);

      // Animate scroll to hash with dynamic duration
      $("html, body").animate(
        {
          scrollTop: targetOffset,
        },
        animationDuration
      );
    }
  });
});
