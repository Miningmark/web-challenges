console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);



// Exercise:
// Use document.createElement() and append another social media post to the body.

const article = document.createElement("article");
article.classList.add("post");

const text = document.createElement("p");
text.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
text.classList.add("post__content");
article.append(text);

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";
footer.append(span);

const button = document.createElement("button");
button.classList.add("post__button");
button.textContent = "♥ Like";
button.type = "button";
button.setAttribute('data-js', 'like-button'); 
button.addEventListener("click", handleLikeButtonClick);
footer.append(button);
article.append(footer);

document.body.append(article);