const url = 'http://127.0.0.1:5000/status'

async function get_status() {
  try {
    const response = await fetch(url);
    const result_1 = await response.json();
    return result_1.status;
  } catch (e) {
    console.log(e);
  }
}

window.onload = async () => {
  const status_element = document.querySelector('main');
  let now_status = await get_status();

  setInterval(async () => {
    let new_status = await get_status();
    console.log("now_status:", now_status);
    console.log("new_status:", new_status);
    if (now_status != new_status) {
      if (new_status == "True") {
        status_element.setAttribute('id', 'ng');
        console.log(status_element.id)
      } else {
        status_element.setAttribute('id', 'ok');
        console.log(status_element.id)
      }
      now_status = new_status;
      console.log("書き換え");
    }
  }, 1000);
};

// window.onload = () => {
//   try {
//     const response = fetch(url);
//     const result_1 = response.json();
//     console.log(result_1.status)
//   } catch (e) {
//     console.log(e);
//   }
// };