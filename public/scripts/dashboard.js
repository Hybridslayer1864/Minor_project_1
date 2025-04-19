const journal=document.querySelector("#journal");//button
const entries=document.querySelector("#entries");//button
const affirmations=document.querySelector("#affirm");//button
const chat=document.querySelector("#chat");//button

journal.addEventListener("click",async (e)=>{
    window.location.href='/journal';
});

entries.addEventListener("click",async (e)=>{
    window.location.href='/entries';
});
chat.addEventListener("click",async (e)=>{
    window.location.href='/chat';
});