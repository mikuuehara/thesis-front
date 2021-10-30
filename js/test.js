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
    const status_txt = document.getElementById('status');
    let now_status = await get_status();

    setInterval(async () => {
        let new_status = await get_status();
        console.log("now_status:", now_status);
        console.log("new_status:", new_status);
        if (now_status != new_status) {
            if (new_status == "True") {
                status_txt.innerHTML = '密です';
            }
            else {
                status_txt.innerHTML = '密ではありません';
            }
            now_status = new_status;
            console.log("書き換え");
        }
    }, 500);
    };