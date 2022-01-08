const createNotes = async() => {
        const notesText = document.getElementById("note-text").value;
        const authorText = document.getElementById("author-text").value;
    

       const response =await axios({
           url: "http://127.0.0.1:4400",
           method:"POST",
           data: {
               notes:notesText,
               author: authorText
           },
       });
    if (response.data === true){
        alert("Note Successfully Saved!");
    }else{
        alert("Something Wrong Happened");
    }
};