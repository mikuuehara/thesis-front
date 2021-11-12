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
                status_txt.innerHTML = '<div id="status" class="ng"><div class="contents-wrap" id="status-top">密です</div><div class="animation-wrap"><div class="person left"><svg viewBox="0 0 120 250"><line class="r-arm" x1="60" y1="68" x2="60" y2="150" /><line class="r-leg" x1="60" y1="140" x2="60" y2="230" /><circle class="head" cx="58" cy="27" r="25" /><rect class="body" width="40" height="85" x="40" y="55" rx="18" ry="18" /><line class="l-leg" x1="60" y1="140" x2="60" y2="230" /><line class="l-arm" x1="60" y1="68" x2="60" y2="150" /></svg></div><div class="center"><div class="top"><div class="triangle-wrap left"><svg viewBox="0 0 242.29 268.02"><polygon class="triangle" points="204.29 38, 38 134.01, 204.29 230.02, 204.29 38" /></svg></div><svg viewBox="0 0 400 125"><line class="arrow left" x1="400" y1="62.5" x2="0" y2="62.5" /></svg><svg viewBox="0 0 400 125"><line class="arrow right" x1="0" y1="62.5" x2="400" y2="62.5" /></svg><div class="triangle-wrap right"><svg viewBox="0 0 242.29 268.02"><polygon class="triangle" points="38 38 204.29 134.01 38 230.02 38 38" /></svg></div></div><div class="bottom">2m</div></div><div class="person right"><svg viewBox="0 0 120 250"><line class="r-arm" x1="60" y1="68" x2="60" y2="150" /><line class="r-leg" x1="60" y1="140" x2="60" y2="230" /><circle class="head" cx="58" cy="27" r="25" /><rect class="body" width="40" height="85" x="40" y="55" rx="18" ry="18" /><line class="l-leg" x1="60" y1="140" x2="60" y2="230" /><line class="l-arm" x1="60" y1="68" x2="60" y2="150" /></svg></div></div><div class="contents-wrap m-txt">Please keep a distance.</div></div>';
            }
            else {
                status_txt.innerHTML = '<div id="status" class="ok"><div id="contents-wrap"><div id="status-top">OK</div></div></div>';
            }
            now_status = new_status;
            console.log("書き換え");
        }
    }, 500);
    };