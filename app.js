function showQuestion( index ){
  let form = document.createElement('form');
  let h2   = document.createElement('h2');
      h2.innerHTML = questions[index].question;
    form.appendChild(h2);
  let hr   = document.createElement('hr');
    form.appendChild(hr);
  for( let a=0; a<questions[index].answers.length; a++) {
    // crearea + append label
    // crearea + append input
    let label = document.createElement('label');
      form.appendChild(label);
    let input = document.createElement('input');
    let text = document.createTextNode( questions[index].answers[a]);
      input.type = "checkbox";
      label.appendChild(input);
      label.appendChild(text);
      let br   = document.createElement('br');
      form.appendChild(br);
    }

  let div = document.getElementById('content');
      content.innerHTML = '';   // HW --->alfter .removeChild(), .swapChild(),...
      div.appendChild(form);

      let nr = document.getElementById('number');
      nr.innerHTML = ( current_question + 1);

}


var current_question = 0;

function prevQuestion(){
  if (current_question > 0) {
    current_question--;
    showQuestion(current_question);
  }


}

function nextQuestion(){
    if (current_question < questions.length -1 ) {
      current_question++;
      showQuestion(current_question);
  }if (current_question == questions.length - 1) {
        Next.disabled = true;
  }else{
        Prev.disabled = false;
  }
  Prev.disabled = false;
}


showQuestion( 0 );
