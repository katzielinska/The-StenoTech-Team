var images = [
                { src: 'image/Closetsss.png', title: 'xxxxxxxx' },

            ];

            $(function () {
                var gridSize = $('#levelPanel :radio:checked').val();
                imagePuzzle.startGame(images, gridSize);
                $('#newPhoto').click(function () {
                    var gridSize = $('#levelPanel :radio:checked').val();  // Take the updated gridSize from UI.
                    imagePuzzle.startGame(images, gridSize);
                });

                $('#levelPanel :radio').change(function (e) {
                    var gridSize = $(this).val();
                    imagePuzzle.startGame(images, gridSize);
                });
            });
            function rules() {
                alert('Re arrange the image parts in a way that it correctly forms the picture. \nThe no. of steps taken will be counted.');
            }
            function about() {
                alert('Developed by Anurag Gandhi. \nHe can be contacted at: soft.gandhi@gmail.com');
            }

var timerFunction;

var imagePuzzle = {
    stepCount: 0,
    startTime: new Date().getTime(),
    startGame: function (images, gridSize) {
        this.setImage(images, gridSize);
        $('#playPanel').show();
        $('#sortable').randomize();
        this.enableSwapping('#sortable li');
        this.stepCount = 0;
        this.startTime = new Date().getTime();
        this.tick();
    },
   
    enableSwapping: function (elem) {
        $(elem).draggable({
            snap: '#droppable',
            snapMode: 'outer',
            revert: "invalid",
            helper: "clone"
        });
        $(elem).droppable({
            drop: function (event, ui) {
                var $dragElem = $(ui.draggable).clone().replaceAll(this);
                $(this).replaceAll(ui.draggable);

                currentList = $('#sortable > li').map(function (i, el) { return $(el).attr('data-value'); });
                if (isSorted(currentList))
                    $('#actualImageBox').empty().html($('#gameOver').html());
                else {
                    var now = new Date().getTime();
                    imagePuzzle.stepCount++;
                    $('.stepCount').text(imagePuzzle.stepCount);
                    $('.timeCount').text(parseInt((now - imagePuzzle.startTime) / 1000, 10));
                }

                imagePuzzle.enableSwapping(this);
                imagePuzzle.enableSwapping($dragElem);
            }
        });
    },

    setImage: function (images, gridSize) {
        console.log(gridSize);
        gridSize = gridSize || 4; // If gridSize is null or not passed, default it as 4.
        console.log(gridSize);
        var percentage = 100 / (gridSize - 1);
        var image = images[Math.floor(Math.random() * images.length)];
        $('#imgTitle').html(image.title);
        $('#actualImage').attr('src', image.src);
        $('#sortable').empty();
        for (var i = 0; i < gridSize * gridSize; i++) {
            var xpos = (percentage * (i % gridSize)) + '%';
            var ypos = (percentage * Math.floor(i / gridSize)) + '%';
            var li = $('<li class="item" data-value="' + (i) + '"></li>').css({
                'background-image': 'url(' + image.src + ')',
                'background-size': (gridSize * 100) + '%',
                'background-position': xpos + ' ' + ypos,
                'width': 600 / gridSize,
                'height': 600 / gridSize
            });
            $('#sortable').append(li);
        }
        $('#sortable').randomize();
    }
};

function isSorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] != i)
            return false;
    }
    return true;
}
$.fn.randomize = function (selector) {
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function () {
        $(this).children(selector).sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).remove().appendTo(this);
    });
    return this;
};



function changeImage(){
       var audio = document.getElementById("audio");
       audio.play();
    
        var image = document.getElementById("imgClickAndChange");
if ( image == "headphone.png" ) {
    document.images["imgClickAndChange"].src = "image/headphone.png";
    image  = "pause.png";
  }
  else {
    document.images["imgClickAndChange"].src = "image/pause.png";
    image  = "headphone.png";
  }
}



function play(){
                 }