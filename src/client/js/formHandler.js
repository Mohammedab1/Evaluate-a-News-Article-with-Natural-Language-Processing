function handleSubmit(event) {
  event.preventDefault();

  let text = document.getElementById("name").value;

  const sendURL = async (url, data) => {
     const res = await fetch('/text', {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: data }),
    });
    try {
      const Data = await res.json();
      document.getElementById("results").innerHTML = "The Results : ";
      document.getElementById("model").innerHTML = "The Model : " + Data.model;
      document.getElementById("confidence").innerHTML = "Confidence is : " + Data.confidence;
      document.getElementById("subjectivity").innerHTML = "The Subjectivity: " + Data.subjectivity;
      document.getElementById("irony").innerHTML = "Irony: " + Data.irony;
      document.getElementById("polarity").innerHTML= "Polarity: " + Data.polarity;
      // console.log(Data.polarity);
    } catch (err) {
      console.log("Error: "+ err);
    }
  };
}
export { handleSubmit };
