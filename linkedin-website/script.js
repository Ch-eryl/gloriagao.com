const commentWall = document.getElementById("commentWall");
const form = document.getElementById("commentForm");

let comments = [
  { name: "Friend", message: "Gloria, your consistency is inspiring ✨" },
  { name: "Mentor", message: "Keep building. Your journey matters." },
  { name: "Community", message: "Proud of you — keep reaching new heights 💜" }
];

function displayComments() {
  commentWall.innerHTML = "";

  comments.forEach((c) => {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `<strong>${c.name}</strong><p>${c.message}</p>`;
    commentWall.appendChild(div);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  comments.unshift({ name, message });

  displayComments();
  form.reset();
});

displayComments();
