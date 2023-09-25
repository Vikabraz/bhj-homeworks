const tabs = document.querySelectorAll('.tab'),
      contents = document.querySelectorAll('.tab__content');
      

tabs.forEach(tab => {
    tab.addEventListener('click', (e) =>{
        let target = e.target;
        let indexOfTab = [...tabs].indexOf(target);
        tabs.forEach((tabs) => tabs.classList.remove('tab_active'));
        target.classList.add('tab_active');
        contents.forEach((contents) => contents.classList.remove('tab__content_active'));
        contents[indexOfTab].classList.add('tab__content_active');
    });
    
    });    
                
   

        
