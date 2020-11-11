const $INPUTDATA = $('input');

const $FORM = $('form');

const $IMGDIV = $(".images");

$FORM.on('submit', async function(e){
    e.preventDefault();
    const ARR = [];
    if(!$INPUTDATA.val()) return;
    const RES = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: $INPUTDATA.val(), api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
    for(let url of RES.data.data){
        ARR.push(url.images.original.url);
    }
    const RAN =  Math.floor(Math.random()*RES.data.data.length);
    $('.images').append(`<img src=${ARR[RAN]}>`);
    $INPUTDATA.val("");
});

$('.remove').on('click', ()=> $IMGDIV.empty());




