function launch() {
    try {
        if (this.window.URL() == "http://localhost:8080")
            return console.info("Listening on " + this.window.URL.toString()),
            document.getElementById("console").innerHTML = "Listening on " + this.window.URL.toString();
    }
    catch (err) {
        return console.error("Following error occured on launch: " + err.message);
    }
};