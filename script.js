const houseType = ["Single Family", "Condo", "Multi-Family", "Land", "Rentals", "Pending"]
const beds = [1, 2, 3, 4, 5, 6]
const baths = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5]
const minPrice = [25000, 50000, 75000, 100000, 125000, 150000, 175000, 200000, 250000, 300000, 350000, 400000, 450000, 500000]
const maxPrice = [25000, 50000, 75000, 100000, 125000, 150000, 175000, 200000, 250000, 300000, 350000, 400000, 450000, 500000]





$ (() => {

    const $openBtn = $('#open-modal-houses');
    const $modal = $('#modal-house');
    const $closeBtn = $('#close');
    
    // Event handler to open the modal
    const openModal = () => {
      $modal.css('display', 'block');
    }
    
    // Event handler to close the modal
    const closeModal = () => {
      $modal.css('display', 'none');
    }
    
    //adding event listener
    $openBtn.on('click', openModal);
    
    //Add event listener to Close button
    $closeBtn.on('click', closeModal);


})