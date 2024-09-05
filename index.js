// Get all image containers
const imageContainers = document.querySelectorAll('.image-container');

// Add event listener to each image container
imageContainers.forEach((container) => {
  // Get the image element inside the container
  const img = container.querySelector('img');

  // Add a load event listener to the image
  img.addEventListener('load', () => {
    // Calculate the image height and width
    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;

    // Calculate the container width and height
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Check if the image is taller than the container
    if (imgHeight > containerHeight) {
      // Calculate the top margin needed to center the image vertically
      const topMargin = (containerHeight - imgHeight) / 2;

      // Apply the top margin to the image
      img.style.marginTop = `${topMargin}px`;
    }

    // Check if the image is wider than the container
    if (imgWidth > containerWidth) {
      // Calculate the left margin needed to center the image horizontally
      const leftMargin = (containerWidth - imgWidth) / 2;

      // Apply the left margin to the image
      img.style.marginLeft = `${leftMargin}px`;
    }
  });
});