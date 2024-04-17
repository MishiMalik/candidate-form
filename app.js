const nxtBtn = document.querySelector('#submitBtn');
const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const form3 = document.querySelector('#form3');
const form4 = document.querySelector('#form4');


const topText = document.querySelector('.title__container');
const rightContainer = document.querySelector('.right__container');
const leftContainer = document.querySelector('.left__container');

var viewId = 1;
function nextForm(){
    console.log("hellonext");
    viewId=viewId+1;
    // progressBar();
    displayForms();
    
    console.log(viewId);

}

function prevForm(){
    console.log("helloprev");
    viewId=viewId-1;
    console.log(viewId);
    progressBar1();
    displayForms();
}


function displayForms(){
    
  

    if(viewId ===1){
        form1.style.display = 'block';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'none';
        topText.style.display="block"
        // form5.style.display = 'none';


    }else if(viewId === 2){
        form1.style.display = 'none';
        form2.style.display = 'block';
        form3.style.display = 'none';
        form4.style.display = 'none';
        // form5.style.display = 'none';
        topText.style.display="block"

    }
    else if(viewId===3){
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'block';
        form4.style.display = 'none';
        topText.style.display="none"
    }
    else if(viewId===4){
        form1.style.display = 'none';
        form2.style.display = 'none';
        form3.style.display = 'none';
        form4.style.display = 'block';
        topText.style.display="none"
    }
}


    // jQuery document ready shorthand
    $(function () {
        $('.thumb-line').click(function () {
            // Remove active class from all thumb-line elements within the same container
            $(this).closest('.d-flex').find('.thumb-line').removeClass('active-thumb');
            // Add active-thumb class to the clicked thumb-line element
            $(this).addClass('active-thumb');
            var iconName = $(this).attr('name');
            // Remove "-outline" from the clicked element
            var newName = iconName.replace('-outline', '');
            // Set the new name to the clicked element
            $(this).attr('name', newName);
            // Add "-outline" back to the other thumb-line elements within the same container
            $(this).closest('.d-flex').find('.thumb-line').not(this).attr('name', function (_, oldName) {
                return oldName.replace(/(?<!-outline)$/, '-outline');
            });
        });
    });
    // <!-- check selecetd/radio -->
    $(function () {
        $('.check-button').click(function () {
            $(this).toggleClass('selected-check');
        });
    });

    $(function () {
        $('.radio-button').click(function () {
            // Remove selected-radio class from all buttons within the same container
            $(this).closest('.radio-button-row').find('.radio-button').removeClass('selected-radio');
            // Add selected-radio class to the clicked button
            $(this).addClass('selected-radio');
        });
    });

