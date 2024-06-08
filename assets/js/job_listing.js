
document.getElementById('jobsfound') = 200000;
    document.getElementById('jobclick').addEventListener('mouseover', function(){
        document.getElementById('jobsfound').innerHTML = 200000;
    });


    function submited(){
        document.getElementById('applyNowBtn').style.display = 'none';
        document.getElementById('applied').style.display = 'block';
        document.getElementById('applied').style.color = 'green';
    }
