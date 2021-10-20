
// Declaring lets for error prevention

let output = "";
let alt = "";

// images
// TODO - Label const accurately
const x  = [
  {
    id:            '',
    title:         '',
    description:   '',
    width:         '',
    height:        '',
    pathUrl:       '',
    linkUrl:       '',
    credit:        '',
    creditUrl:     ''
  },
  {
    id:            '',
    title:         '',
    description:   '',
    width:         '',
    height:        '',
    pathUrl:       '',
    linkUrl:       '',
    credit:        '',
    creditUrl:     ''
  },
  {
    id:            '',
    title:         '',
    description:   '',
    width:         '',
    height:        '',
    pathUrl:       '',
    linkUrl:       '',
    credit:        '',
    creditUrl:     ''
  },
  {
    id:            '',
    title:         '',
    description:   '',
    width:         '',
    height:        '',
    pathUrl:       '',
    linkUrl:       '',
    credit:        '',
    creditUrl:     ''
  },
  {
    id:            '',
    title:         '',
    description:   '',
    width:         '',
    height:        '',
    pathUrl:       '',
    linkUrl:       '',
    credit:        '',
    creditUrl:     ''
  },
 ];

// Locally Hosted Images -  forEach loop
// TODO - correct local host file structure in img src
 x.forEach(function(y){
  output += `<a href="..."> 
  <img src="images/x-ids/size/${x-id.id}.jpg"
  alt = "${description}"></a>`
});

 const gallery = document.querySelector('.gallery');
 gallery.innerHTML = output;
