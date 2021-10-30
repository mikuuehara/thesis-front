const url = 'http://127.0.0.1:5000/status'

async function get_status(){
    try {
        const response = await fetch(url);
        const result_1 = await response.json();
        return result_1.status;
    } catch (e) {
        console.log(e);
    }
}

window.onload = async () => {
    const status_txt = document.getElementById('main-block');
    let now_status = await get_status();

    setInterval(async () => {
        let new_status = await get_status();
        console.log("now_status:", now_status);
        console.log("new_status:", new_status);
        if (now_status != new_status) {
            if (new_status == "True") {
                status_txt.innerHTML = ' <div id="status" class="ng"><div id="contents-wrap"><div id="status-top">密です<span class="en">Keep a distance.</span></div></div></div>';
            }
            else {
                status_txt.innerHTML = '<div id="status" class="ok"><div id="contents-wrap"><div id="status-top">OK</div></div></div>';
            }
            now_status = new_status;
            console.log("書き換え");
        }
    }, 500);
    };