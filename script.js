let questions=["aaradhya6553@gmail.com", "abhi828886@gmail.com", "abhishek29296@gmail.com", "advika292008@gmail.com", "akshat17112006@gmail.com", "dev003135@gmail.com", "devansh02030@gmail.com", "farhan97286@gmail.com", "farhanverma07@gmail.com", "gabbar727818@gmail.com", "gargi68757@gmail.com", "garuda82829@gmail.com", "harshpatel92828@gmail.com", "raju755785@gmail.com", "sanjay857988@gmail.com", "saumya67488@gmail.com", "shreya82928@gmail.com", "shubham86545@gmail.com", "sooraj82892@gmail.com", "sureshpatel71817@gmail.com", "vijay8575337@gmail.com", "watson82827@gmail.com", "aditya010328@gmail.com", "aashi1382000@gmail.com", "dhruv46674@gmail.com", "shishir85842@gmail.com", "suyash55573@gmail.com"];
let pos;
document.addEventListener("DOMContentLoaded", function()
                          {
                            document.body.style.backgroundColor=`#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
                          });
window.onload=function()
{
  if(localStorage.getItem('pos')!=null)
  {
    pos=parseInt(localStorage.getItem('pos'), 10);
  }
  else
  {
    pos=0;
  }
  document.getElementById('question').value=questions[pos];
  document.getElementById('copy').textContent="Copy " + (pos+1);
};
document.getElementById('copy').addEventListener('click', function()
                                                 {
                                                   navigator.clipboard.writeText(questions[pos]);
                                                     pos=(pos+1)%questions.length;
                                                     localStorage.setItem('pos', pos);
                                                     document.getElementById('question').value=questions[pos];
                                                     document.getElementById('copy').textContent="Copy " + (pos+1);
                                                 });
