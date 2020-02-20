

//img scale hover
document.querySelectorAll('.webImg').forEach(item => {
    item.addEventListener('mouseenter', event => {
        event.target.style.transform = "scale(1.2)";
        event.target.style.transition = "all 0.3s";
    })

    item.addEventListener('mouseleave', event => {
        event.target.style.transform = "scale(1.0)";
        event.target.style.transition = "all 0.3s";
    })
  })

//nav link color hover

document.querySelectorAll('a').forEach(item => {
    item.addEventListener('mouseenter', event => {
        event.target.style.color = 'orange'; 
    })

    item.addEventListener('mouseleave', event => {
        event.target.style.color = 'black'; 
    })
  })



//h2 click

document.querySelectorAll('.headerTwo').forEach(item => {
    item.addEventListener('click', event => {
        event.target.style.color = 'orange'; 
    })
  })



//btn focus 

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('dblclick', event => {
        event.target.style.background = 'black'; 
    })
  })


  
  

