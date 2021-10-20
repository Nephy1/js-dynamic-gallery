
// Declaring lets for error prevention

let output = "";
let alt = "";

// images
// TODO - Label const accurately
const images  = [
  {
    id:            '1',
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
    id:            '2',
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
    id:            '3',
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
    id:            '4',
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
    id:            '5',
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
    id:            '6',
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
    id:            '7',
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
    id:            '8',
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
    id:            '9',
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
    id:            '10',
    title:         '',
    description:   '',
    width:         '',
    height:        '',
    pathUrl:       '',
    linkUrl:       '',
    credit:        '',
    creditUrl:     ''
  }
  
 ];

// Locally Hosted Images -  forEach loop
// TODO - correct local host file structure in img src
 images.forEach(function(image){
  output += `<a href="..."> 
  <img src="images/x-ids/size/${images.id}.jpg"
  alt = "${description}"></a>`
});

 const gallery = document.querySelector('.gallery');
 gallery.innerHTML = output;
