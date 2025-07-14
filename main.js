document.addEventListener('DOMContentLoaded', () => {
  const detailButtons = document.querySelectorAll('.view-details-btn');

  detailButtons.forEach(button => {
    button.addEventListener('click', () => {
      const title = button.getAttribute('data-title');
      const image = button.getAttribute('data-image');
      const description = button.getAttribute('data-description');
      const price = button.getAttribute('data-price');

      document.getElementById('productModalLabel').textContent = title;
      document.getElementById('productModalImage').src = image;
      document.getElementById('productModalImage').alt = title;
      document.getElementById('productModalDescription').textContent = description;
      document.getElementById('productModalPrice').textContent = price;
    });
  });
});
