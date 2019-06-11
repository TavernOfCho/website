const {hubURL, topic, token} = JSON.parse(document.getElementById('config').textContent);

const subscribeURL = new URL(hubURL);
subscribeURL.searchParams.append('topic', topic);

const es = new EventSource(subscribeURL.toString());

let ul = null;

es.onmessage = ({data}) => {
  console.log(JSON.parse(data));
  const {id, text} = JSON.parse(data);
  if (!id || !text) throw new Error('Invalid payload');

  if (!ul) {
    ul = document.createElement('ul');

    const messages = document.getElementById('messages');
    messages.innerHTML = '';
    messages.append(ul)
  }

  const li = document.createElement('li');
  li.append(document.createTextNode(`<${id}> ${text}`));
  ul.append(li)
};

document.querySelector('form').onsubmit = function (e) {
  e.preventDefault();

  const body = new URLSearchParams({
    data: JSON.stringify({
      "@context": "\/contexts\/Message",
      "@id": "\/messages\/1",
      "@type": "Message",
      "id": 1,
      "text": this.elements.message.value
    }),
    topic: 'http://api/messages/1',
  });

  fetch(hubURL, {
      method: 'POST',
      body,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    }
  ).then(res => {
    console.log(res);
  });

  this.elements.message.value = '';
  this.elements.message.focus()
}
;
