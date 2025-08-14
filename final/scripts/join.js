const clientInfo = new URLSearchParams(window.location.search);
console.log(clientInfo);

document.querySelector('#results').innerHTML = `
<p>Email Subscription for ${clientInfo.get('first')} ${clientInfo.get('last')}</p>
<p>Email type is: ${clientInfo.get('subscription')} via ${clientInfo.get('method')}</p>
<p><p>Your Phone: ${clientInfo.get('phone')}</p>
<p>Your email is: ${clientInfo.get('email')} </p>
`