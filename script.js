

$ (() => {

  //house modal
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



            //multifamily modal
            const $openBtnMulti = $('#open-modal-multifamily');
            const $modalMulti = $('#modal-multifamily');
            const $closeBtnMulti = $('#close-multi');

            // Event handler to open the modal
            const openModalMulti = () => {
              $modalMulti.css('display', 'block');
            }

            // Event handler to close the modal
            const closeModalMulti = () => {
              $modalMulti.css('display', 'none');
            }

            //adding event listener
            $openBtnMulti.on('click', openModalMulti);

            //Add event listener to Close button
            $closeBtnMulti.on('click', closeModalMulti);

                      //second page modal
                      const $openBtnSecond = $('#search');
                      const $modalPage = $('.second-page');
                      const $closeBtnSecond = $('#close-search');

                      // Event handler to open the modal
                      const openModalPage = () => {
                        $modalPage.css('display', 'block');
                      }

                      // Event handler to close the modal
                      const closeModalPage = () => {
                        $modalPage.css('display', 'none');
                      }

                      //adding event listener
                      $openBtnSecond.on('click', openModalPage);

                      //Add event listener to Close button
                      $closeBtnSecond.on('click', closeModalPage);



  var house = {
    "async": true,
    "crossDomain": true,
    "url": "https://realtor.p.rapidapi.com/properties/list-for-sale?is_pending=false&sort=relevance&radius=10&prop_type=single_family&city=Providence&offset=0&limit=400&state_code=RI",
    "method": "GET",
    "headers": {
          "x-rapidapi-host": "realtor.p.rapidapi.com",
          "x-rapidapi-key": "a7e18599a7msh0e4b44020cda7e2p156c1ejsnd934c76f8c56"
        }
      }
            

      $.ajax(house).then( (data) => {
        // console.log(data);
        
        for (let i = 0; i < data.listings.length; i++) {
          
          const div1 = $("<div>").addClass("single-div")
          $("#modal-divs").append(div1)
          
          const h1 = $("<h1>")

          const h2 = $("<h2>")

          const span = $("<span>")
          
          const spanTwo = $("<span>")

          $(div1).append(h1)
          $(div1).append(h2)
          $(div1).append(span)
          $(div1).append(spanTwo)
          

          h1.text(`${data.listings[i].address}`)
          
          h2.text(`${data.listings[i].price}`)

          const image = $("<img>").attr("src", data.listings[i].photo).addClass("img")
          $(div1).append(image)
          
          span.text(`SIZE: ${data.listings[i].sqft_raw}sqft`)
  
          spanTwo.text(`Rooms: ${data.listings[i].beds}Beds ${data.listings[i].baths}Baths`)

          $(".list-house").text(`${data.listings.length} Listings`)
        }
      })

// multi family modal
    var multi = {
      "async": true,
      "crossDomain": true,
      "url": "https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&radius=10&prop_type=multi_family&city=Providence&offset=0&limit=400&state_code=RI",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "a7e18599a7msh0e4b44020cda7e2p156c1ejsnd934c76f8c56"
      }
    }
        
        $.ajax(multi).then( (data) => {
          // console.log(data);

          for (let i = 0; i < data.listings.length; i++) {
          
            const div1 = $("<div>").addClass("single-div")
            $("#divs-multifamily").append(div1)
            
            const h1 = $("<h1>")
  
            const h2 = $("<h2>")
  
            const span = $("<span>")
            
            const spanTwo = $("<span>")
  
            $(div1).append(h1)
            $(div1).append(h2)
            $(div1).append(span)
            $(div1).append(spanTwo)
            
  
            h1.text(`${data.listings[i].address}`)
            
            h2.text(`${data.listings[i].price}`)
  
            const image = $("<img>").attr("src", data.listings[i].photo).addClass("img")
            $(div1).append(image)
            
            span.text(`SIZE: ${data.listings[i].sqft_raw}sqft`)
    
            spanTwo.text(`Rooms: ${data.listings[i].beds}Beds ${data.listings[i].baths}Baths`)



            $(".list-multi").text(`${data.listings.length} Listings`)
          }
        })
      
        



// search button
    $('#filter').on('change', (event)=>{

      event.preventDefault();

      const userSelect = $("#property-type option:selected").val();

      const userSelectMaxPrice = $("#price-max option:selected").val();

      const userSelectMinPrice = $("#price-min option:selected").val();

    var secondPage = {
      "async": true,
      "crossDomain": true,
      "url": "https://realtor.p.rapidapi.com/properties/list-for-sale?sort=relevance&radius=20&city=Providence&offset=0&limit=850&state_code=RI" + userSelect + userSelectMinPrice + userSelectMaxPrice,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "a7e18599a7msh0e4b44020cda7e2p156c1ejsnd934c76f8c56"
      }
      
    }
    $.ajax(secondPage).then((data) => {
      console.log(data);
      console.log(secondPage.url)
      $( ".for-sale-container" ).empty()

        for (let i = 0; i < data.listings.length; i++) {
          
          const div1 = $("<div>").addClass("single-div")
          $(".for-sale-container").append(div1)
          
          const h1 = $("<h1>")

          const h2 = $("<h2>")

          const span = $("<span>")
          
          const spanTwo = $("<span>")

          $(div1).append(h1)
          $(div1).append(h2)
          $(div1).append(span)
          $(div1).append(spanTwo)
          

          h1.text(`${data.listings[i].address}`)
          
          h2.text(`${data.listings[i].price}`)

          const image = $("<img>").attr("src", data.listings[i].photo).addClass("img")
          $(div1).append(image)
          
          span.text(`SIZE: ${data.listings[i].sqft_raw}sqft`)
  
          spanTwo.text(`Rooms: ${data.listings[i].beds}Beds ${data.listings[i].baths}Baths`)

          $(".search-listings").text(`${data.listings.length} Listings`)
        }
    });
  })



  $(".search-buttons").click( () => {
    $(".footer h6").css("color", "#D2D4D8")
  })



    
   





















})