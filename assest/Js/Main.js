


let courseData = {
    "Course 1": { totalRatings: 0, totalScore: 0 },
    "Course 2": { totalRatings: 0, totalScore: 0 },
    "Course 3": { totalRatings: 0, totalScore: 0 },
  };
  
  // Initialize rating functionality
  document.querySelectorAll('.course').forEach(function (courseElement) {
    const stars = courseElement.querySelectorAll('.star');
    const tooltip = courseElement.querySelector('.tooltip');
    const courseName = courseElement.getAttribute('data-course');
    const totalRatingsElement = courseElement.querySelector(
      "#total-ratings-" + courseName.toLowerCase().replace(/\s+/g, '-')
    );
    const averageRatingElement = courseElement.querySelector(
      "#average-rating-" + courseName.toLowerCase().replace(/\s+/g, '-')
    );
    let selectedRating = 0;
  
    stars.forEach(function (star) {
      // Hover effect
      star.addEventListener('mouseover', function (e) {
        const value = e.target.getAttribute('data-value');
        tooltip.textContent = "Rating: " + value;
        tooltip.classList.add('active');
        updateStars(stars, value);
      });
  
      // Mouse out effect
      star.addEventListener('mouseout', function () {
        tooltip.classList.remove('active');
        updateStars(stars, selectedRating);
      });
  
      // Click event to set rating
      star.addEventListener('click', function (e) {
        const value = parseInt(e.target.getAttribute('data-value'));
        selectedRating = value;
  
        // Update course data
        courseData[courseName].totalRatings += 1;
        courseData[courseName].totalScore += value;
  
        // Calculate average rating
        const averageRating = (courseData[courseName].totalScore / courseData[courseName].totalRatings).toFixed(1);
  
        // Update UI
        tooltip.textContent = "You rated: " + value;
        tooltip.classList.add('active');
        totalRatingsElement.textContent = courseData[courseName].totalRatings;
        averageRatingElement.textContent = averageRating;
        updateStars(stars, selectedRating);
      });
    });
  
    // Update stars function
    function updateStars(stars, value) {
      stars.forEach(function (star, index) {
        if (index < value) {
          star.classList.add('selected');
        } else {
          star.classList.remove('selected');
        }
      });
    }
  });


//   

let booknowbtn=document.getElementById('booknowbtn');
let clickopen =document.getElementById('clickopen');
let closemodel=document.getElementById('closemodel');
let cancelBtn=document.getElementById('cancelBtn')
let bookingForm=document.getElementById('bookingForm')
let noBookingCard=document.getElementById('noBookingCard')
let confirmationCard=document.getElementById('confirmationCard')
let selecteddate=document.getElementById('selecteddate')
let editbtn=document.getElementById('editbtn')
let savebtn=document.getElementById('savebtn')

booknowbtn.addEventListener('click',()=>{
      clickopen.style.display='flex'
})
booknowbtn.addEventListener('click',()=>{
    clickopen.classList.remove('hidden')
})
cancelBtn.addEventListener('click',()=>{
    clickopen.classList.add('hidden');
})


bookingForm.addEventListener('submit',(e)=>{
    e.preventDefault('none');

    let dateinput=document.getElementById('date')
    selecteddate.textContent=dateinput.ariaValueMax;

    clickopen.classList.add('hidden')
    // booknowbtn.classList.add('hidden')
    // savebtn.classList.add('none')        

    confirmationCard.classList.remove('hidden')
})

editbtn.addEventListener('click',()=>{
    clickopen.classList.remove('hidden');
})

closemodel.addEventListener('click',()=>{
    clickopen.style.display='none'
})
cancelBtn.addEventListener('click',()=>{
    clickopen.style.display='none'
})
window.addEventListener(('click',(event)=>{
    if(event.target===clickopen){
    clickopen.style.display='none'
    }
}))






