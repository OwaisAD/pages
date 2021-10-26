# Javascript day 2
- DOM
    - the tree
    - document.getElementById(id), 
    - document.getElementsByClassName("stopButton")[0]; 
    - document.getElementsByTagName("LI");
- events
    - btn.addEventListener('click', event => {button.textContent = `Click count: ${event.detail}`;});
    - btn.onclick = function(evt) {console.log('ID',evt.target.id);}
    - INLINE EVENTHANDLERS ARE BAD: `<button onclick="bgChange()">Press me</button>`
    - ```javascript
    form.onsubmit = function(e) {
        if (fname.value === '' || lname.value === '') {
            e.preventDefault();
            para.textContent = 'You need to fill in both names!';
        }
    }
    ```
    - Event bubbling and capturing (bubling is default in most current browsers)
    ![](https://javascript.info/article/bubbling-and-capturing/eventflow.svg)
        - `btn.onclick = function(e) {e.stopPropagation();video.play();};` to stop bubling up from the target
- Forms
- JS array to HTML table with .map()
- 