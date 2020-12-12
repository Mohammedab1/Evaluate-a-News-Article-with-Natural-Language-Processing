const sendURL = async (url, data) => {
// console.log(url);
// console.log(data);
   const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input: data }),
  });
  try {
    // console.log(res);
    const Data = await res.json();
    console.log(Data);
    document.getElementById("results").innerHTML = "The Results : ";
    document.getElementById("model").innerHTML = "The Model : " + Data.model;
    document.getElementById("confidence").innerHTML = "Confidence is : " + Data.confidence;
    document.getElementById("subjectivity").innerHTML = "The Subjectivity: " + Data.subjectivity;
    document.getElementById("irony").innerHTML = "Irony: " + Data.irony;
    document.getElementById("Score").= "Sconre: " + Data.score_tag;

  } catch (err) {
    console.log("Error: "+ err);
  }
};
function handleSubmit(event) {
  event.preventDefault();
console.log("123");
  let text = document.getElementById("name").value;
  sendURL('http://localhost:3000/text', text);

}


export { handleSubmit };
