

function mobile(){
    
    document.getElementById('right').classList.add('active');

    document.getElementById('hide-bar').style.display = 'none';
    document.getElementById('hide-close').style.display = 'block';
    
    }

function mobile1(){
    document.getElementById('right').classList.remove('active');

    document.getElementById('hide-close').style.display = 'none';
    document.getElementById('hide-bar').style.display = 'flex';    
}

